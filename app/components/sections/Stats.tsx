"use client";

import { STATS } from "@/app/lib/constants";
import { CheckCircle, Clock, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import {
  ScrollAnimation,
  ScrollContainer,
  ScrollItem,
} from "../ui/ScrollAnimation";

const icons = [Users, TrendingUp, CheckCircle, Clock];

export function Stats() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/TBW.png"
          alt="Trusted by Businesses Worldwide"
          fill
          sizes="100vw"
        />
      </div>

      <div className="section-shell relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl max-[375px]:text-2xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl max-[375px]:text-base text-white/80 max-w-2xl mx-auto">
              Our numbers speak for themselves
            </p>
          </div>
        </ScrollAnimation>

        <ScrollContainer
          className="grid grid-cols-2 max-[375px]:grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
          stagger={0.15}
        >
          {STATS.map((stat, index) => {
            const Icon = icons[index];
            return (
              <ScrollItem key={index} delay={index * 0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 text-center hover:bg-white/15 transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl max-[375px]:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs max-[375px]:text-[11px] md:text-sm text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollItem>
            );
          })}
        </ScrollContainer>
      </div>
    </section>
  );
}
