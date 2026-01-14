import axios from "axios";
import { __IS_DEV } from "shared/config/env/env";
import { AUTH_USER_LOCALSTORAGE } from "shared/const/localstorage";

const baseURL = __IS_DEV ? "http://localhost:8000" : "https://snowinn.ru";

export const $api = axios.create({
    baseURL,

});

$api.interceptors.request.use((config) => { // перед каждым обращением к серверу теперь будет проверяться актуальный токен и добавляться в config $api
    const token = localStorage.getItem(AUTH_USER_LOCALSTORAGE);

    if (token) {
        config.headers = config.headers || {};
        config.headers.authorization = token;
    }

    return config;
});
