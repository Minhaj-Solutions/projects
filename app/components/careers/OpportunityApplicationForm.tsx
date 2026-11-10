
import { Mail, FileText, ArrowUpRight } from "lucide-react";

export function OpportunityApplicationForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary">
        <FileText className="h-4 w-4" />
        Paid Internship Application
      </div>

      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Interested in Joining Our Team?
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        Apply for this paid internship opportunity and gain practical
        experience by working on real-world projects with our team.
        If you have the required skills and are ready to learn,
        we would love to hear from you.
      </p>

      <div className="mt-7 rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="mb-3 text-sm font-medium text-gray-600">
          Send your CV to
        </p>

        <a
          href="mailto:career@minhajsolutions.com"
          className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          <Mail className="h-5 w-5" />
          career@minhajsolutions.com
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        Please mention the position title in your email subject
        and attach your updated CV.
      </p>
    </div>
  );
}
