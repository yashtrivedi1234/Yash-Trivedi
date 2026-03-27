import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            05 — Kind Words
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
            CLIENT <br />
            <span className="text-white/20">VOICES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-10 rounded-[3rem] relative group hover:border-primary/30 transition-all"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-white/60 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
