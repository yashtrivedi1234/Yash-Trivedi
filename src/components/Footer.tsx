import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ChevronUp, ArrowUpRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-32 pb-12 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
              Have a project?
            </span>
            <a 
              href={`mailto:${portfolioData.email}`}
              className="group relative"
            >
              <h2 className="text-[12vw] font-display font-black tracking-tighter leading-none hover:text-outline transition-all duration-700">
                LET'S <span className="text-gradient">TALK.</span>
              </h2>
              <div className="absolute -top-8 -right-8 w-24 h-24 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
                <ArrowUpRight className="w-10 h-10 text-primary" />
              </div>
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="text-3xl font-display font-black tracking-tighter group">
              YT<span className="text-primary group-hover:translate-x-1 inline-block transition-transform">.</span>
            </a>
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Yash Trivedi. Built with passion.
            </p>
          </div>

          <div className="flex gap-10">
            {portfolioData.socials.map((social) => (
              <Magnetic key={social.name}>
                <a
                  href={social.url}
                  className="text-white/40 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest"
                >
                  {social.name}
                </a>
              </Magnetic>
            ))}
          </div>

          <Magnetic>
            <button
              onClick={scrollToTop}
              className="w-16 h-16 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-all group"
            >
              <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnetic>
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <div className="text-[30vw] font-display font-black whitespace-nowrap">
          YASH TRIVEDI
        </div>
      </div>
    </footer>
  );
};
