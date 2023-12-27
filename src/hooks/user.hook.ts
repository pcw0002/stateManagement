import useAxiosClient from "src/hooks/useApi";
import { useQuery, useMutation } from "@tanstack/react-query"

type User = {
  _count: {
    todos: number;
  };
  id: string;
  name: string;
  email: string;
  role: string;
  todos: Todo[] | [];
}

type Todo = {
  id: string;
  body: string;
  completed: boolean;
}

type AllUsersResponse = {
  data: User[];
}

type GetUserResponse = {
  data: User;
}

type UpdateTodoResponse = {
  data: {
    shouldInvalidate: boolean;
    invalidateQuery: string[];
  }
}

const useGetAllUsers = () => {
  const client = useAxiosClient();
  const queryFunction = async () => {
    const { data }: AllUsersResponse = await client.get("/api/user/all")
    return data
  }

  const { data, isLoading, isError, error } = useQuery({ queryKey: ['allUsers'], queryFn: queryFunction })
  return { data, isLoading, isError, error }
}

const useGetUser = (id: number) => {
  const client = useAxiosClient();
  const queryFunction = async () => {
    const { data }: GetUserResponse = await client.get(`/api/user/${id}`)
    return data
  }

  const { data, isLoading, isError, error } = useQuery({ queryKey: ['User', id], queryFn: queryFunction })
  return { data, isLoading, isError, error }
}

const useUpdateTodo = () => {
  const client = useAxiosClient();
  const mutationFunction = async ({id, body}: {id: number, body: {completed: boolean}}) => {
    const { data }: UpdateTodoResponse = await client.put(`/api/todo/${id}`, body)
    return data
  }

  return useMutation({ mutationFn: mutationFunction, mutationKey: ['updateTodo'] })
}

export { useGetAllUsers, useGetUser, useUpdateTodo }