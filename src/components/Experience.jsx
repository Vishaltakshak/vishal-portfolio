import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Uvigo',
      role: 'Full Stack Developer',
      period: 'Internship',
      description: 'Web Development',
      achievements: [
        'Built and shipped production-grade web features across the full stack in a fast-paced startup environment.',
        'Developed responsive, mobile-first UI using React and Tailwind CSS with strong focus on UX and performance.',
        'Designed and integrated REST APIs, handling authentication, data flow, and business logic.',
        'Collaborated directly with founders and designers to translate requirements into scalable technical solutions.',
        'Owned end-to-end development of the company website, from architecture to deployment.'
      ],
    },
    {
      company: 'Technical Society (BVCOE)',
      role: 'Vice President',
      period: '2024 – 2025',
      description: 'Leadership Role',
      achievements: [
        'Led a 40+ member team; organized workshops and events with over 500 attendees.',
        'Managed sponsor outreach, event strategy, and cross-team coordination.',
      ],
    },
    {
      company: 'College Society (BVCOE)',
      role: 'Event Management Head',
      period: '2023 – 2024',
      description: 'Event Leadership',
      achievements: [
        'Directed logistics, budgeting, planning, and execution for 300–800 participant events.',
        'Streamlined event operations and resource allocation.',
      ],
    },
  ];

  const education = [
    {
      institution: "Bharati Vidyapeeth's College of Engineering",
      degree: 'B.Tech — CGPA: 7.8',
      period: '2022 – 2026',
      location: 'New Delhi',
    },
    {
      institution: 'Army Public School',
      degree: 'Percentage: 87.8%',
      period: '2012 – 2022',
      location: 'New Delhi',
    },
  ];

  const achievements = [
    'Silver Medal — Ranbhoomi Football Tournament',
    'Winner — BVP HEX Hackathon (Blockchain Track)',
    'Special Jury Mention — HackMol 5.0 (NIT Jalandhar)',
    'NSS Volunteer — Community outreach initiatives',
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience & <span className="italic font-normal bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent pr-2">Education</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My academic journey, leadership roles, and key achievements
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Leadership Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white font-heading">
                  Leadership
                </h3>
              </div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white rounded-full border-4 border-black" />
                    
                    <div className="mb-2">
                       <span className="text-sm font-medium text-gray-400 py-1 px-3 bg-white/5 rounded-full inline-block mb-3 border border-white/10">
                        {exp.period}
                      </span>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-lg text-gray-300 font-heading italic">{exp.company}</p>
                    </div>
                    
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-white/50 rounded-full flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="space-y-12">
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                        <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">{edu.period}</span>
                      </div>
                      <p className="text-gray-300 font-heading italic">{edu.degree}</p>
                      <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Achievements
                  </h3>
                </div>
                
                <div className="grid gap-3">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
