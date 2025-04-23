
'use client'
import React from 'react';


const HeroSection = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-green-50 px-6 mt-6 relative overflow-hidden">

        {/* Top Full-Width Responsive Image */}
       

        {/* Scrolling Headline */}
        <div className="w-full bg-red-600 text-white py-2 overflow-hidden relative z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
            <div className="text-sm font-semibold whitespace-nowrap">
              Headoffice No: <span className="text-white ml-1">+9203341145751</span>
            </div>
            <div className="marquee-container overflow-hidden w-3/4 relative">
              <div className="marquee whitespace-nowrap animate-marquee text-sm font-medium text-yellow-300">
                Headoffice No: 03341145751 • Akhuwat Foundation – Empowering through Interest-Free Loans • Contact us today! • Serving 150+ cities in Pakistan • Zero Interest, 100% Impact •
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center mt-12 z-20 relative">

          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6 px-5 py-2 rounded-full bg-green-100 border border-green-200 shadow-sm mt-6">
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

        {/* Marquee Animation */}
        <style jsx>{`
          .marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroSection;




