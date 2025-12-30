import i18next, { i18n as i18nType } from "i18next";
import { initReactI18next } from "react-i18next";

const i18nForTest: i18nType = i18next.createInstance();

i18nForTest
    .use(initReactI18next)
    .init({
        lng: "ru",
        fallbackLng: "ru",
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        resources: { ru: { translation: {} } },
    });

export default i18nForTest;
