import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='font-bold text-xl'>
      <Image src={"/logo.png"} alt='logo' width={70} height={70} />
    </div>
  )
}

export default Logo
