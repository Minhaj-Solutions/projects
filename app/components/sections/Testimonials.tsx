"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  ScrollAnimation,
  ScrollContainer,
  ScrollItem,
} from "../ui/ScrollAnimation";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote:
      "Minhaj Solutions transformed our digital presence completely. Their expertise in web development and digital marketing helped us increase our revenue by 300% in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "InnovateLabs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote:
      "The team's technical proficiency and attention to detail are exceptional. They delivered our complex AI-powered platform ahead of schedule and within budget.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director",
    company: "GrowthHub",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote:
      "Their digital marketing strategies have been game-changing for our business. We saw a 250% increase in qualified leads within the first quarter.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-shell">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <div className="inline-block text-primary font-semibold uppercase text-sm max-[375px]:text-xs tracking-wide mb-3">
              Testimonials
            </div>
            <h2 className="text-3xl max-[375px]:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg max-[375px]:text-base text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it — hear from businesses we've
              helped succeed
            </p>
          </div>
        </ScrollAnimation>

        {/* Mobile Slider */}
        <div className="md:hidden relative pb-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-6 max-[375px]:p-4 shadow-lg border border-gray-100 mb-2">
                    {/* Quote Icon */}
                    <div className="mb-4 max-[375px]:mb-3">
                      <Quote className="w-8 h-8 max-[375px]:w-6 max-[375px]:h-6 text-primary/20" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3 max-[375px]:mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 max-[375px]:w-3 max-[375px]:h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-4 max-[375px]:mb-3 leading-relaxed text-sm max-[375px]:text-xs italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 max-[375px]:pt-3 border-t border-gray-100">
                      <div className="relative w-12 h-12 max-[375px]:w-10 max-[375px]:h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm max-[375px]:text-xs">
                          {testimonial.name}
                        </div>
                        <div className="text-xs max-[375px]:text-[11px] text-gray-600">
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <ScrollContainer
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          stagger={0.1}
        >
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
                    <Star
                      key={i}
                      className="w-5 h-5 fill-warning text-warning"
                    />
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
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
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
  );
}
