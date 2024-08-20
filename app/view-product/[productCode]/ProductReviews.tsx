"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/app/configs/firebase";
import { Review } from "@/app/firebase/products";
import { collection, onSnapshot, orderBy, query, Timestamp, where } from "firebase/firestore";
import ShowStarRating from "@/app/components/ShowStarRating";
import { Spinner } from "@/app/components/Spinner";

const ProductReviews = ({productId} : {productId: string}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const reviewCollection = collection(db, "reviews");
        const q = query(
          reviewCollection,
          where("productId", "==", productId)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const fetchedReviews = snapshot.docs.map((review) => ({
            id: review.id,
            name: review.data().name,
            title: review.data().title,
            rating: review.data().rating,
            review: review.data().review,
            productId: review.data().productId,
            createdAt: review.data().createdAt,
          }));
          setReviews(fetchedReviews);
          setLoading(false);
        });
        
        return () => unsubscribe;
      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    };

      fetchReviews();
  }, [productId]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center">
        <Spinner className="w-10" />
      </div>
    );
  }

  return (
    <>
      {reviews.length > 0 ? (
        <div className="my-10">
          {reviews.map((review) => (
            <div key={review.id} className="w-full p-3">
              <div className="my-2">
                <ShowStarRating rateNum={review.rating} />
              </div>
              <p className="font-semibold text-2xl">{review.title}</p>
              <p className="text-sm my-1 font-semibold text-slate-600">{review.name}</p>
              <p className="text-xs">{review.createdAt}</p>
              <p className="text-md pt-3">{review.review}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg my-2">No reviews available for this product</p>
      )}
    </>
  );
};

export default ProductReviews;
