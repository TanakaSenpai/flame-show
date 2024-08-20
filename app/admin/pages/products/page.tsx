'use client'
import React, { useEffect, useState } from "react";
import AdminProductsTable from "./Table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Product } from "@/app/firebase/products";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/configs/firebase";
import { Spinner } from "@/app/components/Spinner";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const collectionRef = collection(db, "products");
          const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const fetchedProducts = snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
              imgUrls: doc.data().imgUrls,
              price: doc.data().price,
              colors: doc.data().colors,
              category: doc.data().category,
              productCode: doc.data().productCode,
              description: doc.data().description,
              stock: doc.data().stock,
            }));
            setProducts(fetchedProducts);
            setLoading(false);
          });

          return () => unsubscribe();
        } catch (error) {
          console.error("Error: ", error);
        }
      };

      fetchProducts();
    }, []);
  
  const handleChange = (searchQuery: string) => {
    setSearchQuery(searchQuery)
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredProducts(filteredProducts)
  }
  
  return (
    <div className="p-3">
      <div className="flex items-center justify-between p-4">
        <div className="w-80">
          <Input type="search" placeholder="Search..." onChange={(e) => handleChange(e.target.value)} />
        </div>
        <Link href="/admin/pages/products/add">
        <Button>Add Product</Button>
        </Link>
      </div>
      {isLoading? <div className="w-full h-screen flex justify-center"><Spinner className="w-10" /></div> :<AdminProductsTable products={searchQuery == "" ? products : filteredProducts } />}
    </div>
  );
};

export default ProductsPage;
