import { StateSchema } from "app/providers/StoreProvider";

export const getScrollSave = (state : StateSchema) => state.scrollSave.scroll;

export const getScrollPosByPath = (state: StateSchema, path: string) => state.scrollSave.scroll[path] || 0;
