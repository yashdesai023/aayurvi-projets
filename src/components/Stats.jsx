import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';

const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-5xl md:text-6xl font-black text-accent mb-2 font-heading">
        {displayValue}+
      </div>
      <div className="text-white text-sm uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: 50, label: 'Projects Completed' },
    { value: 10, label: 'Years Experience' },
    { value: 100, label: 'Skilled Workers' },
    { value: 15, label: 'Major Contracts' },
  ];

  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
