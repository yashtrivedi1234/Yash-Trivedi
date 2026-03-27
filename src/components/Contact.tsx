import { motion } from 'motion/react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              06 — Get in Touch
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter leading-[0.85]">
              LET'S <br />
              <span className="text-white/20">CONNECT.</span>
            </h2>
            <p className="text-xl text-white/40 mb-16 leading-relaxed max-w-lg">
              Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Mail className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-2">Email Me</p>
                  <div className="flex items-center gap-4">
                    <p className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{portfolioData.email}</p>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-white/5 rounded-xl transition-colors group/copy"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-white/20 group-hover/copy:text-white transition-colors" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Phone className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-2">Call Me</p>
                  <p className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{portfolioData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <MapPin className="w-6 h-6 relative z-10" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest font-black mb-2">Location</p>
                  <p className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass p-12 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-8 py-5 outline-hidden focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-500 text-lg"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-8 py-5 outline-hidden focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-500 text-lg"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/5 rounded-[1.5rem] px-8 py-5 outline-hidden focus:border-primary/50 focus:bg-white/[0.08] transition-all duration-500 text-lg resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <Magnetic>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] py-6 rounded-[1.5rem] flex items-center justify-center gap-4 hover:bg-primary hover:text-white transition-all duration-500 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
