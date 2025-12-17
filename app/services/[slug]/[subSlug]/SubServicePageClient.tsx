"use client";

import { CTA } from "@/app/components/sections/CTA";
import type { Service, ServiceFeature } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SubServicePageClientProps {
    service: Service;
    subService: ServiceFeature;
}

export default function SubServicePageClient({ service, subService }: SubServicePageClientProps) {
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
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
                        src={subService.heroImage}
                        alt={subService.title}
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
                            {/* Breadcrumb */}
                            <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="text-sm font-medium">{service.title}</span>
                            </Link>

                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 ml-4">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white font-semibold text-sm tracking-wider uppercase">
                                    {service.category}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-[968px]:text-2xl max-[425px]:text-xl max-[375px]:text-lg">
                                {subService.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl max-[968px]:text-base max-[425px]:text-sm max-[375px]:text-xs">
                                {subService.description}
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:bg-primary-light hover:text-primary-dark font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 max-[968px]:px-5 max-[968px]:py-2.5 max-[968px]:text-sm max-[425px]:px-4 max-[425px]:py-2 max-[425px]:text-xs"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 max-[968px]:w-4 max-[968px]:h-4 max-[425px]:w-3.5 max-[425px]:h-3.5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Description Section */}
            <section className="py-20 bg-white">
                <div className="section-shell">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                        About This Service
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl">
                                    {subService.title}
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed max-[968px]:text-base max-[425px]:text-sm">
                                    {subService.detailedDescription}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={subService.image}
                                    alt={subService.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                    Key Features
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl">
                                What We <span className="text-primary">Deliver</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto max-[968px]:text-base max-[425px]:text-sm">
                                Comprehensive capabilities designed to meet your specific needs
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subService.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-primary to-primary-dark text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <p className="text-gray-800 font-medium text-lg max-[968px]:text-base">
                                            {feature}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="section-shell">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
                            >
                                <Image
                                    src={subService.heroImage}
                                    alt="Benefits"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2"
                            >
                                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                                    <Target className="w-4 h-4 text-primary" />
                                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                        Benefits
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 max-[968px]:text-2xl max-[425px]:text-xl">
                                    Why Choose This <span className="text-primary">Service</span>
                                </h2>
                                <div className="space-y-4">
                                    {subService.benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 hover:bg-primary/5 transition-colors"
                                        >
                                            <div className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <p className="text-gray-700 leading-relaxed max-[968px]:text-sm">
                                                {benefit}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
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
                            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                                <Lightbulb className="w-4 h-4 text-primary" />
                                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                    Use Cases
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-[968px]:text-2xl max-[425px]:text-xl">
                                Real-World <span className="text-primary">Applications</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto max-[968px]:text-base max-[425px]:text-sm">
                                See how businesses like yours benefit from this service
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {subService.useCases.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/10 hover:border-primary hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-gradient-to-br from-primary to-primary-dark text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="font-bold text-lg">{index + 1}</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-800 text-lg leading-relaxed max-[968px]:text-base">
                                                {useCase}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
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
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-[968px]:text-2xl max-[425px]:text-xl">
                                Explore More <span className="text-primary">{service.title}</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-[968px]:text-base max-[425px]:text-sm">
                                Discover other services that complement your needs
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.specificServices
                                .filter((s) => s.slug !== subService.slug)
                                .slice(0, 3)
                                .map((relatedService, index) => (
                                    <motion.div
                                        key={relatedService.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Link href={`/services/${service.slug}/${relatedService.slug}`}>
                                            <div className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                                <Image
                                                    src={relatedService.image}
                                                    alt={relatedService.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h3 className="text-xl font-bold text-white mb-2 max-[968px]:text-lg">
                                                        {relatedService.title}
                                                    </h3>
                                                    <div className="flex items-center text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                                        Learn More
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
                            >
                                View All {service.title} Services
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />
        </div>
    );
}
