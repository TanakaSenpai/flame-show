import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex w-full justify-center items-center space-x-2 px-2 py-1">
      <div className="flex w-full mx-5 ">
        <Input type="search" className='rounded-none rounded-l-lg border-2 border-gray-300' placeholder="Search..." />
        <Button type="submit" className='rounded-none rounded-r-lg'>Search</Button>
      </div>
    </div>
  );
}

export default SearchBar
