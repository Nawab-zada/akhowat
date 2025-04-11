'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-6 mt-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mb-8 px-4 py-2 rounded-full bg-green-100 border border-green-200">
          <span className="text-sm font-semibold tracking-wide text-green-700">
            INTEREST-FREE FINANCING
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-green-600">Empower</span> Your Dreams <br className="hidden md:block" />
          <span className="text-gray-700">With Ethical Loans</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Akhuwat provides <span className="font-semibold text-green-600">zero-interest loans</span> to help 
          entrepreneurs, students, and families thrive without financial burden.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
         
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-caps-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "10M+", label: "Loans Disbursed" },
            { value: "0%", label: "Interest Rate" },
            { value: "98%", label: "Repayment Rate" },
            { value: "150+", label: "Cities Served" }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl font-bold text-green-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">TRUSTED BY THOUSANDS</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Replace with your actual client logos or icons */}
            <div className="text-gray-400 font-bold">Business Owner</div>
            <div className="text-gray-400 font-bold">Students</div>
            <div className="text-gray-400 font-bold">Families</div>
            <div className="text-gray-400 font-bold">Entrepreneurs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;