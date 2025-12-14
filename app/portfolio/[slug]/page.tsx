import { CTA } from '@/app/components/sections/CTA'
import { Card } from '@/app/components/ui/Card'
import { ScrollAnimation, ScrollContainer, ScrollItem } from '@/app/components/ui/ScrollAnimation'
import { caseStudies, getCaseStudy } from '@/data/case-studies'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.title} | Minhaj Solutions Portfolio`,
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      images: [study.featuredImage],
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  // Get related case studies (same category, excluding current study)
  const relatedStudies = caseStudies
    .filter((s) => s.category === study.category && s.slug !== study.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{study.title}</li>
              </ol>
            </nav>

            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/20 text-white font-semibold text-sm">
              {study.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {study.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-8">
              <div>
                <p className="text-sm text-white/80 mb-1">Client</p>
                <p className="font-semibold text-white">{study.client}</p>
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">Industry</p>
                <p className="font-semibold text-white">{study.industry}</p>
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">Duration</p>
                <p className="font-semibold text-white">{study.duration}</p>
              </div>
              <div>
                <p className="text-sm text-white/80 mb-1">Team Size</p>
                <p className="font-semibold text-white">{study.teamSize}</p>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image src={study.featuredImage} alt={study.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{study.solution}</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The impact of our solution on the client's business
              </p>
            </div>
          </ScrollAnimation>
          <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {study.results.map((result, index) => (
              <ScrollItem key={index}>
                <Card className="text-center h-full">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.metric}</h3>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </Card>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies Used
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The tech stack that powered this project
              </p>
            </div>
          </ScrollAnimation>
          <ScrollContainer className="flex flex-wrap justify-center gap-4" stagger={0.05}>
            {study.technologies.map((tech, index) => (
              <ScrollItem key={index}>
                <span className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold shadow-sm border border-gray-200 hover:border-primary hover:shadow-md transition-all">
                  {tech}
                </span>
              </ScrollItem>
            ))}
          </ScrollContainer>
        </div>
      </section>

      {/* Image Gallery */}
      {study.images.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Project Gallery
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Visual showcase of the project
                </p>
              </div>
            </ScrollAnimation>
            <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
              {study.images.map((image, index) => (
                <ScrollItem key={index}>
                  <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image src={image} alt={`${study.title} - Image ${index + 1}`} fill className="object-cover" />
                  </div>
                </ScrollItem>
              ))}
            </ScrollContainer>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {study.testimonial && (
        <section className="py-16 md:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="text-center">
                <div className="inline-block mb-6">
                  <svg
                    className="w-12 h-12 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
                  "{study.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {study.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{study.testimonial.author}</p>
                    <p className="text-white/80 text-sm">
                      {study.testimonial.role}, {study.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Related Case Studies
                </h2>
                <p className="text-xl text-gray-600">Explore more projects in this category</p>
              </div>
            </ScrollAnimation>
            <ScrollContainer className="grid md:grid-cols-3 gap-8" stagger={0.1}>
              {relatedStudies.map((relatedStudy) => (
                <ScrollItem key={relatedStudy.slug}>
                  <Link href={`/portfolio/${relatedStudy.slug}`}>
                    <Card hover className="h-full flex flex-col overflow-hidden p-0">
                      <div className="relative h-48">
                        <Image
                          src={relatedStudy.featuredImage}
                          alt={relatedStudy.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                            {relatedStudy.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {relatedStudy.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                          {relatedStudy.excerpt}
                        </p>
                        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScrollItem>
              ))}
            </ScrollContainer>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA />
    </div>
  )
}
