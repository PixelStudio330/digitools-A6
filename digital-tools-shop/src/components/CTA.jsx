import React from 'react';

const CTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] py-24 text-center text-white">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-[56px] font-[800] tracking-tight leading-[1.1]">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subtext */}
        <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button className="bg-white text-[#4F39F6] px-10 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl">
            Explore Products
          </button>
          
          <button className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-8 opacity-60 text-sm font-semibold tracking-wider uppercase">
          14-day free trial • No credit card required • Cancel anytime
        </div>
        
      </div>
    </section>
  );
};

export default CTA;