import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='font-bold text-xl'>
      <Image src={"/logo.png"} alt='logo' width={70} height={70} />
    </Link>
  )
}

export default Logo
