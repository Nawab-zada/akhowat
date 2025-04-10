'use client'
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.png"
          alt="Community support meeting"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          className="brightness-75"
        />
        {/* Gradient Overlay (more modern than plain dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Empower Growth
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-300">
          Interest-Free Microfinance Loans
        </h2>
        <div className="bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-8">
          <p className="text-lg md:text-xl font-medium">Akhuwat Office</p>
        </div>
        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Get financial support without interest! Akhuwat provides zero-cost loans to empower businesses, students, and communities.
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;