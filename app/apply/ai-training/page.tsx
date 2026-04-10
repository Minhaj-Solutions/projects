import { TrainingApplyWizard } from "@/app/components/training-application/TrainingApplyWizard";
import {
  ScrollAnimation,
} from "@/app/components/ui/ScrollAnimation";
import { SITE_NAME } from "@/app/lib/constants";
import {
  TRAINING_COURSE_TITLE,
  TRAINING_START_LABEL,
  TRAINING_VENUE,
} from "@/data/training-program";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Apply — ${TRAINING_COURSE_TITLE} | ${SITE_NAME}`,
  description: `Apply for the ${TRAINING_COURSE_TITLE}. Starts ${TRAINING_START_LABEL} at ${TRAINING_VENUE}.`,
};

export default function AiTrainingApplyPage() {
  return (
    <div className="min-h-screen bg-white min-w-0">
      <section className="relative min-h-[min(22rem,70svh)] sm:min-h-[420px] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto max-md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-5 sm:mb-6 border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full shrink-0" />
                <span className="text-white font-semibold text-xs sm:text-sm max-w-[calc(100%-2rem)]">
                  Training program
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 break-words">
                Apply for{" "}
                <span className="text-primary-light">AI training</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl md:mx-auto leading-relaxed">
                {TRAINING_COURSE_TITLE}. Starting {TRAINING_START_LABEL} —{" "}
                {TRAINING_VENUE}. Complete the steps below; your application
                will be sent securely to our team.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 min-w-0">
          <TrainingApplyWizard />
        </div>
      </section>
    </div>
  );
}
