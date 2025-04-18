'use client'

import React from 'react';

export const HowToApplySection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple Steps to Apply for an Akhuwat Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your journey toward <span className="font-semibold text-emerald-600">financial empowerment</span> with our hassle-free and Shariah-compliant application process.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="relative border-l-4 border-emerald-500 pl-8 space-y-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1. Choose Your Loan Category</h3>
            <p className="text-gray-600">
              Select the most suitable loan type — whether it's for a <strong>small business startup</strong>, <strong>education</strong>, agriculture, or <strong>community development</strong>. We offer <span className="text-emerald-600">interest-free microfinance</span> for individuals and families.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2. Check Your Eligibility</h3>
            <p className="text-gray-600">
              Make sure you meet our <strong>eligibility criteria</strong> for the loan category you choose. We support <span className="text-emerald-600">low-income households, women entrepreneurs</span>, and rural communities with dignity and trust.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">3. Submit Your Application</h3>
            <p className="text-gray-600">
              Complete your online application and pay the processing fee of <strong>Rs. 5,725/-</strong>. Our team will review your request and get back to you for the next steps. Rest assured, our process is 100% <span className="text-emerald-600">transparent and interest-free</span>.
            </p>
          </div>
        </div>

        {/* Optional WhatsApp Button CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">Need help with the application?</p>
          <button
            onClick={() => window.open('https://wa.me/+923424598393', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-6 h-6 mr-2"
              alt="WhatsApp"
            />
            Contact Us via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
