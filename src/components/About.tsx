import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Zap, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const attributes = [
    { icon: Heart, text: 'Passionate about technology and innovation' },
    { icon: Target, text: 'Detail-oriented with focus on quality' },
    { icon: Zap, text: 'Quick learner and problem solver' },
    { icon: Award, text: 'Committed to continuous improvement' },
    { icon: Coffee, text: 'Team player with strong work ethic' },
    { icon: User, text: 'Excellent communication skills' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in building scalable web applications, 
                mobile apps, and providing comprehensive IT support solutions. With a strong foundation in 
                modern technologies and cloud platforms, I enjoy tackling complex problems and creating 
                innovative solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My journey in technology has led me through various roles, from freelance development to 
                volunteer work, always with a focus on delivering high-quality solutions that make a real 
                impact. I'm AWS certified and continuously expanding my skill set to stay current with 
                industry trends.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, mentoring aspiring 
                developers, and exploring new technologies that can solve real-world problems.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Attributes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {attributes.map((attribute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <attribute.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {attribute.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '15+', label: 'Projects Completed' },
            { number: '4', label: 'Certifications' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;