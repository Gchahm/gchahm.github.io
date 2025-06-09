import { TimelineItem } from '../types/timeline';

export const timelineItems: TimelineItem[] = [
  {
    type: 'project',
    title: 'Microsoft Teams Approvals',
    description: 'Implemented third-party integration with Microsoft Teams Approvals, enabling seamless workflow automation between external systems and Teams. Developed integration solutions that leverage Power Automate infrastructure to connect third-party applications with Teams approval workflows, enhancing cross-platform collaboration and process automation.',
    tags: ['C#', '.NET Core', 'React', 'JavaScript', 'TypeScript', 'Microsoft Teams', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/power-automate/teams/native-approvals-in-teams',
    company: 'Microsoft',
    role: 'Software Engineer',
    startDate: '2021-05',
    endDate: '2023-09',
    color: 'bg-purple-500'
  },
  {
    type: 'event',
    title: 'Promotion to Senior Software Engineer',
    date: '2023-10',
    icon: 'star',
    color: 'bg-green-500'
  },
  {
    type: 'project',
    title: 'SharePoint eSignature',
    description: 'Developed a key feature for Microsoft SharePoint enabling seamless electronic signatures directly within document libraries. Implemented support for multiple signature providers, sequential signing workflows, and integration with Microsoft Teams Approvals.',
    tags: ['SharePoint', 'Microsoft Teams', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-send-requests',
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    startDate: '2023-10',
    endDate: '2023-12',
    color: 'bg-green-500'
  },
  {
    type: 'project',
    title: 'Word eSignature Integration',
    description: 'Developed a key feature enabling electronic signatures directly within Microsoft Word documents. Implemented support for creating signature requests from Word documents, prepositioned signature fields, and seamless PDF conversion for the signing process.',
    tags: ['Microsoft Word', 'SharePoint', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'C++', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-create-request-word',
    company: 'Microsoft',
    role: 'Senior Software Engineer',
    startDate: '2024-01',
    endDate: '2024-03',
    color: 'bg-blue-500'
  },
  {
    type: 'event',
    title: 'Started at Microsoft',
    date: '2021-05',
    icon: 'briefcase',
    color: 'bg-purple-500'
  }
]; 