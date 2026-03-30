import React from 'react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact']
  };

  return (
    <footer className="w-full bg-[#101727] text-white pt-24 pb-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-[40px] font-[800] tracking-tight leading-none">DigiTools</h2>
            <p className="text-[#94A3B8] text-[18px] leading-relaxed max-w-[320px] font-medium">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 space-y-8">
              <h4 className="text-[20px] font-[700] text-white">{title}</h4>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[#94A3B8] hover:text-white transition-all duration-300 text-[17px] font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[20px] font-[700] text-white">Social Links</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#E2E8F0] transition-all duration-300">
                <svg className="w-6 h-6 text-[#101727]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#E2E8F0] transition-all duration-300">
                <svg className="w-6 h-6 text-[#101727]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#E2E8F0] transition-all duration-300">
                <svg className="w-[22px] h-[22px] text-[#101727]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#64748B] text-[15px] font-medium">
            © 2026 Digitools. All rights reserved.
          </p>
          
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((policy) => (
              <a key={policy} href="#" className="text-[#64748B] hover:text-white text-[15px] font-medium transition-colors duration-300">
                {policy}
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;