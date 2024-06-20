import React from "react";
import { products } from "@/app/api/products/productsData";
import ProductsGrid from "../ProductsGrid";

const NewArrivals = () => {
  return <ProductsGrid title="New Arrivals 🔥" data={products} />;
};

export default NewArrivals;
