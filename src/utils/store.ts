import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { todoApi } from '~/services/todo'
import { userApi } from '~/services/user'

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoApi.middleware).concat(userApi.middleware)
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector