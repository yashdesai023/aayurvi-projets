import React from 'react';
import { motion } from 'motion/react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Proven Engineering Expertise',
      desc: 'Decades of combined experience in handling complex infrastructure projects with precision.',
    },
    {
      title: 'On-Time Delivery',
      desc: 'We respect timelines and use optimized workflows to ensure projects are delivered as scheduled.',
    },
    {
      title: 'Certified & Compliant',
      desc: 'Fully registered and compliant with all government standards. GSTIN: 27ACCFA8013B1ZZ',
    },
    {
      title: 'Skilled Engineering Team',
      desc: 'Our workforce consists of certified engineers and specialized crew members for high-load projects.',
    },
    {
      title: 'End-to-End Project Management',
      desc: 'From initial earthwork to final track testing, we handle everything under one professional roof.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="why-us" className="section-padding bg-mesh relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 rail-pattern pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left List */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-4xl font-heading font-black text-white uppercase">Why Choose Us</h2>
              <div className="w-20 h-1.5 bg-accent mt-4"></div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={item} className="flex gap-5 group">
                  <div className="text-2xl text-accent mt-1 transition-transform group-hover:scale-125 duration-300">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent uppercase font-heading tracking-tight mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm max-w-lg">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Decor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative p-12 border-4 border-accent rounded-3xl flex items-center justify-center card-glass text-center overflow-hidden">
              <div className="absolute inset-4 border border-accent/20 rounded-2xl"></div>
              <div className="relative z-10 py-12">
                <FaCheckCircle className="text-6xl text-accent mx-auto mb-8 opacity-40 animate-pulse" />
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white leading-tight uppercase">
                  Precision in Every Track.<br />
                  <span className="text-accent underline decoration-white/20">Excellence in Every Project.</span>
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
