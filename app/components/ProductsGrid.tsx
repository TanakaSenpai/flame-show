import React from "react";
import ProductCard from "./ProductCard";

interface Props {
  title?: string;
  data: { name: string; imgUrls: string[]; price: number; productCode: string }[];
}
const ProductsGrid = ({ title, data }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center my-5 w-full">
      <h1 className="font-semibold text-3xl mt-6">{title}</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 w-full justify-items-center  p-4 lg:p-6">
        {data.map((item) => (
          <ProductCard
            key={item.productCode}
            imgUrl={item.imgUrls?.[0]}
            name={item.name}
            price={item.price}
            productCode={item.productCode}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
