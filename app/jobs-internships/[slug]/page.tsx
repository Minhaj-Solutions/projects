
import { OpportunityApplicationForm } from "@/app/components/careers/OpportunityApplicationForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  GraduationCap,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

import { opportunities } from "@/data/opportunities";
import { Card } from "@/app/components/ui/Card";

interface OpportunityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function OpportunityDetailPage({
  params,
}: OpportunityPageProps) {
  const { slug } = await params;

  const opportunity = opportunities.find(
    (item) => item.slug === slug
  );

  if (!opportunity) {
    notFound();
  }

  const formattedDeadline = new Date(
    `${opportunity.deadline}T00:00:00`
  ).toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto">
        {/* Back to Careers */}
        <Link
          href="/jobs-internships"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Opportunity Header */}
          <Card className="border border-gray-200 shadow-sm mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary">
                <BriefcaseBusiness className="w-4 h-4" />
                {opportunity.type}
              </span>

              <span className="text-sm text-gray-500">
                {opportunity.employmentType}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              {opportunity.title}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-8">
              {opportunity.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-gray-200 pt-6">
              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    {opportunity.location}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3">
                <Clock3 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="font-medium text-gray-900">
                    {opportunity.experience}
                  </p>
                </div>
              </div>

              {/* Qualification */}
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">Qualification</p>
                  <p className="font-medium text-gray-900">
                    {opportunity.qualifications}
                  </p>
                </div>
              </div>

              {/* Application Deadline */}
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">
                    Application Deadline
                  </p>
                  <p className="font-medium text-gray-900">
                    {formattedDeadline}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Key Responsibilities */}
          <Card className="border border-gray-200 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Key Responsibilities
              </h2>
            </div>

            <ul className="space-y-4">
              {opportunity.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Requirements & Skills */}
          <Card className="border border-gray-200 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Requirements & Skills
              </h2>
            </div>

            <ul className="space-y-4">
              {opportunity.requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5" />
                  <span className="text-gray-600 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Apply via Email */}
          <section id="application" className="scroll-mt-28">
            <OpportunityApplicationForm />
          </section>
        </div>
      </div>
    </section>
  );
}
