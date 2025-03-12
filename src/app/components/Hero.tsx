'use client'
import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/side1.png',
      title: 'Empowering Communities',
      description: 'Interest-free loans to uplift individuals and businesses.',
    },
    {
      id: 2,
      image: '/sider1.png',
      title: 'Education for All',
      description: 'Supporting students with ethical financial solutions.',
    },
    {
      id: 3,
      image: '/side2.png',
      title: 'Small Business Growth',
      description: 'Helping entrepreneurs achieve their dreams.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl mb-8">{slides[currentSlide].description}</p>
        <button
          onClick={() => window.open('https://wa.me/923001234567', '_blank')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 hover:scale-105"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
            className="w-6 h-6 mr-2"
            alt="WhatsApp"
          />
          Apply Now
        </button>
      </div>
    </section>
  );
};