
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
} from "lucide-react";

import { Card } from "@/app/components/ui/Card";

export interface Opportunity {
  id: string;
  title: string;
  slug: string;
  type: "Job" | "Internship";
  employmentType: string;
  location: string;
  description: string;
  experience: string;
  qualifications: string;
  responsibilities: string[];
  requirements: string[];
  deadline: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {
  const detailsUrl = `/jobs-internships/${opportunity.slug}`;

  return (
    <Card
      hover
      className="h-full flex flex-col border border-gray-200 shadow-sm"
    >
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary">
          <BriefcaseBusiness className="w-4 h-4" />
          {opportunity.type}
        </span>

        <span className="text-sm text-gray-500">
          {opportunity.employmentType}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {opportunity.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {opportunity.description}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{opportunity.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 className="w-4 h-4 text-primary" />
            <span>{opportunity.experience}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-7 pt-5 border-t border-gray-200">
        <Link
          href={detailsUrl}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href={`mailto:career@minhajsolutions.com?subject=${encodeURIComponent(
            `Application for ${opportunity.title}`
          )}`}
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-primary px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
        >
          Apply Now
        </a>
      </div>
    </Card>
  );
}
