'use client'
import React, { useEffect, useState } from "react";
import ProductsGrid from "../ProductsGrid";
import { getPosts, Post } from "@/app/firebase/products";

const NewArrivals = () => {
  const [products, setProducts] = useState<Post[]>([]);
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
  console.log(products)
  return <ProductsGrid title="New Arrivals 🔥" data={products} />;
};

export default NewArrivals;
