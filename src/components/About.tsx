import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Magnetic } from './Magnetic';

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
        {count}{suffix}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-32 h-32 border border-primary/20 rounded-full pointer-events-none hidden lg:block" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-48 h-48 border border-white/5 rounded-3xl pointer-events-none hidden lg:block" 
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 glass p-12 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-colors" />
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">
              01 — The Vision
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter leading-[0.85]">
              BUILDING <br />
              <span className="text-white/20">BEYOND</span> <br />
              LIMITS.
            </h2>
            <div className="max-w-xl space-y-6 text-xl text-white/60 leading-relaxed font-medium">
              <p>{portfolioData.summary}</p>
              <p className="text-sm text-white/30">
                I specialize in building production-level applications with a focus on problem-solving and scalability. My expertise spans the entire MERN stack, complemented by advanced AI integration capabilities.
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 glass rounded-[3rem] overflow-hidden p-3"
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
              <img
                src="https://picsum.photos/seed/yash/800/1200"
                alt="Yash"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Stats Cards */}
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="lg:col-span-4 glass p-10 rounded-[3rem] flex flex-col justify-center items-center text-center group hover:border-primary/30 transition-all"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
          
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-12 glass p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="w-3 h-3 rounded-full bg-primary relative z-10" />
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold">Based in {portfolioData.location}</h4>
                <p className="text-white/40 text-sm">Open for global opportunities & remote collaborations.</p>
              </div>
            </div>
            <Magnetic>
              <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-colors">
                Get in Touch
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
