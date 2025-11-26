'use client'

import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "../ui/Button"
import Image from "next/image"
import { ScrollAnimation, ScrollContainer, ScrollItem } from '../ui/ScrollAnimation'

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-primary rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
              alt="Contact us"
              fill
              className="object-cover opacity-10"
            />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-16 text-center">
            <ScrollAnimation>
              <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <span className="text-primary font-semibold text-sm">Start Your Journey</span>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary">
                  Business?
                </span>
              </h2>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Let's discuss how our 134 specialized services can help you achieve your goals. 
                Get in touch with us today for a free consultation and project estimate.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </ScrollAnimation>

            {/* Trust Indicators */}
            <ScrollContainer className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10" stagger={0.1}>
              <ScrollItem>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
              </ScrollItem>
              <ScrollItem delay={0.1}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">Free</div>
                  <div className="text-sm text-gray-400">Consultation</div>
                </div>
              </ScrollItem>
              <ScrollItem delay={0.2}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Confidential</div>
                </div>
              </ScrollItem>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

