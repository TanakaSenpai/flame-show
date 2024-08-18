import React from 'react'
import AdminCategoriesTable from './Table'
import AdminCategoryAdd from './Add'

const AdminCategoriesPage = () => {
  return (
    <div className='shadow-md p-3'>
      <div className="flex justify-end py-4">
        <AdminCategoryAdd />
      </div>
      <AdminCategoriesTable />
    </div>
  );
}

export default AdminCategoriesPage
