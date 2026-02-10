'use client';

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./Searchbar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useState } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
        {/* LEFT */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider">
            AliShaidMart.
          </p>
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <SearchBar />
          <Link href="/">
            <Home className="w-4 h-4 text-gray-600" />
          </Link>
          <Bell className="w-4 h-4 text-gray-600" />
          <ShoppingCartIcon />
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;