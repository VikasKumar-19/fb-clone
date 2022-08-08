import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//defining the type of react-redux hooks so that they know the type of state they are working for

export const useAppDispatch = ()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector; //aliasing the useSelector hook by adding the types 