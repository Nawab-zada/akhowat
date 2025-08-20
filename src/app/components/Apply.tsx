
'use client'

import React from 'react';

export const HowToApplySection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 mb-8 text-center text-sm font-medium">
          ⚠️ We do not provide loans. We only offer <span className="font-semibold">guidance and document verification</span> 
          for individuals applying to <strong>Akhuwat Foundation</strong>.
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How to Apply for an Akhuwat Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide <span className="font-semibold text-emerald-600">step-by-step guidance</span> 
            to help you understand Akhuwat Foundation’s official loan application process.
          </p>
        </div>

        {/* Steps Layout */}
        <div className="relative border-l-4 border-emerald-500 pl-8 space-y-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1. Choose the Loan Category</h3>
            <p className="text-gray-600">
              Akhuwat Foundation offers <span className="text-emerald-600">interest-free microfinance</span> 
              for purposes such as <strong>small business startups, education, agriculture,</strong> and <strong>community development</strong>.  
              We guide you in selecting the most suitable category.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">2. Review Eligibility Criteria</h3>
            <p className="text-gray-600">
              Ensure you meet Akhuwat’s <strong>eligibility requirements</strong>.  
              Priority is given to <span className="text-emerald-600">low-income families, women entrepreneurs,</span> 
              and rural communities. We can assist by reviewing and verifying your documents.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-emerald-500"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">3. Submit the Application</h3>
            <p className="text-gray-600">
              Applications must be submitted through <strong>Akhuwat Foundation’s official offices or centers</strong>.  
              Any processing charges or requirements are defined by Akhuwat directly.  
              We help ensure your application is <span className="text-emerald-600">accurate and complete</span> before submission.
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            📌 Need guidance with loan documents or eligibility?  
            Contact us <span className="text-emerald-700 font-semibold">only on WhatsApp</span>.
          </p>
          <button
            onClick={() => window.open('https://wa.me/+9203471964566', '_blank')}
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

