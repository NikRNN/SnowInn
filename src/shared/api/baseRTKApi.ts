import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { __IS_DEV } from "shared/config/env/env";
const baseUrl = __IS_DEV ? "http://localhost:8000" : "https://snowinn.ru";
import { AUTH_USER_LOCALSTORAGE } from "shared/const/localstorage";


// Define a service using a base URL and expected endpoints
export const baseRTKApi = createApi({
    reducerPath: "baseRTKApi",
    baseQuery: fetchBaseQuery({ baseUrl,  prepareHeaders: (headers) => {
        const token = localStorage.getItem(AUTH_USER_LOCALSTORAGE);
        if(token) {
            headers.set("Authorization", token)
        }
        return headers
    },}),
    endpoints: () => ({ }),
})

