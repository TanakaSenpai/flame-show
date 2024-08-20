"use client";
import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/app/components/Spinner";
import { addReview } from "@/app/firebase/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FirebaseError } from "firebase/app";

const AddReview = ({ productId }: { productId: string }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const createdAt = new Date().toLocaleString();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (rating === 0) return toast.error("Please select a rating");
    try {
      setLoading(true);
      await addReview({ name, title, rating, review, productId, createdAt });
      setName("");
      setTitle("");
      setRating(0);
      setReview("");
      toast.success("Your review has been added.");
    } catch (error: FirebaseError | any) {
      setLoading(false);
      toast.error(error.message);
    } finally {
        setLoading(false)
    }
    setLoading(false);
  };

  return (
    <div className="lg:w-2/4 my-5">
      <h2 className="text-2xl my-4">Add a review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Your name</Label>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Enter title</Label>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Rating</Label>
          <Select
            value={rating.toString()}
            onValueChange={(value) => setRating(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0" disabled>
                  Choose rating
                </SelectItem>
                <SelectItem value="1">1 star</SelectItem>
                <SelectItem value="2">2 star</SelectItem>
                <SelectItem value="3">3 star</SelectItem>
                <SelectItem value="4">4 star</SelectItem>
                <SelectItem value="5">5 star</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Review</Label>
          <Textarea
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner className="w-5 text-white" /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
