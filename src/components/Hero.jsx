import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'motion/react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex flex-col bg-mesh pt-24">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none rail-pattern"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex-1 flex items-center z-10 py-12">
        <div className="grid grid-cols-12 gap-8 w-full items-center">
          
          {/* Left Content: Title and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/40 text-accent text-[10px] font-bold uppercase tracking-[0.2em] w-fit rounded shadow-lg shadow-accent/5">
              Infrastructure Development | Civil Engineering Contracts
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.9] uppercase relative">
              <span className="relative z-10">Building Tracks.</span><br />
              <span className="text-accent underline decoration-white/10 underline-offset-8 italic relative z-10">Connecting Futures.</span>
              <div className="absolute -top-16 -left-16 w-48 h-48 opacity-10 pointer-events-none -z-10 bg-white rounded-full p-8 blur-xl"></div>
              <div className="absolute -top-20 -left-20 w-40 h-40 opacity-10 pointer-events-none -z-10 flex items-center justify-center">
                <img 
                  src="/AP-logo-transperent.png" 
                  alt="" 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                  }} 
                />
                <span className="hidden text-9xl font-black text-white/5 uppercase">AP</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Aayurvi Projects LLP is a leading Pune-based civil engineering and railway contracting firm delivering high-precision infrastructure solutions across India.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link to="services" smooth={true} offset={-80}>
                <button className="btn-primary hover:scale-105 transition-transform px-10 py-4 text-base">Explore Our Services</button>
              </Link>
              <Link to="contact" smooth={true} offset={-80}>
                <button className="btn-outline hover:bg-white/10 transition-colors px-10 py-4 text-base">Contact Us</button>
              </Link>
            </div>

            {/* In-hero Stats (High Density style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-white/10">
              {[
                { val: '50+', label: 'Projects Done' },
                { val: '10+', label: 'Years Exp.' },
                { val: '100+', label: 'Skilled Staff' },
                { val: '15+', label: 'Contracts' }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl font-black text-accent font-heading">{stat.val}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: Services Snapshot & Location (The "Dense" information cards) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex col-span-5 flex-col space-y-4"
          >
            <div className="card-glass p-8 rounded-2xl gold-border flex-1 shadow-2xl">
              <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent/30"></span> Our Expertise
              </div>
              <div className="space-y-6">
                {[
                  { icon: 'Civil', title: 'Specialized Works', desc: 'Precise engineering & load bearing solutions.' },
                  { icon: 'Civil', title: 'Civil Engineering', desc: 'Foundations & industrial structures.' },
                  { icon: 'Infra', title: 'Infrastructure', desc: 'Site grading & project management.' }
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-xl transition-all cursor-default group border border-transparent hover:border-white/5">
                    <div className="w-10 h-10 flex items-center justify-center text-accent bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                      {i === 0 ? '🚅' : i === 1 ? '🏗️' : '🏙️'}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight">{s.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border-l-[6px] border-accent shadow-xl bg-primary/20">
              <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-3">Headquarters</div>
              <div className="text-xs text-white/70 leading-relaxed space-y-1">
                <p>Flat No 704, Ganga Paritosh, B Wing,</p>
                <p>Suncity Road, Vadgaon Budruk, Pune 411051</p>
                <p className="mt-4 pt-4 border-t border-white/5 text-white font-bold tracking-widest uppercase">
                  GSTIN: 27ACCFA8013B1ZZ
                </p>
              </div>
            </div>

            <div className="card-glass p-5 rounded-2xl bg-accent/5 border border-accent/20 flex justify-between items-center group cursor-pointer hover:bg-accent/10 transition-colors">
              <div className="text-[11px] italic text-white/80 pr-4 leading-relaxed line-clamp-1 group-hover:line-clamp-none transition-all">
                "Reliable, efficient, and results-driven. Our go-to contractor."
              </div>
              <div className="text-[9px] font-bold uppercase text-accent shrink-0 border-l border-accent/20 pl-4">
                Pune Operations
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-12 bottom-0 top-1/2 w-[1px] bg-gradient-to-b from-white/20 to-transparent hidden xl:block"></div>
    </section>
  );
};

export default Hero;
