'use client'
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";

const LayoutCheck = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const isAdminPage = pathName.startsWith("/admin");
  return (
    <>
      {isAdminPage ? (
        <main>{children}</main>
      ) : (
        <main className="flex flex-col min-h-screen">
          <div className="min-h-28">
            <Navbar />
            <MobileNav />
          </div>
            <div className="">{children}</div>
            <footer><Footer /></footer>
        </main>
      )}
    </>
  );
};

export default LayoutCheck
