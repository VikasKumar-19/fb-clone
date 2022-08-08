import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../redux-app/store';

export interface UserResponse {
  id: string;
  username: string;
  picture: string;
  first_name: string;
  last_name: string;
  token: string;
  verified: boolean;
  success: boolean;
  message: string;
}

export interface VerifyUserResponse{
  status: string;
  message: string;
}

export interface LoginRequest{
  email: string,
  password: string,
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  bYear: number;
  bMonth: number;
  bDay: number;
  gender: string;
}


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:4444',
    prepareHeaders: (headers, {getState}) => {
      //by default if we have token in the state let's use that for authenticated requests.
      const token = (getState() as RootState).auth.token
      if(token){
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
   }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
          url: "/login",
          method: "POST",
          body: credentials
      }),
    }),

    registerUser: builder.mutation<UserResponse, RegisterRequest>({
      query: (body) => {
        return {
          url: "/register",
          method: "post",
          body
        }
      },
    }),

    verifyUser: builder.mutation<VerifyUserResponse, {token: string}>({
      query: (body) => {
        return {
          url: "/activate",
          method: "post",
          body
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation, useRegisterUserMutation, useVerifyUserMutation } = authApi