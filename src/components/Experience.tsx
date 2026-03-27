import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" ref={containerRef} className="py-32 relative bg-background overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <span className="text-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              03 — The Journey
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-8">
              CAREER <br />
              <span className="text-white/20">MILESTONES.</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed max-w-sm">
              A timeline of professional growth, technical mastery, and impactful contributions.
            </p>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Scroll to Explore</span>
            </div>
          </div>

          {/* Experience List */}
          <div className="lg:w-2/3 space-y-32">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="absolute -left-12 top-0 text-8xl font-display font-black text-white/[0.03] select-none group-hover:text-primary/5 transition-colors">
                  0{index + 1}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-medium text-white/60">{exp.company}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-primary tracking-widest uppercase">{exp.period}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -rotate-45 group-hover:rotate-0">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <p className="text-xl text-white/40 leading-relaxed mb-12 max-w-2xl">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 glass rounded-2xl hover:bg-white/[0.02] transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-white/60 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
                
                {/* Divider Line */}
                <div className="mt-20 h-px w-full bg-white/5 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-primary/30"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
