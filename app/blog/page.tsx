'use client'

import { CTA } from '@/app/components/sections/CTA'
import { Card } from '@/app/components/ui/Card'
import { ScrollAnimation, ScrollContainer, ScrollItem } from '@/app/components/ui/ScrollAnimation'
import { blogPosts, getAllCategories } from '@/data/blogs'
import { Calendar, Clock, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', ...getAllCategories()]

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Insights & Resources"
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
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Insights & Resources
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light mb-8">
                Stay updated with the latest trends, insights, and best practices
              </p>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of articles covering technology, business strategies, and
                industry insights to help you stay ahead.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollAnimation>
              <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Featured Article
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Featured Post
              </h2>
            </ScrollAnimation>
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card hover className="overflow-hidden p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {featuredPost.author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author.name}</p>
                        <p className="text-sm text-gray-600">{featuredPost.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No posts found in this category.</p>
            </div>
          ) : (
            <ScrollContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
              {filteredPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <ScrollItem key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <Card hover className="h-full flex flex-col">
                        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold text-xs">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime} min</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-primary font-semibold text-xs">
                                  {post.author.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  {post.author.name}
                                </p>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                                >
                                  <Tag className="w-3 h-3" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </Card>
                    </Link>
                  </ScrollItem>
                ))}
            </ScrollContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}
