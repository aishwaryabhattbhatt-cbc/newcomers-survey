using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using mtm.portal.Common.Services;
using mtm.portal.Data;
using mtm.portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mtm.portal.Pages
{
    public class IndexModel : CommonModel
    {
        private readonly IAuthService _auth;
        private readonly ILogger<IndexModel> _logger;
        private readonly PortalContext _context;

        public IndexModel(IAuthService auth, ILogger<IndexModel> logger, PortalContext context)
        {
            _auth = auth;
            _logger = logger;
            _context = context;
        }

        public List<ReportViewModel> Reports { get; set; } = new List<ReportViewModel>();

        public HtmlViewModel Html { get; set; } = new HtmlViewModel();

        public async Task<IActionResult> OnGetAsync(int? push)
        {
            // allow survey submissions to pass through
            if (!HttpMethods.IsGet(Request.Method))
            {
                return Page();
            }

            if (push == null && _auth.IsIP())
            {
                return RedirectToPage("/Access/Index", new { Culture });
            }

            var reports = _context.Reports.Include(x => x.Products).Include(x => x.Files)
                .Where(x => (x.Type == Report.ReportType.Infographic
                                || x.Type == Report.ReportType.Report
                                || x.Type == Report.ReportType.Adoption
                              //|| x.Type == Report.ReportType.MarketAnnouncement
                              || x.Type == Report.ReportType.SneakPeek
                              )
                              && !x.IsDelisted
                              && x.PublishDate <= DateTime.UtcNow
                              && x.IsPublic
                              && (!x.IsAdminPreview || (_auth.IsAdmin() && x.IsAdminPreview))
                              && x.Files.Any(y => y.Access == Common.PortalEnum.Access.Public || y.Access == Common.PortalEnum.Access.All)
                ).OrderByDescending(x => x.PublishDate)
                .Take(3);

            foreach (var r in reports)
            {
                Reports.Add(new ReportViewModel
                {
                    ReportId = r.ReportId,
                    ProductNames = string.Join(", ", r.Products?.Select(x => x.Name)),
                    ProductsShort = r.ProductsShort,
                    Type = r.Type,
                    PublishDateLong = r.PublishDateLong,
                    Title = r.Title,
                    Subheading = r.Subheading,
                    Desc = r.Desc,
                    TextColour = r.TextColour,
                    GradientColour = r.GradientColour,
                    SecondButtonText = r.SecondButtonText,
                    SecondButtonUrl = r.SecondButtonUrl,
                    ImageFileName = r.ImageFileName,
                    IsEmailCatcher = r.IsEmailCatcher,
                    Files = r.GetFiles(Common.PortalEnum.Access.Public)
                });
            }

            Html = await _context.Htmls.Where(x => x.HtmlId == "home")
                .Select(x => new HtmlViewModel
                {
                    Title = x.Title,
                    Content = x.Content
                })
                .FirstOrDefaultAsync();

            if (Html == null)
            {
                _logger.LogError("HTML Not Found: home");
                return NotFound();
            }

            var newsQuery = _context.NewsItems.Where(x => x.Type == NewsItem.NewsItemType.NewsAlert);

            //if (IsFrench)
            //{
            //    newsQuery = newsQuery.Where(x => x.IsNewsItemFrench);
            //}

            var newsItems = await newsQuery
                            .OrderByDescending(x => x.PublishDate)
                            .Take(3)
                            .ToListAsync();


            for (var x = 0; x < newsItems.Count; x++)
            {
                Html.Content = Html.Content
                    .Replace($"{{{{news_{x + 1}_date}}}}", newsItems[x].PublishDateShort)
                    .Replace($"{{{{news_{x + 1}_credit}}}}", newsItems[x].Credit)
                    .Replace($"{{{{news_{x + 1}_title}}}}", newsItems[x].Title);
            }


            return Page();
        }

        //    public IActionResult OnPostNewcomersSurvey([FromBody] NewcomersViewModel viewModel)
        //    {
        //        try
        //        {
        //            if (!ModelState.IsValid)
        //            {
        //                return BadRequest("NoVal");
        //            }

        //            if (viewModel == null)
        //            {
        //                return BadRequest("NoVal");
        //            }

        //            if (string.IsNullOrEmpty(viewModel.Language) || string.IsNullOrEmpty(viewModel.Phone) || string.IsNullOrEmpty(viewModel.Email))
        //            {
        //                return BadRequest("NoVal");
        //            }

        //            viewModel.Phone = viewModel.Phone.Replace("-", "");

        //            //var regexPhone = new Regex("[0-9]+");
        //            //var regexEmail = new Regex("[^@\\s]+@[^@\\s]+\\.[^@\\s]+");

        //            //if (string.IsNullOrEmpty(viewModel.Phone)
        //            //    || !regexPhone.IsMatch(viewModel.Phone)
        //            //    || !regexEmail.IsMatch(viewModel.Email))
        //            //{
        //            //    return BadRequest("NoVal");
        //            //}

        //            var lang = viewModel.Language.Trim();
        //            var phone = viewModel.Phone.Trim();
        //            var email = viewModel.Email.Trim();

        //            var dateTimeLimit = new DateTime(2024, 5, 23);

        //            var nc = _context.SurveyResponses.FirstOrDefault(x =>
        //                x.SurveyName == "NEWCOMERS"
        //                && x.Language == lang
        //                && x.Phone == phone
        //                && x.Email == email
        //                && x.DateSubmitted > dateTimeLimit); // disallow duplicates from the last and current survey

        //            if (nc != null)
        //            {
        //                return StatusCode(200);
        //            }

        //            nc = new SurveyResponse
        //            {
        //                SurveyName = "NEWCOMERS",
        //                Language = lang,
        //                Phone = phone,
        //                Email = email,
        //                DateSubmitted = DateTime.UtcNow,
        //                Referer = HttpContext.Request.Headers["Referer"].ToString()
        //            };

        //            _context.SurveyResponses.Add(nc);

        //            _context.SaveChanges();

        //            return StatusCode(200);
        //        }
        //        catch (Exception ex)
        //        {
        //            _logger.LogError(ex, ex.Message, viewModel);
        //            return BadRequest("ErrUnknown");
        //        }
        //    }

        //    //public IActionResult OnPostNewcomersSurvey(NewcomersViewModel viewModel)
        //    //{


        //    //    return new JsonResult(new { hello = "world" });
        //    //}
        //}

    }
}
