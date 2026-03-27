import { motion } from 'motion/react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-1">Email Me</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-medium">{portfolioData.email}</p>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-white/30" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-1">Call Me</p>
                  <p className="text-lg font-medium">{portfolioData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-lg font-medium">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/50 ml-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-hidden focus:border-primary transition-colors"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/50 ml-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-hidden focus:border-primary transition-colors"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/50 ml-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-hidden focus:border-primary transition-colors resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-primary/80 transition-all group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
