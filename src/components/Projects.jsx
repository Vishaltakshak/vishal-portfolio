import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'CEOCard',
      category: 'Luxury SaaS',
      description: 'High-performance profile platform with SSR.',
      detailedDesc: [
        'Implemented Server-Side Rendering for <1s First Contentful Paint',
        'Reduced backend latency by 35% through caching strategies',
        'Designed premium, animation-heavy UI components'
      ],
      image: '/assets/ceo-card.png',
      tags: ['Next.js', 'SSR', 'Redis', 'Framer Motion'],
      gradient: 'from-purple-600/20 to-indigo-600/10',
      accent: 'group-hover:text-purple-400',
      link: 'https://ceo-card.vercel.app/'
    },
    {
      title: 'Women’s Safety Platform',
      category: 'Real-Time System',
      description: 'Sub-2-second alert broadcasting via WebSockets.',
      detailedDesc: [
        'Engineered real-time architecture handling concurrent socket connections',
        'Implemented geo-fencing algorithms for precise alert targeting',
        'Optimized MongoDB aggregations for instant incident reporting'
      ],
      image: '/assets/women-safety.png',
      tags: ['WebSockets', 'MongoDB', 'React', 'Node.js'],
      gradient: 'from-pink-500/10 to-rose-500/10',
      accent: 'group-hover:text-pink-400',
      link: 'https://women-s-safety.vercel.app/'
    },
    {
      title: 'Music Player',
      category: 'Interactive Web App',
      description: 'API-driven music player with dynamic playback.',
      detailedDesc: [
        'Integrated Apple Music API to fetch tracks, albums, and playback metadata dynamically',
        'Implemented core player features including play/pause controls, track navigation',
        'UI state synchronization with async data handling'
      ],
      image: '/assets/musicplayer.png',
      tags: ['React', 'Apple Music API', 'JavaScript', 'CSS'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      accent: 'group-hover:text-cyan-400',
      link: 'https://music-player-two-xi-54.vercel.app/'
    },
    {
      title: 'PharmaLogiX',
      category: 'Blockchain Supply Chain',
      description: 'Immutable drug inventory and tracking system.',
      detailedDesc: [
        'Built a blockchain-powered system for end-to-end transparency in pharmaceutical distribution',
        'Implemented immutable ledger recording for every transaction to prevent counterfeiting',
        'Designed real-time tracking and trustless data sharing for compliance'
      ],
      image: '/assets/PharmaLogix.png',
      tags: ['Blockchain', 'Solidity', 'React', 'Node.js'],
      gradient: 'from-indigo-600/20 to-blue-700/10',
      accent: 'group-hover:text-indigo-400',
      link: '#'
    },
    {
      title: 'E-Court System',
      category: 'Enterprise Tech',
      description: 'Virtual courtroom with WebRTC video.',
      detailedDesc: [
        'Built secure video conferencing using WebRTC peer connections',
        'Architected role-based access control for judicial data',
        'Integrated real-time transcription and document signing'
      ],
      image: 'https://via.placeholder.com/800x600/1a1a1a/ffffff?text=E-Court',
      tags: ['WebRTC', 'Socket.io', 'Express', 'PostgreSQL'],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      accent: 'group-hover:text-emerald-400',
      link: '#'
    },
  ];

  return (
    <section id="projects" className="pt-48 pb-32 relative bg-[#050505]">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Dashed Guide Lines */}
      <div className="absolute inset-0 max-w-[90rem] mx-auto pointer-events-none">
         {/* Left Line */}
         <div 
           className="absolute left-4 md:left-8 lg:left-12 h-full w-[2px] opacity-10"
           style={{ 
             backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
             backgroundSize: '2px 30px' 
           }}
         ></div>
         {/* Right Line */}
         <div 
           className="absolute right-4 md:right-8 lg:right-12 h-full w-[2px] opacity-10"
           style={{ 
             backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
             backgroundSize: '2px 30px' 
           }}
         ></div>
         {/* Center Line */}
         <div 
           className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-[2px] opacity-10"
           style={{ 
             backgroundImage: 'linear-gradient(to bottom, white 0%, white 50%, transparent 50%, transparent 100%)',
             backgroundSize: '2px 30px' 
           }}
         ></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Editorial Section Heading */}
          <div className="mb-24 pl-4 md:pl-0">
             <motion.h2 
                className="text-6xl md:text-8xl font-bold font-heading tracking-tight leading-[0.9]"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
             >
               Curated <br />
               <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent italic font-light pr-4">
                 Work
               </span>
             </motion.h2>
             <div className="h-px w-32 bg-white/20 mt-8"></div>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-20 px-4 md:px-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`group relative ${index % 2 !== 0 ? 'md:translate-y-24' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Project Card */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`block relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} border border-white/5 transition-all duration-500 hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-purple-500/5`}>
                   
                   {/* Card Content Wrapper */}
                   <div className="p-8 pb-0 relative">
                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                         <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-2">{project.category}</p>
                            <h3 className="text-3xl font-heading font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-400">{project.description}</p>
                         </div>
                         <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                            <ArrowUpRight size={18} />
                         </div>
                      </div>

                      {/* Mockup Container */}
                      <div className="relative mt-8 rounded-t-lg overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                         <div className="aspect-[4/3] bg-[#0a0a0a] border-t border-x border-white/10 rounded-t-lg">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                         </div>
                      </div>
                   </div>
                   
                   {/* Hover Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
                </a>

                {/* Project Details (Below Card) */}
                <div className="mt-8 pl-2 border-l border-white/10 pl-6 space-y-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                   <ul className="space-y-2">
                      {project.detailedDesc.map((item, i) => (
                         <li key={i} className="text-sm text-gray-400 font-light flex items-center gap-2">
                           <span className="w-1 h-1 rounded-full bg-white/30"></span>
                           {item}
                         </li>
                      ))}
                   </ul>

                   <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                         <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-white/60 border border-white/10 px-3 py-1 rounded-full hover:border-white/30 transition-colors">
                           {tag}
                         </span>
                      ))}
                   </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
