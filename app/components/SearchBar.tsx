'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getProducts, Product } from '../firebase/products';
import { Command, CommandList, CommandEmpty, CommandGroup, CommandItem } from 'cmdk';
import Image from 'next/image';
import Link from 'next/link';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([])
   
  useEffect(() => {
    const fetchProducts = async () => { 
      const products = await getProducts()
      
      setProducts(products)
    }
    fetchProducts()
  }, [searchQuery])

  const handleChange = (value: string) => {
    setSearchQuery(value)
    const searchedProducts = products.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
    setSearchedProducts(searchedProducts)
}

  return (
    <div className="flex-col justify-center items-center space-x-2 py-1 w-full lg:w-[450px]">
      <div className="flex w-full mx-5">
        <Command className="w-full">
          <Input
            type="search"
            className={`rounded-none rounded-l-lg border-2 border-gray-300 w-full`}
            placeholder="Search..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <CommandList className="relative">
            {searchQuery.length == 0 ? null : searchedProducts.length == 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : null}
            <CommandGroup className="absolute z-10 w-full">
              {searchQuery == ""
                ? null
                : searchedProducts.map((product) => (
                    <CommandItem
                      key={product.id}
                      className="w-full h-12 text-sm p-2 flex justify-between items-center bg-white shadow-sm"
                    >
                      <Link
                        href={`/view-product/${product.productCode}`}
                        className="flex gap-4"
                      >
                        <div>
                          <Image
                            src={product.imgUrls[0]}
                            alt="shoe"
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="font-semibold">{product.name}</p>
                      </Link>
                      <div className="text-slate-800 text-sm">
                        {product.category}
                      </div>
                    </CommandItem>
                  ))}
            </CommandGroup>
          </CommandList>
        </Command>
        <Button type="submit" className="rounded-none rounded-r-lg">
          <Link href={`/search/${searchQuery}`}>Search</Link>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar
