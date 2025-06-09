import type { TimelineItem as TimelineItemType } from '../types/timeline';
import { ProjectTimelineItem } from './ProjectTimelineItem';
import { EventTimelineItem } from './EventTimelineItem';
import { SpacerTimelineItem } from './SpacerTimelineItem';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  switch (item.type) {
    case 'project':
      return <ProjectTimelineItem item={item} index={index} />;
    case 'event':
      return <EventTimelineItem item={item} index={index} />;
    case 'spacer':
      return <SpacerTimelineItem item={item} index={index} />;
  }
}; 