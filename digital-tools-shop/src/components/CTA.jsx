import React from 'react';

const CTA = () => {
  return(
    <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] py-20 md:py-32 text-center text-white relative overflow-hidden">
      
      {/* Decorative background flare */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-[800] tracking-tight leading-[1.15] md:leading-[1.1]">
          Ready To Transform <br className="hidden md:block" /> Your Workflow?
        </h2>
        
        {/* Subtext */}
        <p className="text-white/90 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-2">
          Join thousands of professionals who are already using Digitools to work smarter. 
          Start your free trial today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
          <button className="w-full sm:w-auto bg-white text-[#4F39F6] px-10 py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)] active:scale-95">
            Explore Products
          </button>
          
          <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 active:scale-95">
            View Pricing
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-6 md:pt-10 opacity-70 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase px-4">
          14-day free trial • No credit card required • Cancel anytime
        </div>
        
      </div>
    </section>
  );
};

export default CTA;