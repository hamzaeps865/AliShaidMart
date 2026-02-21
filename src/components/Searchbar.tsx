import { Search } from 'lucide-react'
import React from 'react'

type Props = {
  mobile?: boolean
}

const Searchbar = ({ mobile = false }: Props) => {
  if (mobile) {
    return (
      <div className="flex items-center gap-2 w-full rounded-lg border border-gray-200 px-3 py-2 bg-white shadow-sm">
        <Search className='w-5 h-5 text-gray-500' />
        <input
          type="text"
          placeholder='Search products, categories...'
          className='w-full text-sm outline-none placeholder-gray-400'
        />
      </div>
    )
  }

  return (
    <div className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-3 py-1 shadow-sm">
      <Search className='w-4 h-4 text-gray-500'/>
      <input type="text" placeholder='Search...' className='text-sm outline-none' />
    </div>
  )
}

export default Searchbar
