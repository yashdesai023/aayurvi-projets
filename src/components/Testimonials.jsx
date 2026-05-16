import React from 'react';
import { motion } from 'motion/react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Aayurvi Projects delivered our railway contract on time and with exceptional quality. Transparent pricing and professional crew made it a success.",
    author: "Government Client",
    location: "Maharashtra",
  },
  {
    quote: "Their civil engineering team is highly skilled and professional. High standard of structural integrity and precision was maintained throughout.",
    author: "Infrastructure Partner",
    location: "Regional Office",
  },
  {
    quote: "Reliable, efficient, and results-driven. Aayurvi Projects is our go-to contractor for large-scale grading and track maintenance works.",
    author: "Project Manager",
    location: "Pune Operations",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="section-title-container">
          <h2 className="section-title text-primary">What Our Clients Say</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-10 rounded-2xl shadow-xl relative group hover:bg-dark transition-colors"
            >
              <div className="text-4xl text-accent mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                <FaQuoteLeft />
              </div>
              <p className="text-white text-lg leading-relaxed italic mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-accent font-bold uppercase tracking-widest text-sm">
                  {t.author}
                </h4>
                <p className="text-gray-400 text-xs mt-1 uppercase tracking-tight">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
