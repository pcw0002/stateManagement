import type { ReactElement } from 'react'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useGetAllUsersQuery } from '~/services/user'
import RTKLayout from "../layout"
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
  //const { data, isLoading, isError } = useGetAllUsers()
  const { data, isLoading, isError } = useGetAllUsersQuery()
  if (isLoading) {
    return <Skeleton count={15} />
  }

  if (isError) {
    return <div>Error: Error fetching users</div>
  }

  return (
    <div className='w-1/2 align-middle justify-center m-auto'>
      <Table>
        <TableCaption className='text-lg'>
          <Link className='underline text-blue-500 hover:text-blue-600' href="/rtk-query/user/compare">
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
    <RTKLayout>
      {page}
    </RTKLayout>
  )
}

export default Users