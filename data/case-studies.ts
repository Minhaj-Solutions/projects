export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  excerpt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featuredImage: string;
  images: string[];
  technologies: string[];
  duration: string;
  teamSize: string;
  featured?: boolean;
  category: 'Software Development' | 'Web Design' | 'Mobile App' | 'E-Commerce' | 'Digital Marketing' | 'Cloud Solutions';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'enterprise-erp-solution-retail-chain',
    title: 'Enterprise ERP Solution for National Retail Chain',
    client: 'RetailMax Corporation',
    industry: 'Retail & E-Commerce',
    services: ['Custom Software Development', 'Cloud Solutions', 'System Integration'],
    excerpt: 'Developed a comprehensive ERP system that streamlined operations across 200+ retail locations, reducing operational costs by 35% and improving inventory accuracy to 99.8%.',
    challenge: 'RetailMax Corporation was struggling with fragmented systems across their 200+ retail locations. Manual processes, inventory discrepancies, and lack of real-time visibility were causing significant operational inefficiencies and revenue loss.',
    solution: 'We developed a cloud-based ERP solution that integrated all business functions including inventory management, point-of-sale systems, supply chain, HR, and financial reporting. The system features real-time data synchronization, automated reporting, and mobile access for store managers.',
    results: [
      {
        metric: 'Cost Reduction',
        value: '35%',
        description: 'Reduction in operational costs through automation',
      },
      {
        metric: 'Inventory Accuracy',
        value: '99.8%',
        description: 'Improved inventory accuracy across all locations',
      },
      {
        metric: 'Processing Time',
        value: '60%',
        description: 'Faster order processing and fulfillment',
      },
      {
        metric: 'ROI',
        value: '280%',
        description: 'Return on investment within 18 months',
      },
    ],
    testimonial: {
      quote: 'Minhaj Solutions transformed our entire operation. The ERP system they built has become the backbone of our business, enabling us to scale efficiently and make data-driven decisions.',
      author: 'Sarah Johnson',
      role: 'Chief Operations Officer',
      company: 'RetailMax Corporation',
    },
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    duration: '12 months',
    teamSize: '15 developers',
    featured: true,
    category: 'Software Development',
  },
  {
    slug: 'mobile-app-healthcare-platform',
    title: 'Mobile Healthcare Platform for Telemedicine',
    client: 'HealthConnect',
    industry: 'Healthcare',
    services: ['Mobile App Development', 'Cloud Solutions', 'API Integration'],
    excerpt: 'Built a comprehensive telemedicine platform with mobile apps for iOS and Android, enabling 50,000+ patients to access healthcare services remotely, reducing wait times by 70%.',
    challenge: 'HealthConnect needed a secure, scalable telemedicine platform to serve their growing patient base. The solution needed to comply with HIPAA regulations, support video consultations, prescription management, and integrate with existing medical records systems.',
    solution: 'We developed native mobile applications for iOS and Android, along with a web-based admin portal. The platform includes secure video conferencing, encrypted messaging, e-prescription capabilities, appointment scheduling, and seamless integration with electronic health records (EHR) systems.',
    results: [
      {
        metric: 'Patient Adoption',
        value: '50,000+',
        description: 'Active users within 6 months',
      },
      {
        metric: 'Wait Time Reduction',
        value: '70%',
        description: 'Reduction in patient wait times',
      },
      {
        metric: 'Patient Satisfaction',
        value: '4.8/5',
        description: 'Average app rating',
      },
      {
        metric: 'Cost Savings',
        value: '40%',
        description: 'Reduction in operational costs',
      },
    ],
    testimonial: {
      quote: 'The mobile platform has revolutionized how we deliver healthcare. Our patients love the convenience, and we\'ve been able to serve more people efficiently while maintaining the highest standards of care.',
      author: 'Dr. Michael Chen',
      role: 'Chief Medical Officer',
      company: 'HealthConnect',
    },
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'WebRTC', 'AWS', 'Firebase'],
    duration: '8 months',
    teamSize: '12 developers',
    featured: true,
    category: 'Mobile App',
  },
  {
    slug: 'ecommerce-platform-luxury-brands',
    title: 'E-Commerce Platform for Luxury Fashion Brands',
    client: 'Luxury Fashion Group',
    industry: 'Fashion & Retail',
    services: ['E-Commerce Solutions', 'Web Design', 'Digital Marketing'],
    excerpt: 'Created a premium e-commerce platform supporting multiple luxury brands, resulting in 250% increase in online sales and 45% improvement in conversion rates.',
    challenge: 'Luxury Fashion Group needed a sophisticated e-commerce platform that could showcase multiple high-end brands while maintaining a premium user experience. The platform needed to handle high-resolution product images, personalized shopping experiences, and seamless checkout processes.',
    solution: 'We designed and developed a custom e-commerce platform with a focus on visual storytelling, advanced product filtering, personalized recommendations, and a streamlined checkout process. The platform includes inventory management, order tracking, and analytics dashboards.',
    results: [
      {
        metric: 'Sales Increase',
        value: '250%',
        description: 'Increase in online sales',
      },
      {
        metric: 'Conversion Rate',
        value: '45%',
        description: 'Improvement in conversion rates',
      },
      {
        metric: 'Page Load Speed',
        value: '1.2s',
        description: 'Average page load time',
      },
      {
        metric: 'Customer Satisfaction',
        value: '4.9/5',
        description: 'Average customer rating',
      },
    ],
    testimonial: {
      quote: 'The new platform perfectly captures the essence of our luxury brands. The design is stunning, and the functionality has exceeded our expectations. Our online sales have never been better.',
      author: 'Emma Rodriguez',
      role: 'Digital Director',
      company: 'Luxury Fashion Group',
    },
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['Next.js', 'TypeScript', 'Shopify', 'Stripe', 'Tailwind CSS', 'AWS'],
    duration: '6 months',
    teamSize: '10 developers',
    featured: false,
    category: 'E-Commerce',
  },
  {
    slug: 'fintech-mobile-banking-app',
    title: 'Mobile Banking Application for FinTech Startup',
    client: 'FinTech Innovations',
    industry: 'Financial Services',
    services: ['Mobile App Development', 'Cybersecurity', 'API Development'],
    excerpt: 'Developed a secure mobile banking app with biometric authentication, enabling 100,000+ users to manage their finances with bank-level security and seamless user experience.',
    challenge: 'FinTech Innovations needed a secure, user-friendly mobile banking application that could compete with traditional banks while maintaining the highest security standards. The app needed to support transactions, account management, bill payments, and investment tracking.',
    solution: 'We built a native mobile banking application with advanced security features including biometric authentication, end-to-end encryption, fraud detection, and real-time transaction monitoring. The app features an intuitive interface, quick transfers, investment tracking, and comprehensive financial analytics.',
    results: [
      {
        metric: 'User Base',
        value: '100,000+',
        description: 'Active users within 12 months',
      },
      {
        metric: 'Security Score',
        value: 'A+',
        description: 'Security rating from independent audit',
      },
      {
        metric: 'Transaction Volume',
        value: '$50M+',
        description: 'Monthly transaction volume',
      },
      {
        metric: 'App Rating',
        value: '4.7/5',
        description: 'Average app store rating',
      },
    ],
    testimonial: {
      quote: 'The security and user experience of our mobile banking app have set a new standard in the industry. Our users trust the platform, and we\'ve seen incredible growth.',
      author: 'James Wilson',
      role: 'CEO',
      company: 'FinTech Innovations',
    },
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2069&auto=format&fit=crop',
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Blockchain', 'Biometric Auth'],
    duration: '10 months',
    teamSize: '14 developers',
    featured: false,
    category: 'Mobile App',
  },
  {
    slug: 'cloud-migration-enterprise',
    title: 'Cloud Migration for Enterprise Manufacturing',
    client: 'Manufacturing Solutions Inc.',
    industry: 'Manufacturing',
    services: ['Cloud Solutions', 'DevOps', 'System Integration'],
    excerpt: 'Migrated legacy systems to AWS cloud infrastructure, improving system reliability to 99.9% uptime and reducing IT costs by 50% while enabling global scalability.',
    challenge: 'Manufacturing Solutions Inc. was running critical business systems on outdated on-premise infrastructure. They needed to migrate to the cloud to improve reliability, reduce costs, and enable global expansion while maintaining zero downtime.',
    solution: 'We executed a comprehensive cloud migration strategy, moving all systems to AWS with a hybrid approach to minimize disruption. The solution included containerization, automated scaling, disaster recovery, and 24/7 monitoring. We implemented CI/CD pipelines and infrastructure as code for efficient management.',
    results: [
      {
        metric: 'Uptime',
        value: '99.9%',
        description: 'System reliability and availability',
      },
      {
        metric: 'Cost Reduction',
        value: '50%',
        description: 'Reduction in IT infrastructure costs',
      },
      {
        metric: 'Performance',
        value: '3x',
        description: 'Improvement in system performance',
      },
      {
        metric: 'Deployment Time',
        value: '80%',
        description: 'Faster deployment cycles',
      },
    ],
    testimonial: {
      quote: 'The cloud migration was executed flawlessly with zero business disruption. Our systems are now more reliable, scalable, and cost-effective than ever before.',
      author: 'Robert Martinez',
      role: 'CTO',
      company: 'Manufacturing Solutions Inc.',
    },
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus'],
    duration: '14 months',
    teamSize: '18 developers',
    featured: true,
    category: 'Cloud Solutions',
  },
  {
    slug: 'saas-platform-project-management',
    title: 'SaaS Project Management Platform',
    client: 'ProjectFlow',
    industry: 'Technology',
    services: ['Software Development', 'Web Design', 'Cloud Solutions'],
    excerpt: 'Built a comprehensive SaaS project management platform serving 5,000+ teams worldwide, with features for task management, collaboration, and analytics.',
    challenge: 'ProjectFlow needed a modern, scalable SaaS platform that could compete with established project management tools. The platform needed to support team collaboration, real-time updates, integrations with popular tools, and comprehensive analytics.',
    solution: 'We developed a full-featured SaaS platform with real-time collaboration, advanced task management, Gantt charts, resource allocation, time tracking, and detailed analytics. The platform includes mobile apps, API for integrations, and white-label options for enterprise clients.',
    results: [
      {
        metric: 'Active Teams',
        value: '5,000+',
        description: 'Teams using the platform',
      },
      {
        metric: 'User Satisfaction',
        value: '4.6/5',
        description: 'Average user rating',
      },
      {
        metric: 'Productivity',
        value: '30%',
        description: 'Average productivity improvement',
      },
      {
        metric: 'Churn Rate',
        value: '<2%',
        description: 'Monthly churn rate',
      },
    ],
    testimonial: {
      quote: 'ProjectFlow has become essential to how we work. The platform is intuitive, powerful, and has significantly improved our team\'s productivity and project outcomes.',
      author: 'Lisa Anderson',
      role: 'Product Manager',
      company: 'ProjectFlow',
    },
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Socket.io'],
    duration: '9 months',
    teamSize: '13 developers',
    featured: false,
    category: 'Software Development',
  },
  {
    slug: 'redesign-corporate-website',
    title: 'Complete Website Redesign for Corporate Brand',
    client: 'Global Tech Solutions',
    industry: 'Technology',
    services: ['Web Design', 'Digital Marketing', 'SEO'],
    excerpt: 'Redesigned and rebuilt corporate website with modern design, resulting in 180% increase in organic traffic and 65% improvement in lead generation.',
    challenge: 'Global Tech Solutions had an outdated website that wasn\'t mobile-friendly, had poor SEO performance, and wasn\'t converting visitors into leads. They needed a complete redesign that would reflect their modern brand and drive business growth.',
    solution: 'We redesigned the entire website with a focus on user experience, mobile responsiveness, and conversion optimization. The new site features modern design, fast loading times, SEO optimization, integrated lead capture forms, and analytics tracking.',
    results: [
      {
        metric: 'Traffic Increase',
        value: '180%',
        description: 'Increase in organic traffic',
      },
      {
        metric: 'Lead Generation',
        value: '65%',
        description: 'Improvement in lead generation',
      },
      {
        metric: 'Bounce Rate',
        value: '35%',
        description: 'Reduction in bounce rate',
      },
      {
        metric: 'Page Speed',
        value: '95',
        description: 'Google PageSpeed score',
      },
    ],
    testimonial: {
      quote: 'The new website perfectly represents our brand and has significantly improved our online presence. We\'re generating more qualified leads than ever before.',
      author: 'David Kim',
      role: 'Marketing Director',
      company: 'Global Tech Solutions',
    },
    featuredImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Google Analytics'],
    duration: '4 months',
    teamSize: '6 developers',
    featured: false,
    category: 'Web Design',
  },
  {
    slug: 'ai-powered-analytics-platform',
    title: 'AI-Powered Analytics Platform for Retail',
    client: 'SmartRetail Analytics',
    industry: 'Retail & Analytics',
    services: ['Software Development', 'AI/ML', 'Data Analytics'],
    excerpt: 'Developed an AI-powered analytics platform that provides predictive insights for retail operations, increasing sales by 22% and reducing inventory costs by 18%.',
    challenge: 'SmartRetail Analytics needed an advanced analytics platform that could process large volumes of retail data and provide actionable insights. The platform needed to predict trends, optimize inventory, and personalize customer experiences using machine learning.',
    solution: 'We built a comprehensive AI-powered analytics platform with machine learning models for demand forecasting, customer segmentation, price optimization, and inventory management. The platform includes real-time dashboards, automated reporting, and predictive analytics capabilities.',
    results: [
      {
        metric: 'Sales Increase',
        value: '22%',
        description: 'Increase in overall sales',
      },
      {
        metric: 'Cost Reduction',
        value: '18%',
        description: 'Reduction in inventory costs',
      },
      {
        metric: 'Forecast Accuracy',
        value: '92%',
        description: 'Demand forecasting accuracy',
      },
      {
        metric: 'Processing Speed',
        value: '10x',
        description: 'Faster data processing',
      },
    ],
    testimonial: {
      quote: 'The AI platform has transformed how we make business decisions. The predictive insights are incredibly accurate and have directly contributed to our bottom line.',
      author: 'Patricia Lee',
      role: 'Chief Analytics Officer',
      company: 'SmartRetail Analytics',
    },
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'AWS', 'Apache Spark'],
    duration: '11 months',
    teamSize: '16 developers',
    featured: false,
    category: 'Software Development',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  if (category === 'All') return caseStudies;
  return caseStudies.filter((study) => study.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(caseStudies.map((study) => study.category)));
}
