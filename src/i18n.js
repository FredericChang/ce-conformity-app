/**
 * 集中語系設定：全站單一語系來源，支援 zh / en
 * 各模組使用 useTranslation() 即可取得與 App 一致的語言
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './locales/zh.json';
import en from './locales/en.json';

const resources = {
  zh: { translation: zh },
  en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React 已處理 XSS
    },
  });

export default i18n;
