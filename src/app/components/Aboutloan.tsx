'use client'
import React from 'react';

export const AboutLoanSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Akhuwat Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akhuwat offers interest-free loans from 1 lakh to 30 lakh to empower individuals and communities. Whether you need funds for a small business, education, or community development, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Interest-Free Loans */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">﷽</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Interest-Free Loans</h3>
            <p className="text-gray-600">
              Our loans are completely interest-free, ensuring you stay debt-free and financially empowered.
            </p>
          </div>

          {/* Card 2: Ethical Financing */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ethical Financing</h3>
            <p className="text-gray-600">
              We follow Islamic principles, providing ethical and Sharia-compliant financial solutions.
            </p>
          </div>

          {/* Card 3: Community Support */}
          <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-200 transition-all duration-300">
            <div className="text-emerald-600 text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Support</h3>
            <p className="text-gray-600">
              We believe in uplifting communities by supporting small businesses, farmers, and women entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};