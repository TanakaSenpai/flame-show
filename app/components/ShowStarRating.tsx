import React from "react";
import { FaStar } from "react-icons/fa";

const ShowStarRating = ({rateNum}: {rateNum: number}) => {
  return (
    <div className="flex">
          {[...Array(5)].map((rating, index) => (
          <FaStar key={index} className="text-sm" color={index + 1 <= rateNum? "gold": "gray"} />
        ))
      }
    </div>
  );
};

export default ShowStarRating;
