"use client"
import useCartStore from '@/stores/cartStores'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {

  const { cart, hasHydrated } = useCartStore()

  if (!hasHydrated) return null;
  return (
    <div>
      <Link href="/cart" className="relative inline-flex items-center p-1">
        <ShoppingCart className="w-5 h-5 text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-amber-400 text-gray-800 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold leading-none">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </Link>
    </div>
  )
}

export default ShoppingCartIcon
