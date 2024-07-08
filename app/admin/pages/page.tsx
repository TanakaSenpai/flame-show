import React from 'react'
import DashboardCard from '../components/DashboardCard'

const AdminDashboardPage = () => {
  return (
    <div className='flex gap-4'>
      <DashboardCard title='Products' number={4} bg='bg-blue-400' />
      <DashboardCard title='Categories' number={10} bg='bg-green-400' />
    </div>
  )
}

export default AdminDashboardPage
