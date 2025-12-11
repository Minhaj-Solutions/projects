import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";
import ServicePageClient from "./ServicePageClient";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

