import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png'; 

const Banner = () => {
  return (
    <section className="w-full bg-white pt-24 pb-16 md:pt-[140px] md:pb-[100px] font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] space-y-6 md:space-y-8 z-10 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#F5F3FF] px-5 py-2 rounded-full border border-[#E9D5FF]">
             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] shadow-[0_0_10px_rgba(79,57,246,0.5)] animate-pulse"></div>
             
             <span className="text-[11px] md:text-[13px] font-[800] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
               New: AI-Powered Tools Available
             </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-[800] text-[#101727] leading-[1.1] tracking-tight">
            Supercharge Your <br className="hidden md:block" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
              Digital Workflow
            </span>
          </h1>

          <p className="text-base md:text-[18px] text-[#627382] max-w-lg leading-[1.6] font-medium">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 pt-4">
            {/* Primary Button */}
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white px-8 md:px-10 py-4 rounded-full font-[800] text-[15px] md:text-[16px] shadow-2xl shadow-purple-200/50 transition-all hover:scale-[1.05] hover:brightness-110 active:scale-95">
              Explore Products
            </button>
            
            {/* Watch Demo Button */}
            <button className="group relative p-[1.5px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] transition-all active:scale-95">
              <div className="flex items-center gap-3 bg-white px-8 md:px-10 py-[14px] md:py-[16px] rounded-full group-hover:bg-purple-50/50 transition-colors">
                <img 
                  src={playIcon} 
                  alt="Play" 
                  className="w-4 h-4 md:w-5 md:h-5 object-contain" 
                />
                <span className="font-[800] text-[15px] md:text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end relative mt-8 md:mt-0">
          <div className="relative w-full max-w-[500px] md:max-w-none">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-tr from-[#4F39F6]/20 to-[#A855F7]/20 blur-[60px] md:blur-[100px] rounded-full opacity-70"></div>
            
            <img 
              src={bannerImg} 
              alt="Digital Workflow" 
              className="relative w-full h-auto object-contain rounded-[24px] md:rounded-[40px] shadow-[0_20px_50px_-12px_rgba(16,23,39,0.15)] md:shadow-[0_40px_80px_-20px_rgba(16,23,39,0.2)] transition-all duration-1000 hover:translate-y-[-10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;