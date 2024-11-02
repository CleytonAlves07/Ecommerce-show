"use client";

import { Heart, Search, ShoppingCart, User, Menu as MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          className="dark"
          src="/Logo.png"
          alt="Logo da empresa"
          width={96}
          height={32}
          priority
        />
      </div>

      {/* Search bar */}
      <div className="hidden sm:flex items-center border border-gray-300 rounded-lg px-3 py-1 flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Procurar"
          className="outline-none bg-transparent text-gray-700 placeholder-gray-500 flex-grow"
        />
        <button className="ml-2 text-gray-500 hover:text-blue-600">
          <Search />
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-gray-700">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Icons */}
      <div className="hidden sm:flex items-center space-x-4 text-gray-700">
        <Heart className="hover:text-red-500 cursor-pointer" />
        <ShoppingCart className="hover:text-green-500 cursor-pointer" />
        <User className="hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
}
