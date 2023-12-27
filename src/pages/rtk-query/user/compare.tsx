'use client'
import type { ReactElement } from 'react'
import { Button } from "@/components/ui/button";
import RTKLayout from "../layout"
import TodoTableRTK from "../../../components/TodoTableRTK";

const CompareUsers = () => {

  // //const queryClient = useQueryClient()

  // const invalidateBothQueries = () => {
  //   // You can invalidate multiple queries at once by passing an array of query keys
  //   // In this case we are invalidating queries that start with 'user'
  //   void queryClient.invalidateQueries({ queryKey: ['user']})
  // }

  // const invalidateUser1Query = () => {
  //   // You can also invalidate a single query by passing a query key
  //   // In this case we are invalidating the query with the key ['user', 1']
  //   void queryClient.invalidateQueries({ queryKey: ['user', 1]})
  // }

  // const invalidateUser2Query = () => {
  //   // You can also invalidate a single query by passing a query key
  //   // In this case we are invalidating the query with the key ['user', 2']
  //   void queryClient.invalidateQueries({ queryKey: ['user', 2]})
  // }

  return (
    <div className="w-3/4 m-auto">
      <div className="flex">
        <div className="w-1/2 p-4">
          <TodoTableRTK userId={1} />
        </div>
        <div className="w-1/2 p-4">
          <TodoTableRTK userId={2} />
        </div>
    </div>
    </div>
  )
}

CompareUsers.getLayout = function getLayout(page: ReactElement) {
  return (
    <RTKLayout>
      {page}
    </RTKLayout>
  )
}

export default CompareUsers