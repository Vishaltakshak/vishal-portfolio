import { useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Copyright,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="text-3xl font-bold text-white font-heading">
              Vishal
            </a>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Full-stack developer building scalable applications and digital experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Vishaltakshak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/vishal-takshak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:vishaltakshakvishal@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-heading text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-white/50 mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-white/50 mt-0.5 flex-shrink-0" />
                <a href="mailto:vishaltakshakvishal@gmail.com" className="hover:text-white transition-colors">
                  vishaltakshakvishal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-5 h-5 flex items-center justify-center text-white/50 mt-0.5 font-bold text-xs border border-white/30 rounded-full">?</div>
                 <a href="tel:+917678470756" className="hover:text-white transition-colors">
                  +91-7678470756
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h4 className="text-white font-bold mb-6 font-heading text-lg">Looking for a dev?</h4>
             <p className="text-gray-400 mb-6 text-sm">
               Detailed-oriented professional ready to deliver production-grade solutions.
             </p>
             <a 
               href="mailto:vishaltakshakvishal@gmail.com"
               className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70 transition-opacity font-heading italic"
             >
               Start a conversation <ExternalLink size={14} />
             </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Copyright size={14} />
            <span>{currentYear} Vishal Takshak. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
