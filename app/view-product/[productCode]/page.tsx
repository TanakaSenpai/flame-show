import React from "react";

import { products } from "@/app/api/products/productsData";

const ViewProduct = ({ params }: { params: { productCode: string } }) => {
  if (products.some((obj) => obj.productCode === params.productCode)) {
  } else {
    return <h1 className="text-center text-red-600 text-8xl">Not found</h1>;
  }
  return (
    <div className="text-center text-blue-500 text-7xl">
      {params.productCode}
    </div>
  );
};

export default ViewProduct;
