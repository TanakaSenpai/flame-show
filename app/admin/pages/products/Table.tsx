import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/app/api/products/productsData";
import Image from "next/image";
import AdminProductsDelete from "./Delete";
import AdminProductsEdit from "./Edit";

const AdminProductsTable = () => {
  return (
    <Table>
      <TableCaption>A list of all the products.</TableCaption>
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
        {products.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="">
              <Image src={item.imgUrls[0]} alt="shoe" width={45} height={45} />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell className="capitalize">{item.category}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell
              className={`text-right ${
                item.inStock === "yes" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.inStock === "yes" ? "In Stock" : "Out of Stock"}
            </TableCell>
            <TableCell className="text-right">
              <AdminProductsEdit item={item} />
              <AdminProductsDelete id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminProductsTable;
