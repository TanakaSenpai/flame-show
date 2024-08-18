"use client";
import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/configs/firebase";
import { Skeleton } from "@/components/ui/skeleton";

const AdminDashboardPage = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const countItems = async () => {
      setLoading(true);
      try {
        const productsCollection = collection(db, "products");
        const productsSnap = await getDocs(productsCollection);
        setProductsCount(productsSnap.size);

        const categoriesCollection = collection(db, "categories");
        const categoriesSnap = await getDocs(categoriesCollection);
        setCategoriesCount(categoriesSnap.size);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };
    countItems();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex gap-4">
          <Skeleton className="w-52 h-32" />
          <Skeleton className="w-52 h-32" />
        </div>
      ) : (
        <div className="flex gap-4">
          <DashboardCard
            title="Products"
            number={productsCount}
            bg="bg-blue-400"
          />
          <DashboardCard
            title="Categories"
            number={categoriesCount}
            bg="bg-green-400"
          />
        </div>
      )}
    </>
  );
};

export default AdminDashboardPage;
