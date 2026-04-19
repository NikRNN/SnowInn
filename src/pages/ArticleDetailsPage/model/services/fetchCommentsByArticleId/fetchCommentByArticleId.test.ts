import axios from "axios";
import { StateSchema } from "app/providers/StoreProvider";
import { fetchCommentByArticleId } from "./fetchCommentByArticleId";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("fetchCommentByArticleId", () => {
    let dispatch: ReturnType<typeof vi.fn>;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
        vi.clearAllMocks();
    });

    const extra = { api: mockedAxios, navigate: vi.fn() };

    test("success", async () => {
        const comments = [
            { id: "1", text: "comment1", user: { id: "1", username: "user1" } },
            { id: "2", text: "comment2", user: { id: "2", username: "user2" } },
        ];

        mockedAxios.get.mockResolvedValue({ data: comments });

        const thunk = fetchCommentByArticleId("123");
        const result = await thunk(dispatch, getState, extra);

        expect(mockedAxios.get).toHaveBeenCalledWith("/comments", {
            params: { articleId: "123", _expand: "user" },
        });
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(comments);
    });

    test("reject if no articleId", async () => {
        const thunk = fetchCommentByArticleId(undefined);
        const result = await thunk(dispatch, getState, extra);

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
        expect(mockedAxios.get).not.toHaveBeenCalled();
    });

    test("reject if api fails", async () => {
        mockedAxios.get.mockRejectedValue(new Error());

        const thunk = fetchCommentByArticleId("123");
        const result = await thunk(dispatch, getState, extra);

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("error");
    });
});
