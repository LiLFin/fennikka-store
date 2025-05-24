// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; //add active page highlighting section


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // add active page highlighting section

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-blue-700">
        Fennikka
      </Link>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
          ☰
        </button>
      </div>
      <ul className={`md:flex md:items-center gap-6 ${menuOpen ? 'block' : 'hidden'} md:block`}>
            <li>
                <Link
                    href="/"
                    className={`px-4 py-2 rounded-full transition font-medium ${
                        pathname === '/' 
                            ? 'bg-blue-100 text-blue-800 font-semibold' 
                            : 'text-gray-700'
                    }`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/products"
                    className={`px-4 py-2 rounded-full transition font-medium ${
                        pathname === '/products' 
                            ? 'bg-blue-100 text-blue-800 font-semibold' 
                            : 'text-gray-700'
                    }`}
                >
                    Products
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={`px-4 py-2 rounded-full transition font-medium ${
                        pathname === '/about' 
                            ? 'bg-blue-100 text-blue-800 font-semibold' 
                            : 'text-gray-700'
                    }`}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    href="/contact"
                    className={`px-4 py-2 rounded-full transition font-medium ${
                        pathname === '/contact' 
                            ? 'bg-blue-100 text-blue-800 font-semibold' 
                            : 'text-gray-700'
                    }`}
                >
                    Contact
                </Link>
            </li>
         </ul>
    </nav>
  );
}
