'use client'
import ProductsGrid from '@/app/components/ProductsGrid';
import { db } from '@/app/configs/firebase';
import {collection, getDocs, query, where} from "firebase/firestore"
import { Product } from '@/app/firebase/products';
import { useEffect, useState } from 'react';


const CategoryPage = ({ params: category }: { params: { category: string } }) => {
  const [products, setProducts] = useState<Product[]>([])
  const cat = category.category
  useEffect(() => {
    const fetchProducts = async (cat: string) => { 
      const q = query(collection(db, "posts"), where("category", "==", cat))
      const querySnapshot = await getDocs(q)
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        imgUrls: doc.data().imgUrls,
        price: doc.data().price,
        colors: doc.data().colors,
        category: doc.data().category,
        productCode: doc.data().productCode,
        stock: doc.data().stock,
      } as Product));
      setProducts(products)
    }
    fetchProducts(cat)
  }, [cat])

  if (products.length == 0) return (
    <h1 className="text-center text-red-600 text-8xl h-[50vh]">Not found</h1>
  );

    return (
      <div>
        <p className='capitalize font-semibold px-4 pt-4 text-sm'>Home {">"} { category.category }</p>
            <ProductsGrid data={products} />
      </div>
      
  )
}

export default CategoryPage
