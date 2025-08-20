'use client'

import React from 'react';

const AboutLoanSection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 mb-8 text-center text-sm font-medium">
          ⚠️ We do not provide loans. We only offer <span className="font-semibold">guidance and document verification</span> 
          for those applying to Akhuwat Foundation.
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Guidance for <span className="text-emerald-600">Akhuwat’s Interest-Free Loans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We assist applicants with <span className="text-emerald-700 font-semibold">loan documentation, eligibility checks, and verification</span>.  
            All loans are officially provided by <strong>Akhuwat Foundation</strong>.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">📌 What We Do</h3>
              <p className="text-gray-600">
                We <strong>guide applicants step by step</strong>, verify required documents,  
                and ensure that applications meet the official criteria set by Akhuwat Foundation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">🤝 Our Role</h3>
              <p className="text-gray-600">
                We make the process easier by offering <strong>clear guidance, transparency, and support</strong>.  
                Our aim is to help <strong>students, families, women, and small businesses</strong> prepare before applying.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">🌍 Why Choose Us?</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Step-by-step guidance</li>
                <li>Document preparation & verification</li>
                <li>Eligibility assistance</li>
                <li>WhatsApp support for quick help</li>
              </ul>
            </div>
          </div>

          {/* Right Visual / Image */}
          <div className="relative">
            <img
              src="news.png"
              alt="Loan Guidance Visual"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            📌 Need help with loan documentation?  
            Contact us <span className="text-emerald-700 font-semibold">only on WhatsApp</span>.
          </p>
          <button
            onClick={() => window.open('https://wa.me/+923424598393', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-6 h-6 mr-2"
              alt="WhatsApp"
            />
            Contact on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutLoanSection;

