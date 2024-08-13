"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ imgSrc }: { imgSrc: string[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
      swipeToSlide: true
  };

  return (
      <div className="w-[300px]">
      <Slider {...settings}>
        {imgSrc.map((element) => (
          <Image
            key={element}
            src={element}
            alt="product_image"
            width={300}
            height={300}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
