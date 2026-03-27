import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ProjectModalProps {
  projectId: number | null;
  onClose: () => void;
}

export const ProjectModal = ({ projectId, onClose }: ProjectModalProps) => {
  const project = portfolioData.projects.find(p => p.id === projectId);

  if (!project) return null;

  return (
    <AnimatePresence>
      {projectId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-primary font-display font-bold uppercase tracking-[0.2em] text-[10px]">
                  {project.category}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tighter">
                {project.title}
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {project.details || project.description}
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(project as any).features?.map((feature: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.live}
                  className="flex-1 px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
                <a 
                  href={project.github}
                  className="flex-1 px-8 py-4 glass rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
