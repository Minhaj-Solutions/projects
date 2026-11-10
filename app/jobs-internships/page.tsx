
import { opportunities } from "@/data/opportunities";
import { OpportunityCard } from "@/app/components/careers/OpportunityCard";
import {
  BriefcaseBusiness,
  Search,
} from "lucide-react";

import { CareersHero } from "@/app/components/careers/CareersHero";
import { Card } from "@/app/components/ui/Card";
import { ScrollAnimation } from "@/app/components/ui/ScrollAnimation";

export default function JobsInternshipsPage() {
  return (
    <>
      <CareersHero />

      {/* Open Positions */}
      <section
        id="open-positions"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto">

          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center mb-12">

              <span className="inline-flex items-center gap-2 rounded-full bg-primary-light text-primary px-4 py-2 text-sm font-medium mb-4">
                <BriefcaseBusiness className="w-4 h-4" />
                Career Opportunities
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Open Positions
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Discover opportunities to grow your career, develop your
                skills, and become part of the Minhaj Solutions team.
              </p>

            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            {opportunities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                  />
                ))}
              </div>
            ) : (
              <Card className="max-w-3xl mx-auto text-center border border-gray-200 shadow-sm">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                  <Search className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  No Open Positions Right Now
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                  We don't have any active job or internship openings
                  at the moment. Please check back later for future
                  opportunities.
                </p>
              </Card>
            )}
          </ScrollAnimation>

        </div>
      </section>
    </>
  );
}
