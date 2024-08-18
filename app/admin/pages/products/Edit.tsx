"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getCategories } from "@/app/firebase/categories";
import { Product, updateProduct } from "@/app/firebase/products";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  item: Product;
}

const AdminProductsEdit = ({ item }: Props) => {
  console.log(item)
  const [name, setName] = useState(item.name);
  const imgUrls = item.imgUrls;
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price);
  const [colors, setColors] = useState(item.colors);
  const [productCode, setProductCode] = useState(item.productCode);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);

  const [categories, setCategories] = useState<
    { id: string; category: string }[]
  >([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await getCategories();
        setCategories(cats);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await updateProduct(item.id!, {
        name,
        imgUrls,
        category,
        price,
        colors,
        productCode,
        description,
        stock,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mr-3">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes of the product here. Click save when {"you're"} done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                className="col-span-3"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Category
              </Label>
              <Select
                onValueChange={(value) => setCategory(value)}
                defaultValue={category}
              >
                <SelectTrigger className="w-[180px]">
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Price
              </Label>
              <Input
                id="name"
                type="number"
                value={price}
                className="col-span-3"
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Colors
              </Label>
              <Input
                id="name"
                value={colors}
                className="col-span-3"
                onChange={(e) => setColors(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Product code
              </Label>
              <Input
                id="name"
                value={productCode}
                className="col-span-3"
                onChange={(e) => setProductCode(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Description
              </Label>
              <Textarea className="w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Stock
              </Label>
              <Select
                defaultValue={stock}
                onValueChange={(value) => setStock(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">In Stock</SelectItem>
                    <SelectItem value="no">Out of Stock</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminProductsEdit;
