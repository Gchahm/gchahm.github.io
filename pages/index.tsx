import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import ProfessionalExperience from '../components/ProfessionalExperience';

const personalProjects = [
  {
    title: 'Kalendario',
    description: 'A full-stack calendar and scheduling app with a Django REST API backend (JWT/OAuth), async tasks (Celery/Redis), PostgreSQL, Stripe billing, and Azure deployment.',
    image: '/img/portfolio/kalendario.png',
    tags: ['React', 'Django', 'REST API', 'JWT', 'OAuth', 'Celery', 'Redis', 'PostgreSQL', 'Stripe', 'Azure', 'GitHub Actions'],
    github: 'https://github.com/Gchahm/Kalendario',
  },
  {
    title: 'SQLReminders',
    description: 'A C# reminder application with SQL Server integration, featuring a microservices architecture and automated testing.',
    image: '/img/portfolio/sqlreminders.png',
    tags: ['C#', '.NET', 'SQL Server', 'Microservices', 'Testing'],
    github: 'https://github.com/Gchahm/SQLReminders',
  },
  {
    title: 'Trello Automation',
    description: 'A Python-based automation system for travel agencies to monitor flight schedules, featuring Trello integration, automated notifications, and comprehensive logging.',
    image: '/img/portfolio/trello_automation.png',
    tags: ['Python', 'Trello API', 'Selenium', 'Automation', 'REST API'],
    github: 'https://github.com/Gchahm/trello_automation',
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
                  <FontAwesomeIcon icon={faSun} className="h-5 w-5" />
                ) : (
                  <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
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

        <ProfessionalExperience />

        {/* Personal Projects Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Personal Projects</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A showcase of my personal projects and open-source contributions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => (
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
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