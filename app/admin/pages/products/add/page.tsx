"use client";
import { Spinner } from "@/app/components/Spinner";
import { storage } from "@/app/configs/firebase";
import { Timestamp } from "firebase/firestore";
import { getCategories } from "@/app/firebase/categories";
import { addPost, checkCodeExists } from "@/app/firebase/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import {v4} from "uuid"

const AddProductPage = () => {
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [colors, setColors] = useState("");
  const [productCode, setCode] = useState("");
  const [stock, setStock] = useState("");
  const createdAt = new Date().toLocaleString()
  


  const [categories, setCategories] = useState<
    { id: string; category: string }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  const selectImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files as FileList) || [];
    setImages(files);
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // Handle potential errors during upload
  try {
    // Prepare an empty array to store download URLs
    const imgUrls = [];

    // Iterate over each selected image
    for (const image of images) {
      const storageRef = ref(storage, `images/${image.name}-${v4()}`); // Generate unique filenames

      // Upload the image to Firestore Storage
      const uploadTask = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadTask.ref);

      // Add the download URL to the array
      imgUrls.push(downloadUrl);
    }

    // Check for duplicate product code before adding data to Firestore
    const isDupliCode = await checkCodeExists(
      "posts",
      "productCode",
      productCode
    );
    if (isDupliCode) {
      toast.error("Product code already exists!");
      setLoading(false);
      return;
    }

    // Validate required fields before adding data to Firestore
    if (
      !name ||
      !imgUrls.length ||
      !price ||
      !colors ||
      !productCode ||
      !stock
    ) {
      toast.error("Please fill up all the fields");
      setLoading(false);
      return;
    }

    // Create a Firestore document for the product
    await addPost({
      name,
      imgUrls,
      price,
      colors,
      category,
      productCode,
      stock,
      createdAt
    });

    toast.success("Product added successfully!");
    setName("");
    setCategory("");
    setPrice(0);
    setColors("");
    setCode("");
    setStock("");
    router.push("/admin/pages/products")
  } catch (error) {
    setLoading(false);
    console.error("Error: ", error);
    toast.error("An error occurred. Please try again.");
  } finally {
    setLoading(false); // Ensure loading state is reset even on errors
  }
};

  return (
    <div className="container p-10">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <Label htmlFor="name" className="text-nowrap">
            Product Name:
          </Label>
          <Input
            type="text"
            id="name"
            className="border-slate-400"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="images" className="text-nowrap">
            Product images:
          </Label>
          <Input
            type="file"
            id="images"
            className="border-slate-400"
            multiple
            required
            onChange={selectImages}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="price" className="text-nowrap">
            Product Price:
          </Label>
          <Input
            type="number"
            id="price"
            className="border-slate-400"
            required
            onChange={(e) => setPrice(parseInt(e.target.value))}
            value={price}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="colors" className="text-nowrap">
            Product Colors:
          </Label>
          <Input
            type="text"
            id="colors"
            className="border-slate-400"
            required
            onChange={(e) => setColors(e.target.value)}
            placeholder="example: White, Black"
            value={colors}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label className="text-nowrap">Product Category:</Label>
          <Select onValueChange={(value) => setCategory(value)} value={category}>
            <SelectTrigger className="w-[280px] border-slate-400">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.category}>
                    <p className="capitalize">{category.category}</p>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="code" className="text-nowrap">
            Product Code:
          </Label>
          <Input
            type="text"
            id="code"
            className="border-slate-400 uppercase"
            required
            onChange={(e) => setCode(e.target.value)}
            value={productCode}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label className="text-nowrap">Stock:</Label>
          <Select onValueChange={(value) => setStock(value)} value={stock}>
            <SelectTrigger className="w-[280px] border-slate-400">
              <SelectValue placeholder="Select stock status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="yes">In Stock</SelectItem>
                <SelectItem value="no">Out of Stock</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-8 flex items-center">
          <Button type="submit" className="text-center w-[116px]" disabled={isLoading} >
            {isLoading ? <Spinner className="w-[20px]" /> : "Add Product"}
          </Button>
          <Link href="/admin/pages/products" >
          <Button type="button" className="ml-4" variant="secondary">
            Cancel
          </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
