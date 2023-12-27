'use client'
import type { ReactElement } from 'react'
import { useAppSelector } from '~/utils/store'
import RTKLayout from "../layout"
import TodoTableRTK from "../../../components/TodoTableRTK";

const CompareUsers = () => {
  // You can access the store here to get other data that might not be provided
  // via RTK query
  const reduxState = useAppSelector((state) => state)

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