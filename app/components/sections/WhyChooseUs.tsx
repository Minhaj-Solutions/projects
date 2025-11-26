'use client'

import { Target, Users, Zap, Shield, Award, HeadphonesIcon } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation, ScrollContainer, ScrollItem } from '../ui/ScrollAnimation'

const features = [
  {
    icon: Target,
    title: 'Results-Driven Approach',
    description: 'We focus on delivering measurable results that align with your business goals and drive growth.',
    color: 'from-primary/80 to-primary-dark',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our talented professionals bring years of experience and cutting-edge expertise to every project.',
    color: 'from-primary/80 to-primary-dark',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile methodology and efficient processes ensure your projects are delivered on time, every time.',
    color: 'from-primary/80 to-primary-dark',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and QA processes guarantee the highest standards of quality and reliability.',
    color: 'from-primary/80 to-primary-dark',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ successful projects and 98% client satisfaction rate speak to our commitment to excellence.',
    color: 'from-primary/80 to-primary-dark',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock support ensures your business operations run smoothly without interruption.',
    color: 'from-primary/80 to-primary-dark',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <ScrollAnimation direction="right">
            <div>
              <div className="inline-block text-primary font-semibold uppercase text-sm tracking-wide mb-3">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Partner with{' '}
                <span className="text-primary">Industry Leaders</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience and a portfolio of 500+ successful projects, 
                we've established ourselves as a trusted technology partner for businesses worldwide.
              </p>
            </div>
          </ScrollAnimation>

          {/* Image */}
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional team meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Features Grid */}
        <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <ScrollItem key={index} delay={index * 0.1}>
                <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollItem>
            )
          })}
        </ScrollContainer>
      </div>
    </section>
  )
}

