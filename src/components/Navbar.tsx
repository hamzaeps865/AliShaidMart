'use client';

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./Searchbar";
import { Home, ShoppingCart, X, Menu, User, Mail, LogOut } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useState, useEffect, Suspense } from "react";
import AuthModal from "./AuthModal";
import { useSession, signOut } from 'next-auth/react';
import useAuthModalStore from "@/stores/authModalStore";

const Navbar = () => {
  const { isOpen: isAuthModalOpen, openModal, closeModal } = useAuthModalStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`w-full flex items-center justify-between px-4 md:px-6 py-4 sticky top-[10px] bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'border-b border-gray-200'}`}>
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
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              <Home className="w-4 h-4 text-gray-600" />
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
            <SearchBar />
            <ShoppingCartIcon />
            {status === 'authenticated' ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {session.user?.image ? (
                    <img src={session.user.image} alt={session.user.name || 'User'} className="w-8 h-8 rounded-full border border-gray-200" />
                  ) : (
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                      <User className="w-4 h-4 text-yellow-600" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-700 hidden lg:inline-block">
                    {session.user?.name}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => openModal()}
                className="hidden cursor-pointer sm:inline-flex items-center justify-center text-sm font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors px-4 py-2 rounded-lg shadow-sm shadow-yellow-200"
              >
                Login
              </button>
            )}
          </div>

          {/* Cart icon and Avatar visible on mobile navbar */}
          <div className="sm:hidden flex items-center gap-3">
            {status === 'authenticated' && (
              <div className="flex items-center">
                {session.user?.image ? (
                  <img src={session.user.image} alt={session.user.name || 'User'} className="w-8 h-8 rounded-full border border-gray-200" />
                ) : (
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                    <User className="w-4 h-4 text-yellow-600" />
                  </div>
                )}
              </div>
            )}
            <ShoppingCartIcon />
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="sm:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu backdrop */}
      <div
        className={`sm:hidden fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu panel - Right-Side Drawer */}
      <div
        className={`sm:hidden fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-semibold text-lg tracking-tight">AliShaidMart.</span>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100/80 text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            <SearchBar mobile />

            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium transition-all group"
              >
                <span className="flex items-center gap-3 text-lg">
                  <Home className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  Home
                </span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium transition-all group"
              >
                <span className="flex items-center gap-3 text-lg">
                  <span className="w-5 h-5 flex items-center justify-center text-gray-400 group-hover:text-indigo-500 transition-colors font-bold text-xs border-2 border-current rounded-md">?</span>
                  About Us
                </span>
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium transition-all group"
              >
                <span className="flex items-center gap-3 text-lg">
                  <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  Shop
                </span>
              </Link>
              <Link
                href="/all-products"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium transition-all group"
              >
                <span className="flex items-center gap-3 text-lg">
                  <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  All Products
                </span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium transition-all group"
              >
                <span className="flex items-center gap-3 text-lg">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  Contact Us
                </span>
              </Link>
            </nav>
          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium text-gray-600">Your Cart</span>
              <div className="bg-white p-2 rounded-full shadow-sm ring-1 ring-gray-200/50">
                <ShoppingCartIcon />
              </div>
            </div>

            {status === 'authenticated' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                  {session.user?.image ? (
                    <img src={session.user.image} alt={session.user.name || 'User'} className="w-10 h-10 rounded-full border border-gray-200" />
                  ) : (
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center border border-yellow-200">
                      <User className="w-5 h-5 text-yellow-600" />
                    </div>
                  )}
                  <div className="flex-1 overflow-hidden">
                    <p className="font-bold text-gray-900 truncate">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => { signOut(); setIsMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 text-base font-semibold text-red-600 bg-white border border-red-100 hover:bg-red-50 transition-colors py-3.5 rounded-xl shadow-sm cursor-pointer"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { openModal(); setIsMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 text-base font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors py-3.5 rounded-xl  shadow-yellow-200 cursor-pointer"
              >
                Login / Register
              </button>
            )}
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => closeModal()}
        />
      </Suspense>
    </>
  );
};

export default Navbar;