import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export const navLinks: { label: string; href: string }[] = [
  { label: "Formal shoes", href: "/category/formal" },
  { label: "Casual shoes", href: "/category/casual" },
  { label: "Sneakers", href: "/category/sneakers" },
  { label: "Converse", href: "/category/converse" },
  { label: "Boots", href: "/category/boots" },
];

const Navbar = () => {
  return (
    <section className="hidden lg:block w-full min-h-36">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="flex justify-between items-center h-10 w-full text-[12px] px-32 font-semibold text-gray-400">
          <div className="">Call us: +880 1683-016843</div>
          <Link href={"/contact"} className="">
            Contact us
          </Link>
        </div>
        <div className="px-32 py-4 lg:py-2 flex justify-between items-center w-full bg-light-blue">
          <div >
            <Logo />
          </div>
          <div >
            <SearchBar />
          </div>
        </div>
        <div className="flex justify-center items-center bg-black w-full">
          <div className="w-5/12 py-2 text-white font-semibold flex justify-between">
            {navLinks.map(({ label, href }) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
