'use client'

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-emerald-50  text-white mt-4 font-serif">
      {/* Fixed Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/+923341145751', '_blank')}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
            className="w-6 h-6"
            alt="WhatsApp"
          />
        </button>

        {/* Call Button */}
        <button
          onClick={() => window.open('tel:+923341145751', '_blank')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
            className="w-6 h-6"
            alt="Call"
          />
        </button>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Akhuwat Loan */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">About Akhuwat Loan</h3>
            <p className=" text-black">
              Akhuwat offers interest-free loans to empower individuals and communities. Whether you need funds for a small business, education, or community development, we are here to help.
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-8 text-black">
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-black hover:text-emerald-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-emerald-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/apply-now" className="text-black hover:text-emerald-400 transition-colors duration-300">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-emerald-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 text-black">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-black">
                <span className="font-semibold">Phone:</span> +92342-459-839-3
              </li>
              <li className="text-black">
                <span className="font-semibold">Email:</span> info@akhuwat.org
              </li>
              <li className="text-black">
                <span className="font-semibold text-black">Address:</span> 123 Akhuwat Street, Lahore, Pakistan
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/akhuwat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
                  className="w-6 h-6"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/akhuwat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384049.png"
                  className="w-6 h-6"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://instagram.com/akhuwat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  className="w-6 h-6"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-emerald-800 pt-8 mt-8 text-center">
          <p className="text-black">
            © {new Date().getFullYear()} Akhuwat Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};