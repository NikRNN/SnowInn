import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { __IS_DEV } from "shared/config/env/env";

i18n
// load translation using http
    .use(Backend)
// detect user language
    .use(LanguageDetector as unknown as i18n.Module) // без as unknown была ошибка импорта. почему? - хз.

    .use(initReactI18next)
// init i18next
    .init({
        fallbackLng: "ru", // язык по-умолчанию
        debug: !!__IS_DEV,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
