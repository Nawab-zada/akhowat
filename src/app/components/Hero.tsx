'use client'
import React from 'react';

export const Hero = () => {
  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923001234567', '_blank'); // Replace with actual WhatsApp number
  };

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pattern-move bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dynamic-style.png')]"></div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 space-y-6 text-center md:text-left">
          <div className="animate-fade-in-down inline-flex items-center bg-emerald-800/30 px-4 py-2 rounded-full mb-6">
            <span className="text-emerald-400 mr-2 text-xl">﷽</span>
            <span className="text-white text-sm mt-4">Sharia-Compliant Financing</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-in-right">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Get loan
            </span><br />
            upto 30 lakh
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in delay-300">
            Ethical financial solutions crafted by akhowat, preserving Islamic values while supporting your ambitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in delay-500">
            <button
              className="bg-emerald-600 hover:bg-emerald-700 transform transition-all duration-300 hover:scale-105 text-white px-8 py-4 rounded-lg flex items-center"
              onClick={handleWhatsAppClick}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3536/3536445.png"
                className="w-6 h-6 mr-2"
                alt="WhatsApp"
              />
              Contact Us on WhatsApp
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in delay-700">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6393/6393392.png"
                className="w-6 h-6 mr-2"
                alt="Certified Halal"
              />
              <span className="text-sm text-emerald-200">Certified by IFSC</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center animate-float">
          <div className="relative max-w-lg group">
            {/* Main Image */}
            <img
              src="/riba.png"
              alt="Muslimah entrepreneur team"
              className="rounded-xl shadow-2xl border-4 border-emerald-900/50 transform group-hover:rotate-0 transition-all duration-500 -rotate-3 z-10 relative"
            />

            {/* Floating Secondary Image */}
            <img
              src="News.png"
              alt="Muslimah working"
              className="absolute -bottom-8 -right-8 w-32 h-32 rounded-lg border-2 border-emerald-900/50 shadow-lg animate-float-delayed"
            />
          </div>
        </div>
      </div>

      {/* Quran Verse */}
      <div className="absolute bottom-0 left-0 right-0 text-center text-gray-300 text-sm animate-fade-in-up">
        <q className="font-arabic text-xl">يَمْحَقُ ٱللَّهُ ٱلرِّبَوٰا۟ وَيُرْبِى ٱلصَّدَقَـٰتِ</q>
        <p className="mt-2">- سورة البقرة (٢:٢٧٦)</p>
      </div>

      {/* Floating WhatsApp Button */}
      
     

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes pattern-move {
          0% { background-position: 0 0; }
          100% { background-position: 100px 120px; }
        }

        @keyframes slide-in-right {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-pattern-move {
          animation: pattern-move 30s linear infinite;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 5s ease-in-out infinite 1s;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in 1s ease-out forwards;
        }

        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </div>
  );
};