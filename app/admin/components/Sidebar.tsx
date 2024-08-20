"use client";
import Logo from "@/app/components/Logo";
import { useSignOut } from "@/app/hooks/useUser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminSidebar = () => {
  const links = [
    { href: "/admin/pages", label: "dashboard" },
    { href: "/admin/pages/categories", label: "categories" },
    { href: "/admin/pages/products", label: "products" },
    { href: "/admin/pages/settings", label: "settings" },
  ];
  const pathName = usePathname();
  const signOut = useSignOut();

  const [isOpen, setOpen] = useState(true);
  console.log(isOpen)

  return (
    <div className="flex">
      <div className={`relative w-48 flex flex-col gap-20 items-center py-12 ${!isOpen && "hidden"}`}>
        <div className="">
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <Link
              href={href}
              key={href}
              className={`capitalize text-xl font-semibold hover:text-gray-500 ${
                pathName == href && "underline"
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            className="text-xl font-semibold hover:text-gray-500 text-start"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <Button
          variant="outline"
          className=" px-2 bg-slate-100 hover:bg-slate-200 m-2 border-none cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <GiHamburgerMenu className="text-xl" />
        </Button>
    </div>
  );
};

export default AdminSidebar;
