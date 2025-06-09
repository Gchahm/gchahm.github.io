import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare, faBuilding } from '@fortawesome/free-solid-svg-icons';
import type { Project } from '../../types/timeline';
import { formatDate } from '../../utils/date';

interface ProjectTimelineItemProps {
  item: Project;
  index: number;
}

export const ProjectTimelineItem = ({ item, index }: ProjectTimelineItemProps) => {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >


      {/* Content */}
      <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        
      {/* Timeline dot */}
      <FontAwesomeIcon
        icon="circle"
        className="w-8 h-8 text-gray-600 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 z-10"
      />
      
      {/* Date */}
        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {`${formatDate(item.startDate)} - ${formatDate(item.endDate)}`}
          </div>
        </div>


        {/* Project details */}
        <div className={`w-1/2 py-36 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FontAwesomeIcon 
                icon={item.companyIcon || faBuilding} 
                className="w-5 h-5 text-gray-600 dark:text-gray-400" 
              />
              <span className="text-gray-600 dark:text-gray-400 font-medium">{item.company}</span>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              {item.blogPost ? (
                <a
                  href={item.blogPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  aria-label={`View ${item.title} documentation`}
                >
                  <span>{item.title}</span>
                  <FontAwesomeIcon icon={faUpRightFromSquare} className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-600 dark:text-gray-400">{item.title}</span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
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
  );
}; 