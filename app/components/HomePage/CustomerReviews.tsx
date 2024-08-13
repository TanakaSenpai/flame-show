"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShowStarRating from "../ShowStarRating";

const reviews = [
  { title: "Best quality", name: "Senpai", rating: 5, date: "08/06/2024", comment: "Thanks for your quality service. Would recommend it to everyone.", images: "" },
  { title: "Best quality", name: "Senpai", rating: 1, date: "08/06/2024", comment: "Thanks for your quality service. Would recommend it to everyone.", images: "" },
  { title: "Best quality", name: "Senpai", rating: 4, date: "08/06/2024", comment: "Thanks for your quality service. Would recommend it to everyone.", images: "" },
  { title: "Best quality", name: "Senpai", rating: 2, date: "08/06/2024", comment: "Thanks for your quality service. Would recommend it to everyone.", images: "" },
]

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <div className="flex flex-col items-center my-5 h-68">
      <p className="text-3xl font-bold my-6">Customer Reviews</p>
      <div className="border border-3 border-gray-400 rounded-lg h-full w-full lg:w-4/5 flex justify-center p-4 shadow-2xl">
        <Slider {...settings} className="h-full w-full">
          {reviews.map((item, index) => (
            <div key={index} className="flex w-full h-48 p-3">
              <div className="my-2">
                <ShowStarRating rateNum={item.rating} />
              </div>
              <p className="font-semibold text-2xl">{item.title}</p>
              <p className="text-xs my-1">{item.name}</p>
              <p className="text-xs">{item.date}</p>
              <p className="text-md py-3">{item.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
