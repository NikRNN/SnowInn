import { useDispatch } from "react-redux";
import type { AppDispatch } from "../config/store";

export const UseAppDispatch = () => useDispatch<AppDispatch>();
