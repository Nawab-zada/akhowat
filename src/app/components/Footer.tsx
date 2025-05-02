'use client'
'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10 mt-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing interest-free loans to help people achieve their goals. With a strong foundation in trust and community support, we strive to uplift lives and create opportunities.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Loans</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: info@akhuwat.org</p>
          <p className="text-sm">Phone: +9203081907220</p>
          <p className="text-sm">Address: Lahore, Pakistan</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Akhuwat Foundation. All rights reserved.
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-4 z-50 flex flex-col space-y-4 items-end">
        {/* WhatsApp */}
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xl gap-3">
          <button
            onClick={() => window.open('https://wa.me/+9203081907220', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transform transition-all duration-300 hover:scale-110"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-3 h-3"
              alt="WhatsApp"
            />
          </button>
          <span className="text-sm font-semibold text-gray-800">WhatsApp us</span>
        </div>

        {/* Call */}
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-xl gap-3">
          <button
            onClick={() => window.open('tel:+9203081907220', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full transform transition-all duration-300 hover:scale-110"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
              className="w-2 h-2"
              alt="Call"
            />
          </button>
          <span className="text-sm font-semibold text-gray-800">Call us now</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer





