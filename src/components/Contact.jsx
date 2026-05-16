import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaMapMarkerAlt, FaEnvelope, FaIdCard, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Flat No 704, Ganga Paritosh, B Wing, Fire Station Lane, Suncity Road, Vadgaon Budruk, Pune 411051',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'aayurviprojectsllp@gmail.com',
    },
    {
      icon: <FaIdCard />,
      title: 'GSTIN',
      content: '27ACCFA8013B1ZZ',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-mesh opacity-30"></div>
      <div className="absolute inset-0 z-0 opacity-5 rail-pattern pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="section-title-container">
          <h2 className="section-title text-white">Get In Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/5"
          >
            <h3 className="text-3xl font-heading font-black text-white uppercase mb-8 tracking-tighter">Contact Information</h3>
            <p className="text-white/50 mb-12 leading-relaxed max-w-sm font-medium">
              Ready to start your next infrastructure project? Get in touch with our expert engineering team today.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-6 items-center p-4 card-glass rounded-2xl border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 border border-accent/20 rounded-xl flex items-center justify-center text-accent text-xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-1">{info.title}</h4>
                    <p className="text-white text-sm leading-relaxed font-bold">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <div className="card-glass p-8 md:p-12 rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/20 border border-accent/40 p-12 rounded-2xl text-center"
                >
                  <h4 className="text-accent text-2xl font-black uppercase mb-4">Message Sent!</h4>
                  <p className="text-white">Thank you for reaching out. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-widest px-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-widest px-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-widest px-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-widest px-1">Subject</label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-xs font-bold text-accent uppercase tracking-widest px-1">How can we help?</label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-accent transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <button type="submit" className="btn-primary w-full py-5 text-base">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
