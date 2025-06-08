import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const projects = [
  {
    title: 'Exsequor',
    description: 'A task management application',
    image: '/img/portfolio/Exsequor.png',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Kalendario',
    description: 'Calendar and scheduling application',
    image: '/img/portfolio/kalendario.png',
    tags: ['React', 'Firebase', 'Material-UI'],
  },
  {
    title: 'Safe',
    description: 'Secure file storage system',
    image: '/img/portfolio/safe.png',
    tags: ['React', 'AWS', 'Node.js'],
  },
  {
    title: 'Game',
    description: 'Interactive gaming platform',
    image: '/img/portfolio/game.png',
    tags: ['Unity', 'C#', 'WebGL'],
  },
  {
    title: 'Cake',
    description: 'E-commerce platform for baked goods',
    image: '/img/portfolio/cake.png',
    tags: ['React', 'Stripe', 'Node.js'],
  },
  {
    title: 'Circus',
    description: 'Event management system',
    image: '/img/portfolio/circus.png',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>Gustavo Francelino - Portfolio</title>
        <meta name="description" content="Multilingual IT Professional holding a Hons Bachelor Degree in Telecommunications Engineering and Software Development MicroMasters Program paired with experience spanning over 4 years." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">GF</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Gustavo Francelino
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Telecommunications Engineer & Software Developer
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A showcase of my recent work and personal projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={index < 3}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 