import Image from "next/image";
import homeBanner from "@/public/images/home-ban.jpg";
import NewArrivals from "./components/HomePage/NewArrivals";
import PremiumItems from "./components/HomePage/PremiumItems";
import CustomerReviews from "./components/HomePage/CustomerReviews";

export default function Home() {
  return (
    <main className="container flex flex-col justify-center">
      <div className="w-full relative my-3">
        <Image src={homeBanner} alt="banner" objectFit="contain" />
      </div>
      <NewArrivals />
      <PremiumItems />
      <CustomerReviews />
    </main>
  );
}
