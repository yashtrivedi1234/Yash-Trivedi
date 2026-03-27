import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              04 — Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              DIGITAL <br />
              <span className="text-white/20">ARTIFACTS.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden glass p-3 mb-8">
                  <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                      <a 
                        href={project.github} 
                        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                      <a 
                        href={project.live} 
                        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest text-white/20 px-3 py-1 bg-white/5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
