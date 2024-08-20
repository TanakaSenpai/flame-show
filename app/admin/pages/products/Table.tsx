
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import AdminProductsDelete from "./Delete";
import AdminProductsEdit from "./Edit";
import { Product } from "@/app/firebase/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const AdminProductsTable = ({ products }: { products: Product[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalProducts = products.length;
  const dataPerPage = 10;
  const totalPages = Math.ceil(totalProducts/dataPerPage)
  const startIndex = (currentPage - 1) * dataPerPage;
  let endIndex = startIndex + dataPerPage
  if (endIndex > totalProducts) endIndex = totalProducts

  return (
    <>
      <Table>
        {products.length == 0 ? (
          ""
        ) : (
          <TableCaption>A list of all the products.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.slice(startIndex, endIndex).map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Image
                  src={item.imgUrls[0]}
                  alt="shoe"
                  width={45}
                  height={45}
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="capitalize">{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell
                className={`text-right ${
                  item.stock === "yes" ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.stock === "yes" ? "In Stock" : "Out of Stock"}
              </TableCell>
              <TableCell className="text-right">
                <AdminProductsEdit item={item} />
                <AdminProductsDelete id={item.id!} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalProducts > dataPerPage && <div className="flex w-full justify-center gap-4 mt-6">
        <Button
          className="w-28"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"< Previous"}
        </Button>
        <Button
          className="w-28"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {"Next >"}
        </Button>
      </div>}
      {products.length == 0 ? (
        <div className="text-4xl mt-6 text-red-500 font-semibold text-center">
          No products found
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminProductsTable;
