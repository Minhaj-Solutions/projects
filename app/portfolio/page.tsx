"use client";

import { CTA } from "@/app/components/sections/CTA";
import { Card } from "@/app/components/ui/Card";
import {
  ScrollAnimation,
  ScrollContainer,
  ScrollItem,
} from "@/app/components/ui/ScrollAnimation";
import {
  caseStudies,
  getAllCategories,
  getFeaturedCaseStudies,
} from "@/data/case-studies";
import { ArrowRight, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...getAllCategories()];
  const featuredStudies = getFeaturedCaseStudies();

  const filteredStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies/case-studies-hero.jpg"
            alt="Our Work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our Work
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                Success Stories & Case Studies
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our portfolio of successful projects across various
                industries and technologies. Each case study showcases our
                expertise and the results we deliver for our clients.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      {featuredStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Featured Projects
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Featured Case Studies
              </h2>
            </ScrollAnimation>
            <ScrollContainer
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              stagger={0.1}
            >
              {featuredStudies.map((study) => {
                console.log("Featured Image:", study.featuredImage);
                console.log("Study Title:", study.title);
                return (
                  <ScrollItem key={study.slug}>
                    <Link href={`/portfolio/${study.slug}`}>
                      <Card
                        hover
                        className="h-full flex flex-col overflow-hidden p-0"
                      >
                        <div className="relative h-64">
                          <Image
                            src={study.featuredImage}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                              {study.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="mb-3">
                            <p className="text-sm text-primary font-semibold mb-1">
                              {study.industry}
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                              {study.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                              {study.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{study.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{study.teamSize}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                            <span>View Case Study</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScrollItem>
                );
              })}
            </ScrollContainer>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No case studies found in this category.
              </p>
            </div>
          ) : (
            <ScrollContainer
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              stagger={0.1}
            >
              {filteredStudies
                .filter((study) => !study.featured)
                .map((study) => (
                  <ScrollItem key={study.slug}>
                    <Link href={`/portfolio/${study.slug}`}>
                      <Card
                        hover
                        className="h-full flex flex-col overflow-hidden p-0"
                      >
                        <div className="relative h-48">
                          <Image
                            src={study.featuredImage}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                              {study.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="mb-3">
                            <p className="text-sm text-primary font-semibold mb-1">
                              {study.industry}
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                              {study.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                              {study.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{study.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{study.teamSize}</span>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                            <span>View Case Study</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScrollItem>
                ))}
            </ScrollContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
