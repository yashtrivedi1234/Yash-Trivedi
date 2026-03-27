import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu,
  Code2
} from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon, delay }: { title: string; skills: string[]; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass p-8 rounded-3xl hover:border-primary/50 transition-colors group"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-display font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  const allSkills = [
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.database,
    ...portfolioData.skills.devops,
    ...portfolioData.skills.ai
  ];

  return (
    <section id="skills" className="py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              02 — Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none">
              FLUID <br />
              <span className="text-white/20">CAPABILITIES.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-8 animate-marquee items-center">
            {allSkills.map((skill, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-6xl md:text-8xl font-display font-black text-outline hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allSkills.map((skill, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-8">
                <span className="text-6xl md:text-8xl font-display font-black text-outline hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
                <div className="w-4 h-4 rounded-full bg-primary/20" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-8 animate-marquee-reverse items-center">
            {allSkills.reverse().map((skill, i) => (
              <div key={`rev-${i}`} className="flex items-center gap-8">
                <span className="text-6xl md:text-8xl font-display font-black text-white/5 hover:text-secondary transition-colors cursor-default">
                  {skill}
                </span>
                <div className="w-4 h-4 rounded-full bg-secondary/20" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allSkills.map((skill, i) => (
              <div key={`rev-dup-${i}`} className="flex items-center gap-8">
                <span className="text-6xl md:text-8xl font-display font-black text-white/5 hover:text-secondary transition-colors cursor-default">
                  {skill}
                </span>
                <div className="w-4 h-4 rounded-full bg-secondary/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={portfolioData.skills.frontend} icon={Layout} delay={0.1} />
          <SkillCategory title="Backend" skills={portfolioData.skills.backend} icon={Server} delay={0.2} />
          <SkillCategory title="AI & Tools" skills={portfolioData.skills.ai} icon={Cpu} delay={0.3} />
        </div>
      </div>
    </section>
  );
};
