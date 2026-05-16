import React from 'react';
import { motion } from 'motion/react';
import { FaTrain, FaTools, FaCity, FaRoad, FaMountain, FaClipboardList } from 'react-icons/fa';

const services = [
  {
    icon: <FaTrain />,
    title: 'Railway Track Construction',
    desc: 'Specialized expertise in end-to-end railway track laying, alignment, and ballast works for high-speed connectivity.',
  },
  {
    icon: <FaTools />,
    title: 'Civil Engineering Works',
    desc: 'Precision-led civil construction including foundations, structural works, and large-scale industrial projects.',
  },
  {
    icon: <FaCity />,
    title: 'Infrastructure Development',
    desc: 'Comprehensive urban and rural infrastructure development aimed at connecting communities and industries.',
  },
  {
    icon: <FaRoad />,
    title: 'Bridge & Culvert Construction',
    desc: 'Expert engineering solutions for durable bridges and culverts designed for maximum load capacity.',
  },
  {
    icon: <FaMountain />,
    title: 'Earthwork & Grading',
    desc: 'Large-scale earthwork, excavation, and site grading services using advanced machinery and precision planning.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Project Management & Contracting',
    desc: 'Efficient management of government and private contracts with focus on timeline, cost, and compliance.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 z-0 opacity-5 rail-pattern pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="section-title-container">
          <h2 className="section-title text-white">Our Services</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-glass p-10 gold-border shadow-2xl group transition-all rounded-2xl hover:bg-primary overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="text-5xl text-accent mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 uppercase font-heading tracking-tight relative z-10">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm relative z-10 group-hover:text-white/80 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
