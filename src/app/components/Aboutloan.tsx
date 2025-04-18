'use client'
import React from 'react';

const AboutLoanSection = () => {
  return (
    <section className="py-20 bg-white font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Empower Your Future with <span className="text-emerald-600">Akhuwat’s Interest-Free Loans</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ethical, Shariah-compliant, and completely <span className="text-emerald-700 font-semibold">interest-free financing</span> to support your dreams in business, education, and family development.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">📌 What We Offer</h3>
              <p className="text-gray-600">
                Akhuwat provides loans ranging from <strong>PKR 100,000 to PKR 3,000,000</strong> without any interest. Whether you're a student, an entrepreneur, or supporting a family, our <strong>Islamic financing model</strong> ensures dignity, transparency, and accessibility for all.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">🤝 Our Mission</h3>
              <p className="text-gray-600">
                We aim to create a financially inclusive society by enabling <strong>women empowerment, small businesses, and rural development</strong> through trust-based microfinance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">🌍 Why Choose Us?</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>100% interest-free (Riba-free) loans</li>
                <li>Shariah-compliant financial model</li>
                <li>Proven 98% repayment success</li>
                <li>Serving 150+ cities and communities</li>
              </ul>
            </div>
          </div>

          {/* Right Visual / Image */}
          <div className="relative">
            <img
              src="news.png"
              alt="Ethical Loans Visual"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">Need guidance or ready to apply?</p>
          <button
            onClick={() => window.open('https://wa.me/+923424598393', '_blank')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
              className="w-6 h-6 mr-2"
              alt="WhatsApp"
            />
            Apply Now via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutLoanSection;
