import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import profilePic from '../profile-picture/profilepic.jpg';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/BOMBxBAHADUR', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/utsab-katwal', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/bomb_x_bahadur/', label: 'Instagram' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 md:top-20 left-6 md:left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 md:opacity-20 blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 md:bottom-20 right-6 md:right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-10 md:opacity-20 blur-xl"
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-color text-white rounded-full text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Utsab Katwal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A collaborative leader with strong problem-solving skills and expert time management. 
              Driven by a passion for innovation and continuous improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                <FiMail className="mr-2" />
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-3 sm:space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:shadow-md transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-color dark:hover:text-primary-color"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <img 
                  src={profilePic} 
                  alt="Utsab Katwal" 
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'center -50px' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl font-bold" style={{ display: 'none' }}>
                  UK
                </div>
              </div>
              
              {/* Floating Info Cards */}
              {shouldReduceMotion ? (
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Currently studying</div>
                  <div className="font-semibold text-primary-color">BSc Computing</div>
                </div>
              ) : (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400">Currently studying</div>
                  <div className="font-semibold text-primary-color">BSc Computing</div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center" aria-hidden="true">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
