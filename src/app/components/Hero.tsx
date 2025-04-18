'use client'
'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24 px-6 mt-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-6 px-5 py-2 rounded-full bg-green-100 border border-green-200 shadow-sm">
          <span className="text-sm font-medium text-green-700 tracking-wide">
            0% INTEREST • 100% IMPACT
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Interest-Free Microfinance for a Better Tomorrow
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
          Akhuwat offers <span className="font-semibold text-green-600">ethical, Islamic loans in Pakistan</span> with 
          <strong> zero interest</strong>—empowering <strong>small businesses</strong>, <strong>students</strong>, and <strong>women entrepreneurs</strong> 
          to grow, thrive, and build their future with dignity and hope.
        </p>

        {/* CTA Buttons */}
        

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {[
            { value: "10M+", label: "Loans Disbursed Nationwide" },
            { value: "0%", label: "Interest Rate (Shariah-Compliant)" },
            { value: "98%", label: "Successful Repayments" },
            { value: "150+", label: "Cities Served Across Pakistan" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 transition duration-300 hover:scale-105"
            >
              <p className="text-4xl font-bold text-green-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-500 mb-4">
            Trusted by Communities for Ethical Financial Services
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium text-sm">
            <span className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm">Micro Entrepreneurs</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm">Students in Need</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm">Low-Income Families</span>
            <span className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm">Women in Business</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

