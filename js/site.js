function pageLang(url) {
    // Backward compatibility for older pages still calling pageLang with filenames.
    var file = (url || '').split('?')[0].toLowerCase();
    var key = file.replace('.html', '');
    if (window.SURVEY_I18N && window.SURVEY_I18N[key]) {
        switchLang(key);
        return;
    }

    var source = getSourceFromUrl();
    if (source) {
        var joiner = url.indexOf('?') === -1 ? '?' : '&';
        window.location = url + joiner + 'source=' + encodeURIComponent(source);
        return;
    }
    window.location = url;
}

function getLangFromUrl() {
    var params = new URLSearchParams(window.location.search || '');
    var lang = (params.get('lang') || 'en').trim().toLowerCase();
    return (window.SURVEY_I18N && window.SURVEY_I18N[lang]) ? lang : 'en';
}

function setUrlParams(lang, source) {
    var params = new URLSearchParams(window.location.search || '');
    params.set('lang', lang || 'en');
    if (source) {
        params.set('source', source);
    }
    var newQuery = params.toString();
    var newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '') + window.location.hash;
    window.history.replaceState({}, '', newUrl);
}

function getSourceFromUrl() {
    var params = new URLSearchParams(window.location.search || '');
    var source = (params.get('source') || params.get('src') || '').trim();

    if (source) {
        sessionStorage.setItem('newcomersSource', source);
        return source;
    }

    return (sessionStorage.getItem('newcomersSource') || '').trim();
}

function ensureSourceInUrl() {
    var params = new URLSearchParams(window.location.search || '');
    var existing = (params.get('source') || params.get('src') || '').trim();
    var stored = (sessionStorage.getItem('newcomersSource') || '').trim();

    if (!existing && stored) {
        params.set('source', stored);
        var lang = getLangFromUrl();
        params.set('lang', lang);
        var newQuery = params.toString();
        var newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
    }
}

function switchLang(langKey) {
    var lang = (langKey || 'en').toLowerCase();
    if (!window.SURVEY_I18N || !window.SURVEY_I18N[lang]) {
        lang = 'en';
    }

    applyTranslations(lang);
    setUrlParams(lang, getSourceFromUrl());
}

function applyTranslations(lang) {
    var t = (window.SURVEY_I18N && window.SURVEY_I18N[lang]) ? window.SURVEY_I18N[lang] : window.SURVEY_I18N.en;
    if (!t) return;

    var langInput = document.getElementById('lang');
    var select = document.getElementById('lang-select');
    var logo = document.getElementById('logo-img');

    if (langInput) langInput.value = t.langValue || 'english';
    if (select) select.value = lang;

    if (logo) {
        logo.src = lang === 'fr' ? '../_img/OTM-NA-CLR.svg' : '../_img/MTM-NC-CLR.svg';
        logo.alt = lang === 'fr' ? 'OTM - Nouveau arrivants' : 'MTM Newcomers';
    }

    var title = document.getElementById('t-title');
    var intro = document.getElementById('t-intro');
    var highlight = document.getElementById('t-highlight');
    var phoneLabel = document.getElementById('t-phone-label');
    var emailLabel = document.getElementById('t-email-label');
    var emailConfirmLabel = document.getElementById('t-email-confirm-label');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var emailConfirm = document.getElementById('emailConfirm');
    var error = document.getElementById('error');
    var submit = document.getElementById('t-submit');
    var success = document.getElementById('success');
    var faqTitle = document.getElementById('t-faq-title');
    var faqList = document.getElementById('faq-list');

    if (title) title.textContent = t.title || '';
    if (intro) intro.textContent = t.intro || '';
    if (highlight) highlight.textContent = t.highlight || '';
    if (phoneLabel) phoneLabel.textContent = t.phoneLabel || 'Phone Number';
    if (emailLabel) emailLabel.textContent = t.emailLabel || 'Email Address';
    if (emailConfirmLabel) emailConfirmLabel.textContent = t.confirmEmailLabel || 'Confirm Email Address';
    if (phone) phone.placeholder = t.phonePlaceholderLong || t.phonePlaceholder || 'Enter your phone number';
    if (email) email.placeholder = t.emailPlaceholderLong || t.emailPlaceholder || 'Enter your email address';
    if (emailConfirm) emailConfirm.placeholder = t.confirmEmailPlaceholderLong || t.confirmEmailPlaceholder || 'Re-enter your email address';
    if (error) error.textContent = t.error || '';
    if (submit) submit.textContent = t.submit || 'Submit';
    if (success) success.textContent = t.success || '';
    if (faqTitle) faqTitle.textContent = t.faqTitle || '';

    if (faqList) {
        renderFaqList(faqList, (t.faq && t.faq.length) ? t.faq : (window.SURVEY_I18N.en ? window.SURVEY_I18N.en.faq : []));
    }

    if (t.faqFile) {
        var requestId = ++currentLangRequestId;
        loadLegacyLanguagePack(t.faqFile).then(function (pack) {
            if (requestId !== currentLangRequestId) {
                return;
            }
            applyLegacyLanguagePack(pack);
        }).catch(function () {
            // Keep fallback text already rendered.
        });
    }
}

