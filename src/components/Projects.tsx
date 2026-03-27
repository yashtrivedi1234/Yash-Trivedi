import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { ExternalLink, Github, Plus } from 'lucide-react';
import { ProjectModal } from './ProjectModal';
import { Magnetic } from './Magnetic';

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              04 — Selected Works
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              DIGITAL <br />
              <span className="text-white/20">ARTIFACTS.</span>
            </h2>
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-6">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[45vw]"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden glass p-3 mb-8">
                <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                    <Magnetic>
                      <button 
                        onClick={() => setSelectedProjectId(project.id)}
                        className="w-20 h-20 bg-white text-black rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Plus className="w-6 h-6 mb-1" />
                        <span className="text-[8px] font-black uppercase tracking-widest">Details</span>
                      </button>
                    </Magnetic>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={project.github} 
                        className="w-12 h-12 glass text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.live} 
                        className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                    {project.category}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
                    {project.id.toString().padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest text-white/20 px-3 py-1 bg-white/5 rounded-full">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/20 px-3 py-1 bg-white/5 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Magnetic>
                    <button 
                      onClick={() => setSelectedProjectId(project.id)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors group/btn"
                    >
                      Explore
                      <Plus className="w-3 h-3 group-hover/btn:rotate-90 transition-transform" />
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <ProjectModal 
        projectId={selectedProjectId} 
        onClose={() => setSelectedProjectId(null)} 
      />
    </section>
  );
};
