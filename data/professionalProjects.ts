import { TimelineItem } from '../types/timeline';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

export const professionalProjects: TimelineItem[] = [
    {
    type: 'project',
    title: 'Word eSignature Integration',
    description: 'Led the end-to-end integration of electronic signatures into Microsoft Word Desktop, from initial specifications to successful release. Collaborated with PMs to refine requirements and shape product architecture, while onboarding the engineering team into the Word repository through documentation and training sessions, reducing ramp-up time by 40%. Owned technical execution from design to deployment, ensuring seamless integration with Word documents and maintaining alignment with cross-functional stakeholders.',
    tags: ['Microsoft Word', 'SharePoint', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'C++', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-create-request-word',
    company: 'Microsoft',
    companyIcon: faMicrosoft,
    role: 'Senior Software Engineer',
    startDate: '2024-06',
    endDate: '2025-06',
    color: 'bg-blue-500'
  },

  {
    type: 'project',
    title: 'SharePoint eSignature',
    description: 'Led front-end architecture for SharePoint eSignature, a solution that simplifies document signing and sharing while ensuring Microsoft 365 security and compliance. Designed dynamic signature mockups and built reusable components to standardize e-signature workflows across Microsoft applications. Collaborated with designers and PMs to enhance usability, contributing to a 40% increase in product adoption. The solution enables secure document signing for both internal and external users, with comprehensive digital audit trails for verification.',
    tags: ['SharePoint', 'Microsoft Teams', 'React', 'JavaScript', 'TypeScript', 'C#', '.NET Core', 'CQRS', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/microsoft-365/syntex/esignature-send-requests',
    company: 'Microsoft',
    companyIcon: faMicrosoft,
    role: 'Senior Software Engineer',
    startDate: '2022-09',
    endDate: '2024-06',
    color: 'bg-green-500'
  },
  {
    type: 'event',
    title: 'Promotion to Software Engineer 2',
    date: '2022-09',
    icon: 'star',
    color: 'bg-green-500'
  },
  {
    type: 'project',
    title: 'Microsoft Teams Approvals',
    description: 'Contributed to the development of Microsoft Teams Approvals, a native Teams application that enables users to create, manage, and share approvals directly from their hub for teamwork. Implemented integration with third-party signature providers, allowing users to seamlessly request and collect electronic signatures within approval workflows. This solution enhanced document signing capabilities and streamlined cross-platform collaboration for Teams users.',
    tags: ['C#', '.NET Core', 'React', 'JavaScript', 'TypeScript', 'Microsoft Teams', 'REST API', 'Webhooks'],
    blogPost: 'https://learn.microsoft.com/en-us/power-automate/teams/native-approvals-in-teams',
    company: 'Microsoft',
    companyIcon: faMicrosoft,
    role: 'Software Engineer',
    startDate: '2021-05',
    endDate: '2022-09',
    color: 'bg-purple-500'
  },
  {
    type: 'event',
    title: 'Started at Microsoft - Software Engineer',
    date: '2021-05',
    icon: 'briefcase',
    color: 'bg-purple-500'
  },
  {
    type: 'project',
    title: 'Acuitas 3',
    description: 'Contributed to the development of Acuitas 3, an integrated omnichannel eyecare software solution that provides a unified platform for optical practices. The system seamlessly connects online bookings, clinical records, patient communications, and practice management into a single cohesive platform, enabling eyecare businesses to deliver consistent patient experiences across all channels.',
    blogPost: 'https://www.ocuco.com/industry-solutions/independents/acuitas-3/',
    tags: ['C#', '.NET Core', 'REST API', 'CQRS', 'SQL'],
    company: 'Ocuco',
    role: 'Software Engineer',
    startDate: '2021-03',
    endDate: '2021-05',
    color: 'bg-purple-500'
  },
  {
    type: 'event',
    title: 'Started at Ocuco - Software Engineer',
    date: '2021-03',
    icon: 'briefcase',
    color: 'bg-purple-500'
  },
  {
    type: 'project',
    title: 'Internal Project Management Tool',
    description: 'Created a .NET/Angular application used by project managers to schedule on-site visits, journal their work, and manage time for each project. The app also generated invoices for customers and produced BI reports for management. This solution improved productivity and reduced non-billable work issues by 30\%',
    tags: ['C#', '.NET Core', 'Angular', 'JavaScript', 'TypeScript', 'REST API', 'CQRS', 'SQL'],
    company: 'Advance Systems',
    role: 'Software Engineer',
    startDate: '2017-09',
    endDate: '2021-03',
    color: 'bg-purple-500'
  },
  {
    type: 'event',
    title: 'Promotion to Software Developer',
    date: '2017-09',
    icon: 'star',
    color: 'bg-purple-500'
  },
  {
    type: 'spacer',
    height: '8rem'
  },
  {
    type: 'event',
    title: 'Started at Advance Systems - Support Analyst',
    date: '2016-02',
    icon: 'briefcase',
    color: 'bg-purple-500'
  }
]; 