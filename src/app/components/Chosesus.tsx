'use client'


import React from 'react';
import Image from 'next/image';

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Akhuwat?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why millions of people trust Akhuwat for their financial and social needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Interest-Free Loans */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/interestfree.png" // Replace with your image
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

          {/* Card 2: Empowering Communities */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/side1.png" // Replace with your image
                alt="Empowering Communities"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Empowering Communities</h3>
              <p className="text-gray-600">
                With <span className="text-emerald-600 font-bold">800+ branches</span> nationwide, we support small businesses, farmers, and women entrepreneurs.
              </p>
            </div>
          </div>

          {/* Card 3: Transparent Process */}
          <div className="bg-emerald-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/transparent.png" // Replace with your image
                alt="Transparent Process"
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transparent Process</h3>
              <p className="text-gray-600">
                Our process is simple, clear, and hassle-free, with no hidden charges or complicated paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};