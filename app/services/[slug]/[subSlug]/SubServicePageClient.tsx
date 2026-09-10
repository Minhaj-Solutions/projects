"use client";

import { CTA } from "@/app/components/sections/CTA";
import {
    getEcommercePublicServiceSlug,
    type Service,
    type ServiceFeature,
} from "@/data/services";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Lightbulb,
    Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SubServicePageClientProps {
    service: Service;
    subService: ServiceFeature;
    platform?: ServiceFeature;
}

function getCircularRelatedServices(
    services: ServiceFeature[],
    currentSlug: string,
): ServiceFeature[] {
    if (services.length <= 1) {
        return [];
    }

    const currentIndex = services.findIndex(
        (service) => service.slug === currentSlug,
    );

    if (currentIndex === -1) {
        return services;
    }

    const results: ServiceFeature[] = [];

    for (let offset = 1; offset < services.length; offset++) {
        const service =
            services[
                (currentIndex + offset) %
                    services.length
            ];

        if (service.slug !== currentSlug) {
            results.push(service);
        }
    }

    return results;
}
export default function SubServicePageClient({
    service,
    subService,
    platform,
}: SubServicePageClientProps) {
    const isEcommerce =
        service.slug === "ecommerce";

    const isEcommercePlatformPage =
        isEcommerce && !platform;

    const isEcommerceDetailPage =
        isEcommerce && !!platform;

    // --------------------------------------------------------
    // Determine the navigation scope.
    //
    // Generic service:
    // service.specificServices
    //
    // E-Commerce platform:
    // subService.nestedServices
    //
    // E-Commerce detail:
    // platform.nestedServices
    // --------------------------------------------------------

    let relatedServices: ServiceFeature[] = [];

  if (isEcommercePlatformPage) {
    relatedServices =
        subService.nestedServices || [];
} else if (isEcommerceDetailPage) {
    relatedServices =
        getCircularRelatedServices(
            platform.nestedServices || [],
            subService.slug,
        );
} else {
    relatedServices =
        service.specificServices
            .filter(
                (item) =>
                    item.slug !==
                    subService.slug,
            )
            .slice(0, 3);
}

    // --------------------------------------------------------
    // Breadcrumb / back navigation
    // --------------------------------------------------------

    const backHref = isEcommerceDetailPage
        ? `/services/ecommerce/${platform.slug}`
        : `/services/${service.slug}`;

    const backLabel = isEcommerceDetailPage
        ? `Back to ${platform.title}`
        : isEcommercePlatformPage
          ? "Back to E-Commerce"
          : `Back to ${service.title}`;

    // --------------------------------------------------------
    // Related section title
    // --------------------------------------------------------

    let relatedHeading = "Related Services";

    if (isEcommercePlatformPage) {
        relatedHeading = `${subService.title} Services`;
    } else if (isEcommerceDetailPage) {
        relatedHeading = `More ${platform.title} Services`;
    } else {
        relatedHeading = `More ${service.title} Services`;
    }

    // --------------------------------------------------------
    // Bottom navigation
    // --------------------------------------------------------

    const bottomHref = isEcommerceDetailPage
        ? `/services/ecommerce/${platform.slug}`
        : `/services/${service.slug}`;

    const bottomLabel = isEcommerceDetailPage
        ? `View All ${platform.title} Services`
        : isEcommercePlatformPage
          ? "View All E-Commerce Services"
          : `View All ${service.title} Services`;

    return (
        <main className="min-h-screen bg-background">
            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden py-20 md:py-28">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={subService.heroImage}
                        alt={subService.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />

                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-5xl">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            {/* Breadcrumb */}

                            <Link
                                href={backHref}
                                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                            >
                                <ArrowLeft className="h-4 w-4" />

                                {backLabel}
                            </Link>

                            {/* Platform context */}

                            {isEcommerceDetailPage && (
                                <div className="mb-5">
                                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                        {platform.title}
                                    </span>
                                </div>
                            )}

                            {/* Title */}

                            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                                {subService.title}
                            </h1>

                            {/* Description */}

                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                                {subService.description}
                            </p>

                            {/* CTA */}

                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105"
                                >
                                    Get Started

                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OVERVIEW
            ===================================================== */}

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="h-px w-10 bg-primary" />

                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    Overview
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold md:text-4xl">
                                {subService.title}
                            </h2>

                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                {
                                    subService.detailedDescription
                                }
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="relative min-h-[350px] overflow-hidden rounded-3xl"
                        >
                            <Image
                                src={subService.image}
                                alt={subService.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                FEATURES
            ===================================================== */}

            <section className="bg-muted/40 py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="h-px w-10 bg-primary" />

                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                    What We Deliver
                                </span>
                            </div>

                            <h2 className="text-3xl font-bold md:text-4xl">
                                Service Features
                            </h2>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {subService.features.map(
                                (
                                    feature,
                                    index,
                                ) => (
                                    <motion.div
                                        key={feature}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay:
                                                index *
                                                0.05,
                                        }}
                                        className="rounded-2xl border bg-background p-6 transition-shadow hover:shadow-lg"
                                    >
                                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>

                                        <p className="font-medium leading-relaxed">
                                            {feature}
                                        </p>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                BENEFITS
            ===================================================== */}

            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>

                                <div>
                                    <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                                        Benefits
                                    </span>

                                    <h2 className="text-3xl font-bold">
                                        Why Choose This Service
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                {subService.benefits.map(
                                    (benefit) => (
                                        <div
                                            key={benefit}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                                            <p className="text-muted-foreground">
                                                {benefit}
                                            </p>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="rounded-3xl border bg-muted/40 p-8">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Lightbulb className="h-6 w-6" />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Ideal Use Cases
                            </h3>

                            <p className="mt-3 text-muted-foreground">
                                This service is a strong fit for businesses
                                with requirements such as:
                            </p>

                            <div className="mt-6 space-y-3">
                                {subService.useCases.map(
                                    (useCase) => (
                                        <div
                                            key={useCase}
                                            className="rounded-xl border bg-background px-4 py-3 text-sm font-medium"
                                        >
                                            {useCase}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                RELATED / NEXT SERVICES
            ===================================================== */}

            {relatedServices.length > 0 && (
                <section className="bg-muted/40 py-20 md:py-28">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-12">
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="h-px w-10 bg-primary" />

                                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                        Explore More
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold md:text-4xl">
                                    {relatedHeading}
                                </h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {relatedServices.map(
                                    (
                                        relatedService,
                                        index,
                                    ) => {
                                       const href =
    isEcommercePlatformPage ||
    isEcommerceDetailPage
        ? `/services/ecommerce/${getEcommercePublicServiceSlug(
              relatedService.slug,
          )}`
        : `/services/${service.slug}/${relatedService.slug}`;
                                        return (
                                            <motion.div
                                                key={
                                                    relatedService.slug
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay:
                                                        index *
                                                        0.08,
                                                }}
                                            >
                                                <Link
                                                    href={
                                                        href
                                                    }
                                                    className="group block h-full overflow-hidden rounded-2xl border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                                >
                                                    <div className="relative h-52 overflow-hidden">
                                                        <Image
                                                            src={
                                                                relatedService.image
                                                            }
                                                            alt={
                                                                relatedService.title
                                                            }
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />

                                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                                                    </div>

                                                    <div className="p-6">
                                                        <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
                                                            {
                                                                relatedService.title
                                                            }
                                                        </h3>

                                                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                                            {
                                                                relatedService.description
                                                            }
                                                        </p>

                                                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                                            Explore Service

                                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* =====================================================
                BOTTOM NAVIGATION
            ===================================================== */}

            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-6xl">
                        <Link
                            href={bottomHref}
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                            {bottomLabel}
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}