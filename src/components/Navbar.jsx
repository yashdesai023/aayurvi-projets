import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Projects', target: 'projects' },
    { name: 'Why Us', target: 'why-us' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 border-b ${
        scrolled ? 'glass-nav h-20 border-white/10' : 'bg-transparent h-24 border-transparent'
      } flex items-center`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          className="cursor-pointer group flex items-center gap-4"
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center p-1 bg-white rounded-lg shadow-inner overflow-hidden shrink-0 border border-white/10">
            <img 
              src="/AP-logo-transperent.png" 
              alt="Aayurvi Projects Logo" 
              className="w-full h-full object-contain relative z-10"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.remove('bg-white');
                e.target.parentElement.classList.add('bg-accent');
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xl select-none pointer-events-none">
              AP
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-white text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
              AAYURVI <span className="text-accent">PROJECTS</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40 mt-1 group-hover:text-accent transition-colors">
              Civil Engineering & Infrastructure Contracting
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.target}
              to={link.target}
              spy={true}
              smooth={true}
              offset={-80}
              className="text-white hover:text-accent cursor-pointer transition-colors duration-300 font-medium text-sm uppercase tracking-widest"
              activeClass="text-accent"
            >
              {link.name}
            </Link>
          ))}
          <Link to="contact" smooth={true} offset={-80}>
            <button className="btn-primary">Get In Touch</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-0 bg-primary z-[90] flex flex-col items-center justify-center space-y-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl uppercase tracking-widest hover:text-accent transition-colors"
                activeClass="text-accent"
              >
                {link.name}
              </Link>
            ))}
            <Link to="contact" smooth={true} offset={-80} onClick={() => setIsOpen(false)}>
              <button className="btn-primary">Get In Touch</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
