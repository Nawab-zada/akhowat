'use client'

import React from 'react';

export const HowToApplySection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How to Apply for a Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to apply for an Akhuwat Loan and take a step towards financial empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1: Choose Loan Category */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">1</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Loan Category</h3>
            <p className="text-gray-600">
              Select the loan category that best fits your needs, whether it’s for a small business, education, or community development.
            </p>
          </div>

          {/* Step 2: Check Eligibility */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">2</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Check Eligibility</h3>
            <p className="text-gray-600">
              Ensure you meet all eligibility criteria for the chosen loan category to streamline the application process.
            </p>
          </div>

          {/* Step 3: Submit Application */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">3</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Submit Application</h3>
            <p className="text-gray-600">
              Pay the Online Application Fee of Rs. 5,725/- and submit your application for review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};