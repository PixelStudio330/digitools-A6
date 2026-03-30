const Stats = () => {
  const statItems = [
    { label: "Active Users", value: "50K+" },
    { label: "Premium Tools", value: "200+" },
    { label: "Rating", value: "4.9" },
  ];

  return (
    <section className="w-full mt-24 mb-16 font-sans">
      <div className="w-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] py-20">
        
        <div className="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-0">
          {statItems.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center w-full ${
                index !== statItems.length - 1 ? "md:border-r border-white/20" : ""
              }`}
            >
              <h2 className="text-white text-4xl md:text-[56px] font-[800] tracking-tight mb-2">
                {stat.value}
              </h2>
              <p className="text-white/80 text-[18px] font-medium tracking-wide">
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