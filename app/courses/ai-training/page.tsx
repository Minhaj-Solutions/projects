import { Button } from "@/app/components/ui/Button";
import { ScrollAnimation } from "@/app/components/ui/ScrollAnimation";
import { SITE_NAME } from "@/app/lib/constants";
import {
  TRAINING_CONTACT_EMAIL,
  TRAINING_COURSE_TITLE,
  TRAINING_HANDS_ON_PROJECTS,
  TRAINING_INTRO,
  TRAINING_MODULES,
  TRAINING_PROSPECTUS_URL,
  TRAINING_START_LABEL,
  TRAINING_VENUE,
  TRAINING_WHATSAPP_URL,
  TRAINING_WHY_US,
  TRAINING_YEAR_BADGE,
} from "@/data/training-program";
import {
  Bot,
  Calendar,
  CheckCircle,
  Download,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${TRAINING_COURSE_TITLE} | ${SITE_NAME}`,
  description: `${TRAINING_INTRO.slice(0, 155)}… Starts ${TRAINING_START_LABEL} at ${TRAINING_VENUE}.`,
};

export default function AiTrainingCoursePage() {
  return (
    <div className="min-h-screen bg-white min-w-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#0a3d5c] to-primary-dark text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0%, transparent 45%),
              radial-gradient(circle at 80% 70%, rgba(56,189,248,0.25) 0%, transparent 40%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-24 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10">
            <ScrollAnimation className="max-w-3xl min-w-0 w-full">
              <div className="mb-5 sm:mb-6">
                <span className="inline-flex max-w-full items-center rounded-full bg-white/15 px-3 py-1.5 sm:px-4 text-[0.65rem] sm:text-xs font-bold tracking-widest text-white/95 ring-1 ring-white/25">
                  AI TRAINING {TRAINING_YEAR_BADGE}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sky-200/90 mb-3">
                {SITE_NAME} presents
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] sm:leading-tight mb-5 sm:mb-6 break-words">
                AI Automation &amp; Generative AI{" "}
                <span className="text-sky-200">Training Program</span>
              </h1>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-7 sm:mb-8 max-w-2xl">
                Real projects, expert guidance, and career-focused skills—built
                so you are ready for industry from day one.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
                <Link
                  href="/apply/ai-training"
                  className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 sm:px-8 py-3.5 text-base sm:text-lg font-semibold text-primary shadow-lg transition-colors hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary touch-manipulation"
                >
                  <Sparkles className="w-5 h-5 shrink-0" aria-hidden />
                  Apply now
                </Link>
                <Link href="/contact" className="w-full sm:w-auto min-h-[44px]">
                  <Button
                    size="lg"
                    variant="outline"
                    fullWidth
                    className="min-h-[44px] border-2 border-white/80 text-white hover:bg-white/10 sm:w-auto sm:min-w-[11rem]"
                  >
                    Ask a question
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              direction="left"
              className="w-full min-w-0 lg:w-[min(100%,380px)] lg:shrink-0"
            >
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 ring-1 ring-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <Bot className="h-7 w-7 text-sky-200" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                      Program focus
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Automation &amp; Gen AI
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-white/85">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-300 mt-0.5" />
                    Industry-style projects
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-300 mt-0.5" />
                    LLMs, RAG &amp; agents
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-300 mt-0.5" />
                    Mentored learning path
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 text-center">
          <ScrollAnimation>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {TRAINING_INTRO}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core modules */}
      <section className="py-12 sm:py-14 md:py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center px-1">
              What you&apos;ll learn
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl mx-auto px-1">
              Core learning modules from foundations to agentic systems—structured
              for real workplace outcomes.
            </p>
          </ScrollAnimation>
          <ol className="space-y-3">
            {TRAINING_MODULES.map((title, i) => (
              <ScrollAnimation key={title} delay={i * 0.05}>
                <li className="flex gap-3 sm:gap-4 items-stretch rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden min-w-0">
                  <div className="flex w-11 sm:w-14 shrink-0 items-center justify-center bg-primary text-white font-bold text-base sm:text-lg">
                    {i + 1}
                  </div>
                  <div className="flex items-center py-3.5 sm:py-4 pr-3 sm:pr-4 pl-2 sm:pl-4 min-w-0">
                    <span className="text-gray-800 font-medium leading-snug text-sm sm:text-base break-words">
                      {title}
                    </span>
                  </div>
                </li>
              </ScrollAnimation>
            ))}
          </ol>
        </div>
      </section>

      {/* Hands-on projects */}
      <section className="py-12 sm:py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center px-1">
              Hands-on projects
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-10 px-1">
              Core real-world projects you&apos;ll touch during the program.
            </p>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TRAINING_HANDS_ON_PROJECTS.map((title, i) => (
              <ScrollAnimation key={title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/25 transition-all min-w-0">
                  <div className="mb-3 inline-flex rounded-lg bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                    Project
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug break-words">
                    {title}
                  </h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why us + CTA */}
      <section className="py-12 sm:py-14 md:py-24 bg-primary-light/40 border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            <ScrollAnimation direction="right">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">
                Why us?
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {TRAINING_WHY_US.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-800 text-base sm:text-lg"
                  >
                    <CheckCircle className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
            <ScrollAnimation direction="left">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-xl p-5 sm:p-6 md:p-8 min-w-0">
                <div className="rounded-xl bg-primary text-white p-4 sm:p-5 mb-5 sm:mb-6 shadow-lg">
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-1">
                    <Calendar className="w-5 h-5 shrink-0" />
                    Starting date
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight break-words">
                    {TRAINING_START_LABEL}
                  </p>
                  <p className="text-sm text-white/85 mt-2 flex items-start gap-2">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{TRAINING_VENUE}</span>
                  </p>
                </div>
                <p className="text-gray-600 text-sm mb-5">
                  Ready to join? Submit your application online—we&apos;ll review
                  it and get back to you.
                </p>
                <div className="flex flex-col gap-3">
                  <Link href="/apply/ai-training" className="w-full">
                    <Button size="lg" fullWidth className="gap-2 min-h-[44px] touch-manipulation">
                      <Sparkles className="w-5 h-5 shrink-0" />
                      Apply for this course
                    </Button>
                  </Link>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={TRAINING_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full sm:flex-1 sm:min-w-0 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors touch-manipulation"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    WhatsApp
                  </a>
                  {TRAINING_PROSPECTUS_URL ? (
                    <a
                      href={TRAINING_PROSPECTUS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full sm:flex-1 sm:min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-4 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition-colors touch-manipulation"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      Prospectus
                    </a>
                  ) : (
                    <a
                      href={`mailto:${TRAINING_CONTACT_EMAIL}?subject=${encodeURIComponent("Prospectus request — AI Training")}`}
                      className="inline-flex min-h-[44px] w-full sm:flex-1 sm:min-w-0 items-center justify-center gap-2 rounded-lg border-2 border-primary text-primary px-4 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition-colors touch-manipulation text-center"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span className="text-balance">Request prospectus</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}
