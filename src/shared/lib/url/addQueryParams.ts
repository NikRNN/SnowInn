import { CustomOptionalRecord } from "app/types/global";

export function getQueryParams(params : CustomOptionalRecord<string, string>) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });

    return `?${searchParams.toString()}`;
}

export function addQueryParams(params : CustomOptionalRecord<string, string>) {
    window.history.pushState(null, "", getQueryParams(params));
}

// разделил на две функции для удобства тестирования
