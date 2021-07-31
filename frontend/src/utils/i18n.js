import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: {
                        filter_service: 'Filter Service',
                        type_of_service: 'Type of service'
                    }
                }
            },
            ms: {
                translation: {
                    home: {
                        filter_service: 'Saring Perkhidmatan'
                    }
                }
            }
        }
    });

export default i18n;