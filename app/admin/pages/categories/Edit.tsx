'use client'
import React, { FormEvent, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { updateCategory } from "@/app/firebase/categories";
import { toast } from "sonner";

interface Props {
  item: { id: string; category?: string; };
}
const AdminCategoryEdit = ({ item }: Props) => {

  const [category, setCategory] = useState(item.category || "");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await updateCategory(item.id, category);
    toast.success("Category updated successfully");
  
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mr-3">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Make changes of the category here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              value={category}
              className="col-span-3"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose >
              <Button type="submit">Save changes</Button>\
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminCategoryEdit;
