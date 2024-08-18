import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const HomeProductsSkeleton = () => {
  return (
    <div className=" mt-28 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-full justify-items-center">
      <Skeleton className="w-[300px] h-[380px]" />
      <Skeleton className="w-[300px] h-[380px]" />
      <Skeleton className="w-[300px] h-[380px]" />
      <Skeleton className="w-[300px] h-[380px]" />
    </div>
  );
}

export default HomeProductsSkeleton
