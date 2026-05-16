import React from 'react';
import { motion } from 'motion/react';
import { FaTrain, FaHardHat, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const highlights = [
    { icon: <FaTrain />, label: 'Infrastructure Contracts' },
    { icon: <FaHardHat />, label: 'Civil Engineering' },
    { icon: <FaBuilding />, label: 'Infrastructure Dev' },
    { icon: <FaMapMarkerAlt />, label: 'Pune Based, Pan-India' },
  ];

  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-mesh opacity-50"></div>
      <div className="absolute inset-0 z-0 opacity-5 rail-pattern pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">Who We Are</h2>
              <div className="w-20 h-1.5 bg-accent mt-4"></div>
            </div>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Aayurvi Projects LLP is a Pune-based civil engineering and railway contracting firm committed to delivering high-quality infrastructure solutions.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              With expertise in railway track laying, civil construction, and infrastructure development, we bring precision, reliability, and innovation to every project we undertake. Our team of experienced professionals ensures that every mile we build stands the test of time and quality.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card-glass p-10 rounded-2xl flex flex-col items-center text-center shadow-2xl transition-all gold-border hover:bg-primary hover:border-white/20"
              >
                <div className="text-5xl text-accent mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-black text-white uppercase tracking-widest">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
