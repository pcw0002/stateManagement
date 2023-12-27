import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useGetUser, useUpdateTodo } from "../hooks/user.hook"

const TodoTable = ({userId}: {userId: number}) => {
  const { data, isLoading, isError, error } = useGetUser(userId)
  const { mutate: updateTodo } = useUpdateTodo()

  const handleUpdateTodo = (todoId: number, completed: boolean) => {
    updateTodo({
      id: todoId,
      body: {
        completed
        },
    })
  }

  if (isError) {
    return <div>Error: Error fetching user todos</div>
  }
  if (isLoading) {
    return <Skeleton count={15} />
  } 
  return (
    <Table>
        <TableCaption className='text-lg'>
          <h2 className="text-lg text-center font-semibold mb-4">{data?.name ?? <Skeleton />}</h2>
        </TableCaption>
        <TableHeader>
          <TableRow className='text-left border-b'>
            <TableHead>Complete</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <Skeleton count={15} />}
          {data?.todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell className="font-medium">
                <Checkbox id={`user1-${todo.id}`} className="w-4 h-4 border" checked={todo.completed} onCheckedChange={(checked) =>handleUpdateTodo(Number(todo.id), !!checked) } />
              </TableCell>
              <TableCell>{todo.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default TodoTable