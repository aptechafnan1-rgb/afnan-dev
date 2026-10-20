// Portfolio data, banners, Aptech credentials, and initial media assets

import saasEcommerceImg from '../assets/images/saas_ecommerce_showcase_1792478660055.jpg';
import devWorkspaceImg from '../assets/images/developer_workspace_setup_1792478660678.jpg';
import customSolutionsImg from '../assets/images/custom_solutions_banner_1792478661428.jpg';
import clientConsultationImg from '../assets/images/client_consultation_tech_1792478661778.jpg';

export const APTECH_STUDENT_BANNER = '/assets/aistudio/From_Aptech_Student_to_Web_Developer_b75c3357.png';
export const NEON_DEV_BANNER = '/assets/aistudio/Neon_Web_Developer_Portfolio_Banner_655aa162.png';
export const APTECH_DIPLOMA_BANNER = '/assets/aistudio/Aptech_Web_Developer_Portfolio_Banner_15339c2a.png';
export const PRIMARY_SIGNATURE_BANNER = '/assets/aistudio/Professional_Web_Developer_Portfolio_Banner_1bd89149.png';

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageSrc: string;
  tagline: string;
  features: string[];
  ctaText: string;
  isPrimary?: boolean;
  isAptech?: boolean;
}

export const INITIAL_BANNERS: BannerItem[] = [
  {
    id: 'aptech-diploma-banner',
    title: 'Aptech Certified Professional Web Developer',
    subtitle: 'From Aptech Student to Real World Enterprise Projects',
    category: 'Aptech Diploma Certification',
    imageSrc: APTECH_DIPLOMA_BANNER,
    tagline: 'Learning Today, Building Tomorrow · Skills + Education = Better Future',
    features: ['Diploma in IT', 'Aptech Certified', 'Full-Stack MERN', 'Real World Ready'],
    ctaText: 'View Diploma & Projects',
    isPrimary: true,
    isAptech: true
  },
  {
    id: 'aptech-journey-banner',
    title: 'From Aptech Student to High-End Web Developer',
    subtitle: 'Same Dream... Bigger Skills... But with Better Skills!',
    category: 'Aptech Success Story',
    imageSrc: APTECH_STUDENT_BANNER,
    tagline: 'Aptech Computer Education · Learn | Practice | Get Hired',
    features: ['Modern Websites', 'Responsive Design', 'Clean Code', 'Performance Focused'],
    ctaText: "Let's Work Together",
    isAptech: true
  },
  {
    id: 'neon-dev-banner',
    title: 'Professional Web Developer & Modern UI Architect',
    subtitle: 'I build fast, responsive and modern websites that turn your ideas into reality.',
    category: 'Modern Web Engineering',
    imageSrc: NEON_DEV_BANNER,
    tagline: 'Code Today, Build Tomorrow',
    features: ['Fast Performance', 'Responsive Design', 'Clean & Modern UI', 'SEO Friendly'],
    ctaText: 'Hire Web Engineer'
  },
  {
    id: 'primary-dev-banner',
    title: 'Professional Web Developer Suite',
    subtitle: 'Responsive | Fast | Modern | SEO Friendly',
    category: 'Full-Stack Portfolio Identity',
    imageSrc: PRIMARY_SIGNATURE_BANNER,
    tagline: 'Build Your Ideas Into Reality',
    features: ['Website Development', 'Custom Solutions', 'Maintenance', 'SEO Friendly'],
    ctaText: 'Explore Full Arsenal'
  },
  {
    id: 'saas-ecommerce-banner',
    title: 'High-Performance E-Commerce & SaaS Platforms',
    subtitle: 'Engineered for Growth & High Conversions',
    category: 'Web Applications',
    imageSrc: saasEcommerceImg,
    tagline: 'Enterprise Speed · Scalable Systems',
    features: ['Stripe/PayPal Integration', 'Real-Time Inventory', 'Sub-second Page Load', 'Advanced Analytics'],
    ctaText: 'View E-Commerce Specs'
  },
  {
    id: 'developer-workspace-banner',
    title: 'Modern Production Lab & Engineering Studio',
    subtitle: 'Clean Code, Modern Stack, Rigorous Testing',
    category: 'Engineering Standards',
    imageSrc: devWorkspaceImg,
    tagline: 'Code Create Innovate',
    features: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'CI/CD Pipelines'],
    ctaText: 'Inspect Tech Stack'
  },
  {
    id: 'custom-solutions-banner',
    title: 'Custom Web Solutions & Multi-Device Ecosystem',
    subtitle: 'Multi-Device Seamless Experience',
    category: 'Cross-Platform UI/UX',
    imageSrc: customSolutionsImg,
    tagline: 'Clean Code · Scalable · Modern',
    features: ['Fluid Multi-Device Grid', 'Glassmorphism UI', 'Optimized Latency', 'PWA Ready'],
    ctaText: 'Explore Architecture'
  }
];

