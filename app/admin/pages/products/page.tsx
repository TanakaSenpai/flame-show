import React from "react";
import AdminProductsTable from "./Table";
import SearchBar from "@/app/components/SearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between p-4">
        <div className="w-80">
          <SearchBar />
        </div>
        <Link href="/admin/pages/products/add">
        <Button>Add Product</Button>
        </Link>
      </div>
      <AdminProductsTable />
    </div>
  );
};

export default ProductsPage;
