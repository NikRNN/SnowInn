import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getSideBarProfileId } from "./getSideBarProfileId";

describe("test getSideBarProfileId", () => {
    test("test user id", () => {
        const state : DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: "1",
                },
            },
        };
        expect(getSideBarProfileId(state as StateSchema)).toEqual(
            "1",
        );
    });
});
