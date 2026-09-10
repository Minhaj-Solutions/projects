import type { Metadata } from "next";
import {
    getAllEcommercePlatformSlugs,
    getAllEcommerceServiceSlugs,
    getEcommercePlatformBySlug,
    getEcommerceServiceByPublicSlug,
    getServiceBySlug,
    getAllSubServiceSlugs,
    getEcommercePublicServiceSlug,
    getSubServiceBySlug,
} from "@/data/services";
import { permanentRedirect, notFound } from "next/navigation";
import SubServicePageClient from "./SubServicePageClient";
export async function generateMetadata({
    params,
}: {
    params: Promise<{
        slug: string;
        subSlug: string;
    }>;
}): Promise<Metadata> {
    const { slug, subSlug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found | Minhaj Solutions",
        };
    }

    // E-Commerce
    if (slug === "ecommerce") {
        // Platform page
        const platform =
            getEcommercePlatformBySlug(subSlug);

        if (platform) {
            const canonicalUrl =
                `/services/ecommerce/${platform.slug}`;

            return {
                title: `${platform.title} | Minhaj Solutions`,
                description:
                    platform.description ||
                    `Professional ${platform.title} services by Minhaj Solutions.`,
                alternates: {
                    canonical: canonicalUrl,
                },
                openGraph: {
                    title: `${platform.title} | Minhaj Solutions`,
                    description:
                        platform.description ||
                        `Professional ${platform.title} services by Minhaj Solutions.`,
                    url: canonicalUrl,
                    type: "website",
                },
            };
        }

        // Flat E-Commerce service page
        const result =
            getEcommerceServiceByPublicSlug(subSlug);

        if (result) {
            const canonicalSlug =
                getEcommercePublicServiceSlug(
                    result.service.slug,
                );

            const canonicalUrl =
                `/services/ecommerce/${canonicalSlug}`;

            return {
                title: `${result.service.title} | ${result.platform.title} | Minhaj Solutions`,
                description:
                    result.service.description ||
                    `Professional ${result.service.title} services by Minhaj Solutions.`,
                alternates: {
                    canonical: canonicalUrl,
                },
                openGraph: {
                    title: `${result.service.title} | ${result.platform.title} | Minhaj Solutions`,
                    description:
                        result.service.description ||
                        `Professional ${result.service.title} services by Minhaj Solutions.`,
                    url: canonicalUrl,
                    type: "website",
                },
            };
        }
    }

    // Generic service pages
    const subService =
        getSubServiceBySlug(
            slug,
            subSlug,
        );

    if (!subService) {
        return {
            title: "Service Not Found | Minhaj Solutions",
        };
    }

    const canonicalUrl =
        `/services/${slug}/${subSlug}`;

    return {
        title: `${subService.title} | ${service.title} | Minhaj Solutions`,
        description:
            subService.description ||
            `Professional ${subService.title} services by Minhaj Solutions.`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${subService.title} | ${service.title} | Minhaj Solutions`,
            description:
                subService.description ||
                `Professional ${subService.title} services by Minhaj Solutions.`,
            url: canonicalUrl,
            type: "website",
        },
    };
}
export function generateStaticParams() {
    // Generic services
    const genericRoutes = getAllSubServiceSlugs()
        .filter(
            ({ serviceSlug }) =>
                serviceSlug !== "ecommerce",
        )
        .map(
            ({
                serviceSlug,
                subServiceSlug,
            }) => ({
                slug: serviceSlug,
                subSlug: subServiceSlug,
            }),
        );

    // E-Commerce platforms
    const ecommercePlatformRoutes =
        getAllEcommercePlatformSlugs().map(
            (platformSlug) => ({
                slug: "ecommerce",
                subSlug: platformSlug,
            }),
        );

    // E-Commerce child services
    // These use the new flat public URLs.
    const ecommerceServiceRoutes =
        getAllEcommerceServiceSlugs().map(
            (serviceSlug) => ({
                slug: "ecommerce",
                subSlug: serviceSlug,
            }),
        );

    return [
        ...genericRoutes,
        ...ecommercePlatformRoutes,
        ...ecommerceServiceRoutes,
    ];
}

export default async function SubServicePage({
    params,
}: {
    params: Promise<{
        slug: string;
        subSlug: string;
    }>;
}) {
    const { slug, subSlug } = await params;

    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // ==========================================
    // E-COMMERCE
    // ==========================================

    if (slug === "ecommerce") {
        // --------------------------------------
        // 1. E-Commerce Platform
        // --------------------------------------
        //
        // Example:
        // /services/ecommerce/shopify
        // /services/ecommerce/woocommerce
        // /services/ecommerce/amazon
        //
        const platform =
            getEcommercePlatformBySlug(
                subSlug,
            );

        if (platform) {
            return (
                <SubServicePageClient
                    service={service}
                    subService={platform}
                />
            );
        }

        // --------------------------------------
        // 2. Flat E-Commerce Service
        // --------------------------------------
        //
        // Example:
        // /services/ecommerce/shopify-seo
        // /services/ecommerce/shopify-theme-development
        // /services/ecommerce/woocommerce-seo
        //
        const result =
            getEcommerceServiceByPublicSlug(
                subSlug,
            );

        if (result) {
            const canonicalSlug =
                getEcommercePublicServiceSlug(
                    result.service.slug,
                );

            // If an old/alternative slug is used,
            // redirect it to the canonical flat URL.
            if (subSlug !== canonicalSlug) {
                permanentRedirect(
                    `/services/ecommerce/${canonicalSlug}`,
                );
            }

            return (
                <SubServicePageClient
                    service={service}
                    subService={result.service}
                    platform={result.platform}
                />
            );
        }

        notFound();
    }

    // ==========================================
    // ALL OTHER SERVICES
    // ==========================================

    const subService =
        getSubServiceBySlug(
            slug,
            subSlug,
        );

    if (!subService) {
        notFound();
    }

    return (
        <SubServicePageClient
            service={service}
            subService={subService}
        />
    );
}