
'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 px-6 mt-6 relative overflow-hidden">
        
        {/* Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-3 mb-4 text-center text-sm font-medium">
          ⚠️ We are not affiliated with Akhuwat Foundation. 
          We only provide <span className="font-semibold">loan guidance & document verification support</span>. 
          For official loans, please visit Akhuwat.
        </div>

        {/* Scrolling Headline */}
        <div className="w-full bg-red-600 text-white py-2 overflow-hidden relative z-10">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
            <div className="text-sm font-semibold whitespace-nowrap">
              Contact Us ONLY on WhatsApp ✅
            </div>
            <div className="marquee-container overflow-hidden w-3/4 relative">
              <div className="marquee whitespace-nowrap animate-marquee text-sm font-medium text-yellow-300">
                📌 Loan guidance & document support • No direct loans • Contact ONLY on WhatsApp • Get help preparing your documents today! •
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto text-center mt-12 z-20 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Loan Guidance & Document Support for Akhuwat Applicants
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            We help applicants with <span className="font-semibold text-green-600">eligibility, documentation, and verification</span> 
            for <strong>Akhuwat’s interest-free loan programs</strong>.  
            <span className="text-red-600 font-semibold">We do not directly provide loans.</span>
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "✔️", label: "Step-by-step Guidance" },
              { value: "✔️", label: "Document Verification" },
              { value: "✔️", label: "Eligibility Support" },
              { value: "✔️", label: "WhatsApp Assistance" }
            ].map((stat, index) => (
              <div key={index} className="p-4 transition duration-300 hover:scale-105">
                <p className="text-3xl font-bold text-green-600 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp Reminder */}
          <div className="mt-10">
            <p className="text-base font-semibold text-red-600">
              📌 Contact us ONLY on WhatsApp for guidance. Loans are provided by Akhuwat Foundation.
            </p>
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          .marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
    </section>
  );
};

export default HeroSection;




