'use client'


import React from 'react';

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Why Choose Akhuwat?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover why millions of people trust Akhuwat for their financial and social needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Interest-Free Loans */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-100">
            <div className="text-emerald-400 text-4xl mb-4">💸</div>
            <h3 className="text-2xl font-bold text-white mb-4">Interest-Free Loans</h3>
            <p className="text-gray-300">
              We have disbursed <span className="text-emerald-400 font-bold">239 billion PKR</span> in interest-free micro-loans, empowering individuals and businesses across Pakistan.
            </p>
          </div>

          {/* Card 2: Empowering Communities */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-200">
            <div className="text-emerald-400 text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-4">Empowering Communities</h3>
            <p className="text-gray-300">
              With <span className="text-emerald-400 font-bold">800+ branches</span> nationwide, we support small businesses, farmers, and women entrepreneurs, uplifting communities across the country.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in delay-300">
          <button
            onClick={() => window.open('https://wa.me/923001234567', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-6 h-6 mr-2"
              alt="WhatsApp"
            />
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};