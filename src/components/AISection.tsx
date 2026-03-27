import { motion } from 'motion/react';
import { Cpu, Zap, Bot, Network } from 'lucide-react';

export const AISection = () => {
  const aiFeatures = [
    {
      title: "LLM Integration",
      desc: "Expertise in integrating OpenAI and Gemini models into production applications for intelligent features.",
      icon: Bot,
      color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Agentic Workflows",
      desc: "Building autonomous AI agents that can perform complex tasks and multi-step reasoning.",
      icon: Network,
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "AI Automations",
      desc: "Streamlining business processes using n8n and LangChain for powerful automated workflows.",
      icon: Zap,
      color: "from-amber-500/20 to-transparent"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-bold mb-6"
          >
            <Cpu className="w-4 h-4" />
            AI & Advanced Technologies
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
            The Future is <span className="text-gradient">Intelligent</span>
          </h2>
          <p className="text-xl text-white/50 leading-relaxed">
            I bridge the gap between traditional full-stack development and the new era of Artificial Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`glass p-10 rounded-[2.5rem] bg-linear-to-b ${feature.color} border-white/5 hover:border-primary/30 transition-all group`}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Flow Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass p-1 rounded-[3rem] overflow-hidden"
        >
          <div className="bg-background/50 rounded-[2.8rem] p-12 flex flex-col items-center justify-center text-center">
            <div className="flex gap-4 mb-8">
              {[1, 2, 3, 4].map(i => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.5 
                  }}
                  className="w-3 h-3 rounded-full bg-primary"
                />
              ))}
            </div>
            <h4 className="text-xl font-display font-bold mb-2">Agentic Workflow Architect</h4>
            <p className="text-white/40 text-sm max-w-md">
              Designing systems where AI agents collaborate to solve complex business problems autonomously.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
