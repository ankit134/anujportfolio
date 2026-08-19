import { assetUrl } from '../lib/assetUrl'

export const profile = {
  name: 'Ankit Shrestha',
  initials: 'AS',
  wordmark: 'ANKIT SHRESTHA',
  photo: assetUrl('avatar.svg'),
  role: 'UX/UI Designer',
  location: 'Kupondol, Lalitpur, Nepal',
  email: 'ankitshrestha543@gmail.com',
  phone: '+977 9863198492',
  tagline: 'I make complex product flows simple for users',
  heroHeadline: ['Ui', 'Ux', 'for products, flows and clarity'],
  heroSummary:
    'I design web and mobile experiences, dashboards, and design systems for teams where clarity and usability drive real outcomes.',
  specialtyHeadline:
    'I specialize in mobile app design, prototyping, and complex web interfaces for digital products',
  availability:
    'I am open to full-time UX/UI Designer roles and selected contract work. Based in Lalitpur, Nepal, available for remote collaboration.',
  copyrightLocation: 'Lalitpur, Nepal',
  cvUrl: assetUrl('cv.pdf'),
}

export const frameNavLinks = [
  { label: 'cv', href: assetUrl('cv.pdf'), external: true },
  { label: 'behance', href: 'https://www.behance.net/', external: true },
  { label: 'github', href: 'https://github.com/', external: true },
  { label: 'Mail', href: 'mailto:ankitshrestha543@gmail.com', external: true },
]

export const specialtyTags = [
  'MOBILE UI',
  'WEB UI',
  'SAAS',
  'PROTOTYPING',
  'DESIGN AUDITS',
]

export const tickers = [
  { symbol: 'FIG', label: 'FIG', price: '12 450', change: 0.42, direction: 'up' },
  { symbol: 'NIFTY', label: 'NIFTY', price: '24 891', change: 0.18, direction: 'down' },
  { symbol: 'USD', label: 'USD', price: '133.2', change: 0.05, direction: 'up' },
]

export const scrollSections = [
  { id: 'hero', type: 'sec' },
  { id: 'specialty', type: 'sec' },
  { id: 'work', type: 'sec' },
  { id: 'project-0', type: 'subsec' },
  { id: 'project-1', type: 'subsec' },
  { id: 'project-2', type: 'subsec' },
  { id: 'project-3', type: 'subsec' },
  { id: 'info', type: 'sec' },
]

export const projects = [
  {
    id: 'drop',
    title: 'Drop',
    description:
      'An event-journey mobile application focused on events and planning—helping users organize timelines and storage needs across different types of events with a clear, stage-by-stage flow.',
    tags: ['Mobile App', 'User Flows', 'UI Design', 'Prototyping'],
    image: assetUrl('projects/drop.svg'),
    imageAlt: 'Drop event journey mobile app UI',
    href: '#',
  },
  {
    id: 'tradieshome',
    title: 'TradiesHome',
    description:
      'A dual-sided job portal connecting Tradies with Homeowners. Designed flows and interfaces that make discovery, matching, and communication straightforward on mobile.',
    tags: ['Mobile App', 'User Flows', 'Wireframes', 'UI & UX design'],
    image: assetUrl('projects/tradieshome.svg'),
    imageAlt: 'TradiesHome job portal mobile interface',
    href: '#',
  },
  {
    id: 'leadhead',
    title: 'Leadhead',
    description:
      'A business software system for keeping customer contacts up to date and tracking every customer account—structured dashboards and detail views to support sales and relationship management.',
    tags: ['Web App', 'Dashboard UI', 'Information Architecture', 'Prototyping'],
    image: assetUrl('projects/leadhead.svg'),
    imageAlt: 'Leadhead CRM sales pipeline dashboard',
    href: '#',
  },
  {
    id: 'calilio',
    title: 'Calilio',
    description:
      'A cloud-based business phone system built on VoIP—streamlining business communications with clarity, responsive layouts, and intuitive navigation.',
    tags: ['Web App', 'UI & UX design', 'Responsive Design', 'VoIP'],
    image: assetUrl('projects/calilio.svg'),
    imageAlt: 'Calilio unified callbox web interface',
    href: '#',
  },
]

export const experience = [
  {
    id: 'ganesh',
    company: 'Ganesh Computing Pvt. Ltd.',
    role: 'Associate UX/UI Designer',
    period: 'Aug 2025 — Present',
    description:
      'Designed user flows with seamless transitions across product stages. Built clean, visually appealing interfaces for mobile applications and ran design reviews to identify UX improvements.',
  },
  {
    id: 'varosa',
    company: 'Varosa Technology',
    role: 'Associate UX/UI Designer',
    period: 'May 2024 — Jan 2025',
    description:
      'Designed flows and UI for web and mobile products. Created wireframes and prototypes for stakeholders and engineering, and conducted design audits on ongoing projects.',
  },
  {
    id: 'ekbana',
    company: 'EKBANA',
    role: 'Intern Frontend Developer',
    period: 'Nov 2022 — Feb 2023',
    description:
      'Built static pages with HTML, CSS, and Bootstrap. Applied design principles, color theory, and typography while using Git and GitHub for version control.',
  },
  {
    id: 'rumsan',
    company: 'Rumsan Technology',
    role: 'Intern Frontend Developer',
    period: 'Aug 2021 — Oct 2021',
    description:
      'Strengthened fundamentals in HTML, CSS, and Git workflows. Reviewed operations and suggested front-end improvements.',
  },
  {
    id: 'batti',
    company: 'Batti Baliyo',
    role: 'Sales & Marketing',
    period: 'Jul 2019 — Sep 2021',
    description:
      'Boosted brand visibility through field and digital marketing. Created SEO-friendly content using client and team feedback.',
  },
]

export const skills = [
  {
    title: 'UI & UX',
    description:
      'Modern design with a focus on information clarity, user flows, and minimalism across web and mobile.',
  },
  {
    title: 'Prototyping',
    description:
      'High-fidelity Figma prototypes for stakeholder review, usability testing, and developer handoff.',
  },
  {
    title: 'User Flows',
    description:
      'Mapping journeys from discovery to completion—reducing friction in multi-step product experiences.',
  },
  {
    title: 'Wireframing',
    description:
      'Low- and mid-fidelity layouts to validate structure before visual polish and engineering build.',
  },
  {
    title: 'Mobile UI',
    description:
      'Native-feeling mobile interfaces with attention to touch targets, hierarchy, and platform patterns.',
  },
  {
    title: 'Web UI',
    description:
      'Responsive web products, dashboards, and marketing surfaces with scalable layout systems.',
  },
  {
    title: 'Design Audits',
    description:
      'Reviewing existing products for usability gaps, consistency issues, and quick-win improvements.',
  },
  {
    title: 'HTML & CSS',
    description:
      'Engineering background helps bridge design and development with realistic, buildable specifications.',
  },
]

export const personalProjects = [
  {
    id: 'design-system',
    title: 'Product Design System',
    description:
      'A component library focused on digital products, delivered in Figma with web-ready patterns.',
    href: '#',
    soon: true,
  },
  {
    id: 'side-project',
    title: 'Side Project Lab',
    description:
      'Personal experiments in interface design, micro-interactions, and visual storytelling.',
    href: '#',
    soon: false,
  },
]
