import type { TagDescription } from '@reduxjs/toolkit/query/react'
export type User = {
  _count: {
    todos: number;
  };
  id: string;
  name: string;
  email: string;
  role: string;
  todos: Todo[] | [];
}

export type Todo = {
  id: string;
  body: string;
  completed: boolean;
  userId: string;
}

export type UpdateTodoResponse = {
    shouldInvalidate: boolean;
    invalidateQuery:  TagDescription<'User' | 'UserAll'>[];
    todo: Todo;
}

export type UpdateTodoRequest = {
  completed: boolean;
  id: number;
}