"use client";

import { Button } from "@/app/components/ui/Button";
import { ScrollAnimation, ScrollContainer, ScrollItem } from "@/app/components/ui/ScrollAnimation";
import { SITE_NAME } from "@/app/lib/constants";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Card } from "../components/ui/Card";

interface FormData {
  firstName: string;
  lastName: string;
  businessEmail: string;
  company: string;
  jobTitle: string;
  phone: string;
  location: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  businessEmail?: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  location?: string;
  message?: string;
  consent?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    company: "",
    jobTitle: "",
    phone: "",
    location: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.location) {
      newErrors.location = "Please select your location";
    }

    if (!formData.consent) {
      newErrors.consent = "You must consent to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        company: "",
        jobTitle: "",
        phone: "",
        location: "",
        message: "",
        consent: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const countries = [
    { value: "", label: "Select Country" },
    { value: "PK", label: "Pakistan" },
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "CA", label: "Canada" },
    { value: "AU", label: "Australia" },
    { value: "AE", label: "United Arab Emirates" },
    { value: "SA", label: "Saudi Arabia" },
    { value: "IN", label: "India" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "OTHER", label: "Other" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <ScrollAnimation>
            <div className="text-center md:text-center max-w-4xl mx-auto max-md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white font-semibold text-sm">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-[425px]:text-3xl max-[375px]:text-2xl">
                Let's Talk <span className="text-primary-light">Business</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl md:mx-auto leading-relaxed max-[425px]:text-base max-[375px]:text-sm">
                Get in touch with {SITE_NAME} for all your technology needs and
                inquiries. We're here to help you transform your business with
                innovative solutions.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Office Information - Left Side */}
            <ScrollAnimation direction="right" className="lg:col-span-4">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl max-[425px]:p-6">
                <h2 className="text-2xl font-bold mb-6 max-[425px]:text-xl max-[375px]:text-lg">
                  Offices
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 max-[425px]:text-sm">
                        Email
                      </h3>
                      <a
                        href="mailto:info@minhajsolutions.com"
                        className="text-white/90 hover:text-white transition-colors text-sm break-all max-[425px]:text-xs"
                      >
                        info@minhajsolutions.com
                      </a>
                    </div>
                  </div>

                  {/* Phone - UK */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 max-[425px]:text-sm">
                        Phone (UK)
                      </h3>
                      <a
                        href="tel:+447400719523"
                        className="text-white/90 hover:text-white transition-colors text-sm max-[425px]:text-xs"
                      >
                        +44 7400 719523
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp - Pakistan */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 max-[425px]:text-sm">
                        WhatsApp (Pakistan)
                      </h3>
                      <a
                        href="https://wa.me/923220681998"
                        className="text-white/90 hover:text-white transition-colors text-sm max-[425px]:text-xs"
                      >
                        +92 322 0681998
                      </a>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 max-[425px]:text-sm">
                        Locations
                      </h3>
                      <div className="text-white/90 text-sm not-italic leading-relaxed max-[425px]:text-xs space-y-2">
                        <p>
                          <strong>Pakistan:</strong><br />
                          84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan
                        </p>
                        <p>
                          <strong>United Kingdom:</strong><br />
                          124 City Road, London
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white/80 max-[425px]:w-4 max-[425px]:h-4" />
                      <span className="text-sm text-white/90 max-[425px]:text-xs">
                        24/7 Support Available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white/80 max-[425px]:w-4 max-[425px]:h-4" />
                      <span className="text-sm text-white/90 max-[425px]:text-xs">
                        Free Consultation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white/80 max-[425px]:w-4 max-[425px]:h-4" />
                      <span className="text-sm text-white/90 max-[425px]:text-xs">
                        Quick Response Time
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Contact Form - Right Side */}
            <ScrollAnimation direction="left" className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We've received your message. Someone from our team will
                      reach out to find a time to connect with you.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 max-[425px]:text-xl max-[375px]:text-lg">
                        Let's discuss your project
                      </h2>
                      <p className="text-gray-600 max-[425px]:text-sm max-[375px]:text-xs">
                        We are committed to understanding your requirements and
                        crafting a tailored solution that aligns with your
                        goals. Enter your details and someone from our team will
                        reach out to find a time to connect with you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* First Name & Last Name */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            First Name <span className="text-error">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.firstName
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            Last Name <span className="text-error">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.lastName
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label
                          htmlFor="businessEmail"
                          className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                        >
                          Business Email <span className="text-error">*</span>
                        </label>
                        <input
                          type="email"
                          id="businessEmail"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.businessEmail
                            ? "border-error focus:ring-error focus:border-error"
                            : "border-gray-300"
                            }`}
                          placeholder="john.doe@company.com"
                        />
                        {errors.businessEmail && (
                          <p className="mt-1 text-xs text-error flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.businessEmail}
                          </p>
                        )}
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            Company <span className="text-error">*</span>
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.company
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                            placeholder="Company Name"
                          />
                          {errors.company && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.company}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="jobTitle"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            Job Title <span className="text-error">*</span>
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.jobTitle
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                            placeholder="CEO, CTO, Manager"
                          />
                          {errors.jobTitle && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.jobTitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone & Location */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.phone
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                            placeholder="+1 (234) 567-890"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                          >
                            Location <span className="text-error">*</span>
                          </label>
                          <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm ${errors.location
                              ? "border-error focus:ring-error focus:border-error"
                              : "border-gray-300"
                              }`}
                          >
                            {countries.map((country) => (
                              <option key={country.value} value={country.value}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          {errors.location && (
                            <p className="mt-1 text-xs text-error flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {errors.location}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1.5 max-[425px]:text-xs"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none max-[425px]:px-3 max-[425px]:py-2 max-[425px]:text-sm"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-sm text-gray-600 max-[425px]:text-xs">
                            I consent to {SITE_NAME} processing my personal
                            information as set out in the Privacy Policy for
                            marketing purposes and therefore to be contacted via
                            the contact information I provided. Given the global
                            nature of {SITE_NAME}'s business, such processing
                            may take place outside of my home jurisdiction. The
                            consent can be withdrawn at any time under the
                            contact in the Privacy Policy.{" "}
                            <span className="text-error">*</span>
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="mt-1 text-xs text-error flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        fullWidth
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 max-[425px]:text-sm max-[425px]:py-2.5 max-[375px]:text-xs max-[375px]:py-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 max-[425px]:w-4 max-[425px]:h-4" />
                            Submit
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose your preferred method to reach out to us
              </p>
            </div>
          </ScrollAnimation>
          <ScrollContainer className="grid md:grid-cols-3 gap-8" stagger={0.1}>
            {/* Email Card */}
            <ScrollItem>
              <Card hover className="text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you within 24 hours
                </p>
                <a
                  href="mailto:info@minhajsolutions.com"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  info@minhajsolutions.com
                  <Mail className="w-4 h-4 ml-2" />
                </a>
              </Card>
            </ScrollItem>

            {/* Phone Card */}
            <ScrollItem delay={0.1}>
              <Card hover className="text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team during business hours
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:+447400719523"
                    className="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    +44 7400 719523 (UK)
                  </a>
                  <a
                    href="https://wa.me/923220681998"
                    className="flex items-center justify-center text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    +92 322 0681998 (WhatsApp)
                  </a>
                </div>
              </Card>
            </ScrollItem>

            {/* Location Card */}
            <ScrollItem delay={0.2}>
              <Card hover className="text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Locations</h3>
                <p className="text-gray-600 mb-4">
                  We have offices in two countries
                </p>
                <div className="text-primary font-semibold not-italic space-y-3 text-sm">
                  <div>
                    <p className="font-bold mb-1">🇵🇰 Pakistan</p>
                    <p className="text-gray-600 font-normal">
                      84 A, Sahara City, Renala Khurrad, Okara, Punjab, Pakistan
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">🇬🇧 United Kingdom</p>
                    <p className="text-gray-600 font-normal">
                      124 City Road, London
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollItem>
          </ScrollContainer>
        </div>
      </section>
    </div>
  );
}
