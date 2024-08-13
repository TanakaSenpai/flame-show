"use client";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { addCategory } from "@/app/firebase/categories";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function AdminCategoryAdd() {
  const [category, setCategory] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!category) {
      toast.error("Please enter a category name");
      return;
    }
    
    try {
      addCategory({ category });
      toast.success("Success");
      setCategory("");
    } catch (err) {
      toast.error("Error");
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Add category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
          <DialogDescription>Add a new category from here.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                className="col-span-3 lowercase"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
