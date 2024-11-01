"use client";

import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
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

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1">
        <input
          type="text"
          placeholder="Procurar"
          className="outline-none bg-transparent text-gray-700 placeholder-gray-500 flex-grow"
        />
        <button className="ml-2 text-gray-500 hover:text-blue-600">
          <Search />
        </button>
      </div>

      <ul className="flex space-x-6 text-gray-700">
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

      <div className="flex items-center space-x-4 text-gray-700">
        <Heart className="hover:text-red-500 cursor-pointer" />
        <ShoppingCart className="hover:text-green-500 cursor-pointer" />
        <User className="hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
}
