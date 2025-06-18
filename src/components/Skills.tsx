import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Server, 
  Cloud, 
  Database, 
  Settings,
  Monitor,
  Wrench
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'Python', 'Go (Basic)', 'Shell', 'HTML5', 'CSS3'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      icon: Monitor,
      skills: ['React', 'React Native', 'Tailwind CSS', 'Firebase', 'Responsive Design'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['FastAPI', 'Django REST', 'Redis', 'RabbitMQ', 'RESTful APIs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Docker', 'Git', 'Jenkins (Basic)', 'CI/CD', 'Linux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS (Certified)', 'Firebase', 'Google Cloud', 'Azure'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'IT Support',
      icon: Wrench,
      skills: ['Windows', 'Linux', 'Network Setup', 'Ticketing Systems', 'Troubleshooting'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex technical challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-150 transition-transform duration-200`}></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Skill level indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Machine Learning', 'Kubernetes', 'GraphQL', 'TypeScript', 
              'Microservices', 'Blockchain', 'AI/ML', 'Cybersecurity'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;