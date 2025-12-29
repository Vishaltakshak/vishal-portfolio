import { useState, useEffect, useCallback } from 'react';
import { Search, X, Home, User, Code, Briefcase, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const pages = [
    { id: 'home', label: 'Home', icon: Home, action: () => scrollToSection('#home') },
    { id: 'about', label: 'About', icon: User, action: () => scrollToSection('#about') },
    { id: 'projects', label: 'Projects', icon: Code, action: () => scrollToSection('#projects') },
    { id: 'experience', label: 'Experience', icon: Briefcase, action: () => scrollToSection('#experience') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => scrollToSection('#contact') },
  ];

  const connect = [
    { id: 'github', label: 'GitHub', icon: Github, action: () => window.open('https://github.com', '_blank') },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com', '_blank') },
    { id: 'twitter', label: 'Twitter', icon: Twitter, action: () => window.open('https://twitter.com', '_blank') },
  ];

  const allCommands = [...pages, ...connect];

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setSearch('');
    }
  };

  const filteredPages = pages.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const filteredConnect = connect.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const allFiltered = [...filteredPages, ...filteredConnect];

  const handleKeyDown = useCallback(
    (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch('');
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < allFiltered.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : allFiltered.length - 1
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allFiltered[selectedIndex]) {
          allFiltered[selectedIndex].action();
        }
      }
    },
    [isOpen, allFiltered, selectedIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                setSearch('');
              }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Search Input */}
                <div className="flex items-center gap-4 p-5 border-b border-white/10">
                  <Search className="text-gray-500" size={22} />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-gray-600"
                    autoFocus
                  />
                  <div className="flex items-center gap-2">
                    <kbd className="px-2.5 py-1 bg-white/5 rounded text-gray-500 text-xs font-medium border border-white/10">
                      ESC
                    </kbd>
                  </div>
                </div>

                {/* Commands List */}
                <div className="max-h-[500px] overflow-y-auto">
                  {/* Pages Section */}
                  {filteredPages.length > 0 && (
                    <div className="p-3">
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-3 py-2">
                        PAGES
                      </div>
                      {filteredPages.map((cmd, index) => (
                        <button
                          key={cmd.id}
                          onClick={cmd.action}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 text-left ${
                            index === selectedIndex
                              ? 'bg-white/10 text-white'
                              : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
                          }`}
                        >
                          <cmd.icon size={20} />
                          <span className="font-medium">{cmd.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Connect Section */}
                  {filteredConnect.length > 0 && (
                    <div className="p-3">
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider px-3 py-2">
                        CONNECT
                      </div>
                      {filteredConnect.map((cmd, index) => {
                        const globalIndex = filteredPages.length + index;
                        return (
                          <button
                            key={cmd.id}
                            onClick={cmd.action}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 text-left ${
                              globalIndex === selectedIndex
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
                            }`}
                          >
                            <cmd.icon size={20} />
                            <span className="font-medium">{cmd.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* No Results */}
                  {allFiltered.length === 0 && (
                    <div className="py-16 text-center text-gray-600">
                      No results found
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
