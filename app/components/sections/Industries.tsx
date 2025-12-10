'use client'

import { 
  Luggage, 
  Satellite, 
  Zap, 
  Building2, 
  ShoppingBag, 
  Rocket,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'
import { ScrollAnimation, ScrollContainer, ScrollItem } from '../ui/ScrollAnimation'
import { Button } from '../ui/Button'

const industries = [
  {
    id: 'travel-hospitality',
    name: 'Travel & Hospitality',
    icon: Luggage,
    description: 'Transforming guest experiences with innovative technology solutions',
  },
  {
    id: 'telecommunication',
    name: 'Telecommunication',
    icon: Satellite,
    description: 'Enabling seamless connectivity and communication infrastructure',
  },
  {
    id: 'oil-gas-energy',
    name: 'Oil, Gas, and Energy',
    icon: Zap,
    description: 'Powering the energy sector with advanced digital solutions',
  },
  {
    id: 'public-sector',
    name: 'Public Sector',
    icon: Building2,
    description: 'Supporting government initiatives with secure, scalable systems',
  },
  {
    id: 'retail-cpg',
    name: 'Retail & CPG',
    icon: ShoppingBag,
    description: 'Driving retail innovation and consumer engagement platforms',
  },
  {
    id: 'startups',
    name: 'Startups',
    icon: Rocket,
    description: 'Accelerating startup growth with agile technology solutions',
  },
]

export function Industries() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Discover our Impact Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We deliver tailored technology solutions that drive success across diverse sectors
            </p>
          </div>
        </ScrollAnimation>

        {/* Industries Grid */}
        <div className="relative">
          <ScrollContainer 
            className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto" 
            stagger={0.1}
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <ScrollItem key={industry.id} delay={index * 0.1}>
                  <Link 
                    href={`/industries/${industry.id}`}
                    className="group block h-full"
                  >
                    <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200/80 hover:border-primary/40 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 h-full">
                      {/* Icon Container with gradient background */}
                      <div className="flex items-start gap-5 md:gap-6">
                        <div className="shrink-0 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100" />
                          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/8 to-primary/5 group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-primary/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary group-hover:text-primary-dark transition-all duration-500 group-hover:scale-110" />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0 pt-1">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                            {industry.name}
                          </h3>
                          
                          {/* Animated Divider */}
                          <div className="relative mb-4">
                            <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 group-hover:from-primary/30 group-hover:via-primary group-hover:to-primary/30 transition-all duration-500" />
                            <div className="absolute left-0 top-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                          </div>
                          
                          {/* Description - Always present, expands on hover */}
                          <div className="overflow-hidden">
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 transition-all duration-500 ease-out group-hover:line-clamp-none group-hover:text-gray-700">
                              {industry.description}
                            </p>
                          </div>

                          {/* Learn more indicator */}
                          <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-medium text-primary mr-2">Learn more</span>
                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      {/* Subtle hover gradient overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/[0.02] group-hover:via-primary/[0.03] group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                        <div className="absolute -inset-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                      </div>
                    </div>
                  </Link>
                </ScrollItem>
              )
            })}
          </ScrollContainer>

          {/* CTA Button */}
          <ScrollAnimation delay={0.6}>
            <div className="mt-12 md:mt-16 text-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Talk Business
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

