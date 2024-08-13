import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface Props {
  imgUrl: string;
  name: string;
  price: number;
  productCode: string;
}
const ProductCard = ({ imgUrl, name, price, productCode }: Props) => {
  return (
    <div className="w-full max-w-[400px] h-[350px] sm:h-[450px] rounded-md overflow-hidden ">
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="w-full h-[200px] sm:h-[250px] relative">
            <Image src={imgUrl} alt="Product image" fill objectFit="cover" />
          </div>
          <p className="p-3 font-semibold h-[60px]">{name}</p>
          <p className="px-3 mt-2 text-sm md:text-lg font-bold text-primary">
            BDT {price}
          </p>
        </CardContent>
        <CardFooter>
          <button className="p-[3px] relative w-full mt-3">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-1 md:py-2 bg-[#252525] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              <Link href={"/view-product/" + productCode} className="text-sm">
                View Product
              </Link>
            </div>
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
