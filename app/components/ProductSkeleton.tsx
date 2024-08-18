import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="my-14 ml-7 pt-4 grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 w-full justify-items-center">
      <Skeleton className="w-[300px] h-[400px] rounded-md" />
      <Skeleton className="w-[300px] h-[400px] rounded-md" />
      <Skeleton className="w-[300px] h-[400px] rounded-md" />
      <Skeleton className="w-[300px] h-[400px] rounded-md" />
    </div>
  );
}

export default ProductSkeleton
