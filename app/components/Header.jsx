// app/components/Header.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import logo from "../../public/logo.png";

export default function Header({ }) {

  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userLoggedIn, setuserLoggedIn] = useState(false);

  const navItems = [
    { name: 'ScamRX DEMO', href: '/' },
    { name: 'URL Check', href: '/url-check' },
    { name: 'Breach Check', href: '/breach-check' },
    { name: 'Plan & Pricing', href: '/pricing' },
    { name: 'Education', href: '/faq' },
  ];


  return (
    <header className="fixed w-full inset-0 z-50 h-fit">
      {/* Main Navigation Bar - Desktop */}
      <div className="hidden md:flex flex-row items-center gap-[103px] h-fit py-5 pbg w-full">


        {/* Desktop Navigation Links */}
        <nav className="flex-1 flex items-center justify-between container mx-auto">

          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Image src={logo} alt="Logo" width={100} height={100} className="w-auto h-auto" />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-10 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-blue-200 font-medium text-lg whitespace-nowrap ${pathName == item.href ? "text-[#60A5FA]" : 'text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center gap-6">
            {!userLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-blue-200 font-medium text-lg"
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-lg transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-blue-800 container mx-auto">
        {/* Mobile Header Top Bar */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl">
              <h2 className="font-bold text-3xl text-white ">Scam<span className="text-blue-400">RX</span></h2>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {!userLoggedIn && (
              <Link
                href="/signup"
                className="bg-white text-blue-800 hover:bg-gray-100 px-4 py-1.5 rounded-lg font-semibold text-sm transition-colors duration-200"
              >
                Get Started
              </Link>
            )}

            <button
              className="text-white p-0 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-blue-900 border-t border-blue-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:bg-blue-700 font-medium py-3 px-6 border-b border-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {!userLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="block text-white hover:bg-blue-700 font-medium py-3 px-6 border-b border-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/login"
                  className="block bg-white text-blue-800 font-medium py-3 px-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Free
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard"
                className="block bg-white text-blue-800 font-medium py-3 px-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}