import type { StateSchema } from "app/providers/StoreProvider/index.js";

export const getCounter = (state : StateSchema) => state.counter;
