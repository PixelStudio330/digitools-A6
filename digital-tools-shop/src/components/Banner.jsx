import bannerImg from '../assets/banner.png';
import playIcon from '../assets/Play.png'; 

const Banner = () => {
  return (
    <section className="w-full bg-white pt-[120px] pb-[60px] px-[200px] font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] max-w-[1400px] mx-auto">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-7 pl-[40px]">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5F3FF] px-4 py-1.5 rounded-full border border-[#E9D5FF]">
             {/* Gradient Bullet Point */}
             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] shadow-[0_0_8px_rgba(79,57,246,0.4)]"></div>
             
             {/* Gradient Text*/}
             <span className="text-[12px] font-[800] uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
               New: AI-Powered Tools Available
             </span>
          </div>

          <h1 className="text-4xl md:text-[68px] font-[800] text-[#101727] leading-[1.05] tracking-tight">
            Supercharge Your <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
              Digital Workflow
            </span>
          </h1>

          <p className="text-[16px] text-[#627382] max-w-lg leading-relaxed font-medium">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary Button */}
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-white px-9 py-4 rounded-full font-bold text-[15px] shadow-xl shadow-purple-200 transition-all hover:opacity-90 active:scale-95">
              Explore Products
            </button>
            
            {/* Watch Demo Button */}
            <button className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] transition-all active:scale-95">
              <div className="flex items-center gap-2 bg-white px-9 py-[14px] rounded-full group-hover:bg-purple-50 transition-colors">
                <img 
                  src={playIcon} 
                  alt="Play" 
                  className="w-5 h-5 object-contain" 
                />
                <span className="font-bold text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
                  Watch Demo
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 flex justify-start ml-[-80px]">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#4F39F6]/10 to-[#A855F7]/10 blur-3xl rounded-full"></div>
            <img 
              src={bannerImg} 
              alt="Digital Workflow" 
              className="relative w-full max-w-[560px] object-contain rounded-3xl shadow-[0_32px_64px_-15px_rgba(16,23,39,0.15)] transition-transform hover:scale-[1.01] duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;