'use client'
import React from 'react'
import AdminSidebar from '../components/Sidebar';
import AdminNavbar from '../components/Navbar';
import { Toaster } from 'sonner'
import {useUser} from "@/app/hooks/useUser"
import { useRouter } from 'next/navigation';
import { Spinner } from '@/app/components/Spinner';

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter()
  const user = useUser()
  if (user === false) return <div className='w-full h-screen flex justify-center'>
    <Spinner className='w-10' />
  </div>
  if (!user) return router.push("/admin");

    return (
      <div className="flex w-full">
        <div>
          <AdminSidebar />
        </div>
        <div className="flex flex-col w-full">
          <AdminNavbar />
          <div className="p-5">
            {children}
            <Toaster toastOptions={{ 
              style: {
                border: "1px solid gray",
                boxShadow: "inherit"
              }
             }} richColors />
          </div>
        </div>
      </div>
    );
};

export default AdminLayout
