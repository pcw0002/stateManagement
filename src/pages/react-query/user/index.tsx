import type { ReactElement } from 'react'
import Link from 'next/link'
import { useGetAllUsers } from "./user.hook"
import RQLayout from "../layout"
import type { NextPageWithLayout } from '../../_app'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Users: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useGetAllUsers()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: Error fetching users</div>
  }

  return (
    <div className='w-1/2 align-middle justify-center m-auto'>
      <Table>
        <TableCaption className='text-lg'>
          <Link className='underline text-blue-500 hover:text-blue-600' href="/react-query/user/compare">
            See side by side view
          </Link>
        </TableCaption>
        <TableHeader>
          <TableRow className='text-left border-b'>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className='text-center'>Total Todo's</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className='text-center'>{user._count.todos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <RQLayout>
      {page}
    </RQLayout>
  )
}

export default Users