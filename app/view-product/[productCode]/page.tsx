'use client'
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Product } from "@/app/firebase/products";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/configs/firebase";

const ViewProduct = ({params: productCode}: {params: {productCode: string}}) => {
  const [products, setProduct] = useState<Product[]>([]);
  const pCode = productCode.productCode
  console.log(pCode)
  useEffect(() => {
    const fetchProduct = async (pCode: string) => {
      const collectionRef = collection(db, "posts");
      const q = query(collectionRef, where("productCode", "==", pCode));
      const qSnap = await getDocs(q);
      const product = qSnap.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        imgUrls: doc.data().imgUrls,
        price: doc.data().price,
        colors: doc.data().colors,
        category: doc.data().category,
        productCode: doc.data().productCode,
        stock: doc.data().stock,
      }));
      setProduct(product)

      return product;
    };
    fetchProduct(pCode);
  }, [pCode]);

  if (products.length == 0)
    return (
      <h1 className="text-center text-red-600 text-8xl h-[50vh]">Not found</h1>
    );

  return (
    <>
      {products.map((product: Product) => (
        <div key={product.id}>
          <p className="p-4 capitalize text-sm font-semibold">
            Home {">"} {product.category} {">"} {product.name}
          </p>
          <div className="flex container py-4 mb-6">
            <div className="w-2/4">
              <ImageSlider imgUrls={product.imgUrls} />
            </div>
            <div className="flex-flex-col">
              <p>
                Product code:{" "}
                <span className="font-semibold">{product.productCode}</span>
              </p>
              <p className="text-4xl font-semibold my-3">{product.name}</p>
              <p className="font-semibold mb-4">{product.price} BDT</p>
              {product.stock === "yes" ? (
                <p className="font-semibold">In Stock</p>
              ) : (
                <p className="font-semibold text-red-500">Out of Stock</p>
              )}
              <p className="my-4">
                Colors: <span className="font-semibold">{product.colors}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ViewProduct;
