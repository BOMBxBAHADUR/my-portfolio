import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-primary-color"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Utsab Katuwal</h3>
              <p className="text-gray-300 dark:text-gray-400 mb-4">
                A collaborative leader with strong problem-solving skills and expert time management. 
                Driven by a passion for innovation and continuous improvement.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: FiGithub, href: 'https://github.com/BOMBxBAHADUR' },
                  { name: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/in/utsab-katuwal' },
                  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/bomb_x_bahadur/' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-lg hover:bg-primary-color hover:text-white transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300 dark:text-gray-400">
                <p>📧 katwalutsab36@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 dark:border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-300 dark:text-gray-400 text-sm mb-4 md:mb-0"
              >
                © {currentYear} Utsab Katuwal. All rights reserved.
              </motion.div>

              {/* Made with Love */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center text-gray-300 dark:text-gray-400 text-sm"
              >
                Made with{' '}
                <FiHeart className="mx-1 text-red-500 animate-pulse" />
                {' '}in Nepal
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-color text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
