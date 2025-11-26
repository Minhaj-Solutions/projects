'use client'

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation, ScrollContainer, ScrollItem } from '../ui/ScrollAnimation'

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'TechStart Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    quote: 'Minhaj Solutions transformed our digital presence completely. Their expertise in web development and digital marketing helped us increase our revenue by 300% in just 6 months.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    company: 'InnovateLabs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    quote: 'The team\'s technical proficiency and attention to detail are exceptional. They delivered our complex AI-powered platform ahead of schedule and within budget.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director',
    company: 'GrowthHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    quote: 'Their digital marketing strategies have been game-changing for our business. We saw a 250% increase in qualified leads within the first quarter.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-block text-primary font-semibold uppercase text-sm tracking-wide mb-3">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've helped succeed
            </p>
          </div>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
          {testimonials.map((testimonial, index) => (
            <ScrollItem key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
            </ScrollItem>
          ))}
        </ScrollContainer>
      </div>
    </section>
  )
}

