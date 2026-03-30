const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-5 px-[200px] font-sans">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        
        {/* Logo */}
        <a className="text-[28px] font-[800] tracking-[-0.02em] cursor-pointer flex items-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
            DigiTools
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center ml-12">
          <ul className="flex items-center gap-10 text-[#627382] font-semibold text-[15px]">
            <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer">Products</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer">Features</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer">Pricing</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer">Testimonials</a></li>
            <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer">FAQ</a></li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-7">
             <div className="relative cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-[#101727] group-hover:text-[#4F39F6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-[9px] font-bold text-white ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
             </div>

             <a className="hidden sm:block text-[#101727] font-bold text-[15px] cursor-pointer hover:text-[#4F39F6] transition-colors">
                Login
             </a>
          </div>
          
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#A855F7] hover:opacity-90 text-white px-8 py-3 rounded-[14px] font-bold text-[15px] shadow-lg shadow-purple-100 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;