import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      {/* FIXED: Removed px-[200px]. 
         Used px-6 (mobile) and lg:px-12 (desktop) for perfect symmetry.
      */}
      <div className="max-w-[1400px] mx-auto py-5 px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#101727] focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          <a className="text-[24px] md:text-[28px] font-[800] tracking-[-0.02em] cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#A855F7]">
              DigiTools
            </span>
          </a>
        </div>

        {/* Desktop Nav Links */}
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
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-7">
             <div className="relative cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] text-[#101727] group-hover:text-[#4F39F6] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#A855F7] text-[10px] font-bold text-white ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
             </div>

             <a className="hidden sm:block text-[#101727] font-bold text-[15px] cursor-pointer hover:text-[#4F39F6] transition-colors">
                Login
             </a>
          </div>
          
          <button className="hidden xs:block bg-gradient-to-r from-[#4F39F6] to-[#A855F7] hover:opacity-90 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-[14px] font-bold text-[14px] md:text-[15px] shadow-lg shadow-purple-100 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col p-6 gap-5 text-[#627382] font-semibold text-[16px] bg-white">
          <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer block">Products</a></li>
          <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer block">Features</a></li>
          <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer block">Pricing</a></li>
          <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer block">Testimonials</a></li>
          <li><a className="hover:text-[#4F39F6] transition-colors cursor-pointer block">FAQ</a></li>
          <li className="pt-2 sm:hidden"><a className="text-[#101727] font-bold cursor-pointer">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;