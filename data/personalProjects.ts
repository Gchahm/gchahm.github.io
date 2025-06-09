import { PersonalProject } from '../types/personalProject';

export const personalProjects: PersonalProject[] = [
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