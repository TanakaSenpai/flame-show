import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AdminNavbar = () => {
  return (
    <div className="h-12 w-full px-10 shadow-[rgba(0,0,15,0.5)_7px_2px_5px_0px] flex items-center justify-end">
      <p className="text-lg mr-6">Hello Admin!</p>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="admin" />
        <AvatarFallback>admin</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default AdminNavbar
