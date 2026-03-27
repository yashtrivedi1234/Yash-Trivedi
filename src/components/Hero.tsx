import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { HeroCanvas } from './HeroCanvas';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Download, Globe } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={portfolioData.heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <HeroCanvas />
      
      {/* Top Right Info Widget */}
      <div className="absolute top-32 right-6 md:right-12 z-20 hidden lg:flex flex-col items-end gap-2">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">Available for Work</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
          className="text-4xl font-display font-light tracking-tighter"
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7 }}
          className="text-[10px] font-bold uppercase tracking-widest text-white/30"
        >
          {portfolioData.location} • GMT+5:30
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div style={{ y: y1, opacity }} className="max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-primary" 
            />
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-primary font-display font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Creative Full-Stack Architect
            </motion.span>
          </div>
          
          <div className="relative">
            <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-display font-black tracking-tighter leading-[0.8] mb-12 select-none">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                CRAFTING
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block text-gradient"
              >
                DIGITAL
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block text-outline hover:text-white transition-colors duration-700"
              >
                POETRY.
              </motion.span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-16">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xl text-white/40 max-w-sm leading-relaxed font-medium italic"
            >
              "{portfolioData.tagline}"
            </motion.p>
            
            <div className="flex flex-wrap gap-8 items-center">
              <Magnetic>
                <motion.a
                  href="#projects"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-widest group-hover:text-black transition-colors">
                    Work
                  </span>
                </motion.a>
              </Magnetic>
              
              <Magnetic>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="px-10 py-5 glass rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary hover:text-white transition-all"
                >
                  Connect
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <div className="text-[20vw] font-display font-black whitespace-nowrap animate-marquee">
          YASH TRIVEDI • FULL STACK • AI INTEGRATOR • YASH TRIVEDI • FULL STACK • AI INTEGRATOR •
        </div>
      </div>
    </section>
  );
};
