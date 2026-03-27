import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-white/50">My career path and significant milestones.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

              <div className="flex-1 md:w-1/2">
                <div className={`glass p-8 rounded-3xl hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className={`flex items-center gap-3 mb-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <span className="text-primary font-bold">{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-1">{exp.company}</h3>
                  <p className="text-white/70 font-medium mb-4">{exp.role}</p>
                  
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className={`space-y-2 text-sm text-white/40 ${
                    index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                  } flex flex-col`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1 md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
