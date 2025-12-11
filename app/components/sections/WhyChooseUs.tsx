'use client'

import { Award, HeadphonesIcon, Shield, Target, Users, Zap } from "lucide-react"
import { Card } from "../ui/Card"
import { ScrollAnimation, ScrollContainer, ScrollItem } from "../ui/ScrollAnimation"

const highlights = [
  {
    title: "Hands-on partnership",
    description: "Senior leads stay engaged from discovery to post-launch, so context never gets lost.",
  },
  {
    title: "Transparent delivery",
    description: "Weekly demos, sprint scorecards, and open channels keep you clear on progress without chasing updates.",
  },
]

const stats = [
  { value: "98%", label: "client satisfaction across 500+ launches" },
  { value: "12 yrs", label: "average leadership experience per squad" },
]

const differentiators = [
  {
    icon: Target,
    badge: "Strategy",
    title: "Outcome-led roadmaps",
    description: "Co-create a measurable roadmap in week one with KPIs, milestones, and success criteria everyone agrees on.",
    meta: "Roadmap ready in week one",
  },
  {
    icon: Zap,
    badge: "Delivery",
    title: "Momentum every sprint",
    description: "Two-week increments with demos and release-ready builds that shorten time-to-value without sacrificing quality.",
    meta: "Demo every Friday",
  },
  {
    icon: Shield,
    badge: "Reliability",
    title: "Quality baked in",
    description: "Automated checks, QA gates, and peer reviews prevent rework and keep launches calm and predictable.",
    meta: "Zero missed release windows in the last 12 months",
  },
  {
    icon: Users,
    badge: "Team",
    title: "Embedded leadership",
    description: "Product and engineering leads stay on your account—not a rotating bench—so decisions stay sharp and consistent.",
    meta: "Same leads from kickoff to scale",
  },
  {
    icon: Award,
    badge: "Expertise",
    title: "Cross-industry depth",
    description: "Fintech, healthcare, retail, and growth-stage SaaS experience means fewer surprises and compliant builds.",
    meta: "500+ launches shipped",
  },
  {
    icon: HeadphonesIcon,
    badge: "Support",
    title: "Follow-the-sun care",
    description: "24/7 support with clear SLAs, proactive monitoring, and calm incident management when you need it most.",
    meta: "12 min average first response",
  },
]

const collaboration = [
  "Roadmap and success metrics defined together in week one",
  "Dedicated Slack or Teams pod with the same senior leads",
  "Post-launch care with runbooks, monitoring, and optimizations",
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-6 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-primary-light/60 blur-3xl" />
      </div>

      <div className="section-shell relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <ScrollAnimation direction="right" className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200/80 px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Why partners stay with us
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A delivery partner that feels in-house
              </h2>
              <p className="text-lg text-gray-700">
                Small, senior squads that move fast, stay transparent, and keep every milestone measurable.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary" />
                  <div>
                    <div className="text-base font-semibold text-gray-900">{item.title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((stat) => (
                <Card key={stat.label} className="shadow-sm border border-gray-200/80 bg-white/80 backdrop-blur">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{stat.label}</div>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollContainer className="lg:col-span-7 grid sm:grid-cols-2 gap-4 lg:gap-6" stagger={0.1}>
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollItem key={item.title} delay={index * 0.08}>
                  <Card hover className="h-full border border-gray-200/80 shadow-sm bg-white/90 backdrop-blur transition-transform duration-300">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">{item.description}</p>
                    <div className="mt-4 text-sm font-semibold text-primary">{item.meta}</div>
                  </Card>
                </ScrollItem>
              )
            })}

            <ScrollItem className="sm:col-span-2" delay={differentiators.length * 0.08}>
              <Card hover className="border border-gray-200/80 shadow-sm bg-white/90 backdrop-blur">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">How we work together</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Simple rituals that keep collaboration calm, predictable, and human.
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {collaboration.map((point) => (
                    <div key={point} className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-sm text-gray-700 leading-relaxed">
                      {point}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollItem>
          </ScrollContainer>
        </div>
      </div>
    </section>
  )
}

