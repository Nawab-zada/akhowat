'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll for smooth navigation

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink
              to="hero" // Scroll to the Hero section
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <img
                src="/logo-1.png" // Replace with your logo
                alt="Akhuwat Logo"
                className="h-12 w-auto"
              />
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink
              to="hero" // Scroll to the Hero section
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about-loan" // Scroll to the About Loan section
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="why-choose-us" // Scroll to the Why Choose Us section
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            >
              Why Choose Us
            </ScrollLink>
            <ScrollLink
              to="how-to-apply" // Scroll to the How to Apply section
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            >
              How to Apply
            </ScrollLink>
            <ScrollLink
              to="contact" // Scroll to the Contact section
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-emerald-600 focus:outline-none"
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
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <ScrollLink
                to="hero" // Scroll to the Hero section
                smooth={true}
                duration={500}
                className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="about-loan" // Scroll to the About Loan section
                smooth={true}
                duration={500}
                className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="why-choose-us" // Scroll to the Why Choose Us section
                smooth={true}
                duration={500}
                className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Why Choose Us
              </ScrollLink>
              <ScrollLink
                to="how-to-apply" // Scroll to the How to Apply section
                smooth={true}
                duration={500}
                className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                How to Apply
              </ScrollLink>
              <ScrollLink
                to="contact" // Scroll to the Contact section
                smooth={true}
                duration={500}
                className="block text-gray-800 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};  