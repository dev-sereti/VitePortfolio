import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      status: 'Active',
      description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      verificationLink: '#',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Cost Management']
    },
    {
      title: 'Google IT Support Professional Certificate',
      issuer: 'Google',
      date: '2022',
      status: 'Active',
      description: 'Comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration, and security.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
      verificationLink: '#',
      skills: ['IT Support', 'Troubleshooting', 'Networking', 'System Administration']
    },
    {
      title: 'International Computer Driving Licence (ICDL)',
      issuer: 'ICDL Foundation',
      date: '2021',
      status: 'Active',
      description: 'International certification demonstrating competence in computer skills and digital literacy.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      verificationLink: '#',
      skills: ['Digital Literacy', 'Office Applications', 'Computer Skills', 'Productivity']
    },
    {
      title: 'ALX Virtual Assistant Certificate',
      issuer: 'ALX',
      date: '2022',
      status: 'Active',
      description: 'Specialized training in virtual assistance, project management, and remote work best practices.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
      verificationLink: '#',
      skills: ['Virtual Assistance', 'Project Management', 'Remote Work', 'Communication']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Certificate image/header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <CheckCircle size={14} />
                    <span>{cert.status}</span>
                  </div>
                </div>

                {/* Award icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Certificate content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {cert.date}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills covered */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification link */}
                <motion.a
                  href={cert.verificationLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span>Verify Certificate</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Continuous Learning
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '4', label: 'Active Certifications' },
              { number: '100+', label: 'Hours of Training' },
              { number: '2023', label: 'Latest Certification' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I believe in continuous learning and staying updated with the latest technologies and industry best practices. 
            Currently pursuing additional certifications in cloud architecture and cybersecurity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;