function applyLegacyLanguagePack(pack) {
    if (!pack) return;

    var langInput = document.getElementById('lang');
    var title = document.getElementById('t-title');
    var intro = document.getElementById('t-intro');
    var highlight = document.getElementById('t-highlight');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var error = document.getElementById('error');
    var submit = document.getElementById('t-submit');
    var success = document.getElementById('success');
    var faqTitle = document.getElementById('t-faq-title');
    var faqList = document.getElementById('faq-list');
    var logo = document.getElementById('logo-img');

    if (pack.langValue && langInput) langInput.value = pack.langValue;
    if (pack.title && title) title.textContent = pack.title;
    if (pack.intro && intro) intro.textContent = pack.intro;
    if (pack.highlight && highlight) highlight.textContent = pack.highlight;
    if (pack.phonePlaceholder && phone) phone.placeholder = pack.phonePlaceholder;
    if (pack.emailPlaceholder && email) email.placeholder = pack.emailPlaceholder;
    if (pack.error && error) error.textContent = pack.error;
    if (pack.submit && submit) submit.textContent = pack.submit;
    if (pack.success && success) success.textContent = pack.success;
    if (pack.faqTitle && faqTitle) faqTitle.textContent = pack.faqTitle;
    if (pack.faq && pack.faq.length && faqList) renderFaqList(faqList, pack.faq);

    if (logo) {
        var isFrench = (pack.langValue || '').toLowerCase() === 'français';
        logo.src = isFrench ? '../_img/OTM-NA-CLR.svg' : '../_img/MTM-NC-CLR.svg';
        logo.alt = isFrench ? 'OTM - Nouveau arrivants' : 'MTM Newcomers';
    }
}

function renderFaqList(container, faq) {
    container.innerHTML = '';

    for (var i = 0; i < faq.length; i++) {
        var article = document.createElement('article');
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        h3.textContent = faq[i][0] || '';
        p.textContent = faq[i][1] || '';
        article.appendChild(h3);
        article.appendChild(p);
        container.appendChild(article);
    }
}

var legacyFaqCache = {};
var legacyPackCache = {};
var currentLangRequestId = 0;

function loadLegacyLanguagePack(fileName) {
    if (legacyPackCache[fileName]) {
        return Promise.resolve(legacyPackCache[fileName]);
    }

    var url = fileName;
    return fetch(url)
        .then(function (res) { return res.text(); })
        .then(function (html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');

            var firstIntroP = doc.querySelector('#intro > p');
            var highlightP = doc.querySelector('#intro .highlight p');
            var phoneInput = doc.getElementById('phone');
            var emailInput = doc.getElementById('email');
            var langInput = doc.getElementById('lang');
            var errorEl = doc.getElementById('error');
            var submitBtn = doc.querySelector('#ncform button.btn');
            var successEl = doc.getElementById('success');
            var faqTitle = doc.querySelector('#faq h2');
            var logoImg = doc.querySelector('#header .logo img');

            var articles = doc.querySelectorAll('#faq article');
            var faq = [];
            for (var i = 0; i < articles.length; i++) {
                var h3 = articles[i].querySelector('h3');
                var p = articles[i].querySelector('p');
                faq.push([
                    h3 ? h3.textContent.trim() : '',
                    p ? p.textContent.trim() : ''
                ]);
            }

            var pack = {
                langValue: langInput ? langInput.value : '',
                title: (doc.querySelector('#intro h1') ? doc.querySelector('#intro h1').textContent.trim() : ''),
                intro: firstIntroP ? firstIntroP.textContent.trim() : '',
                highlight: highlightP ? highlightP.textContent.trim() : '',
                phonePlaceholder: phoneInput ? phoneInput.getAttribute('placeholder') || '' : '',
                emailPlaceholder: emailInput ? emailInput.getAttribute('placeholder') || '' : '',
                error: errorEl ? errorEl.textContent.trim() : '',
                submit: submitBtn ? submitBtn.textContent.trim() : '',
                success: successEl ? successEl.textContent.trim() : '',
                faqTitle: faqTitle ? faqTitle.textContent.trim() : '',
                faq: faq,
                logoSrc: logoImg ? logoImg.getAttribute('src') || '' : '',
                logoAlt: logoImg ? (logoImg.getAttribute('alt') || '') : ''
            };

            legacyPackCache[fileName] = pack;
            legacyFaqCache[fileName] = faq;
            return pack;
        });
}

function loadFaqFromLegacyPage(fileName) {
    if (legacyFaqCache[fileName]) {
        return Promise.resolve(legacyFaqCache[fileName]);
    }

    var url = fileName;
    return fetch(url)
        .then(function (res) { return res.text(); })
        .then(function (html) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, 'text/html');
            var articles = doc.querySelectorAll('#faq article');
            var faq = [];

            for (var i = 0; i < articles.length; i++) {
                var h3 = articles[i].querySelector('h3');
                var p = articles[i].querySelector('p');
                faq.push([
                    h3 ? h3.textContent.trim() : '',
                    p ? p.textContent.trim() : ''
                ]);
            }

            legacyFaqCache[fileName] = faq;
            return faq;
        });
}

