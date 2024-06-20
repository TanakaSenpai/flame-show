import React from "react";
import { products } from "@/app/api/products/productsData";
import ProductsGrid from "../ProductsGrid";

const PremiumItems = () => {
  return <ProductsGrid title="Premium Items ✨" data={products} />;
};

export default PremiumItems;
