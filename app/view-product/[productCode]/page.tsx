import React from "react";
import { products } from "@/app/api/products/productsData";
import ImageSlider from "./ImageSlider";

const ViewProduct = ({ params }: { params: { productCode: string } }) => {
  const product = products.find(
    (obj) => obj.productCode === params.productCode
  );
  if (!product)
    return (
      <h1 className="text-center text-red-600 text-8xl h-[50vh]">Not found</h1>
    );

  return (
    <>
      <p className="p-4 capitalize text-sm font-semibold">Home { ">" } {product.category} {">"} {product.name}</p>
      <div className="flex container py-4 mb-6">
        <div className="w-2/4">
          <ImageSlider imgSrc={product.imgSrc} />
        </div>
        <div className="flex-flex-col">
          <p>
            Product code:{" "}
            <span className="font-semibold">{product.productCode}</span>
          </p>
          <p className="text-4xl font-semibold my-3">{product.name}</p>
          <p className="font-semibold mb-4">{product.price} BDT</p>
          {product.inStock === "yes" ? (
            <p className="font-semibold">In Stock</p>
          ) : (
            <p className="font-semibold text-red-500">Out of Stock</p>
          )}
          <p className="my-4">
            Colors: <span className="font-semibold">{product.colors}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
