import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vishaltakshakvishal@gmail.com',
      href: 'mailto:vishaltakshakvishal@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7678470756',
      href: 'tel:+917678470756',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Delhi, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Get In </span>
              <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind? Let's work together to create something amazing
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
             <motion.div
               className="grid md:grid-cols-3 gap-6"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.6, delay: 0.4 }}
             >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex flex-col items-center p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 group border border-white/10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="p-4 bg-white/10 rounded-full border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-gray-200 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
