import { getAllSubServiceSlugs, getServiceBySlug, getSubServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import SubServicePageClient from "./SubServicePageClient";

export function generateStaticParams() {
    return getAllSubServiceSlugs().map(({ serviceSlug, subServiceSlug }) => ({
        slug: serviceSlug,
        subSlug: subServiceSlug,
    }));
}

export default async function SubServicePage({
    params,
}: {
    params: Promise<{ slug: string; subSlug: string }>;
}) {
    const { slug, subSlug } = await params;
    const service = getServiceBySlug(slug);
    const subService = getSubServiceBySlug(slug, subSlug);

    if (!service || !subService) {
        notFound();
    }

    return <SubServicePageClient service={service} subService={subService} />;
}
