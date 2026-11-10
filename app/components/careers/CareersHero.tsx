
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
} from "lucide-react";
import { ScrollAnimation } from "@/app/components/ui/ScrollAnimation";

export function CareersHero() {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden bg-primary-dark text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

      {/* Decorative Shapes */}
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

      <div className="relative z-10 container mx-auto py-24 md:py-28">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 mb-7">
              <BriefcaseBusiness className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-medium text-white">
                Careers at Minhaj Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Future.
              <span className="block text-primary-light mt-2">
                Grow With Us.
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Join our team of passionate professionals, explore new
              opportunities, develop your skills, and contribute to
              meaningful technology solutions.
            </p>

            {/* Explore Button */}
            <div className="flex justify-center">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary-dark px-7 py-3 font-semibold transition-all duration-200 hover:bg-primary-light"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-14 flex justify-center">
              <Link
                href="#open-positions"
                aria-label="Scroll to open positions"
                className="text-white/60 hover:text-white transition-colors"
              >
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </Link>
            </div>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
