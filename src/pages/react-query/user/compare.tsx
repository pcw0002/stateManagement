'use client'
import type { ReactElement } from 'react'
import { useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import RQLayout from "../layout"
import TodoTable from "../../../components/TodoTable";

const CompareUsers = () => {

  const queryClient = useQueryClient()

  const invalidateBothQueries = () => {
    // You can invalidate multiple queries at once by passing an array of query keys
    // In this case we are invalidating queries that start with 'user'
    void queryClient.invalidateQueries({ queryKey: ['User']})
  }

  const invalidateUser1Query = () => {
    // You can also invalidate a single query by passing a query key
    // In this case we are invalidating the query with the key ['user', 1']
    void queryClient.invalidateQueries({ queryKey: ['User', 1]})
  }

  const invalidateUser2Query = () => {
    // You can also invalidate a single query by passing a query key
    // In this case we are invalidating the query with the key ['user', 2']
    void queryClient.invalidateQueries({ queryKey: ['User', 2]})
  }

  return (
    <div className="w-3/4 m-auto">
      <div className='flex justify-center gap-2'>
        <Button className='border w-1/5 rounded p-2' onClick={() => invalidateBothQueries()}>Invalidate both queries</Button>
        <Button className='border w-1/5 rounded p-2' onClick={() => invalidateUser1Query()}>Invalidate User 1 query</Button>
        <Button className='border w-1/5 rounded p-2' onClick={() => invalidateUser2Query()}>Invalidate User 2 query</Button>
      </div>
      <div className="flex">
        <div className="w-1/2 p-4">
          <TodoTable userId={1} />
        </div>
        <div className="w-1/2 p-4">
          <TodoTable userId={2} />
        </div>
    </div>
    </div>
  )
}

CompareUsers.getLayout = function getLayout(page: ReactElement) {
  return (
    <RQLayout>
      {page}
    </RQLayout>
  )
}

export default CompareUsers