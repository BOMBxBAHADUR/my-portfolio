import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiUser, FiMail, FiBookOpen, FiAward } from 'react-icons/fi';

const About = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const educationData = [
    {
      degree: 'BSc (Hons) Computing',
      institution: 'London Metropolitan University',
      location: 'Islington College, Kamalpokhari, Kathmandu',
      period: 'Nov, 2022 - present',
      icon: FiBookOpen
    },
    {
      degree: 'SLC',
      institution: 'Prativa Secondary School',
      location: 'National Examination Board, Pokhara',
      period: 'Jul, 2020 - Jun, 2022',
      icon: FiAward
    }
  ];

  const personalInfo = [
    { icon: FiMail, label: 'Email', value: 'katwalutsab36@gmail.com' }
  ];

  const itemVariants = {
    hidden: { y: 16, scale: 0.98 },
    visible: { y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <section ref={sectionRef} id="about" className="section bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A collaborative leader with strong problem-solving skills and expert time management. 
            Known for creative thinking and guiding teams to achieve goals while fostering a positive work environment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Info */}
          <motion.div variants={itemVariants} initial="hidden" animate={controls}>
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-color rounded-full flex items-center justify-center mr-4">
                  <FiUser className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h3>
                  <p className="text-gray-600 dark:text-gray-400">Software Developer & Student</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Driven by a passion for innovation and continuous improvement, I am a collaborative leader 
                with strong problem-solving skills and expert time management. Known for creative thinking 
                and guiding teams to achieve goals while fostering a positive work environment.
              </p>

              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mr-4">
                      <info.icon className="w-5 h-5 text-primary-color" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                      <div className="font-medium text-gray-900 dark:text-white">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div variants={itemVariants} initial="hidden" animate={controls}>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
              
              <div className="space-y-6">
                {educationData.map((education, index) => (
                  <motion.div
                    key={education.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < educationData.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-color to-transparent" aria-hidden="true"></div>
                    )}
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-primary-color rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <education.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h4>
                          <span className="text-sm text-primary-color font-medium">{education.period}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{education.institution}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{education.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Preview */}
            <motion.div variants={itemVariants} initial="hidden" animate={controls} transition={{ delay: 0.1 }} className="card mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'AWS Cloud Quest: Cloud Practitioner',
                  'AWS Academy Machine Learning',
                  'AWS Academy Data Engineering',
                  'AWS Academy Cloud Foundations'
                ].map((cert, index) => (
                  <motion.div key={cert} variants={itemVariants} transition={{ delay: 0.1 + index * 0.06, duration: 0.35 }} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-2 h-2 bg-primary-color rounded-full mr-3" aria-hidden="true"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
