"use client"
import ProductsGrid from '@/app/components/ProductsGrid';
import ProductSkeleton from '@/app/components/ProductSkeleton';
import { getProducts, Product } from '@/app/firebase/products';
import React, { useEffect, useState } from 'react'

const SearchPage = ({ params: query }: { params: { query: string }; }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(false)
  const searchQuery = decodeURIComponent(query.query)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const products = await getProducts();
        setProducts(products)
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const searchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery))
  
  return <div>{isLoading ? <ProductSkeleton /> : <ProductsGrid data={searchedProducts} />}</div>;
}

export default SearchPage
