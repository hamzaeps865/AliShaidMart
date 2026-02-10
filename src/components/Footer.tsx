import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between bg-gray-800 rounded-lg p-8 md:gap-0' >


      <div className="flex flex-col gap-4 items-center  md:items-start">
        <Link href="/" className='flex item-center'>
          <Image src="/logo.png" alt='TrendAli' width={36} height={36} />
          <p className="text-md font-medium tracking-wider text-white hidden md:block"> AliShaidMart</p>
        </Link>
        <p className='text-sm text-gray-400'>© 2025 AliShaid.</p>
        <p className='text-sm text-gray-400'>All rights reserved</p>
      </div>
      <div className="flex flex-col gap-4  text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">HomePage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-4  text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">All Producs</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-4  text-sm text-gray-400 items-center md:items-start">
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  )
}

export default Footer
