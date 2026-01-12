import { useDispatch } from "react-redux";
import type { AppDispatch } from "app/providers/StoreProvider/index";

export const UseAppDispatch = () => useDispatch<AppDispatch>();
