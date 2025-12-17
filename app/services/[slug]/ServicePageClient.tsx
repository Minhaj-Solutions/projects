"use client";

import { CTA } from "@/app/components/sections/CTA";
import type { Service } from "@/data/services";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: industriesRef, inView: industriesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: techStackRef, inView: techStackInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const techLogoMap: Record<string, string> = {
    Docker: "/images/tech-logos/docker.avif",
    Kubernetes: "/images/tech-logos/kubernnetes.avif",
    React: "/images/tech-logos/react.avif",
    "React Native": "/images/tech-logos/react.avif",
    Vue: "/images/tech-logos/vuejs.avif",
    "Vue.js": "/images/tech-logos/vuejs.avif",
    Angular: "/images/tech-logos/angular.avif",
    Bootstrap: "/images/tech-logos/bootstrap.avif",
    Firebase: "/images/tech-logos/firebase.avif",
    AWS: "/images/tech-logos/aws.avif",
    "AWS Amplify": "/images/tech-logos/aws.avif",
    "Tailwind CSS": "/images/tech-logos/tailwindcss.avif",
    Tailwind: "/images/tech-logos/tailwindcss.avif",
    TypeScript: "/images/tech-logos/ts.avif",
    MongoDB: "/images/tech-logos/mongodb.avif",
    MySQL: "/images/tech-logos/mysql.avif",
    PostgreSQL: "/images/tech-logos/postgresql.avif",
    Selenium: "/images/tech-logos/selenium.avif",
  };

  const defaultServiceImage =
    service.hero.imagePath || "/images/services/services-hero.jpg";

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.hero.imagePath}
            alt={service.hero.title}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Content */}
        <div className="section-shell py-12 md:py-16 relative z-10 max-[968px]:py-10 max-[425px]:py-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white font-semibold text-sm tracking-wider uppercase">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-[968px]:text-3xl max-[425px]:text-2xl max-[375px]:text-xl">
                {service.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
                {service.hero.subtitle}
              </p>
              <Link
                href={service.cta.primaryButtonLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:bg-primary-light hover:text-primary-dark font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 max-[968px]:px-5 max-[968px]:py-2.5 max-[968px]:text-sm max-[425px]:px-4 max-[425px]:py-2 max-[425px]:text-xs"
              >
                {service.cta.primaryButtonText}
                <svg
                  className="w-5 h-5 max-[968px]:w-4 max-[968px]:h-4 max-[425px]:w-3.5 max-[425px]:h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="section-shell">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {service.overview.heading}
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {service.overview.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-700 mb-6 leading-relaxed max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={
                    service.overview.image ||
                    defaultServiceImage ||
                    "/images/services/services-hero.jpg"
                  }
                  alt="Overview"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-shell">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl max-[375px]:text-lg">
                {service.title} <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
                Comprehensive solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 max-[968px]:md:grid-cols-2 gap-8 max-[968px]:gap-6">
              {service.specificServices.map((serviceDetail, index) => {
                const serviceDetailImage =
                  serviceDetail.image ||
                  defaultServiceImage ||
                  "/images/services/services-hero.jpg";
                return (
                  <Link
                    key={serviceDetail.slug}
                    href={`/services/${service.slug}/${serviceDetail.slug}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 hover:border-primary hover:shadow-2xl transition-all duration-500 h-[450px] max-[968px]:h-[380px] cursor-pointer"
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={serviceDetailImage}
                          alt={serviceDetail.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-black/90 group-hover:via-black/80 group-hover:to-black/60 transition-all duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-8 max-[968px]:p-6">
                        {/* Title - Always Visible */}
                        <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:-translate-y-2 max-[968px]:text-xl">
                          {serviceDetail.title}
                        </h3>

                        {/* Description and Features - Visible on Hover */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500">
                          <p className="text-gray-200 mb-4 leading-relaxed">
                            {serviceDetail.description}
                          </p>
                          <ul className="space-y-2">
                            {serviceDetail.features
                              .slice(0, 4)
                              .map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <svg
                                    className="w-4 h-4 text-primary-light mt-0.5 mr-2 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-gray-100">{feature}</span>
                                </li>
                              ))}
                          </ul>
                          <div className="mt-4 flex items-center text-primary-light text-sm font-medium">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="section-shell">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl max-[375px]:text-lg">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
                A systematic, collaborative approach that ensures we deliver
                measurable results
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent pointer-events-none" />
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      processInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 p-6 md:p-7 max-[968px]:p-5 grid md:grid-cols-[auto,1fr] gap-4 md:gap-6 max-[968px]:gap-4">
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-semibold text-lg flex items-center justify-center shadow-lg max-[968px]:w-10 max-[968px]:h-10 max-[425px]:w-9 max-[425px]:h-9 max-[425px]:text-base">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 max-[968px]:text-lg max-[425px]:text-base max-[375px]:text-sm">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed max-[425px]:text-sm max-[375px]:text-xs">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section ref={industriesRef} className="py-20 bg-white">
        <div className="section-shell">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                industriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  INDUSTRIES WE FOCUS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl max-[375px]:text-lg">
                Industries We Serve with Our{" "}
                <span className="text-primary">{service.title}</span> Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-[968px]:gap-6">
              {service.industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    industriesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 max-[968px]:p-6 border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 max-[425px]:p-5"
                >
                  <div className="flex items-start gap-4 max-[968px]:gap-3">
                    <div className="bg-gradient-to-br from-primary to-primary-dark text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 max-[968px]:w-10 max-[968px]:h-10 max-[425px]:w-9 max-[425px]:h-9">
                      <svg
                        className="w-6 h-6 max-[968px]:w-5 max-[968px]:h-5 max-[425px]:w-4 max-[425px]:h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 max-[968px]:text-xl max-[425px]:text-lg max-[375px]:text-base">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-[968px]:text-sm max-[425px]:text-xs">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={techStackRef} className="py-20 bg-white">
        <div className="section-shell">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                techStackInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl max-[375px]:text-lg">
                Our <span className="text-primary">Tech Stack</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
                Equipped with the latest tools, our teams deliver impactful
                solutions designed to grow your business
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-[968px]:gap-4">
              {service.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    techStackInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="bg-white rounded-2xl p-6 max-[968px]:p-4 border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 text-center group max-[425px]:p-3"
                >
                  <div className="flex flex-col items-center justify-center h-24">
                    {techLogoMap[tech.name] ? (
                      <div className="relative w-20 h-20 mx-auto">
                        <Image
                          src={techLogoMap[tech.name]}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="text-lg font-bold text-gray-900">
                        {tech.name}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