export interface AptechDiplomaInfo {
  degreeName: string;
  institution: string;
  studentName: string;
  statement: string;
  status: string;
  year: string;
  phone: string;
  email: string;
  highlights: string[];
  coursework: string[];
  bannerImages: string[];
}

export const APTECH_INFO: AptechDiplomaInfo = {
  degreeName: 'Diploma in Information Technology & Web Development',
  institution: 'Aptech Computer Education',
  studentName: 'Afnan',
  statement: 'Maine Aptech se Professional Web Development ka Diploma mukammal kiya hai. Aptech mein rigorous practical training, live real-world projects, clean coding standards, aur modern frameworks ki bunyad par maine expert full-stack developer banne ka safar tay kiya hai.',
  status: 'Certified Graduate · Future Ready',
  year: '2024–2025',
  phone: '+92 300 1234567',
  email: 'aptechafnan1@gmail.com',
  highlights: [
    'Official Diploma in Information Technology & Modern Web Development from Aptech',
    'Specialized in MERN Stack (MongoDB, Express, React, Node.js)',
    'Practical hands-on training with Git, GitHub, REST APIs & Responsive Architecture',
    'Proven track record of converting Aptech classroom concepts into high-converting client websites'
  ],
  coursework: [
    'HTML5 & Modern CSS3 Grid/Flexbox',
    'Advanced JavaScript (ES6+ & Asynchronous Programming)',
    'React.js State Management & Modern Components',
    'Node.js & Express.js REST API Architecture',
    'MongoDB Database Modeling & Aggregations',
    'Cross-Device Mobile Responsive Optimization',
    'SEO Friendly Code Structure & Core Web Vitals',
    'Professional Git Workflow & Deployment'
  ],
  bannerImages: [
    APTECH_DIPLOMA_BANNER,
    APTECH_STUDENT_BANNER,
    NEON_DEV_BANNER
  ]
};

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: 'Project Showcase' | 'Tutorial & Code' | 'Client Review' | 'Aptech Demo';
  videoUrl: string;
  videoType: 'file' | 'url' | 'embed';
  duration: string;
  dateAdded: string;
  tags: string[];
  thumbnail?: string;
}

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Aptech Web Development Final Project: Full-Stack MERN Platform',
    description: 'Comprehensive walkthrough of the flagship web application developed as part of the Aptech Web Development Diploma capstone. Demonstrates authentication, database CRUD, and live responsive UI.',
    category: 'Aptech Demo',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    videoType: 'url',
    duration: '03:45',
    dateAdded: 'October 2025',
    tags: ['Aptech Diploma', 'React', 'Node.js', 'MongoDB', 'Responsive'],
    thumbnail: APTECH_DIPLOMA_BANNER
  },
  {
    id: 'vid-2',
    title: 'Enterprise E-Commerce Store with Real-Time Stripe Checkout',
    description: 'Deep dive into performance optimizations, sub-second product searching, dynamic cart drawer, and high-conversion mobile UX.',
    category: 'Project Showcase',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    videoType: 'url',
    duration: '04:12',
    dateAdded: 'November 2025',
    tags: ['E-Commerce', 'Stripe', 'Next.js', 'Tailwind CSS'],
    thumbnail: saasEcommerceImg
  },
  {
    id: 'vid-3',
    title: 'Speed Optimization & SEO Friendly Architecture Walkthrough',
    description: 'How to achieve 100/100 Core Web Vitals score on Google Lighthouse with clean semantic HTML5, zero-layout-shift CSS, and optimized assets.',
    category: 'Tutorial & Code',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoType: 'url',
    duration: '02:30',
    dateAdded: 'December 2025',
    tags: ['SEO', 'Core Web Vitals', 'Performance', 'Clean Code'],
    thumbnail: customSolutionsImg
  }
];

