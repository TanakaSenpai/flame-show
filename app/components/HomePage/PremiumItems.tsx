'use client'
import React, { useEffect, useState } from "react";
import ProductsGrid from "../ProductsGrid";
import { getProducts, Product } from "@/app/firebase/products";
import HomeProductsSkeleton from "../HomeProductsSkeleton";

const PremiumItems = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return isLoading ? <HomeProductsSkeleton /> : <ProductsGrid title="Premium Items ✨" data={products.slice(0, 6)} />;
};

export default PremiumItems;
