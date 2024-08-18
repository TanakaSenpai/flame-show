'use client'
import ProductsGrid from '@/app/components/ProductsGrid';
import { db } from '@/app/configs/firebase';
import {collection, getDocs, query, where} from "firebase/firestore"
import { Product } from '@/app/firebase/products';
import { useEffect, useState } from 'react';
import { Spinner } from '@/app/components/Spinner';


const CategoryPage = ({ params: category }: { params: { category: string } }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(false)
  const cat = category.category

  useEffect(() => {
    const fetchProducts = async (cat: string) => {
      setLoading(true)
    try {
        const q = query(collection(db, "posts"), where("category", "==", cat));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              name: doc.data().name,
              imgUrls: doc.data().imgUrls,
              price: doc.data().price,
              colors: doc.data().colors,
              category: doc.data().category,
              productCode: doc.data().productCode,
              stock: doc.data().stock,
            } as Product)
        );
        setProducts(products);
      } catch (error) {
        console.error(error)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    };
    setLoading(false)
    fetchProducts(cat)
  }, [cat])

  return (
    <>
      {isLoading ? (
        <div className='h-[60vh] flex justify-center items-center'>
          <Spinner className="w-10" />
        </div>
      ) : products.length == 0 ? (
        <h1 className="text-center text-red-600 text-6xl h-[50vh]">
          No products found
        </h1>
      ) : (
        <div>
          <p className="capitalize font-semibold px-4 pt-4 text-sm">
            Home {">"} {category.category}
          </p>
          <ProductsGrid data={products} />
        </div>
      )}
    </>
  );
}

export default CategoryPage
