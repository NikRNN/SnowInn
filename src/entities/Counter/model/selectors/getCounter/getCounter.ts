import type { StateSchema } from "app/providers/ReduxProvider/index.js";

export const getCounter = (state : StateSchema) => state.counter;
