'use client'
import React from 'react';
import Image from 'next/image';

export const AboutLoanSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Akhuwat Loan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akhuwat offers interest-free loans to empower individuals and communities. Whether you need funds for a small business, education, or community development, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Interest-Free Loans */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/withoutriba.png" // Replace with your image
                alt="Interest-Free Loans"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interest-Free Loans</h3>
              <p className="text-gray-600">
                Our loans are completely interest-free, ensuring you stay debt-free and financially empowered.
              </p>
            </div>
          </div>

          {/* Card 2: Ethical Financing */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/ethical.png" // Replace with your image
                alt="Ethical Financing"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ethical Financing</h3>
              <p className="text-gray-600">
                We follow Islamic principles, providing ethical and Sharia-compliant financial solutions.
              </p>
            </div>
          </div>

          {/* Card 3: Community Support */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/community.png" // Replace with your image
                alt="Community Support"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Support</h3>
              <p className="text-gray-600">
                We believe in uplifting communities by supporting small businesses, farmers, and women entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};