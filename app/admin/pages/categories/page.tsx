import React from 'react'
import AdminCategoriesTable from './Table'
import AdminCategoryAdd from './Add'
import SearchBar from '@/app/components/SearchBar';

const AdminCategoriesPage = () => {
  return (
    <div className='shadow-md p-3'>
      <div className="flex justify-between py-4">
        <div className='w-80'>
          <SearchBar />
        </div>
        <AdminCategoryAdd />
      </div>
      <AdminCategoriesTable />
    </div>
  );
}

export default AdminCategoriesPage
