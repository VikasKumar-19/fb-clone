import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authApi";
import authReducer from './slicers/auth-slice'

// combining the reducers by passing object as a reducer.
//we can give names to reducers inside this object.
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(authApi.middleware)
})

export type AppDispatch = typeof store.dispatch;   //exporting the type of dispatch function of store.
export type RootState = ReturnType<typeof store.getState>; //exporting the type of rootstate of store.