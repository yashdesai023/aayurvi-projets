import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Specialized Track Laying',
    desc: 'Executed end-to-end track construction for government contracts involving precise alignment and high-load bearing capacity.',
    gradient: 'from-primary to-dark',
  },
  {
    title: 'Civil Construction',
    desc: 'Delivered civil engineering structures including foundations, retaining walls, and specialized drainage systems for infrastructure stability.',
    gradient: 'from-accent/80 to-accent',
  },
  {
    title: 'Infrastructure Development',
    desc: 'Managed large-scale infrastructure projects involving earthwork, grading, and site preparation for industrial development zones.',
    gradient: 'from-dark to-primary',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="section-title-container">
          <h2 className="section-title text-white">Our Work</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-glass rounded-3xl overflow-hidden shadow-2xl group flex flex-col h-full hover:shadow-[0_0_40px_rgba(201,150,12,0.2)] transition-all duration-500 border border-white/5"
            >
              <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center p-12`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                <div className="relative w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity duration-700 flex items-center justify-center">
                  <img 
                    src="/AP-logo-transperent.png" 
                    alt="" 
                    className="w-full h-full object-contain" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                    }} 
                  />
                  <span className="hidden text-6xl font-black text-white/20 uppercase">AP</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[6px] bg-accent"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-4">Featured Project</div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase font-heading tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm mb-8 flex-grow">
                  {project.desc}
                </p>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-white font-bold uppercase tracking-widest text-[10px] px-3 py-1 bg-white/5 rounded">Completed</span>
                  <div className="w-12 h-[1px] bg-accent/40"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
