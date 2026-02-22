"use client"
import useCartStore from '@/stores/cartStores'
import useAuthModalStore from '@/stores/authModalStore'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React from 'react'

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore()
  const { status } = useSession()
  const openModal = useAuthModalStore((s) => s.openModal)
  const router = useRouter()

  const handleCartClick = () => {
    if (status === 'authenticated') {
      router.push('/cart')
    } else {
      openModal()
    }
  }

  if (!hasHydrated) return null;
  return (
    <div>
      <button
        onClick={handleCartClick}
        className="relative inline-flex items-center p-1 cursor-pointer"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-5 h-5 text-gray-600" />
        <span className="absolute -top-1 -right-1 bg-amber-400 text-gray-800 rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold leading-none">
          {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </button>
    </div>
  )
}

export default ShoppingCartIcon
