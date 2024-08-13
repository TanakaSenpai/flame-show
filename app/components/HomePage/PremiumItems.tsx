'use client'
import React, { useEffect, useState } from "react";
import ProductsGrid from "../ProductsGrid";
import { getPosts, Product } from "@/app/firebase/products";

const PremiumItems = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await getPosts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  }, [])
  return <ProductsGrid title="Premium Items ✨" data={products.slice(0, 6)} />;
};

export default PremiumItems;
