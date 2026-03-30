import React from 'react';
import { Check } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Perfect for getting started',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      buttonText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '29',
      description: 'Best for professionals',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      buttonText: 'Start Pro Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      description: 'For teams and businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
    <section className="w-full pt-32 pb-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-[52px] font-[800] text-[#101727] tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#627382] text-[18px] max-w-2xl mx-auto font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-[32px] border transition-all duration-500 flex flex-col w-full ${
                plan.isPopular 
                ? 'bg-gradient-to-r from-[#4F39F6] to-[#A855F7] border-transparent shadow-2xl shadow-purple-200 text-white z-10' 
                : 'bg-[#F9FAFB] border-gray-200 text-[#101727]'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] px-5 py-1.5 rounded-full text-[12px] font-bold shadow-sm z-30 uppercase tracking-wider border border-[#BB4D00]/10">
                  Most Popular
                </div>
              )}

              <div className="mb-8 relative z-10">
                <h3 className={`text-2xl font-extrabold mb-2 ${plan.isPopular ? 'text-white' : 'text-[#101727]'}`}>
                  {plan.name}
                </h3>
                <p className={`${plan.isPopular ? 'text-white/80' : 'text-[#627382]'} font-medium text-base leading-relaxed`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline relative z-10">
                <span className="text-6xl font-[900] tracking-tighter">${plan.price}</span>
                <span className={`ml-2 text-lg font-semibold ${plan.isPopular ? 'text-white/70' : 'text-[#627382]'}`}>
                  /Month
                </span>
              </div>

              {/* Feature List */}
              <div className="space-y-4 mb-10 flex-grow relative z-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-white/20' : 'bg-[#4F39F6]/10'}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.isPopular ? 'text-white' : 'text-[#4F39F6]'}`} />
                    </div>
                    <span className={`font-semibold text-[15px] ${plan.isPopular ? 'text-white' : 'text-[#334155]'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-4.5 rounded-2xl font-bold text-base transition-all duration-300 relative z-10 ${
                plan.isPopular 
                ? 'bg-white hover:scale-[1.02] shadow-xl shadow-black/10' 
                : 'bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white hover:opacity-90 hover:shadow-lg hover:shadow-purple-200'
              }`}>
                <span className={plan.isPopular ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4F39F6] to-[#A855F7]" : ""}>
                  {plan.buttonText}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;