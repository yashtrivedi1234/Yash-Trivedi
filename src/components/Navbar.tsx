import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      if (latest > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-8",
        isVisible ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-8 py-3 rounded-full",
        isVisible ? "glass shadow-2xl" : "bg-transparent"
      )}>
        <a href="#" className="text-2xl font-display font-black tracking-tighter group">
          YT<span className="text-primary group-hover:translate-x-1 inline-block transition-transform">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10" />
          <a
            href="#contact"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-white transition-colors"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <motion.div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 md:hidden flex flex-col items-center justify-center gap-8",
          isOpen ? "flex" : "hidden"
        )}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};
