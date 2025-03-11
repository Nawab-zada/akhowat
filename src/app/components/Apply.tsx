'use client'

import React from 'react';

export const HowToApplySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            How to Apply for a Loan
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to apply for an Akhuwat Loan and take a step towards financial empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1: Choose Loan Category */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-100">
            <div className="text-emerald-400 text-4xl mb-4">1</div>
            <h3 className="text-2xl font-bold text-white mb-4">Choose Loan Category</h3>
            <p className="text-gray-300">
              Select the loan category that best fits your needs, whether it’s for a small business, education, or community development.
            </p>
          </div>

          {/* Step 2: Check Eligibility */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-200">
            <div className="text-emerald-400 text-4xl mb-4">2</div>
            <h3 className="text-2xl font-bold text-white mb-4">Check Eligibility</h3>
            <p className="text-gray-300">
              Ensure you meet all eligibility criteria for the chosen loan category to streamline the application process.
            </p>
          </div>

          {/* Step 3: Submit Application */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-300">
            <div className="text-emerald-400 text-4xl mb-4">3</div>
            <h3 className="text-2xl font-bold text-white mb-4">Submit Application</h3>
            <p className="text-gray-300">
              Pay the Online Application Fee of Rs. 5,725/- and submit your application for review.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in delay-500">
          <button
            onClick={() => window.open('https://wa.me/923001234567', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-6 h-6 mr-2"
              alt="WhatsApp"
            />
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};