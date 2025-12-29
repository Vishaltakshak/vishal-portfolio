import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505] pt-0 md:pt-20"
    >
        {/* Spotlight Effect behind Name */}
        <div 
          className="absolute pointer-events-none opacity-40 blur-[100px] transition-all duration-300"
          style={{
             background: 'radial-gradient(circle, rgba(100,100,255,0.15) 0%, rgba(0,0,0,0) 70%)',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             width: '80vw',
             height: '80vh',
          }}
        />

      <motion.div
        className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
         {/* Left: Content */}
         <div className="order-2 lg:order-1 pt-12 lg:pt-0">
             <motion.h2 
                variants={itemVariants}
                className="text-white/60 font-mono text-sm md:text-base tracking-wider mb-6"
             >
                I engineer impact. Not just software.
             </motion.h2>

             <motion.h1
               variants={itemVariants}
               className="text-7xl md:text-8xl lg:text-[7rem] font-bold text-white leading-[0.9] tracking-tighter mb-8 group cursor-default"
             >
               <span 
                 className="inline-block transition-transform duration-300 hover:skew-x-2"
                 style={{ 
                   background: 'linear-gradient(to right, #fff 0%, #a5a5a5 100%)', 
                   WebkitBackgroundClip: 'text', 
                   WebkitTextFillColor: 'transparent' 
                 }}
               >
                 Vishal
               </span>
             </motion.h1>

             <motion.p
               variants={itemVariants}
               className="font-mono text-gray-400 text-sm md:text-base leading-relaxed max-w-[60ch] mb-12 border-l-2 border-white/10 pl-6"
             >
               Full-stack developer building <span className="text-white">scalable, real-time systems</span> designed to solve real-world problems.
             </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative flex items-center gap-2">
                   Let's Build Something
                   <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <div className="flex gap-2">
                 {[
                   { Icon: Github, href: 'https://github.com/Vishaltakshak', label: 'GitHub' },
                   { Icon: Linkedin, href: 'https://linkedin.com/in/vishal-takshak', label: 'LinkedIn' },
                   { Icon: Mail, href: 'mailto:vishaltakshakvishal@gmail.com', label: 'Email' },
                 ].map(({ Icon, href, label }) => (
                   <a
                     key={label}
                     href={href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white text-gray-400 transition-all"
                     aria-label={label}
                   >
                     <Icon size={18} />
                   </a>
                 ))}
              </div>
            </motion.div>
         </div>

         {/* Right: Visual Anchor / Profile */}
         <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            >
               {/* Animated Gradient Border/Glow */}
               <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />
               
               <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl">
                  {/* Overlay for "blurred in background" feel if needed, but keeping image clear as per "add my profile picture" */}
                  <img 
                    src="/assets/profile.jpeg" 
                    alt="Vishal"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
               </div>

               {/* Decorative Elements */}
               <div className="absolute -z-10 -right-12 -bottom-12 w-full h-full border border-white/5 rounded-full" />
               <div className="absolute -z-10 -left-6 -top-6 w-full h-full border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            </motion.div>
         </div>
      </motion.div>
    </section>
  );
};

export default Hero;
