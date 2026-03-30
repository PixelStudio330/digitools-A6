import React from 'react';
import userIcon from '../assets/user.png';
import boxIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const Steps = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: userIcon,
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: boxIcon, 
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: rocketIcon,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#F9FAFC] relative overflow-hidden">
      
      {/* THE FIX: 
         1. Ensure w-full is present.
         2. Use px-6 (Mobile) and md:px-12 (Desktop) for PERFECT symmetry.
         3. Keep mx-auto to ensure the max-width block stays dead-center.
      */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-[800] text-[#101727] tracking-tight leading-tight mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] text-base md:text-lg max-w-2xl mx-auto font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-stretch">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500 group flex flex-col items-center text-center h-full"
            >
              {/* Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-white text-[12px] font-bold">{step.id}</span>
              </div>

              {/* Icon Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F5F3FF] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:rotate-6 transition-transform duration-500" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-[800] text-[#101727] mb-4">
                {step.title}
              </h3>
              <p className="text-[#627382] text-sm md:text-base leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;