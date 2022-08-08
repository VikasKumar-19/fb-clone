import { createSlice, } from "@reduxjs/toolkit";
import { authApi } from "../../services/authApi";
import { RootState } from "../store";

type UserType = {
  id: string;
  username: string;
  picture: string;
  first_name: string;
  last_name: string;
  verified: boolean;
}

interface AuthState {
  user: UserType | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
}
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, {payload}) =>{
        const user = {
          id: payload.id,
          username: payload.username,
          picture: payload.picture,
          first_name: payload.first_name,
          last_name: payload.last_name,
          verified: payload.verified,
        }
        state.user = user
        state.token = payload.token
      }
    )
  }
})

export default slice.reducer;
export const selectConcurrentUser = (state: RootState) => state.auth.user;