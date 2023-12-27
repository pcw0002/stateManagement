import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UpdateTodoResponse, UpdateTodoRequest } from './services.types'
import { userApi } from './user';
// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/todo' }),
  tagTypes: ['User', 'UserAll'],
  endpoints: (builder) => ({
    updateTodo: builder.mutation<UpdateTodoResponse, UpdateTodoRequest>({
      query: ({id, completed}) => ({
        url: `/${id}`,
        method: 'PUT',
        body: {completed},
      }),
      async onQueryStarted(arg , { dispatch, queryFulfilled }) {
        const { data }: {data: UpdateTodoResponse} = await queryFulfilled;
        if (data.shouldInvalidate) {
          dispatch(userApi.util.invalidateTags(data.invalidateQuery));
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUpdateTodoMutation } = todoApi