import React from "react";

import { getProductDetails } from "@/app/api/products/[productsCode]/route";
import Image from "next/image";

const ViewProduct = ({ params }: { params: { productCode: string } }) => {
  const product = getProductDetails(params.productCode)
  if (!product)
    return <h1 className="text-center text-red-600 text-8xl">Not found</h1>;
  
  return (
    <div className="text-center text-blue-500 text-7xl">
      {product.name}
      <div className="grid grid-cols-2 items-center">
        {product.imgSrc.map(element => {
          return <Image key={element} src={element} alt="product_image" width={300} height={300} />
        })}
      </div>
      {product.productCode}
    </div>
  );
};

export default ViewProduct;
