'use client'

import { NAVIGATION_ITEMS, SITE_NAME } from '@/app/lib/constants'
import { ArrowUpRight, Menu, PhoneCall, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef<HTMLDivElement | null>(null)

  const getComingSoonLink = (label: string) =>
    `/coming-soon?topic=${encodeURIComponent(label.toLowerCase())}`

  const megaMenuColumns = [
    {
      title: 'Capabilities',
      sections: [
        {
          heading: 'Digital Transformation',
          items: [
            { label: 'Web development', href: '/services/web-development' },
            { label: 'App Development', href: '/services/mobile-app-development' },
            { label: 'Custom Software Development', href: '/services/web-development' },
            { label: 'UX/UI Design', href: getComingSoonLink('UX/UI Design') },
          ],
        },
        {
          heading: 'Business Applications',
          items: [
            { label: 'Dynamics 365 ERP', href: getComingSoonLink('Dynamics 365 ERP') },
            { label: 'Dynamics 365 CRM', href: getComingSoonLink('Dynamics 365 CRM') },
            { label: 'Power Apps', href: getComingSoonLink('Power Apps') },
            { label: 'Salesforce', href: getComingSoonLink('Salesforce') },
          ],
        },
        {
          heading: 'Emerging Technologies',
          items: [
            { label: 'Metaverse', href: getComingSoonLink('Metaverse') },
            { label: 'Augmented reality', href: getComingSoonLink('Augmented reality') },
            { label: 'Blockchain & Cryptography', href: getComingSoonLink('Blockchain & Cryptography') },
            { label: 'Gen AI', href: '/services/generative-ai' },
            { label: 'Data Analytics', href: '/services/data' },
          ],
        },
        {
          heading: 'Staff Augmentation',
          items: [{ label: 'Staff Augmentation', href: '/services/staffing' }],
        },
      ],
    },
    {
      title: '',
      sections: [
        { heading: 'Quality Assurance', items: [{ label: 'Quality Assurance', href: getComingSoonLink('Quality Assurance') }] },
        { heading: 'DevOps', items: [{ label: 'DevOps', href: '/services/cloud' }] },
        { heading: 'Cybersecurity', items: [{ label: 'Cybersecurity', href: '/services/cybersecurity' }] },
        { heading: 'SaaS', items: [{ label: 'SaaS', href: getComingSoonLink('SaaS') }] },
        {
          heading: 'E-commerce',
          items: [
            { label: 'Design & Development', href: '/services/web-development' },
            { label: 'Maintenance & Support', href: '/services/consulting' },
            { label: 'Automation & Apps', href: '/services/generative-ai' },
          ],
        },
        {
          heading: 'Gaming',
          items: [
            { label: 'Art & Design', href: getComingSoonLink('Gaming Art & Design') },
            { label: 'Web3', href: getComingSoonLink('Gaming Web3') },
            { label: 'AR/VR/XR', href: getComingSoonLink('Gaming AR/VR/XR') },
          ],
        },
        {
          heading: 'Cloud',
          items: [
            { label: 'Cloud Application', href: '/services/cloud' },
            { label: 'Cloud Ops & Migration', href: '/services/cloud' },
            { label: 'Cloud maintenance & integration', href: '/services/cloud' },
          ],
        },
      ],
    },
  ]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [servicesOpen])

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false)
    }
  }, [mobileMenuOpen])

  const homeNav = NAVIGATION_ITEMS.find((item) => item.name === 'Home')
  const otherNav = NAVIGATION_ITEMS.filter(
    (item) => item.name !== 'Home' && item.name !== 'Services'
  )

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo + tagline */}
          <Link href="/" className="flex items-center space-x-3" aria-label={SITE_NAME}>
            <Image
              src="/logo.png"
              alt={`${SITE_NAME} logo`}
              width={797}
              height={559}
              className="h-10 w-auto drop-shadow-sm"
              priority
            />
            {/* <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">
                {SITE_NAME}
              </p>
              <p className="text-[11px] text-gray-500">Digital-first engineering partner</p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {homeNav && (
              <Link
                key={homeNav.name}
                href={homeNav.href}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === homeNav.href ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                {homeNav.name}
                <span
                  className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${pathname === homeNav.href ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                />
              </Link>
            )}

            <div className="relative" ref={servicesRef}>
              <button
                className="group relative px-3 py-2 text-sm font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <span
                  className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${servicesOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-screen max-w-5xl rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-primary/10 p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {megaMenuColumns.map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-6">
                        {column.title && (
                          <h3 className="text-3xl font-black text-gray-900">{column.title}</h3>
                        )}
                        <div className="space-y-6">
                          {column.sections.map((section) => (
                            <div key={section.heading} className="space-y-2">
                              <p className="text-lg font-semibold text-gray-900">{section.heading}</p>
                              {section.items.length > 0 && (
                                <ul className="space-y-1">
                                  {section.items.map((item) => (
                                    <li key={item.label}>
                                      <Link
                                        href={item.href}
                                        className="text-sm text-gray-700 leading-6 hover:text-primary transition-colors"
                                        onClick={() => setServicesOpen(false)}
                                      >
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {otherNav.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="tel:+92-000-0000000"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary/60 hover:text-primary"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="hidden lg:inline">Call</span>
              <span className="font-semibold lg:font-medium">+92 000 0000000</span>
            </Link>
            <Button
              size="sm"
              className="hidden lg:inline-flex items-center gap-2 shadow-md shadow-primary/20"
            >
              Get Started <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="lg:hidden border-primary/60 text-primary"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:border-primary/60 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-100 shadow-inner">
          <div className="px-4 py-4 space-y-2">
            {otherNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === item.href
                  ? 'bg-primary/5 text-primary'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 space-y-3">
              <button
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide text-gray-900 transition-colors hover:bg-gray-50"
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <span className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                  ˅
                </span>
              </button>
              {mobileServicesOpen && (
                <div id="mobile-services-menu" className="space-y-4">
                  {megaMenuColumns.map((column, columnIdx) => (
                    <div key={columnIdx} className="space-y-4">
                      {column.title && (
                        <p className="px-3 text-base font-bold text-gray-900">{column.title}</p>
                      )}
                      {column.sections.map((section) => (
                        <div key={section.heading} className="space-y-2">
                          <p className="px-3 text-sm font-semibold text-gray-900">
                            {section.heading}
                          </p>
                          {section.items.length > 0 && (
                            <div className="space-y-1">
                              {section.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-2 space-y-2">
              <Button fullWidth className="flex items-center justify-center gap-2">
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Link
                href="tel:+92-000-0000000"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary/60 hover:text-primary"
              >
                <PhoneCall className="w-4 h-4" />
                +92 000 0000000
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
