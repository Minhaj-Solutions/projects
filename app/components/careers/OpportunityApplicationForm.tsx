
import { Mail, FileText, ArrowUpRight } from "lucide-react";

export function OpportunityApplicationForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1.5 text-sm font-medium text-primary">
        <FileText className="h-4 w-4" />
        Apply via Email
      </div>

      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Interested in Joining Our Team?
      </h2>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        We are always interested in connecting with talented individuals.
        If you believe you would be a great fit for our team, send us
        your CV via email.
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
        Click the email address above to contact our HR team.
        We look forward to hearing from you!
      </p>
    </div>
  );
}
