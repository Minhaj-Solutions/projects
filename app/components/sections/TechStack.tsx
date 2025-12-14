"use client";

import Image from "next/image";
import { ScrollAnimation } from "../ui/ScrollAnimation";

const techStack = [
  { name: "React", logo: "/tech-logos/react.avif" },
  { name: "TypeScript", logo: "/tech-logos/ts.avif" },
  { name: "Selenium", logo: "/tech-logos/selenium.avif" },
  { name: "Firebase", logo: "/tech-logos/firebase.avif" },
  { name: "AWS", logo: "/tech-logos/aws.avif" },
  { name: "Docker", logo: "/tech-logos/docker.avif" },
  { name: "Kubernetes", logo: "/tech-logos/kubernnetes.avif" },
  { name: "MongoDB", logo: "/tech-logos/mongodb.avif" },
  { name: "MySQL", logo: "/tech-logos/mysql.avif" },
  { name: "PostgreSQL", logo: "/tech-logos/postgresql.avif" },
  { name: "Tailwind CSS", logo: "/tech-logos/tailwindcss.avif" },
  { name: "Bootstrap", logo: "/tech-logos/bootstrap.avif" },
  { name: "Vue.js", logo: "/tech-logos/vuejs.avif" },
  { name: "Angular", logo: "/tech-logos/angular.avif" },
];

export function TechStack() {
  // Duplicate the array to create seamless infinite scroll
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-10 md:py-16 bg-gray-50 overflow-hidden">
      <div className="section-shell">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm max-[375px]:text-xs">
                Technologies We Use
              </span>
            </div>
            <h2 className="text-3xl max-[375px]:text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tech Stack
            </h2>
            <p className="text-lg max-[375px]:text-base text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies powering modern solutions
            </p>
          </div>
        </ScrollAnimation>

        {/* Scrolling Rows */}
        <div className="space-y-6 md:space-y-8">
          {/* Row 1 - Scrolls left */}
          <div className="marquee">
            <div className="marquee-track marquee-track-left gap-6 md:gap-10">
              {duplicatedTech.map((tech, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 min-w-[100px] min-h-[100px] max-[375px]:min-w-[80px] max-[375px]:min-h-[80px] md:min-w-[100px] md:min-h-[100px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center p-5 max-[375px]:p-3"
                  aria-label={tech.name}
                >
                  <div className="relative w-14 h-14 max-[375px]:w-10 max-[375px]:h-10 md:w-16 md:h-16">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      sizes="64px"
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls right */}
          <div className="marquee">
            <div className="marquee-track marquee-track-right gap-6 md:gap-10">
              {duplicatedTech.map((tech, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 min-w-[100px] min-h-[100px] max-[375px]:min-w-[80px] max-[375px]:min-h-[80px] md:min-w-[100px] md:min-h-[100px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center p-5 max-[375px]:p-3"
                  aria-label={tech.name}
                >
                  <div className="relative w-14 h-14 max-[375px]:w-10 max-[375px]:h-10 md:w-16 md:h-16">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      sizes="64px"
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
