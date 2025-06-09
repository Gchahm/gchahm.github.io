import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import type { TimelineEvent } from '../../types/timeline';
import { formatDate } from '../../utils/date';

interface EventTimelineItemProps {
  item: TimelineEvent;
  index: number;
}

export const EventTimelineItem = ({ item, index }: EventTimelineItemProps) => {
  return (
    <motion.div
      key={item.title + item.date}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute w-full"
    >
      {/* Timeline dot */}

              <FontAwesomeIcon
                icon={item.icon === 'star' ? faStar : faBriefcase} 
                className="w-8 h-8 text-gray-600 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" 
              />


      {/* Content */}
      <div className="flex items-center justify-center transform -translate-y-1/2" 
      >
        {/* Date */}
        <div className={`w-1/2 pr-12 text-right`}>
          <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">
            {formatDate(item.date)}
          </div>
        </div>

        {/* Event details */}
        <div className={`w-1/2 pl-12`}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400 font-medium">{item.title}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 