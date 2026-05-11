using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using mtm.portal.Data;
using mtm.portal.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;

namespace mtm.portal.Pages;

[IgnoreAntiforgeryToken]
public class SurveyModel(ILogger<IndexModel> logger, PortalContext context) : PageModel
{
    public void OnGet()
    {
    }

    public IActionResult OnPostNewcomersSurvey([FromBody] NewcomersViewModel viewModel)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("NoVal");
            }

            if (viewModel == null)
            {
                return BadRequest("NoVal");
            }

            // Honeypot: bots often fill hidden fields.
            if (!string.IsNullOrWhiteSpace(viewModel.Website))
            {
                logger.LogWarning("Spam blocked (honeypot). Website field was populated.");
                return BadRequest("NoVal");
            }

            // Time-to-submit check: block near-instant submissions.
            const long minSubmitMs = 2500;
            if (viewModel.FormLoadedAt.HasValue && viewModel.FormLoadedAt.Value > 0)
            {
                var nowMs = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
                var elapsedMs = nowMs - viewModel.FormLoadedAt.Value;
                if (elapsedMs >= 0 && elapsedMs < minSubmitMs)
                {
                    logger.LogWarning("Spam blocked (too fast). ElapsedMs={ElapsedMs}", elapsedMs);
                    return BadRequest("NoVal");
                }
            }

            if (string.IsNullOrEmpty(viewModel.Language) || string.IsNullOrEmpty(viewModel.Phone) || string.IsNullOrEmpty(viewModel.Email))
            {
                return BadRequest("NoVal");
            }

            if (string.IsNullOrWhiteSpace(viewModel.ConfirmEmail))
            {
                return BadRequest("NoVal");
            }

            viewModel.Phone = viewModel.Phone.Replace("-", "");

            var regexPhone = new Regex("[0-9]+");
            var regexEmail = new Regex("[^@\\s]+@[^@\\s]+\\.[^@\\s]+");

            if (string.IsNullOrEmpty(viewModel.Phone)
                || !regexPhone.IsMatch(viewModel.Phone)
                || !regexEmail.IsMatch(viewModel.Email))
            {
                return BadRequest("NoVal");
            }

            var lang = viewModel.Language.Trim();
            var phone = viewModel.Phone.Trim();
            var email = viewModel.Email.Trim();
            var confirmEmail = viewModel.ConfirmEmail.Trim();

            if (!string.Equals(email, confirmEmail, StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest("NoVal");
            }

            var source = ResolveSource(viewModel.Source);
            var dateTimeLimit = new DateTime(2024, 5, 23);

            var nc = context.SurveyResponses.FirstOrDefault(x =>
                x.SurveyName == "NEWCOMERS"
                && x.Language == lang
                && x.Phone == phone
                && x.Email == email
                && x.DateSubmitted > dateTimeLimit); // disallow duplicates from the last and current survey

            if (nc != null)
            {
                return StatusCode(200);
            }

            nc = new SurveyResponse
            {
                SurveyName = "NEWCOMERS",
                Language = lang,
                Phone = phone,
                Email = email,
                DateSubmitted = DateTime.UtcNow,
                Referer = HttpContext.Request.Headers["Referer"].ToString()
            };

            var sourceProperty = typeof(SurveyResponse).GetProperty("Source");
            if (sourceProperty != null && sourceProperty.CanWrite)
            {
                sourceProperty.SetValue(nc, source);
            }
            else
            {
                nc.Referer = string.IsNullOrWhiteSpace(nc.Referer)
                    ? $"source={source}"
                    : $"{nc.Referer} | source={source}";
            }

            context.SurveyResponses.Add(nc);

            context.SaveChanges();

            return StatusCode(200);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, ex.Message, viewModel);
            return BadRequest("ErrUnknown");
        }
    }

    private string ResolveSource(string modelSource)
    {
        var resolved = (modelSource ?? string.Empty).Trim();

        if (string.IsNullOrWhiteSpace(resolved))
        {
            resolved = Request.Headers["X-Newcomers-Source"].ToString().Trim();
        }

        if (string.IsNullOrWhiteSpace(resolved))
        {
            resolved = Request.Query["source"].ToString().Trim();
        }

        if (string.IsNullOrWhiteSpace(resolved))
        {
            resolved = (Environment.GetEnvironmentVariable("NEWCOMERS_ACTIVE_SOURCE") ?? string.Empty).Trim();
        }

        resolved = ApplySourceCodeMapping(resolved);

        return string.IsNullOrWhiteSpace(resolved) ? "UNSPECIFIED" : resolved;
    }

    private static string ApplySourceCodeMapping(string source)
    {
        if (string.IsNullOrWhiteSpace(source))
        {
            return source;
        }

        // Format: "101=Toronto Job Fair;102=Vancouver Settlement Expo"
        var mapRaw = Environment.GetEnvironmentVariable("NEWCOMERS_SOURCE_MAP");
        if (string.IsNullOrWhiteSpace(mapRaw))
        {
            return source;
        }

        var map = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
        foreach (var pair in mapRaw.Split(';', StringSplitOptions.RemoveEmptyEntries))
        {
            var parts = pair.Split('=', 2, StringSplitOptions.TrimEntries);
            if (parts.Length == 2 && !string.IsNullOrWhiteSpace(parts[0]) && !string.IsNullOrWhiteSpace(parts[1]))
            {
                map[parts[0]] = parts[1];
            }
        }

        return map.TryGetValue(source, out var mapped) ? mapped : source;
    }
}

public class NewcomersViewModel
{
    [Required]
    public string Language { get; set; }

    [Required]
    [Phone]
    public string Phone { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [EmailAddress]
    public string ConfirmEmail { get; set; }

    // Honeypot field: should remain empty for real users.
    public string Website { get; set; }

    // Client-side timestamp (ms) when form loaded.
    public long? FormLoadedAt { get; set; }

    public string Source { get; set; }
}
