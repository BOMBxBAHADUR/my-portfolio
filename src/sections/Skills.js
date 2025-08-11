import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiCode, FiMonitor, FiUsers, FiTrendingUp } from 'react-icons/fi';

const Skills = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'HTML, CSS & JavaScript', level: 95, color: '#6366F1' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: '.NET', level: 70, color: '#512BD4' }
      ]
    },
    {
      title: 'Applications & Software',
      icon: FiMonitor,
      skills: [
        { name: 'Photoshop', level: 85, color: '#31A8FF' },
        { name: 'Canva', level: 90, color: '#00C4CC' },
        { name: 'WordPress', level: 80, color: '#21759B' },
        { name: 'Anaconda', level: 70, color: '#44A833' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: FiUsers,
      skills: [
        { name: 'Communication', level: 92, color: '#10B981' },
        { name: 'Leadership', level: 85, color: '#6366F1' },
        { name: 'Team Collaboration', level: 90, color: '#F59E0B' },
        { name: 'Time Management', level: 88, color: '#EF4444' }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  // New: sync container for fully simultaneous child animations
  const syncContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0 } }
  };

  const itemVariants = {
    hidden: { y: 16, scale: 0.98 },
    visible: { y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <section ref={sectionRef} id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A diverse skill set combining technical expertise with strong interpersonal abilities
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={controls} className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants} className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-color rounded-full flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skill.name} variants={itemVariants} transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.45 }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid - now fully in sync */}
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-16">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-8 gradient-text text-center">
              Additional Competencies
            </h3>
            
            <motion.div variants={syncContainerVariants} initial="hidden" animate={controls} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Problem Solving', icon: '🧩' },
                { name: 'Creative Thinking', icon: '💡' },
                { name: 'Project Management', icon: '📊' },
                { name: 'Business Strategy', icon: '📈' },
                { name: 'Data-Driven Decisions', icon: '📊' },
                { name: 'Financial Literacy', icon: '💵' },
                { name: 'Marketing Fundamentals', icon: '📢' },
                { name: 'Collaboration', icon: '🤝' },
                { name: 'Continuous Learning', icon: '📚' },
                { name: 'Communication', icon: '💬' },
                { name: 'Innovation', icon: '🚀' },
                { name: 'Analytical Skills', icon: '📊' }
              ].map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="text-3xl mb-2" aria-hidden="true">{skill.icon}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div variants={itemVariants} initial="hidden" animate={controls} transition={{ duration: 0.45 }} className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-color text-white px-6 py-3 rounded-full">
            <FiTrendingUp className="w-5 h-5" />
            <span className="font-medium">Continuously expanding skill set</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