function submitSurvey(token) {
    var source = getSourceFromUrl();
    var phoneEl = document.getElementById('phone');
    var emailEl = document.getElementById('email');
    var emailConfirmEl = document.getElementById('emailConfirm');
    var honeypotEl = document.getElementById('website');
    var loadedAtEl = document.getElementById('formLoadedAt');
    var errorEl = document.getElementById('error');
    var defaultErrorText = errorEl ? (errorEl.textContent || '').trim() : 'ERROR – You need to provide your phone number and email address in the fields.';

    var lang = getLangFromUrl();
    var t = (window.SURVEY_I18N && window.SURVEY_I18N[lang]) ? window.SURVEY_I18N[lang] : (window.SURVEY_I18N ? window.SURVEY_I18N.en : null);

    var phoneVal = phoneEl ? phoneEl.value.trim() : '';
    var emailVal = emailEl ? emailEl.value.trim() : '';
    var emailConfirmVal = emailConfirmEl ? emailConfirmEl.value.trim() : '';
    var honeypotVal = honeypotEl ? honeypotEl.value.trim() : '';
    var loadedAtVal = loadedAtEl ? (loadedAtEl.value || '').trim() : '';

    // Invisible anti-spam layer (no visible CAPTCHA).
    if (honeypotEl && honeypotEl.value && honeypotEl.value.trim() !== '') {
        return false;
    }

    var minSubmitMs = 2500;
    var loadedAt = loadedAtEl ? parseInt(loadedAtEl.value, 10) : NaN;
    if (!Number.isNaN(loadedAt) && Date.now() - loadedAt < minSubmitMs) {
        if (errorEl) {
            errorEl.textContent = (t && t.antiSpamError) ? t.antiSpamError : 'Please wait a moment and try again.';
            errorEl.style.display = 'block';
        }
        return false;
    }

    if (!phoneVal || !emailVal || !emailConfirmVal) {
        if (errorEl) {
            errorEl.textContent = defaultErrorText;
            errorEl.style.display = 'block';
        }
        return false;
    }

    if (!isValidPhone(phoneVal)) {
        if (errorEl) {
            errorEl.textContent = (t && t.invalidPhoneError) ? t.invalidPhoneError : 'ERROR – Please enter a valid 10-digit phone number.';
            errorEl.style.display = 'block';
        }
        return false;
    }

    if (!isValidEmail(emailVal) || !isValidEmail(emailConfirmVal)) {
        if (errorEl) {
            errorEl.textContent = (t && t.invalidEmailError) ? t.invalidEmailError : 'ERROR – Please enter a valid email address.';
            errorEl.style.display = 'block';
        }
        return false;
    }

    if (emailVal.toLowerCase() !== emailConfirmVal.toLowerCase()) {
        if (errorEl) {
            errorEl.textContent = (t && t.emailMismatchError) ? t.emailMismatchError : 'ERROR – Email addresses do not match.';
            errorEl.style.display = 'block';
        }
        return false;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById('success').style.display = 'block';
                document.getElementById('ncform').style.display = 'none';
            } else {
                document.getElementById('success').style.display = 'none';
                if (errorEl) {
                    if ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && (this.status === 404 || this.status === 0)) {
                        errorEl.textContent = 'Local preview mode: the backend submission endpoint is not running on this static server. Your source tag is still being sent in the request URL.';
                    } else {
                        errorEl.textContent = defaultErrorText;
                    }
                    errorEl.style.display = 'block';
                }
            }
        }
    };

    var isLocal = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    var submitBase = isLocal ? 'http://127.0.0.1:8010/en/index' : '/en/index';
    xhttp.open('GET', submitBase + '?handler=NewcomersSurvey' +
        '&language=' + document.getElementById('lang').value +
        '&phone=' + encodeURIComponent(phoneVal) +
        '&email=' + encodeURIComponent(emailVal) +
        '&confirmEmail=' + encodeURIComponent(emailConfirmVal) +
        '&website=' + encodeURIComponent(honeypotVal) +
        '&formLoadedAt=' + encodeURIComponent(loadedAtVal) +
        '&source=' + encodeURIComponent(source), true);

    xhttp.send();

    return false;
}

function isValidEmail(email) {
    var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test((email || '').trim());
}

function isValidPhone(phone) {
    // Strip spaces, dashes, dots, parentheses, leading +1 or 1
    var digits = (phone || '').replace(/[\s\-().+]/g, '').replace(/^1(\d{10})$/, '$1');
    return /^\d{10}$/.test(digits);
}

ensureSourceInUrl();

function initSurveyPage() {
    ensureSourceInUrl();

    var loadedAtEl = document.getElementById('formLoadedAt');
    if (loadedAtEl) {
        loadedAtEl.value = String(Date.now());
    }

    var select = document.getElementById('lang-select');
    if (select) {
        select.addEventListener('change', function () {
            switchLang(this.value);
        });
    }

    if (window.SURVEY_I18N) {
        applyTranslations(getLangFromUrl());
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSurveyPage);
} else {
    initSurveyPage();
}