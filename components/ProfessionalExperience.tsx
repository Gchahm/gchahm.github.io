import { motion } from 'framer-motion';
import { TimelineItem } from './timeline/TimelineItem';
import { timelineItems } from '../data/timelineItems';

export default function ProfessionalExperience() {
  let projectIndex = 0;

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
            {timelineItems.map((item) => {
              const index = item.type === 'project' ? projectIndex++ : 0;
              return (
                <TimelineItem 
                  key={item.type === 'project' ? item.title : item.title + item.date} 
                  item={item} 
                  index={index} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 