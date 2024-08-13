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
import AdminCategoryDelete from "./Delete";
import AdminCategoryEdit from "./Edit";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/app/configs/firebase";
import { useEffect, useState } from "react";

const AdminCategoriesTable = () => {
  const [categories, setCategories] = useState<{ id: string; category?: string }[]>([]); 
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(db, "categories");
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
          const fetchedCategories = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCategories(fetchedCategories);
          setLoading(false);
        });

        return () => unsubscribe();
        
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  
  return (
    <Table>
      <TableCaption>A list of all the categories.</TableCaption>
      <TableHeader className="bg-secondary">
        <TableRow>
          <TableHead className="py-2">Categories</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      {isLoading && <div className="text-lg text-center">Loading...</div>}
      <TableBody>
        {categories.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="capitalize">{item.category}</TableCell>
            <TableCell className="text-right">
              <AdminCategoryEdit item={item} />
              <AdminCategoryDelete id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminCategoriesTable;
