import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter.js";
import { CounterSchema } from "../../types/CounterSchema.js";

export const getCounterValue = createSelector(getCounter, (counter:CounterSchema) => counter.value);
