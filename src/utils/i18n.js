import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export const changeAppLanguage = async (lng) => {
  if (lng !== 'en' && !i18n.hasResourceBundle(lng, 'translation')) {
    try {
      let data;
      if (lng === 'fr') data = await import('../locales/fr.json');
      else if (lng === 'it') data = await import('../locales/it.json');
      else if (lng === 'es') data = await import('../locales/es.json');
      
      if (data && data.default) {
        i18n.addResourceBundle(lng, 'translation', data.default);
      }
    } catch (err) {
      console.error(`Error loading translation file for ${lng}:`, err);
    }
  }
  await i18n.changeLanguage(lng);
  localStorage.setItem('language', lng);
};

if (savedLanguage !== 'en') {
  changeAppLanguage(savedLanguage).catch(err => {
    console.error('Failed to load initial non-english language:', err);
  });
}

export default i18n;
