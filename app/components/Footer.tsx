import React from 'react'
import Logo from './Logo'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-black py-16 grid grid-cols-1 lg:grid-cols-3 content-center gap-8">
      <div className="w-full flex flex-col items-center">
        <Logo />
        <p className="text-white">
          This is the best online shoe store you will ever see!
        </p>
      </div>
      <div className="text-white flex flex-col gap-2 items-center">
        <p className="text-slate-400 text-lg">Quick links</p>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact us</Link>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-slate-400 text-lg">Social links</p>
        <div className='flex gap-4'>
          <FaFacebook size={20} className="text-white cursor-pointer hover:text-gray-400" />
          <FaInstagram size={20} className="text-white cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Footer
