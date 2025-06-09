import { motion } from 'framer-motion';
import type { Spacer } from '../types/timeline';

interface SpacerTimelineItemProps {
  item: Spacer;
  index: number;
}

export const SpacerTimelineItem = ({ item, index }: SpacerTimelineItemProps) => {
  return (
    <motion.div
      key={`spacer-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ height: item.height }}
      className="relative"
    />
  );
}; 