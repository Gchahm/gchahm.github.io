import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare, faStar, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import type { TimelineItem, Project, TimelineEvent } from '../types/timeline';
import { timelineItems } from '../data/timelineItems';

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const ProjectTimelineItem = ({ item, index }: { item: Project; index: number }) => {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline bar */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${item.color} shadow-lg`}></div>

      {/* Content */}
      <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
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
              <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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

const EventTimelineItem = ({ item, index }: { item: TimelineEvent; index: number }) => {
  return (
    <motion.div
      key={item.title + item.date}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute w-full"
    >
      {/* Timeline dot */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${item.color} shadow-lg`}
      style={{ top: '50%'}}
      ></div>

      {/* Content */}
      <div className="flex items-center justify-center">
        {/* Date */}
        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {formatDate(item.date)}
          </div>
        </div>

        {/* Event details */}
        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
          <div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon 
                icon={item.icon === 'star' ? faStar : faBriefcase} 
                className="w-5 h-5 text-gray-600 dark:text-gray-400" 
              />
              <span className="text-gray-600 dark:text-gray-400 font-medium">{item.title}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return item.type === 'project' ? (
    <ProjectTimelineItem item={item} index={index} />
  ) : (
    <EventTimelineItem item={item} index={index} />
  );
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
          <div className="relative">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.type === 'project' ? item.title : item.title + item.date} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 