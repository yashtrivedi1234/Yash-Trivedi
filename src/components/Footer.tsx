import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="text-2xl font-display font-bold tracking-tighter">
              YT<span className="text-primary">.</span>
            </a>
            <p className="text-white/30 text-sm mt-2">
              © {new Date().getFullYear()} Yash Trivedi. All rights reserved.
            </p>
          </div>

          <div className="flex gap-8">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-white/50 hover:text-white transition-colors text-sm font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-primary transition-all"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};
