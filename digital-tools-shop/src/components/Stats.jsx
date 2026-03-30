const Stats = () => {
  const statItems = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    // bg-[#FAFAFB] matches your ProductList section exactly
    <section className="w-full bg-white py-20 font-sans">
      {/* Increased py-32 for a much longer top and bottom feel */}
      <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] py-32 shadow-xl shadow-purple-500/10">
        
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-around gap-12 md:gap-0">
          {statItems.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center w-full ${
                index !== statItems.length - 1 ? "md:border-r border-white/25" : ""
              }`}
            >
              <h2 className="text-white text-5xl md:text-[64px] font-[800] tracking-tight mb-3">
                {stat.value}
              </h2>
              <p className="text-white/90 text-[18px] md:text-[20px] font-semibold tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;