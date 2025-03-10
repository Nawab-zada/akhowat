'use client'
import React from 'react';

export const AboutLoanSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Akhuwat Foundation Loan 2025
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A groundbreaking initiative aimed at fostering economic and social development in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Interest-Free Loans */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-100">
            <div className="text-emerald-400 text-4xl mb-4">﷽</div>
            <h3 className="text-2xl font-bold text-white mb-4">Interest-Free Loans</h3>
            <p className="text-gray-300">
              As one of the few microfinance programs offering completely interest-free loans, Akhuwat empowers individuals without the burden of high-interest rates.
            </p>
          </div>

          {/* Card 2: Empowering Communities */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-200">
            <div className="text-emerald-400 text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-4">Empowering Communities</h3>
            <p className="text-gray-300">
              Designed to support small business owners, craftsmen, farmers, and women entrepreneurs, this program helps people achieve their goals and improve their livelihoods.
            </p>
          </div>

          {/* Card 3: Trust & Social Responsibility */}
          <div className="bg-emerald-900/30 backdrop-blur-md rounded-xl p-8 border border-emerald-800/50 hover:border-emerald-400 transition-all duration-300 animate-fade-in delay-300">
            <div className="text-emerald-400 text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-white mb-4">Trust & Social Responsibility</h3>
            <p className="text-gray-300">
              Unlike conventional loan systems, Akhuwat operates on principles of trust, community engagement, and social responsibility, ensuring sustainable financial empowerment.
            </p>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in delay-400">
          <p className="text-gray-300 text-lg">
            The Akhuwat Foundation Loan 2025 program is a transformative initiative that combines ethical finance with community development. By offering interest-free loans, Akhuwat enables individuals to break free from the cycle of debt and build a brighter future for themselves and their families.
          </p>
          <p className="text-gray-300 text-lg mt-4">
            For more details and assistance, you can contact the Akhuwat Head Office WhatsApp Number to learn how to benefit from this life-changing program.
          </p>
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
            Contact Us for More Details
          </button>
        </div>
      </div>
    </section>
  );
};