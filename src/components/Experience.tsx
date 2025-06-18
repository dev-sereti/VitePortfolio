import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Full Stack Developer',
      company: 'Taransvar',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Freelance',
      description: 'Developing custom web applications and mobile solutions for various clients, specializing in React, React Native, and backend API development.',
      achievements: [
        'Built 10+ full-stack applications using modern technologies',
        'Implemented automated deployment pipelines reducing deployment time by 60%',
        'Collaborated with international clients across different time zones',
        'Maintained 98% client satisfaction rate'
      ],
      technologies: ['React', 'React Native', 'FastAPI', 'Django', 'AWS', 'Docker']
    },
    {
      title: 'Volunteer IT Support Specialist',
      company: 'Wanawake Kwa Wanawake',
      location: 'Kenya',
      period: '2021 - 2022',
      type: 'Volunteer',
      description: 'Provided comprehensive IT support and training to empower women in technology, focusing on digital literacy and technical skill development.',
      achievements: [
        'Trained 50+ women in basic computer skills and digital literacy',
        'Set up and maintained IT infrastructure for the organization',
        'Developed training materials and conducted workshops',
        'Reduced technical issues by 70% through proactive maintenance'
      ],
      technologies: ['Windows', 'Linux', 'Network Administration', 'Training', 'Support']
    },
    {
      title: 'ICT Trainee',
      company: 'Kenya Forestry Research Institute (KEFRI)',
      location: 'Nairobi, Kenya',
      period: '2020 - 2021',
      type: 'Internship',
      description: 'Gained hands-on experience in enterprise IT systems, database management, and research data analysis while supporting the institutes digital transformation initiatives.',
      achievements: [
        'Assisted in digitizing research data and improving data accessibility',
        'Supported network infrastructure maintenance and upgrades',
        'Developed automated scripts for data processing tasks',
        'Contributed to the institutes digital transformation strategy'
      ],
      technologies: ['Database Management', 'Data Analysis', 'Network Support', 'Python', 'Excel']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through various roles in technology, from freelance development to volunteer work
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        experience.type === 'Freelance' 
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                          : experience.type === 'Volunteer'
                          ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {experience.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                      <Calendar size={16} />
                      <span className="font-medium">{experience.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to bring my experience to your next project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;