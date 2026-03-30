import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png'; 

const Banner = () => {
  return (
    // Replaced fixed px-200 with max-w container logic for better responsiveness
    <section className="w-full bg-white pt-[140px] pb-[100px] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-[55%] space-y-8 z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#F5F3FF] px-5 py-2 rounded-full border border-[#E9D5FF]">
             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] shadow-[0_0_10px_rgba(79,57,246,0.5)] animate-pulse"></div>
             
             <span className="text-[13px] font-[800] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
               New: AI-Powered Tools Available
             </span>
          </div>

          {/* Main Heading - Manrope looks stunning at these weights */}
          <h1 className="text-5xl md:text-[72px] font-[800] text-[#101727] leading-[1.1] tracking-tight">
            Supercharge Your <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
              Digital Workflow
            </span>
          </h1>

          <p className="text-[18px] text-[#627382] max-w-lg leading-[1.6] font-medium">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            {/* Primary Button */}
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white px-10 py-4.5 rounded-full font-[800] text-[16px] shadow-2xl shadow-purple-200/50 transition-all hover:scale-[1.02] hover:brightness-110 active:scale-95">
              Explore Products
            </button>
            
            {/* Watch Demo Button */}
            <button className="group relative p-[1.5px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] transition-all active:scale-95 shadow-lg shadow-transparent hover:shadow-purple-100">
              <div className="flex items-center gap-3 bg-white px-10 py-[16px] rounded-full group-hover:bg-purple-50/50 transition-colors">
                <img 
                  src={playIcon} 
                  alt="Play" 
                  className="w-5 h-5 object-contain" 
                />
                <span className="font-[800] text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-[45%] flex justify-end relative">
          <div className="relative w-full">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#4F39F6]/20 to-[#A855F7]/20 blur-[100px] rounded-full opacity-70"></div>
            
            <img 
              src={bannerImg} 
              alt="Digital Workflow" 
              className="relative w-full max-w-[620px] ml-auto object-contain rounded-[40px] shadow-[0_40px_80px_-20px_rgba(16,23,39,0.2)] transition-all duration-1000 hover:translate-y-[-10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;