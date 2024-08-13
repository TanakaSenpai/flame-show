'use client'
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
import { useEffect, useState } from "react";
import { Product } from "@/app/firebase/products";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/configs/firebase";

const AdminProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(db, "posts");
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
          const fetchedProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            imgUrls: doc.data().imgUrls,
            price: doc.data().price,
            colors: doc.data().colors,
            category: doc.data().category,
            productCode: doc.data().productCode,
            stock: doc.data().stock,
          }));
          setProducts(fetchedProducts);
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchProducts();
  }, []);
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
      {isLoading && <div className="text-lg text-center">Loading...</div>}
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
  );
};

export default AdminProductsTable;
