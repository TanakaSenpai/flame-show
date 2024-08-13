import React from 'react'
import AdminSidebar from '../components/Sidebar';
import AdminNavbar from '../components/Navbar';
import {Toaster} from 'sonner'

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
      <div className="flex">
        <div className="">
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
