import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);

    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Certifications />
                  <Contact />
                </motion.div>
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
