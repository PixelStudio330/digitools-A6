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
    <section className="w-full py-24 bg-[#F9FAFC] relative overflow-hidden">
      
      
      <div className="max-w-[1400px] mx-auto px-[40px] lg:px-[100px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-[52px] font-[800] text-[#101727] tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] text-[18px] max-w-2xl mx-auto font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white p-12 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500 group text-center"
            >
              {/* Gradient Badge */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-white text-[12px] font-bold">{step.id}</span>
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-[#F5F3FF] flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-12 h-12 object-contain group-hover:rotate-6 transition-transform duration-500" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-[800] text-[#101727] mb-4">
                {step.title}
              </h3>
              <p className="text-[#627382] text-[16px] leading-relaxed font-medium">
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