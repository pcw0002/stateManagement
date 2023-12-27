import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from './services.types'
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
  tagTypes: ['User', 'UserAll'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => `/all`,
      providesTags: ['UserAll'],
    }),
    getUser: builder.query<User, number>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useGetUserQuery } = userApi