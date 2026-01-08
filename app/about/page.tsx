"use client";

import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import {
  ScrollAnimation,
  ScrollContainer,
  ScrollItem,
} from "@/app/components/ui/ScrollAnimation";
import { SITE_NAME } from "@/app/lib/constants";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

// Core values data
const coreValues = [
  {
    title: "Innovation",
    description:
      "We embrace new technologies and ideas, continually seeking ways to improve our solutions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are at the heart of every client relationship.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We believe in open communication and teamwork, both internally and with clients.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Results-Driven",
    description:
      "Our primary goal is to deliver measurable impact for every project and partnership.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Continuous Learning",
    description:
      "We stay ahead of industry trends to ensure our clients benefit from the latest tech and methodologies.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.776-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    description:
      "We view ourselves as an extension of your team, committed to your success as true long-term partners.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 11h3m-3 4h3m-6-4v8m-3-3h3m-3-11v8m0 0h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

const offices = [
  {
    city: "Pakistan",
    country: "Pakistan",
    type: "Head Office",
    address: "84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan",
    phone: "+92 322 0681998",
    email: "info@minhajsolutions.com",
  },
  {
    city: "United Kingdom",
    country: "United Kingdom",
    type: "Regional Office",
    address: "124 City Road, London",
    phone: "+44 7400 719523",
    email: "info@minhajsolutions.com",
  },
];

const leadership = [
  {
    name: "Wajid Maqsood",
    title: "Founder & CEO",
    image: "/images/team/Wajid Maqsood (Founder & CEO) .png",
  },
  {
    name: "Tayyab Saleem",
    title: "Co-Founder & CTO",
    image: "/images/team/tayyab-saleem-cto.png",
  },
  {
    name: "Javed Ahmad",
    title: "Marketplace Operations Manager",
    image: "/images/team/Javed Ahmad ( Marketplace Operations Manager).png",
  },
  {
    name: "Imdad Hussain",
    title: "Mobile Application Developer",
    image: "/images/team/Imdad Hussain ( Mobile Application Developer ).png",
  },
  {
    name: "Abd ul Rehman Zaki",
    title: "Senior mern stack developer",
    image: "/images/team/Abd ul Rehman Zaki (Senior mern stack developer) .png",
  },
  {
    name: "Hassan Raza",
    title: "Junior mern stack developer",
    image: "/images/team/Hassan Raza ( Junior mern stack developer  ).png",
  },
  {
    name: "Sadia Aziz",
    title: "Graphic Designer",
    image: "/images/team/Sadia Aziz ( Graphic Designer ).png",
  },
  {
    name: "Waqar Rafique",
    title: "Motion Graphic Designer",
    image: "/images/team/Waqar Rafique ( Motion Graphic Designer ).png",
  },
  {
    name: "Zeeshan",
    title: "Mobile Application Developer",
    image: "/images/team/Zeeshan ( Mobile Application Developer ).png",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function AboutPage() {
  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <ScrollAnimation>
            <div className="text-center md:text-center max-w-4xl mx-auto max-md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white font-semibold text-sm">
                  About {SITE_NAME}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-[425px]:text-3xl max-[375px]:text-2xl">
                Empowering Businesses,
                <br />
                <span className="text-primary-light">Inspiring Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl md:mx-auto leading-relaxed max-[425px]:text-base max-[375px]:text-sm">
                At {SITE_NAME}, we specialize in transforming businesses with
                enterprise-grade software solutions tailored to their needs.
                With a legacy of technical excellence, a global team of experts,
                and a passion for innovation, we help organizations thrive in an
                ever-evolving digital landscape.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold text-sm">
                    Our Philosophy
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[425px]:text-2xl max-[375px]:text-xl">
                  Building Tomorrow&apos;s{" "}
                  <span className="text-primary">Solutions Today</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 max-[425px]:text-base max-[375px]:text-sm">
                  We believe technology should empower, not overwhelm. Our
                  approach centers on understanding your unique challenges and
                  crafting solutions that drive measurable results while scaling
                  with your growth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-[425px]:text-base max-[375px]:text-sm">
                  Every project is an opportunity to innovate, collaborate, and
                  exceed expectations. We combine technical expertise with
                  strategic thinking to deliver software that transforms how you
                  do business.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/our-story.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollContainer className="grid md:grid-cols-2 gap-8" stagger={0.1}>
            <ScrollItem>
              <Card className="h-full bg-white border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-lg max-[375px]:w-12 max-[375px]:h-12">
                  <Target className="w-8 h-8 text-white max-[375px]:w-6 max-[375px]:h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 max-[425px]:text-xl max-[375px]:text-lg">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed max-[425px]:text-sm max-[375px]:text-xs">
                  To empower businesses with cutting-edge technology solutions,
                  unlocking their growth potential by connecting them with
                  passionate and skilled engineers. We strive to deliver
                  exceptional value through innovative solutions that transform
                  how businesses operate and compete in the digital age.
                </p>
              </Card>
            </ScrollItem>

            <ScrollItem delay={0.1}>
              <Card className="h-full bg-white border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-lg max-[375px]:w-12 max-[375px]:h-12">
                  <Eye className="w-8 h-8 text-white max-[375px]:w-6 max-[375px]:h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 max-[425px]:text-xl max-[375px]:text-lg">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed max-[425px]:text-sm max-[375px]:text-xs">
                  At {SITE_NAME}, we envision transforming IT systems into
                  smart, agile, and AI-driven digital assets. With years of
                  expertise, we empower global clients through innovative,
                  adaptive solutions, shaping a future where technology meets
                  the dynamic demands of a connected world.
                </p>
              </Card>
            </ScrollItem>
          </ScrollContainer>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-5">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm">
                Our Principles
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 max-[425px]:text-2xl max-[375px]:text-xl">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto max-[425px]:text-base max-[375px]:text-sm">
              We are guided by six key principles that shape our work and our
              relationships with clients.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/20 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-[375px]:p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-md max-[375px]:w-12 max-[375px]:h-12">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 max-[425px]:text-xl max-[375px]:text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-[425px]:text-sm max-[375px]:text-xs">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">
                  Our Global Presence
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-[425px]:text-2xl max-[375px]:text-xl">
                We Support Clients{" "}
                <span className="text-primary">Worldwide</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto max-[425px]:text-base max-[375px]:text-sm">
                We support clients in 20+ countries and drive continued growth
                through innovation and transformation.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            stagger={0.1}
          >
            {offices.map((office, index) => (
              <ScrollItem key={office.city} delay={index * 0.1}>
                <Card className="h-full bg-white border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0 shadow-md max-[375px]:w-8 max-[375px]:h-8">
                      <MapPin className="w-5 h-5 text-white max-[375px]:w-4 max-[375px]:h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 max-[425px]:text-sm max-[375px]:text-xs">
                        {office.city}
                      </h3>
                      <p className="text-sm text-gray-600 max-[425px]:text-xs max-[375px]:text-[10px]">
                        ,{office.country}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4 max-[375px]:text-xs">
                    <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-2">
                      {office.type}
                    </p>
                    <p className="leading-relaxed">{office.address}</p>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors max-[375px]:text-xs"
                    >
                      <Phone className="w-4 h-4 max-[375px]:w-3 max-[375px]:h-3" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors max-[375px]:text-xs"
                    >
                      <Mail className="w-4 h-4 max-[375px]:w-3 max-[375px]:h-3" />
                      {office.email}
                    </a>
                  </div>
                </Card>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">
                  Our Leadership
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 max-[425px]:text-2xl max-[375px]:text-xl">
                Meet Our <span className="text-primary">Leadership Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto max-[425px]:text-base max-[375px]:text-sm">
                Our capability and competencies are bolstered by diverse global
                leadership
              </p>
            </div>
          </ScrollAnimation>

          <ScrollContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.1}
          >
            {leadership.map((leader, index) => (
              <ScrollItem key={leader.name} delay={index * 0.1}>
                <Card className="text-center bg-white border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary-dark/20 ring-4 ring-primary/10 max-[375px]:w-24 max-[375px]:h-24">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 max-[425px]:text-lg max-[375px]:text-base">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 max-[425px]:text-sm max-[375px]:text-xs">
                    {leader.title}
                  </p>
                </Card>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/mission-vision.jpg"
                  alt="Code of conduct"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">
                    Code of Conduct
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[425px]:text-2xl max-[375px]:text-xl">
                  Our Code of{" "}
                  <span className="text-primary">Business Principles</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 max-[425px]:text-base max-[375px]:text-sm">
                  {SITE_NAME} prioritizes legal and ethical conduct, ensuring
                  honesty, fairness, and accountability for all. We are
                  committed to maintaining the highest standards of integrity in
                  all our business dealings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0 max-[375px]:w-4 max-[375px]:h-4" />
                    <p className="text-gray-600 max-[375px]:text-sm">
                      Ethical business practices and transparency
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0 max-[375px]:w-4 max-[375px]:h-4" />
                    <p className="text-gray-600 max-[375px]:text-sm">
                      Fair treatment of all stakeholders
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0 max-[375px]:w-4 max-[375px]:h-4" />
                    <p className="text-gray-600 max-[375px]:text-sm">
                      Compliance with all legal requirements
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0 max-[375px]:w-4 max-[375px]:h-4" />
                    <p className="text-gray-600 max-[375px]:text-sm">
                      Accountability and responsibility
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 max-[425px]:text-xs max-[425px]:px-4 max-[425px]:py-2"
                >
                  Access Our Code of Business Principles
                  <ArrowRight className="w-4 h-4 ml-2 max-[425px]:w-3 max-[425px]:h-3" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-[425px]:text-2xl max-[375px]:text-xl">
                Ready To Get{" "}
                <span className="text-primary-light">Started?</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-[425px]:text-base max-[375px]:text-sm">
                Connect with us to explore how we can deliver exceptional IT
                solutions tailored to your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary-light hover:text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 max-[425px]:text-base max-[425px]:px-6 max-[425px]:py-3 max-[375px]:text-sm max-[375px]:px-5 max-[375px]:py-2.5"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 max-[425px]:w-4 max-[425px]:h-4 max-[375px]:w-3.5 max-[375px]:h-3.5" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
