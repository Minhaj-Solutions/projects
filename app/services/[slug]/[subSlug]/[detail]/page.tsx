import {
    getAllEcommerceServiceParams,
    getEcommerceServiceByRouteSlug,
    getEcommercePublicServiceSlug,
    getServiceBySlug,
} from "@/data/services";
import { notFound, permanentRedirect } from "next/navigation";

export function generateStaticParams() {
    return getAllEcommerceServiceParams().flatMap(
        ({ platformSlug, serviceSlug }) => {
            const canonicalSlug =
                getEcommercePublicServiceSlug(serviceSlug);

            const params: {
                slug: string;
                subSlug: string;
                detail: string;
            }[] = [
                {
                    slug: "ecommerce",
                    subSlug: platformSlug,
                    detail: serviceSlug,
                },
            ];

            if (canonicalSlug !== serviceSlug) {
                params.push({
                    slug: "ecommerce",
                    subSlug: platformSlug,
                    detail: canonicalSlug,
                });
            }

            return params;
        },
    );
}

export default async function EcommerceServiceDetailPage({
    params,
}: {
    params: Promise<{
        slug: string;
        subSlug: string;
        detail: string;
    }>;
}) {
    const {
        slug,
        subSlug,
        detail,
    } = await params;

    if (slug !== "ecommerce") {
        notFound();
    }

    const ecommerce = getServiceBySlug("ecommerce");

    if (!ecommerce) {
        notFound();
    }

    const result =
        getEcommerceServiceByRouteSlug(
            subSlug,
            detail,
        );

    if (!result) {
        notFound();
    }

    const canonicalSlug =
        getEcommercePublicServiceSlug(
            result.service.slug,
        );

    permanentRedirect(
        `/services/ecommerce/${canonicalSlug}`,
    );
}