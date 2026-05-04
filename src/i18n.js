import es from './translations/es.json';
import en from './translations/en.json';
import ca from './translations/ca.json';

const translations = { es, en, ca };
let currentLang = localStorage.getItem('preferredLanguage') || detectBrowserLanguage();

function detectBrowserLanguage() {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'es';
}

export function initI18n() {
    updateContent();
    setupSwitcher();
}

export function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateContent();
    updateActiveButton();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    const data = translations[currentLang];

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = data;
        
        keys.forEach(k => {
            value = value ? value[k] : null;
        });

        if (value) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = value;
            } else {
                el.innerText = value;
            }
        }
    });

    // Update document language for SEO
    document.documentElement.lang = currentLang;
}

function setupSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    if (!switcher) return;

    switcher.innerHTML = `
        <button class="lang-btn ${currentLang === 'es' ? 'active' : ''}" data-lang="es">ES</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <button class="lang-btn ${currentLang === 'ca' ? 'active' : ''}" data-lang="ca">CA</button>
    `;

    switcher.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        if (lang) setLanguage(lang);
    });
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
