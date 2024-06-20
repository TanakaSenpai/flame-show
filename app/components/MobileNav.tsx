
import { LuAlignJustify } from "react-icons/lu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { navLinks } from "./Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const MobileNav = () => {
  return (
    <section className="lg:hidden">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky top-0 z-50">
        <div className="px-10 py-4 flex justify-between items-center w-full bg-light-blue">
          <div className="">
            <Logo />
          </div>
          <Sheet>
            <SheetTrigger>
              <LuAlignJustify className="text-xl" />
            </SheetTrigger>
            <SheetContent className="bg-primary">
              <div className="flex flex-col items-center justify-between w-full h-screen">
                <div className="font-bold text-3xl">
                  <Logo />
                </div>
                <div className="h-full flex flex-col space-y-6 items-center w-full justify-center text-lg text-white font-semibold">
                  {navLinks.map(({ label, href }) => (
                    <Link
                      href={href}
                      key={href}
                      className="underline underline-offset-3"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <SearchBar />
      </nav>
    </section>
  );
};

export default MobileNav;
