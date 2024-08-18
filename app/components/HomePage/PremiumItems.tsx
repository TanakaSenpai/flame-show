'use client'
import React, { useEffect, useState } from "react";
import ProductsGrid from "../ProductsGrid";
import { getProducts, Product } from "@/app/firebase/products";

const PremiumItems = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])
  return <ProductsGrid title="Premium Items ✨" data={products.slice(0, 6)} />;
};

export default PremiumItems;
