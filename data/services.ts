export interface ServiceFeature {
    title: string;
    description: string;
    features: string[];
    image: string;
}

export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface Industry {
    name: string;
    description: string;
}

export interface Technology {
    name: string;
    category: string;
    logo?: string;
}

export interface Service {
    slug: string;
    title: string;
    category: string;
    hero: {
        title: string;
        subtitle: string;
        imagePath: string;
    };
    overview: {
        heading: string;
        paragraphs: string[];
        image?: string;
    };
    specificServices: ServiceFeature[];
    process: ProcessStep[];
    industries: Industry[];
    techStack: Technology[];
    cta: {
        heading: string;
        description: string;
        primaryButtonText: string;
        primaryButtonLink: string;
        secondaryButtonText?: string;
        secondaryButtonLink?: string;
    };
}

export const services: Service[] = [
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        category: "MOBILE APP DEVELOPMENT",
        hero: {
            title: "Custom Mobile Apps for Tomorrow",
            subtitle: "Transform your ideas into powerful mobile applications with cutting-edge native development, cross-platform solutions, and enterprise-grade systems.",
            imagePath: "/images/services/standard-quality-control-concept-m.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "Every app we build is engineered to drive measurable business outcomes.",
                "With expertise spanning cutting-edge native development, cross-platform solutions, and enterprise-grade systems, our engineers transform bold ideas into dynamic mobile experiences.",
                "We focus on performance, accessibility, and security from day one so your mobile experiences feel premium, resilient, and ready to scale.",
            ],
            image: "/images/services/standard-quality-control-concept-m.jpg",
        },
        specificServices: [
            {
                title: "Native Mobile App Development",
                description: "Build high-performance iOS and Android applications optimized for each platform's unique capabilities.",
                image: "/images/services/standard-quality-control-concept-m.jpg",
                features: [
                    "iOS Development (Swift, SwiftUI)",
                    "Android Development (Kotlin, Jetpack Compose)",
                    "Platform-Specific UI/UX",
                    "Native APIs Integration",
                    "Performance Optimization",
                ],
            },
            {
                title: "Cross-Platform App Development",
                description: "Develop once and deploy across multiple platforms with frameworks like React Native and Flutter.",
                image: "/images/services/standard-quality-control-concept-m.jpg",
                features: [
                    "React Native Development",
                    "Flutter Development",
                    "Xamarin Solutions",
                    "Code Reusability",
                    "Faster Time-to-Market",
                ],
            },
            {
                title: "Custom Mobile App Development",
                description: "Tailored mobile solutions designed to address your specific business challenges and deliver measurable results.",
                image: "/images/services/standard-quality-control-concept-m.jpg",
                features: [
                    "Custom Feature Development",
                    "Third-Party Integrations",
                    "API Development",
                    "Cloud Backend Services",
                    "Real-Time Synchronization",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, target audience, and business goals to create a comprehensive mobile strategy.",
            },
            {
                number: "02",
                title: "Design & Prototyping",
                description: "Our designers create intuitive interfaces and interactive prototypes that align with platform guidelines.",
            },
            {
                number: "03",
                title: "Development & Testing",
                description: "We build your app using best practices, with continuous testing to ensure quality and performance.",
            },
            {
                number: "04",
                title: "Launch & Support",
                description: "We handle app store submissions and provide ongoing maintenance and feature enhancements.",
            },
        ],
        industries: [
            {
                name: "Manufacturing",
                description: "We enable manufacturers to optimize production processes, track inventory, and improve workforce management with mobile applications designed for real-time data collection and analytics.",
            },
            {
                name: "Education",
                description: "In the education sector, we build mobile apps that enhance learning experiences, improve access to educational content, and facilitate communication between students and educators.",
            },
            {
                name: "E-Commerce & Retail",
                description: "In the fast-paced retail industry, mobile apps are key to enhancing customer experiences, increasing sales, and optimizing inventory management.",
            },
        ],
        techStack: [
            { name: "Swift", category: "iOS" },
            { name: "Kotlin", category: "Android" },
            { name: "React Native", category: "Cross-Platform" },
            { name: "Flutter", category: "Cross-Platform" },
            { name: "Xamarin", category: "Cross-Platform" },
            { name: "Firebase", category: "Backend" },
            { name: "AWS Amplify", category: "Backend" },
            { name: "Node.js", category: "Backend" },
            { name: "MongoDB", category: "Database" },
            { name: "PostgreSQL", category: "Database" },
            { name: "Redux", category: "State Management" },
            { name: "GraphQL", category: "API" },
            { name: "Jest", category: "Testing" },
            { name: "Appium", category: "Testing" },
            { name: "Fastlane", category: "CI/CD" },
            { name: "GitHub Actions", category: "CI/CD" },
        ],
        cta: {
            heading: "Ready to Build Your Mobile App?",
            description: "Let's discuss how our mobile app development services can help your business thrive. Get in touch with our team today.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "consulting",
        title: "IT Consulting",
        category: "IT CONSULTING",
        hero: {
            title: "IT Consulting",
            subtitle: "Our consulting team brings deep expertise in DevOps, software architecture, and digital transformation. We work closely with your organization to identify pain points, define strategic goals, and implement solutions that position you for long-term success.",
            imagePath: "/images/services/it-consulting.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "Every solution we build is engineered to drive measurable business outcomes.",
                "With expertise spanning cutting-edge DevOps practices, enterprise architecture, and digital transformation, our consultants transform bold ideas into dynamic, scalable solutions. We work closely with your organization to identify pain points, define strategic goals, and implement solutions that position you for long-term success.",
                "We pair strategy with execution—ensuring roadmaps, operating models, and technology choices are practical, measurable, and aligned to your business objectives.",
            ],
            image: "/images/services/it-consulting.jpg",
        },
        specificServices: [
            {
                title: "DevOps & CI/CD",
                description: "Streamlining development pipelines for faster, more reliable deployments with automated testing and continuous integration.",
                image: "/images/services/it-consulting.jpg",
                features: [
                    "Continuous Integration/Deployment",
                    "Infrastructure as Code (IaC)",
                    "Automated Testing",
                    "Configuration Management",
                    "Container Orchestration",
                ],
            },
            {
                title: "Digital Transformation",
                description: "Guiding businesses through modernization, from legacy systems to cloud-native architectures and agile methodologies.",
                image: "/images/services/it-consulting.jpg",
                features: [
                    "Modern Application Development",
                    "Legacy System Migration",
                    "Process Optimization",
                    "Agile Implementation",
                    "Data Strategy & Analytics",
                ],
            },
            {
                title: "Enterprise Architecture",
                description: "Designing scalable, efficient system architectures for growth with microservices and API-first approaches.",
                image: "/images/services/it-consulting.jpg",
                features: [
                    "Microservices Architecture",
                    "API Design & Integration",
                    "Scalability Planning",
                    "Security Architecture",
                    "Technology Stack Optimization",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Discover & Analyze",
                description: "We evaluate your current systems, processes, and pain points to identify opportunities for improvement.",
            },
            {
                number: "02",
                title: "Design Strategy",
                description: "Our experts develop a tailored roadmap with measurable goals, resources, and timeline.",
            },
            {
                number: "03",
                title: "Implement Solutions",
                description: "We execute the planned changes with minimal disruption to your business operations.",
            },
            {
                number: "04",
                title: "Measure & Optimize",
                description: "After implementation, we continuously monitor performance and refine our approach.",
            },
        ],
        industries: [
            {
                name: "Technology",
                description: "We help tech companies optimize their development workflows, implement DevOps practices, and scale their infrastructure efficiently.",
            },
            {
                name: "Finance",
                description: "Financial institutions rely on our expertise for secure, compliant, and scalable IT infrastructure and digital transformation initiatives.",
            },
            {
                name: "Healthcare",
                description: "Healthcare organizations trust us to modernize their systems while maintaining compliance and ensuring data security.",
            },
            {
                name: "Manufacturing",
                description: "Manufacturing companies leverage our consulting services to implement IoT solutions, optimize production systems, and enable Industry 4.0.",
            },
        ],
        techStack: [
            { name: "Docker", category: "Containerization" },
            { name: "Kubernetes", category: "Orchestration" },
            { name: "AWS", category: "Cloud Platform" },
            { name: "Azure", category: "Cloud Platform" },
            { name: "Terraform", category: "IaC" },
            { name: "Jenkins", category: "CI/CD" },
            { name: "GitLab CI", category: "CI/CD" },
            { name: "GitHub Actions", category: "CI/CD" },
            { name: "Ansible", category: "Configuration" },
            { name: "Chef", category: "Configuration" },
            { name: "Prometheus", category: "Monitoring" },
            { name: "Grafana", category: "Monitoring" },
            { name: "ELK Stack", category: "Logging" },
            { name: "Python", category: "Programming" },
            { name: "Go", category: "Programming" },
            { name: "Node.js", category: "Programming" },
        ],
        cta: {
            heading: "Ready to Transform Your IT Strategy?",
            description: "Let's discuss how our IT consulting services can help your business thrive. Get in touch with our team today.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "web-development",
        title: "Web Application Development",
        category: "WEB DEVELOPMENT",
        hero: {
            title: "Web Application Development",
            subtitle: "Transform your ideas into powerful, scalable web applications with cutting-edge technologies and modern frameworks that drive business growth.",
            imagePath: "/images/services/web-development.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "At CiTechT, we specialize in creating custom web applications that not only meet your current needs but also scale with your business growth.",
                "Our expert development team leverages the latest technologies and best practices to deliver solutions that are fast, secure, and user-friendly. From simple websites to complex enterprise applications, we handle every aspect of the development process.",
                "Every build emphasizes clean architecture, maintainability, and observability so you can iterate quickly and keep delivering value to your users.",
            ],
            image: "/images/services/web-development.jpg",
        },
        specificServices: [
            {
                title: "Full-Stack Development",
                description: "End-to-end development from frontend to backend systems.",
                image: "/images/services/web-development.jpg",
                features: [
                    "Frontend & Backend Integration",
                    "Database Design & Management",
                    "API Development & Integration",
                    "Performance Optimization",
                    "Security Implementation",
                ],
            },
            {
                title: "Modern Frameworks & Technologies",
                description: "React, Next.js, Node.js, and other cutting-edge tools.",
                image: "/images/services/web-development.jpg",
                features: [
                    "React & Next.js Development",
                    "TypeScript Implementation",
                    "Modern CSS Frameworks",
                    "Progressive Web Apps",
                    "Server-Side Rendering",
                ],
            },
            {
                title: "Responsive & Scalable Design",
                description: "Applications that work seamlessly across all devices and scale with your business.",
                image: "/images/services/web-development.jpg",
                features: [
                    "Mobile-First Design",
                    "Cross-Browser Compatibility",
                    "Scalable Architecture",
                    "Performance Optimization",
                    "SEO Best Practices",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Requirements Analysis",
                description: "We work with you to understand your business needs, target audience, and project goals.",
            },
            {
                number: "02",
                title: "Design & Architecture",
                description: "Our team creates wireframes, mockups, and technical architecture for your application.",
            },
            {
                number: "03",
                title: "Development & Testing",
                description: "We build your application using agile methodologies with continuous testing and quality assurance.",
            },
            {
                number: "04",
                title: "Deployment & Maintenance",
                description: "We handle deployment and provide ongoing support to ensure your application runs smoothly.",
            },
        ],
        industries: [
            {
                name: "E-Commerce",
                description: "We build scalable e-commerce platforms with secure payment gateways, inventory management, and seamless shopping experiences.",
            },
            {
                name: "Healthcare",
                description: "Healthcare web applications with HIPAA compliance, patient portals, and telemedicine capabilities.",
            },
            {
                name: "Education",
                description: "Learning management systems, online course platforms, and educational tools that enhance the learning experience.",
            },
            {
                name: "Finance",
                description: "Secure financial applications with real-time data, advanced analytics, and compliance with industry regulations.",
            },
        ],
        techStack: [
            { name: "React", category: "Frontend" },
            { name: "Next.js", category: "Frontend" },
            { name: "Vue.js", category: "Frontend" },
            { name: "TypeScript", category: "Frontend" },
            { name: "Node.js", category: "Backend" },
            { name: "Express.js", category: "Backend" },
            { name: "NestJS", category: "Backend" },
            { name: "Python", category: "Backend" },
            { name: "PostgreSQL", category: "Database" },
            { name: "MongoDB", category: "Database" },
            { name: "Redis", category: "Caching" },
            { name: "GraphQL", category: "API" },
            { name: "REST API", category: "API" },
            { name: "AWS", category: "Cloud" },
            { name: "Docker", category: "DevOps" },
            { name: "Kubernetes", category: "DevOps" },
        ],
        cta: {
            heading: "Ready to Build Your Web Application?",
            description: "Let's bring your vision to life with a powerful web application. Contact our team today to get started.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "cloud",
        title: "Cloud & Infrastructure",
        category: "CLOUD SERVICES",
        hero: {
            title: "Cloud & Infrastructure",
            subtitle: "Transform your business with modern cloud solutions and robust infrastructure management.",
            imagePath: "/images/services/cloud.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "In today's fast-paced digital world, having a robust and scalable infrastructure is crucial for business success.",
                "Our cloud and infrastructure services help you leverage the latest technologies to drive innovation and growth while maintaining operational excellence. Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement modern DevOps practices, our team of experts will guide you through every step of the journey.",
                "We prioritize reliability, cost efficiency, and security hardening—backed by IaC, automation, and proactive monitoring—to keep your platforms resilient and future-ready.",
            ],
            image: "/images/services/cloud.jpg",
        },
        specificServices: [
            {
                title: "Cloud Migration & Strategy",
                description: "Strategic planning and execution of cloud migration initiatives.",
                image: "/images/services/cloud.jpg",
                features: [
                    "Cloud Readiness Assessment",
                    "Migration Planning",
                    "Cost Optimization",
                    "Performance Monitoring",
                    "Risk Management",
                ],
            },
            {
                title: "Infrastructure Management",
                description: "End-to-end management of your IT infrastructure.",
                image: "/images/services/cloud.jpg",
                features: [
                    "24/7 Infrastructure Monitoring",
                    "Capacity Planning",
                    "Network Management",
                    "Server Administration",
                    "Backup & Recovery",
                ],
            },
            {
                title: "DevOps & Automation",
                description: "Streamline operations with modern DevOps practices and automation.",
                image: "/images/services/cloud.jpg",
                features: [
                    "CI/CD Implementation",
                    "Infrastructure as Code",
                    "Container Orchestration",
                    "Process Automation",
                    "Performance Optimization",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Assessment & Planning",
                description: "We evaluate your current infrastructure and develop a comprehensive cloud strategy aligned with your business goals.",
            },
            {
                number: "02",
                title: "Architecture Design",
                description: "Our architects design a scalable, secure cloud architecture optimized for your workloads.",
            },
            {
                number: "03",
                title: "Migration & Implementation",
                description: "We execute the migration with minimal downtime, ensuring data integrity and business continuity.",
            },
            {
                number: "04",
                title: "Optimization & Support",
                description: "Continuous monitoring and optimization to ensure peak performance and cost efficiency.",
            },
        ],
        industries: [
            {
                name: "Financial Services",
                description: "Secure, compliant cloud solutions for banking, insurance, and investment firms with strict regulatory requirements.",
            },
            {
                name: "Healthcare",
                description: "HIPAA-compliant cloud infrastructure for healthcare providers, ensuring data security and patient privacy.",
            },
            {
                name: "Retail & E-Commerce",
                description: "Scalable infrastructure to handle seasonal traffic spikes and provide seamless shopping experiences.",
            },
            {
                name: "Technology",
                description: "High-performance cloud solutions for SaaS companies, startups, and tech enterprises.",
            },
        ],
        techStack: [
            { name: "AWS", category: "Cloud Platform" },
            { name: "Azure", category: "Cloud Platform" },
            { name: "Google Cloud", category: "Cloud Platform" },
            { name: "Kubernetes", category: "Orchestration" },
            { name: "Docker", category: "Containers" },
            { name: "Terraform", category: "IaC" },
            { name: "Ansible", category: "Automation" },
            { name: "Jenkins", category: "CI/CD" },
            { name: "GitLab CI/CD", category: "CI/CD" },
            { name: "Prometheus", category: "Monitoring" },
            { name: "Grafana", category: "Monitoring" },
            { name: "ELK Stack", category: "Logging" },
            { name: "Nginx", category: "Web Server" },
            { name: "Apache", category: "Web Server" },
            { name: "CloudFormation", category: "IaC" },
            { name: "Consul", category: "Service Mesh" },
        ],
        cta: {
            heading: "Ready to Modernize Your Infrastructure?",
            description: "Let's discuss how our cloud and infrastructure services can accelerate your digital transformation.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity & Compliance",
        category: "CYBERSECURITY",
        hero: {
            title: "Cybersecurity & Compliance",
            subtitle: "Protect your digital assets and maintain regulatory compliance with our comprehensive cybersecurity solutions.",
            imagePath: "/images/services/cybersecurity.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "In today's digital landscape, cybersecurity is not just an IT concern—it's a business imperative.",
                "Our comprehensive cybersecurity services help protect your organization from evolving threats while ensuring compliance with industry regulations. We combine cutting-edge technology with industry best practices to deliver robust security solutions that safeguard your data, systems, and reputation.",
                "We embed security into architectures, pipelines, and operations—balancing protection with usability, and enabling continuous compliance with clear, auditable controls.",
            ],
            image: "/images/services/cybersecurity.jpg",
        },
        specificServices: [
            {
                title: "Security Assessment & Auditing",
                description: "Comprehensive evaluation of your security posture and compliance status.",
                image: "/images/services/cybersecurity.jpg",
                features: [
                    "Vulnerability Assessment",
                    "Compliance Gap Analysis",
                    "Risk Assessment",
                    "Security Architecture Review",
                    "Penetration Testing",
                ],
            },
            {
                title: "Compliance Management",
                description: "Ensure adherence to industry standards and regulations.",
                image: "/images/services/cybersecurity.jpg",
                features: [
                    "HIPAA Compliance",
                    "SOC 2 Readiness",
                    "PCI DSS Compliance",
                    "GDPR Compliance",
                    "Policy Development",
                ],
            },
            {
                title: "Incident Response & Recovery",
                description: "24/7 monitoring and rapid response to security incidents.",
                image: "/images/services/cybersecurity.jpg",
                features: [
                    "24/7 Security Monitoring",
                    "Incident Investigation",
                    "Threat Hunting",
                    "Disaster Recovery",
                    "Business Continuity Planning",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Security Assessment",
                description: "We conduct a thorough assessment of your current security posture and identify vulnerabilities.",
            },
            {
                number: "02",
                title: "Strategy Development",
                description: "Our experts develop a comprehensive security strategy tailored to your business needs.",
            },
            {
                number: "03",
                title: "Implementation",
                description: "We implement security controls, policies, and procedures to protect your assets.",
            },
            {
                number: "04",
                title: "Monitoring & Response",
                description: "Continuous monitoring and rapid response to security incidents to minimize impact.",
            },
        ],
        industries: [
            {
                name: "Healthcare",
                description: "HIPAA-compliant security solutions to protect patient data and maintain privacy regulations.",
            },
            {
                name: "Financial Services",
                description: "Advanced security measures for banks, investment firms, and insurance companies to protect sensitive financial data.",
            },
            {
                name: "Retail & E-Commerce",
                description: "PCI DSS compliance and protection against fraud, data breaches, and cyber attacks.",
            },
            {
                name: "Government",
                description: "High-security solutions meeting government standards and protecting classified information.",
            },
        ],
        techStack: [
            { name: "Splunk", category: "SIEM" },
            { name: "Palo Alto", category: "Firewall" },
            { name: "CrowdStrike", category: "EDR" },
            { name: "Cisco SecureX", category: "Security Platform" },
            { name: "Fortinet", category: "Firewall" },
            { name: "Qualys", category: "Vulnerability" },
            { name: "Nessus", category: "Vulnerability" },
            { name: "Wireshark", category: "Network Analysis" },
            { name: "Metasploit", category: "Penetration Testing" },
            { name: "Burp Suite", category: "Web Security" },
            { name: "OWASP ZAP", category: "Web Security" },
            { name: "HashiCorp Vault", category: "Secrets Management" },
            { name: "Okta", category: "Identity Management" },
            { name: "Duo Security", category: "MFA" },
            { name: "Snort", category: "IDS/IPS" },
            { name: "Suricata", category: "IDS/IPS" },
        ],
        cta: {
            heading: "Ready to Strengthen Your Security?",
            description: "Protect your business from cyber threats. Contact us today to learn how we can help secure your organization.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "artificial-intelligence",
        title: "Artificial Intelligence",
        category: "ARTIFICIAL INTELLIGENCE",
        hero: {
            title: "Artificial Intelligence",
            subtitle: "Leverage cutting-edge AI technologies to transform your business operations, enhance customer experiences, and gain competitive advantage. Our AI solutions are designed to solve real-world business problems with measurable ROI.",
            imagePath: "/images/services/ai.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "At CiTechT, our AI specialists bring expertise in developing and implementing artificial intelligence solutions that deliver tangible business value.",
                "We help organizations of all sizes harness the power of AI to automate processes, gain competitive insights, and create innovative products and services. From strategic planning to model development and deployment, we provide end-to-end AI services that align with your business objectives.",
                "Our teams focus on safe, explainable, and production-ready AI—covering data readiness, model governance, MLOps, and ongoing performance monitoring.",
            ],
            image: "/images/services/ai.jpg",
        },
        specificServices: [
            {
                title: "AI Strategy & Implementation",
                description: "Developing customized AI roadmaps aligned with your business goals.",
                image: "/images/services/ai.jpg",
                features: [
                    "AI Readiness Assessment",
                    "Use Case Prioritization",
                    "ROI Analysis",
                    "Implementation Roadmap",
                    "Change Management",
                ],
            },
            {
                title: "Computer Vision & NLP",
                description: "Building intelligent systems that can see, understand and interact using natural language.",
                image: "/images/services/ai.jpg",
                features: [
                    "Image & Video Analysis",
                    "Object Detection & Recognition",
                    "Text Processing & Analysis",
                    "Sentiment Analysis",
                    "Conversational AI & Chatbots",
                ],
            },
            {
                title: "AI-Powered Automation",
                description: "Streamlining operations with intelligent automation solutions.",
                image: "/images/services/ai.jpg",
                features: [
                    "Intelligent Document Processing",
                    "Robotic Process Automation (RPA)",
                    "Predictive Maintenance",
                    "Quality Control & Inspection",
                    "Decision Support Systems",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Discovery & Assessment",
                description: "We evaluate your business challenges and identify AI opportunities with the highest potential impact.",
            },
            {
                number: "02",
                title: "Data Preparation",
                description: "Our team collects, cleans, and prepares the data needed to train effective AI models.",
            },
            {
                number: "03",
                title: "Model Development",
                description: "We develop and train AI models using state-of-the-art techniques and frameworks.",
            },
            {
                number: "04",
                title: "Deployment & Monitoring",
                description: "We deploy models to production and continuously monitor performance for optimization.",
            },
        ],
        industries: [
            {
                name: "Healthcare",
                description: "Predictive diagnostics, personalized treatment plans, and medical image analysis to improve patient outcomes.",
            },
            {
                name: "Finance",
                description: "Fraud detection, algorithmic trading, risk assessment, and customer service automation.",
            },
            {
                name: "Retail",
                description: "Personalized shopping experiences, demand forecasting, inventory optimization, and customer behavior analysis.",
            },
            {
                name: "Manufacturing",
                description: "Predictive maintenance, quality control automation, supply chain optimization, and production planning.",
            },
        ],
        techStack: [
            { name: "TensorFlow", category: "ML Framework" },
            { name: "PyTorch", category: "ML Framework" },
            { name: "Scikit-learn", category: "ML Library" },
            { name: "OpenCV", category: "Computer Vision" },
            { name: "NLTK", category: "NLP" },
            { name: "spaCy", category: "NLP" },
            { name: "Hugging Face", category: "Transformers" },
            { name: "LangChain", category: "LLM Framework" },
            { name: "OpenAI API", category: "LLM" },
            { name: "GPT-4", category: "LLM" },
            { name: "BERT", category: "NLP Model" },
            { name: "YOLO", category: "Object Detection" },
            { name: "Keras", category: "ML Framework" },
            { name: "MLflow", category: "ML Ops" },
            { name: "Kubeflow", category: "ML Ops" },
            { name: "Apache Spark", category: "Big Data" },
        ],
        cta: {
            heading: "Ready to Leverage AI for Your Business?",
            description: "Contact us today to discuss how our AI solutions can help you achieve your business goals.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "generative-ai",
        title: "Generative AI",
        category: "GENERATIVE AI",
        hero: {
            title: "Generative AI",
            subtitle: "Harness the power of generative AI to create content, automate workflows, and build intelligent applications that transform your business.",
            imagePath: "/images/services/generative-ai.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "Generative AI is revolutionizing how businesses operate, create, and innovate. From content generation to code assistance and intelligent automation, our generative AI solutions unlock new possibilities.",
                "We help organizations integrate cutting-edge generative AI technologies like GPT, DALL-E, and other large language models into their workflows, products, and services to enhance productivity and create new value.",
                "We design guardrails, evaluation, and human-in-the-loop workflows to ensure outputs stay high quality, brand-safe, and compliant as you scale GenAI initiatives.",
            ],
            image: "/images/services/genai.jpg",
        },
        specificServices: [
            {
                title: "LLM Integration & Fine-Tuning",
                description: "Integrate and customize large language models for your specific use cases.",
                image: "/images/services/genai.jpg",
                features: [
                    "Custom LLM Implementation",
                    "Model Fine-Tuning",
                    "Prompt Engineering",
                    "RAG Implementation",
                    "Vector Database Integration",
                ],
            },
            {
                title: "Content Generation & Automation",
                description: "Automate content creation and streamline creative workflows.",
                image: "/images/services/genai.jpg",
                features: [
                    "Text Generation Systems",
                    "Image Generation & Editing",
                    "Code Generation Tools",
                    "Document Summarization",
                    "Multi-Modal AI Solutions",
                ],
            },
            {
                title: "Conversational AI & Chatbots",
                description: "Build intelligent conversational interfaces powered by generative AI.",
                image: "/images/services/genai.jpg",
                features: [
                    "Custom Chatbot Development",
                    "Virtual Assistants",
                    "Customer Support Automation",
                    "Knowledge Base Integration",
                    "Multi-Language Support",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Use Case Definition",
                description: "We work with you to identify high-value use cases for generative AI in your organization.",
            },
            {
                number: "02",
                title: "Solution Design",
                description: "Our team designs the architecture and selects the right models and technologies for your needs.",
            },
            {
                number: "03",
                title: "Development & Training",
                description: "We build and customize generative AI solutions, including fine-tuning models when necessary.",
            },
            {
                number: "04",
                title: "Deployment & Scaling",
                description: "We deploy your solution and ensure it scales to meet your business demands.",
            },
        ],
        industries: [
            {
                name: "Marketing & Advertising",
                description: "Generate compelling marketing content, personalized campaigns, and creative assets at scale.",
            },
            {
                name: "Software Development",
                description: "Accelerate development with AI-powered code generation, debugging, and documentation tools.",
            },
            {
                name: "Customer Service",
                description: "Deploy intelligent chatbots and virtual assistants to enhance customer support and reduce costs.",
            },
            {
                name: "Legal & Professional Services",
                description: "Automate document analysis, contract review, and legal research with generative AI.",
            },
        ],
        techStack: [
            { name: "OpenAI GPT-4", category: "LLM" },
            { name: "Claude", category: "LLM" },
            { name: "Llama 2", category: "Open Source LLM" },
            { name: "Mistral", category: "Open Source LLM" },
            { name: "LangChain", category: "Framework" },
            { name: "LlamaIndex", category: "Framework" },
            { name: "Pinecone", category: "Vector Database" },
            { name: "Weaviate", category: "Vector Database" },
            { name: "ChromaDB", category: "Vector Database" },
            { name: "DALL-E", category: "Image Generation" },
            { name: "Stable Diffusion", category: "Image Generation" },
            { name: "Midjourney", category: "Image Generation" },
            { name: "Hugging Face", category: "Model Hub" },
            { name: "FastAPI", category: "API Framework" },
            { name: "Streamlit", category: "UI Framework" },
            { name: "Azure OpenAI", category: "Cloud Platform" },
        ],
        cta: {
            heading: "Ready to Explore Generative AI?",
            description: "Discover how generative AI can transform your business. Let's discuss your specific needs and opportunities.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "data",
        title: "Data",
        category: "DATA SERVICES",
        hero: {
            title: "Data",
            subtitle: "Transform your vast data resources into strategic assets with our comprehensive data science and big data services. We help organizations collect, process, analyze, and visualize data to uncover actionable insights.",
            imagePath: "/images/services/data-science.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "In today's data-rich environment, organizations that can effectively collect, process, and derive insights from their data gain significant competitive advantages.",
                "At CiTechT, our data science and big data specialists help you transform raw information into strategic business assets. Whether you're looking to build a data lake, implement predictive analytics, or create real-time dashboards for business intelligence, our team brings the technical expertise and business acumen to deliver solutions that drive measurable results.",
                "We emphasize data quality, governance, lineage, and reliable pipelines so analytics and AI initiatives are trustworthy, auditable, and ready for scale.",
            ],
            image: "/images/services/data-science.jpg",
        },
        specificServices: [
            {
                title: "Data Engineering & Architecture",
                description: "Building robust data pipelines and storage solutions for efficient processing.",
                image: "/images/services/data-science.jpg",
                features: [
                    "Data Pipeline Design & Development",
                    "ETL Process Optimization",
                    "Data Warehousing Solutions",
                    "Real-time Data Processing",
                    "Data Quality Management",
                ],
            },
            {
                title: "Predictive Analytics",
                description: "Forecasting trends and outcomes to drive proactive decision-making.",
                image: "/images/services/data-science.jpg",
                features: [
                    "Forecasting & Time Series Analysis",
                    "Customer Behavior Prediction",
                    "Risk Assessment Models",
                    "Demand Planning Solutions",
                    "Anomaly Detection Systems",
                ],
            },
            {
                title: "Big Data Processing",
                description: "Handling massive datasets with scalable distributed computing solutions.",
                image: "/images/services/data-science.jpg",
                features: [
                    "Hadoop & Spark Implementation",
                    "Stream Processing Solutions",
                    "Distributed Computing",
                    "Data Lake Architecture",
                    "Batch Processing Optimization",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Collection & Integration",
                description: "Gathering data from various sources and integrating it into a unified system.",
            },
            {
                number: "02",
                title: "Processing & Analysis",
                description: "Cleaning, transforming, and analyzing data to extract meaningful insights.",
            },
            {
                number: "03",
                title: "Visualization & Reporting",
                description: "Presenting insights in intuitive formats through dashboards and reports.",
            },
            {
                number: "04",
                title: "Action & Optimization",
                description: "Implementing data-driven decisions and continuously optimizing for better results.",
            },
        ],
        industries: [
            {
                name: "Financial Services",
                description: "Risk analytics, fraud detection, customer segmentation, and portfolio optimization.",
            },
            {
                name: "Retail & E-Commerce",
                description: "Customer analytics, demand forecasting, personalization, and inventory optimization.",
            },
            {
                name: "Healthcare",
                description: "Patient outcomes analysis, operational efficiency, predictive diagnostics, and population health management.",
            },
            {
                name: "Manufacturing",
                description: "Predictive maintenance, quality analytics, supply chain optimization, and production forecasting.",
            },
        ],
        techStack: [
            { name: "Apache Spark", category: "Big Data" },
            { name: "Hadoop", category: "Big Data" },
            { name: "Apache Kafka", category: "Streaming" },
            { name: "Apache Airflow", category: "Orchestration" },
            { name: "dbt", category: "Data Transformation" },
            { name: "Snowflake", category: "Data Warehouse" },
            { name: "Databricks", category: "Analytics Platform" },
            { name: "AWS Redshift", category: "Data Warehouse" },
            { name: "Python", category: "Programming" },
            { name: "R", category: "Programming" },
            { name: "Pandas", category: "Data Analysis" },
            { name: "NumPy", category: "Data Analysis" },
            { name: "Tableau", category: "Visualization" },
            { name: "Power BI", category: "Visualization" },
            { name: "Looker", category: "Visualization" },
            { name: "PostgreSQL", category: "Database" },
        ],
        cta: {
            heading: "Ready to Unlock the Value in Your Data?",
            description: "Contact us today to discuss how our data science and big data solutions can transform your business.",
            primaryButtonText: "Start Your Data Journey",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View All Services",
            secondaryButtonLink: "/services",
        },
    },
    {
        slug: "staffing",
        title: "Talent Acquisition Solutions",
        category: "TALENT ACQUISITION",
        hero: {
            title: "Talent Acquisition Solutions",
            subtitle: "Connect with top-tier IT talent through our comprehensive talent acquisition services, designed to match the right professionals with your unique needs.",
            imagePath: "/images/services/staffing.jpg",
        },
        overview: {
            heading: "OVERVIEW",
            paragraphs: [
                "At CiTechT, we understand that finding the right IT talent is crucial for your success.",
                "Our talent acquisition solutions are designed to provide you with skilled professionals who not only meet your technical requirements but also align with your company culture and values. Whether you need full-time employees, contract workers, or project-based teams, our comprehensive screening process and industry expertise ensure you get the right fit for your organization.",
                "We combine rigorous vetting, technical assessments, and cultural-fit alignment to ensure every placement is productive faster and stays aligned with your goals.",
            ],
            image: "/images/services/staffing.jpg",
        },
        specificServices: [
            {
                title: "Full-Time Placement",
                description: "Ideal for roles that demand long-term commitment and growth.",
                image: "/images/services/staffing.jpg",
                features: [
                    "Comprehensive Candidate Screening",
                    "Cultural Fit Assessment",
                    "Long-term Career Planning",
                    "Onboarding Support",
                    "Performance Monitoring",
                ],
            },
            {
                title: "Contract / Contract-to-Hire",
                description: "Flexible options to quickly scale up or down.",
                image: "/images/services/staffing.jpg",
                features: [
                    "Rapid Deployment",
                    "Flexible Duration",
                    "Trial Period Option",
                    "Skill-Matched Professionals",
                    "Cost-Effective Scaling",
                ],
            },
            {
                title: "Project-Based Outsourcing",
                description: "Get specialized teams for short-term or high-focus projects.",
                image: "/images/services/staffing.jpg",
                features: [
                    "Dedicated Project Teams",
                    "Milestone-Based Delivery",
                    "Specialized Expertise",
                    "Resource Management",
                    "Quality Assurance",
                ],
            },
        ],
        process: [
            {
                number: "01",
                title: "Requirements Analysis",
                description: "We work with you to understand your specific talent needs, technical requirements, and cultural expectations.",
            },
            {
                number: "02",
                title: "Talent Sourcing",
                description: "Our team leverages our extensive network to identify and reach out to qualified candidates.",
            },
            {
                number: "03",
                title: "Screening & Interviews",
                description: "We conduct thorough technical assessments and interviews to ensure candidates meet your standards.",
            },
            {
                number: "04",
                title: "Onboarding & Support",
                description: "We facilitate smooth onboarding and provide ongoing support to ensure successful placements.",
            },
        ],
        industries: [
            {
                name: "Technology",
                description: "Software engineers, DevOps specialists, data scientists, and IT infrastructure professionals for tech companies.",
            },
            {
                name: "Financial Services",
                description: "IT security experts, financial software developers, and compliance specialists for banks and fintech.",
            },
            {
                name: "Healthcare",
                description: "Healthcare IT professionals, EHR specialists, and HIPAA compliance experts for medical organizations.",
            },
            {
                name: "Retail & E-Commerce",
                description: "E-commerce developers, digital marketing technologists, and customer experience specialists.",
            },
        ],
        techStack: [
            { name: "Java", category: "Backend" },
            { name: "Python", category: "Backend" },
            { name: ".NET", category: "Backend" },
            { name: "Node.js", category: "Backend" },
            { name: "React", category: "Frontend" },
            { name: "Angular", category: "Frontend" },
            { name: "Vue.js", category: "Frontend" },
            { name: "AWS", category: "Cloud" },
            { name: "Azure", category: "Cloud" },
            { name: "Google Cloud", category: "Cloud" },
            { name: "Kubernetes", category: "DevOps" },
            { name: "Docker", category: "DevOps" },
            { name: "Terraform", category: "Infrastructure" },
            { name: "Ansible", category: "Automation" },
            { name: "Jenkins", category: "CI/CD" },
            { name: "GitLab", category: "CI/CD" },
        ],
        cta: {
            heading: "Ready to Build Your Team?",
            description: "Let's connect you with the IT talent you need to succeed. Contact us today to discuss your staffing needs.",
            primaryButtonText: "Get in Touch",
            primaryButtonLink: "/contact",
            secondaryButtonText: "View Open Positions",
            secondaryButtonLink: "/careers",
        },
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((service) => service.slug);
}

