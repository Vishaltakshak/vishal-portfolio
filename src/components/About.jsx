import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { User, Code, Server, Database } from 'lucide-react';

const TerminalCard = () => {
  const [lines, setLines] = useState([]);
  const fullText = [
    "> user.init()",
    "> Status:  Online",
    "> Name:    Vishal",
    "> Role:    Full-Stack Developer",
    "> Stack:   MERN",
    "> Focus:   Real-time systems",
    ">          Secure APIs",
    ">          Scalable architecture",
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let timeout;
    let mounted = true;

    const typeLine = () => {
      if (!mounted) return;
      
      if (currentLine >= fullText.length) return;

      const lineContent = fullText[currentLine];
      
      if (currentChar < lineContent.length) {
        setLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLine] === undefined) {
             newLines[currentLine] = lineContent[currentChar];
          } else {
             newLines[currentLine] = lineContent.substring(0, currentChar + 1);
          }
          return newLines;
        });
        currentChar++;
        timeout = setTimeout(typeLine, Math.random() * 30 + 30); // Random typing speed for realism
      } else {
        currentLine++;
        currentChar = 0;
        timeout = setTimeout(typeLine, 400); // Pause between lines
      }
    };

    timeout = setTimeout(typeLine, 1000);

    return () => {
      mounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto font-mono text-sm leading-relaxed">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-2xl" />
      
      {/* Terminal Window */}
      <div className="relative bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden h-[320px]">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-2 text-xs text-white/30 font-medium">vishal@dev:~</div>
        </div>

        {/* Content */}
        <div className="p-6 text-gray-300 font-mono">
           {lines.map((line, index) => (
             <div key={index} className="mb-1">
               <span className="text-blue-400 mr-2">$</span>
               {index === 0 ? <span className="text-green-400">{line}</span> : 
                line.includes("Name") || line.includes("Role") ? <span className="text-white">{line}</span> :
                line.includes("Stack") || line.includes("Focus") ? <span className="text-purple-300">{line}</span> : 
                line}
             </div>
           ))}
           <motion.span 
             animate={{ opacity: [0, 1, 0] }}
             transition={{ duration: 0.8, repeat: Infinity }}
             className="inline-block w-2.5 h-5 bg-blue-500 align-middle ml-1"
           />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, label: 'Frontend', value: 'React/Tailwind' },
    { icon: Server, label: 'Backend', value: 'Node/Express' },
    { icon: Database, label: 'Database', value: 'Mongo/Postgres' },
    { icon: User, label: 'Experience', value: 'Leadership' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Professional </span>
              <span className="italic font-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pr-2">Summary</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Terminal Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TerminalCard />
            </motion.div>

            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-white font-heading">
                Building Scalable MERN Applications
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Full-stack developer skilled in building scalable <strong className="text-white">MERN applications</strong> with 
                real-time communication, secure backend APIs, WebRTC, and optimized database workflows.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Passionate about system design, performance engineering, and delivering 
                production-grade solutions with clean, maintainable code.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Hackathon winner with strong leadership experience as Vice President and 
                Event Management Head, organizing events for 500+ attendees.
              </p>

              <div className="pt-4">
                 <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="text-white border-b border-white pb-1 hover:opacity-70 transition-opacity font-heading italic">
                  Let's create something together &rarr;
                </button>
              </div>
            </motion.div>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-white/80 group-hover:text-white transition-colors" />
                <div className="text-xl font-bold text-white mb-2 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
