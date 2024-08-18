"use client";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Product } from "@/app/firebase/products";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/configs/firebase";
import { Spinner } from "@/app/components/Spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const ViewProduct = ({
  params: productCode,
}: {
  params: { productCode: string };
}) => {
  const [products, setProduct] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  const pCode = productCode.productCode;

  useEffect(() => {
    const fetchProduct = async (pCode: string) => {
      setLoading(true);
      try {
        const collectionRef = collection(db, "products");
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
          description: doc.data().description,
          stock: doc.data().stock,
        }));
        setProduct(product);

        return product;
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false)
      }
      setLoading(false);
    };

    fetchProduct(pCode);
  }, [pCode]);

  return (
    <>
      {isLoading ? (
        <div className="h-[60vh] flex justify-center items-center">
          <Spinner className="w-10" />
        </div>
      ) : products.length == 0 ? (
        <h1 className="text-center text-red-600 text-6xl h-[50vh]">
          Not found
        </h1>
      ) : (
        products.map((product: Product) => (
          <div key={product.id}>
            <p className="p-4 capitalize text-sm font-semibold">
              Home {">"} {product.category} {">"} {product.name}
            </p>
            <div className="flex flex-col lg:flex-row container gap-10 lg:gap-0 py-4 mb-6">
              <div className="w-2/4">
                <ImageSlider imgUrls={product.imgUrls} />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">
                  Product code:{" "}
                  <span className="font-normal uppercase">
                    {product.productCode}
                  </span>
                </p>
                <p className="text-4xl font-semibold my-3">{product.name}</p>
                <p className="font-semibold mb-4 text-lg">
                  {product.price} BDT
                </p>
                <p className="capitalize mb-3">
                  <span className="font-semibold">Product type:</span>{" "}
                  {product.category}
                </p>
                {product.stock === "yes" ? (
                  <p className="font-semibold text-sm text-green-500">
                    In Stock
                  </p>
                ) : (
                  <p className="font-semibold text-sm text-red-500">
                    Out of Stock
                  </p>
                )}
                <p className="my-4">
                  <span className="font-semibold"> Colors:</span>{" "}
                  {product.colors}
                </p>
                <Button className="bg-blue-500 mt-6">
                  <Link href="https://m.me/bestsneakersshoes" className="flex items-center gap-2">
                   <span className="text-md"><FaFacebook /></span> Message us on facebook
                  </Link>
                </Button>
              </div>
            </div>
            <div className="m-6"><span className="font-semibold">Description: </span>{ product.description }</div>
          </div>
        ))
      )}
    </>
  );
};

export default ViewProduct;
