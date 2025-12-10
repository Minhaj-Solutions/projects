'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/Button'
import { ScrollAnimation, ScrollContainer, ScrollItem } from '../ui/ScrollAnimation'

const services = [
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Custom software solutions, mobile apps, web applications, AI/ML services, and game development tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'website-design-creative',
    name: 'Website Design & Creative',
    description: 'UI/UX design, branding, graphics, web design, and multimedia production services that captivate your audience.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, SEM, social media marketing, content creation, and comprehensive strategies to grow your online presence.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 'ecommerce-solutions',
    name: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms, Shopify, WooCommerce, multi-vendor marketplaces to scale your business.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-semibold text-sm">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across four key categories to transform your business
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Cards */}
        <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.1}>
          {services.map((service, index) => {
            return (
              <ScrollItem key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Background Image */}
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={index < 2}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

                    {/* Content Container */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Title - Always Visible */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.name}
                      </h3>

                      {/* Hidden content that appears on hover */}
                      <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300 ease-in-out">
                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-end pt-3 border-t border-white/20">
                          <div className="flex items-center text-white font-medium text-sm">
                            Explore
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollItem>
            )
          })}
        </ScrollContainer>

        {/* View More Button */}
        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-12 md:mt-16">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                View More Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

