'use client'
import React, { useState } from 'react';
import Link from 'next/link'; // If using Next.js, otherwise use react-router-dom or similar

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-emerald-900/90 backdrop-blur-md border-b border-emerald-800/50 fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo-1.png" // Replace with your logo
                alt="Akhowat Logo"
                className="h-13 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-200 hover:text-emerald-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-emerald-400 transition-colors duration-300">
              About
            </Link>
            <Link href="/apply-now" className="text-gray-200 hover:text-emerald-400 transition-colors duration-300">
              Apply Now
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-emerald-400 transition-colors duration-300">
              Contact
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-emerald-400 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-emerald-900/95 backdrop-blur-md border-t border-emerald-800/50">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link href="/" className="block text-gray-200 hover:text-emerald-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="block text-gray-200 hover:text-emerald-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/apply-now" className="block text-gray-200 hover:text-emerald-400 transition-colors duration-300">
                Apply Now
              </Link>
              <Link href="/contact" className="block text-gray-200 hover:text-emerald-400 transition-colors duration-300">
                Contact
              </Link>
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};