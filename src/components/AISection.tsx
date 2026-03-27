import { motion } from 'motion/react';
import { Cpu, Zap, Bot, Network, Box, Database, Code2 } from 'lucide-react';
import { Magnetic } from './Magnetic';

export const AISection = () => {
  const aiFeatures = [
    {
      title: "LLM Integration",
      desc: "Expertise in integrating OpenAI and Gemini models into production applications for intelligent features.",
      icon: Bot,
      id: "01"
    },
    {
      title: "Agentic Workflows",
      desc: "Building autonomous AI agents that can perform complex tasks and multi-step reasoning.",
      icon: Network,
      id: "02"
    },
    {
      title: "AI Automations",
      desc: "Streamlining business processes using n8n and LangChain for powerful automated workflows.",
      icon: Zap,
      id: "03"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-primary font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              05 — Intelligence
            </span>
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-8">
              THE FUTURE <br />
              <span className="text-white/20">IS AGENTIC.</span>
            </h2>
            <p className="text-xl text-white/40 leading-relaxed max-w-lg">
              I bridge the gap between traditional full-stack development and the new era of Artificial Intelligence.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className="w-full h-full bg-primary"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/20">System Status: Optimal</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass p-12 border-white/5 hover:bg-white/[0.02] transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-4xl font-display font-black text-white/5 group-hover:text-primary/10 transition-colors">
                {feature.id}
              </div>
              
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-12 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/40 leading-relaxed mb-12 text-sm">
                {feature.desc}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Active Node</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Visualization Widget */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass p-1 rounded-[3rem] overflow-hidden group"
        >
          <div className="bg-background/40 rounded-[2.8rem] p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(0deg, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-12 mb-12">
                <Magnetic>
                  <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-primary animate-pulse">
                    <Bot className="w-10 h-10" />
                  </div>
                </Magnetic>
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="w-2 h-2 rounded-full bg-primary"
                    />
                  ))}
                </div>
                <Magnetic>
                  <div className="w-24 h-24 rounded-full glass flex items-center justify-center text-white/20">
                    <Database className="w-10 h-10" />
                  </div>
                </Magnetic>
              </div>
              
              <h4 className="text-3xl font-display font-black mb-4 tracking-tighter">AGENTIC WORKFLOW ARCHITECT</h4>
              <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
                Designing autonomous systems where AI agents collaborate to solve complex business problems, 
                reducing operational friction and maximizing intelligent output.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
