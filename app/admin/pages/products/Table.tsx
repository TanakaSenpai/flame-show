
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
import { Spinner } from "@/app/components/Spinner";

const AdminProductsTable = ({ products, isLoading }: { products: Product[];  isLoading: boolean}) => {

  return (
    <>
      <Table>
        {products.length == 0 ? "" :<TableCaption>A list of all the products.</TableCaption>}
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
        {isLoading && <div className="text-lg w-full text-center"><Spinner className="w-10" /></div>}
        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Image src={item.imgUrls[0]} alt="shoe" width={45} height={45} />
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
          {products.length == 0 ? (<div className="text-4xl mt-6 text-red-500 font-semibold text-center">No products found</div>) : ""}
    </>
  );
};

export default AdminProductsTable;
