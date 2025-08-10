import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiDatabase, FiShoppingCart } from 'react-icons/fi';

const Projects = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  // New: independent controllers so stats & CTA animate when they enter viewport (once)
  const statsRef = useRef(null);
  const statsControls = useAnimation();
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  const ctaRef = useRef(null);
  const ctaControls = useAnimation();
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  useEffect(() => { if (inView) controls.start('visible'); }, [inView, controls]);
  useEffect(() => { if (statsInView) statsControls.start('visible'); }, [statsInView, statsControls]);
  useEffect(() => { if (ctaInView) ctaControls.start('visible'); }, [ctaInView, ctaControls]);

  const projects = [
    {
      title: 'Bonzai',
      description: 'Developed a web app with HTML and CSS, featuring product, blog, contact form, and about us pages. Demonstrated front-end development and UI design skills.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🌿',
      github: 'https://github.com/BOMBxBAHADUR/Project-Bonzai',
      live: 'https://bombxbahadur.github.io/Project-Bonzai/',
      category: 'Web Development',
      icon: FiCode
    },
    {
      title: 'Gau Besi Computers',
      description: 'Developed a Python-based Laptop Inventory System with buy, sell, update, and view functions. Demonstrated modular code and file handling skills.',
      technologies: ['Python', 'File I/O', 'Data Management'],
      image: '💻',
      github: 'https://github.com/BOMBxBAHADUR/Gau-Besi-Computers',
      live: null,
      category: 'Desktop Application',
      icon: FiDatabase
    },
    {
      title: 'AeroGems',
      description: 'Developed an e-commerce app with secure authentication, admin interface, and dynamic cart using Java, JSP, and JDBC.',
      technologies: ['Java', 'JSP', 'JDBC', 'MySQL'],
      image: '💎',
      github: 'https://github.com/BOMBxBAHADUR/AeroGems',
      live: null,
      category: 'E-commerce',
      icon: FiShoppingCart
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  // New: no-stagger container so children animate fully in sync
  const syncContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0 } }
  };

  const itemVariants = {
    hidden: { y: 16, scale: 0.98 },
    visible: { y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <section ref={sectionRef} id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -3 }} className="card group cursor-pointer">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-color rounded-lg flex items-center justify-center mr-4">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-primary-color font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="text-4xl" aria-hidden="true">{project.image}</div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      transition={{ delay: index * 0.08 + techIndex * 0.05, duration: 0.35 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center flex-1 py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    Code
                  </motion.a>
                )}
                
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center flex-1 py-2 px-4 bg-primary-color text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics - animate on enter, in sync (no stagger) */}
        <motion.div
          ref={statsRef}
          variants={syncContainerVariants}
          initial="hidden"
          animate={statsControls}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: '3', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies Used' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center p-5 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-gray-200/70 dark:border-white/10 shadow-sm">
              <div className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action - animate on enter, in sync (no stagger) */}
        <div className="mt-16 text-center">
          <motion.div
            ref={ctaRef}
            variants={syncContainerVariants}
            initial="hidden"
            animate={ctaControls}
            className="card max-w-2xl mx-auto"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-4 gradient-text">
              Interested in working together?
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </motion.p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
