export type TimelineEvent = {
  type: 'event';
  title: string;
  date: string;
  icon: 'star' | 'briefcase';
  color: string;
};

export type Project = {
  type: 'project';
  title: string;
  description: string;
  tags: string[];
  blogPost?: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  color: string;
};

export type TimelineItem = Project | TimelineEvent; 