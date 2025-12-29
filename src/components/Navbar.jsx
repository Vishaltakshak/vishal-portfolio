import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Track all sections
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCommandPalette = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      className="fixed top-6 left-1/2 z-50 w-full max-w-fit"
    >
      <div 
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 border",
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50" 
            : "bg-white/5 backdrop-blur-lg border-white/5"
        )}
      >
        {/* Navigation Links */}
        <div className="flex items-center">
           {navItems.map((item) => {
             const isActive = activeSection === item.href.substring(1);
             return (
               <button
                 key={item.name}
                 onClick={() => scrollToSection(item.href)}
                 className={cn(
                   "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                   isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                 )}
               >
                 {isActive && (
                   <motion.div
                     layoutId="activeTab"
                     className="absolute inset-0 bg-white/10 rounded-full"
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                   />
                 )}
                 <span className="relative z-10">{item.name}</span>
               </button>
             );
           })}
        </div>

        <div className="w-px h-4 bg-white/10 mx-1"></div>

        {/* Command Palette Trigger */}
        <button
          onClick={openCommandPalette}
          className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
          aria-label="Search"
        >
          <Search size={16} />
          <span className="hidden sm:inline text-xs font-mono opacity-60">⌘K</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
