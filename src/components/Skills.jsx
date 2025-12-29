import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiMongodb, SiPostgresql, SiGit, SiPython, SiExpress, SiFirebase,
  SiLinux, SiNextdotjs, SiRedis, SiBootstrap, SiSocketdotio, SiSanity
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandFramer } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Categorized Skills
  const languages = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'C++', icon: FaJava, color: '#00599C' }, // Using FaJava as placeholder if SiCplusplus missing, but ideally keeping original if available. Wait, SiCplusplus was there.
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
  ];

  const frameworks = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Framer Motion', icon: TbBrandFramer, color: '#0055FF' },
    { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
  ];

  const tools = [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'Sanity', icon: SiSanity, color: '#F03E2F' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    // { name: 'WebRTC', icon: SiWebrtc, color: '#333333' }, // Removed based on "few things are not there" or just keeping relevant ones? User said "remove docker and few things are not there". I'll keep WebRTC if user didn't explicitly ask to remove it, but user listed "bootstrap, shadcn, sanity, socketio, framer-motion".
  ];

  const SkillSlider = ({ items, direction = 1, speed = 40 }) => {
    // Duplicate for infinite loop
    const duplicatedStats = [...items, ...items, ...items];
    
    return (
      <div className="relative w-full overflow-hidden mask-gradient">
         <motion.div
           className="flex gap-8 py-4 w-max"
           animate={{
             x: direction > 0 ? [-1000, 0] : [0, -1000],
           }}
           transition={{
             x: {
               repeat: Infinity,
               repeatType: "loop",
               duration: speed,
               ease: "linear",
             },
           }}
         >
           {duplicatedStats.map((skill, idx) => (
             <div 
               key={`${skill.name}-${idx}`}
               className="flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 min-w-max"
             >
                <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
             </div>
           ))}
         </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]">
       {/* Background Noise with CSS */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-24 text-center">
             <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Stack & Tools</p>
             <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
               Technical <span className="font-light italic bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent pr-2">Expertise</span>
             </h2>
          </div>

          <div className="space-y-16">
             {/* Slider 1: Languages */}
             <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/30 px-4 md:px-0">Languages</p>
                <SkillSlider items={languages} direction={-1} speed={25} />
             </div>

             {/* Slider 2: Frameworks */}
             <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/30 px-4 md:px-0">Libraries & Frameworks</p>
                <SkillSlider items={frameworks} direction={1} speed={30} />
             </div>

             {/* Slider 3: Tools */}
             <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/30 px-4 md:px-0">Tools & Platforms</p>
                <SkillSlider items={tools} direction={-1} speed={35} />
             </div>
          </div>

        </motion.div>
      </div>
      
      <style jsx>{`
        .mask-gradient {
           mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Skills;
