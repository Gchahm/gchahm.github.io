import type { TimelineItem as TimelineItemType } from '../../types/timeline';
import { ProjectTimelineItem } from './ProjectTimelineItem';
import { EventTimelineItem } from './EventTimelineItem';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return item.type === 'project' ? (
    <ProjectTimelineItem item={item} index={index} />
  ) : (
    <EventTimelineItem item={item} index={index} />
  );
}; 