export interface SeoSettings {
  siteTitle: string;
  metaDescription: string;
  authorName: string;
  authorTitle: string;
  keywords: string;
  canonicalUrl: string;
  ogType: string;
  twitterHandle: string;
  robotsIndex: boolean;
  googleVerification: string;
}

export const INITIAL_SEO: SeoSettings = {
  siteTitle: 'Afnan | Aptech Certified Web Developer & Full-Stack Solutions',
  metaDescription: 'Professional Web Developer with Aptech Diploma in Information Technology. Specializing in high-performance websites, custom web applications, e-commerce, and SEO optimization.',
  authorName: 'Afnan',
  authorTitle: 'Aptech Certified Full-Stack Web Developer',
  keywords: 'Aptech web developer, Afnan web developer, full stack developer, React developer, MERN stack, custom website development, responsive design, fast loading website, SEO friendly web development',
  canonicalUrl: 'https://devpulse-afnan.com',
  ogType: 'website',
  twitterHandle: '@aptechafnan',
  robotsIndex: true,
  googleVerification: 'google-site-verification-afnan-aptech'
};

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & Database' | 'Tools & Deployment';
  level: string;
  experienceYears: string;
  description: string;
  color: string;
}

export const TECH_STACK: SkillItem[] = [
  { name: 'HTML5', category: 'Frontend', level: 'Expert', experienceYears: 'Aptech Certified', description: 'Semantic, accessible, WCAG-compliant web structure', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', level: 'Expert', experienceYears: 'Aptech Certified', description: 'Modern CSS Grid, Flexbox, Keyframe animations, Responsive', color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', level: 'Expert', experienceYears: 'Aptech Certified', description: 'ESNext, async programming, closures, DOM optimization', color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', level: 'Expert', experienceYears: 'Advanced', description: 'Custom hooks, state machines, React 19, Server Components', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced', experienceYears: 'Production', description: 'SSR, SSG, App Router, Image Optimization, edge caching', color: '#FFFFFF' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', experienceYears: 'Production', description: 'Utility-first rapid prototyping, responsive layouts, theme systems', color: '#38BDF8' },
  { name: 'Node.js', category: 'Backend & Database', level: 'Expert', experienceYears: 'Aptech Certified', description: 'Event-driven microservices, high-throughput REST APIs', color: '#339933' },
  { name: 'Express', category: 'Backend & Database', level: 'Expert', experienceYears: 'Aptech Certified', description: 'Robust middleware, secure routing, JWT authentication', color: '#A3A3A3' },
  { name: 'MongoDB', category: 'Backend & Database', level: 'Advanced', experienceYears: 'Aptech Certified', description: 'Mongoose schemas, aggregation pipelines, document indexing', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Backend & Database', level: 'Advanced', experienceYears: 'Production', description: 'Relational data modeling, ACID transactions, complex queries', color: '#4169E1' },
  { name: 'Git & GitHub', category: 'Tools & Deployment', level: 'Expert', experienceYears: 'Aptech Certified', description: 'Git flow, branching, code reviews, semantic versioning', color: '#F05032' },
  { name: 'VS Code & Tools', category: 'Tools & Deployment', level: 'Expert', experienceYears: 'Daily Driver', description: 'Clean architecture, linting, debugging, modern toolchain', color: '#007ACC' }
];

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconType: 'globe' | 'code' | 'cloud' | 'shield' | 'gauge' | 'zap';
  tags: string[];
  deliverables: string[];
  idealFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    subtitle: 'Business | E-Commerce | Portfolio',
    description: 'Custom, pixel-perfect, responsive web solutions engineered from the ground up to captivate visitors, build brand authority, and turn clicks into loyal clients.',
    iconType: 'globe',
    tags: ['Custom Design', '100% Mobile Responsive', 'Fast Delivery'],
    deliverables: [
      'Tailored corporate and brand websites',
      'High-conversion e-commerce storefronts',
      'Interactive creative portfolio portals',
      'Content management system (CMS) integration'
    ],
    idealFor: 'Businesses, founders, creators and brands ready for a high-impact digital presence.'
  },
  {
    id: 'custom-solutions',
    title: 'Custom Web Solutions',
    subtitle: 'Clean Code | Scalable | Modern',
    description: 'Tailored full-stack web applications, SaaS dashboards, and automated business portals built with clean, modular, and maintainable architectural patterns.',
    iconType: 'code',
    tags: ['Clean Architecture', 'API Integrations', 'Cloud Ready'],
    deliverables: [
      'Interactive client portals & dashboards',
      'Third-party API & payment integrations (Stripe, PayPal)',
      'Real-time data synchronization & WebSockets',
      'Role-based access control (RBAC) & user authentication'
    ],
    idealFor: 'Startups, SaaS teams, and businesses requiring tailored automated workflows.'
  },
  {
    id: 'maintenance-support',
    title: 'Website Maintenance & Optimization',
    subtitle: 'Upgrades | Bug Fixes | Support',
    description: 'Continuous proactive maintenance, speed acceleration, security auditing, and on-demand bug fixes to keep your digital assets running at peak performance 24/7.',
    iconType: 'cloud',
    tags: ['24/7 Priority Support', 'Speed Optimization', 'Security Patching'],
    deliverables: [
      'Core Web Vitals acceleration (< 1s load times)',
      'Security patch updates & SSL monitoring',
      'Bug triage, cross-browser fixing, responsive adjustments',
      'SEO audit, meta tag optimization, structured data'
    ],
    idealFor: 'Existing websites requiring speed boosts, modern redesigns, or dependable ongoing support.'
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: 'E-Commerce' | 'Web Applications' | 'Business Websites' | 'Portfolio & Creative';
  summary: string;
  client: string;
  year: string;
  image: string;
  technologies: string[];
  metrics: string;
  liveUrl?: string;
  details: string;
  highlights: string[];
}

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'aptech-capstone',
    title: 'Aptech Developer Cloud Platform',
    category: 'Web Applications',
    summary: 'Graduation project showcasing complete MERN stack deployment, JWT auth, and interactive course management.',
    client: 'Aptech Computer Education Showcase',
    year: '2025',
    image: APTECH_DIPLOMA_BANNER,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Git'],
    metrics: 'Top Capstone Project · 100/100 Grade',
    details: 'Developed during the Aptech Diploma course, this portal incorporates student dashboards, assignments submission with file uploads, and real-time grades calculation.',
    highlights: [
      'Built in accordance with Aptech curriculum best practices',
      'Secure password hashing and token-based sessions',
      'Fully responsive UI on mobile, tablet, and widescreen'
    ]
  },
  {
    id: 'aurora-commerce',
    title: 'Aurora Luxury E-Commerce',
    category: 'E-Commerce',
    summary: 'A headless high-speed e-commerce flagship with dynamic checkout, instant filter system, and real-time order tracking.',
    client: 'Aurora Global Lifestyle',
    year: '2025',
    image: saasEcommerceImg,
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe', 'Node.js', 'MongoDB'],
    metrics: '+48% conversion rate · 0.7s load time',
    details: 'Architected and built a complete responsive online store featuring instant product search, dynamic variant switching, customer order tracking, and seamless Stripe checkout.',
    highlights: [
      'Sub-second page transitions with client-side caching',
      'Interactive cart drawer with currency conversion',
      'Admin dashboard for real-time inventory management'
    ]
  },
  {
    id: 'quantum-suite',
    title: 'Quantum SaaS Analytics Suite',
    category: 'Web Applications',
    summary: 'Multi-device cloud analytics platform with interactive chart visualizations and real-time data stream pipeline.',
    client: 'Quantum Labs Inc',
    year: '2025',
    image: customSolutionsImg,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    metrics: '10M+ events/day · 99.99% uptime',
    details: 'Engineered an enterprise monitoring portal with responsive device layouts, customizable widgets, and exportable PDF/CSV reporting engines.',
    highlights: [
      'Fully responsive UI across mobile, tablet, and desktop',
      'Interactive SVG charts and KPI cards',
      'Role-based security with JWT session control'
    ]
  },
  {
    id: 'devpulse-studio',
    title: 'DevPulse Brand Identity & Platform',
    category: 'Business Websites',
    summary: 'Comprehensive digital agency web portal showcasing services, interactive cost estimation, and lead capture workflows.',
    client: 'DevPulse Creative',
    year: '2025',
    image: devWorkspaceImg,
    technologies: ['React 19', 'Tailwind CSS', 'Motion', 'Vite', 'Express'],
    metrics: '100/100 Core Web Vitals · 3.5x lead conversion',
    details: 'Crafted a bespoke digital identity for a high-end web consultancy featuring fluid micro-interactions, dark aesthetic harmony, and automated consultation scheduling.',
    highlights: [
      'Zero-latency interactive calculator',
      'Integrated banner presentation gallery',
      'Optimized WCAG AA accessibility compliance'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote: "Afnan delivered our e-commerce platform ahead of schedule. The site is blazingly fast, looks stunning across phones and desktops, and our online sales jumped 48% in the first two months.",
    name: 'Tariq Al-Mansoor',
    role: 'Founder & CEO',
    company: 'Aurora Retail International',
    outcome: '+48% Online Sales in 60 Days'
  },
  {
    id: '2',
    quote: "Finding a developer who understands both clean code and high-end visual design is rare. The custom dashboard Afnan built for our SaaS platform has received universal praise from our enterprise clients.",
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'Quantum Analytics Inc',
    outcome: '99.99% Stable Uptime'
  },
  {
    id: '3',
    quote: "Our website went from a sluggish 4.2-second load time down to 0.6 seconds. The SEO rankings improved immediately, and customer support inquiries dropped thanks to the clear UI.",
    name: 'Marcus Vance',
    role: 'Head of Growth',
    company: 'Vanguard Media Group',
    outcome: '0.6s Page Load Speed'
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    desc: 'Deep-dive consultation to define goals, target audience, technical roadmap, and wireframe blueprints.'
  },
  {
    step: '02',
    title: 'Modern UI/UX Design',
    desc: 'Crafting responsive layouts, dark/light visual harmony, typography balance, and conversion-focused flows.'
  },
  {
    step: '03',
    title: 'Clean Code Implementation',
    desc: 'Developing fast, semantic code with React, Node.js, and modern CSS following clean architectural principles.'
  },
  {
    step: '04',
    title: 'Optimization & Production Launch',
    desc: 'Core Web Vitals speed tuning, cross-browser validation, SEO structured data, and zero-downtime deployment.'
  }
];
