import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const professionalWork = [
  {
    title: 'SharePoint eSignature Integration',
    description: 'Developed a key feature for Microsoft SharePoint enabling seamless electronic signatures directly within document libraries. Implemented support for multiple signature providers, sequential signing workflows, and integration with Microsoft Teams Approvals.',
    image: '/img/portfolio/sharepoint_esignature.png',
    tags: ['SharePoint', 'Microsoft Teams', 'Enterprise Integration', 'Workflow Automation', 'UI/UX'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-send-requests',
    company: 'Microsoft',
    role: 'Software Engineer',
    duration: '2023-2024'
  },
];

const personalProjects = [
  {
    title: 'Exsequor',
    description: 'A task management application',
    image: '/img/portfolio/Exsequor.png',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
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

        {/* Professional Experience Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Key projects and contributions from my professional career
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {professionalWork.map((project, index) => (
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
                      priority={true}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{project.company}</span>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{project.role}</span>
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{project.duration}</span>
                    </div>
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
                    {project.blogPost && (
                      <a
                        href={project.blogPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        aria-label={`View ${project.title} documentation`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        View Documentation
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.44 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
                        </svg>
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