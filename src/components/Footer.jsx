import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark pt-20 pb-10 px-6 border-t border-accent/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white border border-white/10 rounded-xl p-1 flex items-center justify-center shrink-0 relative overflow-hidden">
                <img 
                  src="/AP-logo-transperent.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain relative z-10" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }} 
                />
                <div className="absolute inset-0 hidden items-center justify-center text-accent font-black text-lg">AP</div>
              </div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
                AAYURVI <span className="text-accent">PROJECTS</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building Tracks. Connecting Futures. Pune's leading civil engineering and railway contracting firm.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 px-1">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(' ', '-')}
                    smooth={true}
                    offset={-80}
                    className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 px-1">Services</h4>
            <ul className="space-y-4">
              {['Specialized Construction', 'Civil Engineering', 'Infrastructure Dev', 'Project Management'].map((item) => (
                <li key={item}>
                  <Link to="services" smooth={true} offset={-80} className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 px-1">Contact</h4>
            <address className="not-italic space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                Vadgaon Budruk, Pune 411051
              </p>
              <p className="text-gray-300 text-sm font-bold truncate">
                aayurviprojectsllp@gmail.com
              </p>
              <p className="text-white text-xs font-black uppercase tracking-widest mt-4">
                GSTIN: 27ACCFA8013B1ZZ
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Aayurvi Projects LLP. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500">
            <span>Powered by Excellence</span>
            <span className="text-accent">|</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
