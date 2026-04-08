import { getQueryParams } from "./addQueryParams";

describe("testing addQueryParams", () => {
    test("with one param", () => {
        const params = getQueryParams({ search: "value" });

        expect(params).toBe("?search=value");
    });

    test("with many params", () => {
        const params = getQueryParams({ search: "value", second: "12345" });

        expect(params).toBe("?search=value&second=12345");
    });

    test("with undefined value", () => {
        const params = getQueryParams({ search: undefined });

        expect(params).toBe("?");
    });
});
