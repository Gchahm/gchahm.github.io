import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const professionalWork = [
  {
    title: 'Word eSignature Integration',
    description: 'Developed a key feature enabling electronic signatures directly within Microsoft Word documents. Implemented support for creating signature requests from Word documents, prepositioned signature fields, and seamless PDF conversion for the signing process.',
    tags: ['Microsoft Word', 'SharePoint', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'C++', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-create-request-word',
    company: 'Microsoft',
    role: 'Software Engineer',
    startDate: '2024-01',
    endDate: '2024-03',
    color: 'bg-blue-500'
  },
  {
    title: 'SharePoint eSignature',
    description: 'Developed a key feature for Microsoft SharePoint enabling seamless electronic signatures directly within document libraries. Implemented support for multiple signature providers, sequential signing workflows, and integration with Microsoft Teams Approvals.',
    tags: ['SharePoint', 'Microsoft Teams', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-send-requests',
    company: 'Microsoft',
    role: 'Software Engineer',
    startDate: '2023-10',
    endDate: '2023-12',
    color: 'bg-green-500'
  },
  {
    title: 'Microsoft Teams Approvals',
    description: 'Implemented third-party integration with Microsoft Teams Approvals, enabling seamless workflow automation between external systems and Teams. Developed integration solutions that leverage Power Automate infrastructure to connect third-party applications with Teams approval workflows, enhancing cross-platform collaboration and process automation.',
    tags: ['C#', '.NET Core', 'React', 'JavaScript', 'TypeScript', 'Microsoft Teams', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/power-automate/teams/native-approvals-in-teams',
    company: 'Microsoft',
    role: 'Software Engineer',
    startDate: '2021-05',
    endDate: '2023-09',
    color: 'bg-purple-500'
  }
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export default function ProfessionalExperience() {
  return (
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          {/* Timeline items */}
          <div>
            {professionalWork.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline bar */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${project.color} shadow-lg`}></div>

                {/* Content */}
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Date */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {formatDate(project.startDate)} - {formatDate(project.endDate)}
                    </div>
                  </div>

                  {/* Project details */}
                  <div className={`w-1/2 py-36 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{project.company}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        {project.blogPost ? (
                          <a
                            href={project.blogPost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                            aria-label={`View ${project.title} documentation`}
                          >
                            <span>{project.title}</span>
                            <FontAwesomeIcon icon={faUpRightFromSquare} className="w-4 h-4" />
                          </a>
                        ) : (
                          <span className="text-gray-600 dark:text-gray-400">{project.title}</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 