'use client'

import { 
  Target, 
  Eye, 
  Rocket, 
  Shield, 
  Heart, 
  MessageSquare, 
  Globe, 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Users,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { Card } from '@/app/components/ui/Card'
import { ScrollAnimation, ScrollContainer, ScrollItem } from '@/app/components/ui/ScrollAnimation'
import { SITE_NAME } from '@/app/lib/constants'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    icon: Rocket,
    title: 'Ship & Iterate',
    description: 'We move swiftly, refining our approach with every step to maintain a leading edge.',
  },
  {
    icon: Shield,
    title: 'Trusted Pair of Hands',
    description: 'Dependable and steadfast, we are always there when it matters most.',
  },
  {
    icon: Heart,
    title: 'Overdeliver on the Promise',
    description: 'Exceeding expectations is our standard, going beyond what\'s assured.',
  },
  {
    icon: MessageSquare,
    title: 'Clear is Kind',
    description: 'Transparent, honest communication keeps everyone on the same page.',
  },
]

const offices = [
  {
    city: 'Lahore',
    country: 'Pakistan',
    type: 'Head Office',
    address: '123 Business Street, Lahore, Punjab',
    phone: '+92 000 0000000',
    email: 'info@minhajsolutions.com',
  },
  {
    city: 'Islamabad',
    country: 'Pakistan',
    type: 'Regional Office',
    address: '456 Corporate Avenue, Islamabad, ICT',
    phone: '+92 000 0000001',
    email: 'islamabad@minhajsolutions.com',
  },
  {
    city: 'Karachi',
    country: 'Pakistan',
    type: 'Regional Office',
    address: '789 Tech Hub, Karachi, Sindh',
    phone: '+92 000 0000002',
    email: 'karachi@minhajsolutions.com',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    type: 'Regional Office',
    address: 'Business Bay, Dubai, UAE',
    phone: '+971 4 000 0000',
    email: 'dubai@minhajsolutions.com',
  },
]

const leadership = [
  {
    name: 'Minhaj Ahmed',
    title: 'Founder & CEO',
    linkedin: '#',
    image: '/team/placeholder.jpg', // Replace with real images
  },
  {
    name: 'Ahmed Khan',
    title: 'Chief Technology Officer',
    linkedin: '#',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Sara Ali',
    title: 'Chief Operating Officer',
    linkedin: '#',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Usman Malik',
    title: 'Head of Digital Marketing',
    linkedin: '#',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Fatima Hassan',
    title: 'Head of Design',
    linkedin: '#',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Zain Abbas',
    title: 'Head of Development',
    linkedin: '#',
    image: '/team/placeholder.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                ABOUT US
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                Empowering Businesses, Inspiring Innovation
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                At {SITE_NAME}, we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. 
                With a legacy of technical excellence, a global team of experts, and a passion for innovation, we help organizations thrive 
                in an ever-evolving digital landscape.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-primary font-semibold text-sm">Our Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Empowering People and Businesses Through Innovation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At {SITE_NAME}, our philosophy is simple—empowering people and businesses through innovation. 
                  We believe in fostering a collaborative environment, investing in talent, and delivering meaningful 
                  solutions that drive progress for our clients and communities worldwide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are committed to understanding your requirements and crafting a tailored solution that aligns with your goals. 
                  Our team of experienced professionals works closely with you to ensure every project exceeds expectations.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollContainer className="grid md:grid-cols-2 gap-8" stagger={0.1}>
            <ScrollItem>
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions, unlocking their growth potential by connecting 
                  them with passionate and skilled engineers. We strive to deliver exceptional value through innovative 
                  solutions that transform how businesses operate and compete in the digital age.
                </p>
              </Card>
            </ScrollItem>

            <ScrollItem delay={0.1}>
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  At {SITE_NAME}, we envision transforming IT systems into smart, agile, and AI-driven digital assets. 
                  With years of expertise, we empower global clients through innovative, adaptive solutions, shaping a future 
                  where technology meets the dynamic demands of a connected world.
                </p>
              </Card>
            </ScrollItem>
          </ScrollContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-primary font-semibold text-sm">We Believe in Providing Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollAnimation>

          <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <ScrollItem key={value.title} delay={index * 0.1}>
                  <Card hover className="h-full text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </ScrollItem>
              )
            })}
          </ScrollContainer>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Our Global Presence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Support Clients Worldwide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We support clients in 20+ countries and drive continued growth through innovation and transformation.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {offices.map((office, index) => (
              <ScrollItem key={office.city} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{office.city}</h3>
                      <p className="text-sm text-gray-600">{office.country}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p className="font-semibold text-primary text-xs uppercase tracking-wide mb-2">
                      {office.type}
                    </p>
                    <p className="leading-relaxed">{office.address}</p>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {office.email}
                    </a>
                  </div>
                </Card>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Our Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our capability and competencies are bolstered by diverse global leadership
              </p>
            </div>
          </ScrollAnimation>

          <ScrollContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {leadership.map((leader, index) => (
              <ScrollItem key={leader.name} delay={index * 0.1}>
                <Card hover className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{leader.title}</p>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </Card>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                  alt="Code of conduct"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-4">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">Code of Conduct</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Code of Business Principles
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {SITE_NAME} prioritizes legal and ethical conduct, ensuring honesty, fairness, and accountability for all. 
                  We are committed to maintaining the highest standards of integrity in all our business dealings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Ethical business practices and transparency</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Fair treatment of all stakeholders</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Compliance with all legal requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">Accountability and responsibility</p>
                  </div>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Access Our Code of Business Principles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready To Get Started
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Connect with us to explore how we can deliver exceptional IT solutions tailored to your needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent-dark transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

