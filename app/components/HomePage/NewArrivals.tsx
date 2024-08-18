'use client'
import React, { useEffect, useState } from "react";
import ProductsGrid from "../ProductsGrid";
import { getPosts, Product } from "@/app/firebase/products";

const NewArrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getPosts();
        setProducts(products);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  
  return <ProductsGrid title="New Arrivals 🔥" data={products.slice(0,6)} />;
};

export default NewArrivals;
