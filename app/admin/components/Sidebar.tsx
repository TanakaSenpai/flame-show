'use client'
import Logo from "@/app/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminSidebar = () => {
  const links = [
    { href: "/admin/pages", label: "dashboard" },
    { href: "/admin/pages/categories", label: "categories" },
    { href: "/admin/pages/products", label: "products" },
    { href: "/admin/logout", label: "logout" },
  ];
  const pathName = usePathname();
  return (
    <div className="w-60 flex flex-col gap-20 items-center py-12">
      <div className="">
        <Logo />
      </div>
      <div className="flex flex-col gap-4">
        {links.map(({ label, href }) => (
          <Link href={href} key={href} className={`capitalize text-xl font-semibold hover:text-gray-500 ${pathName == href && "underline"}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
