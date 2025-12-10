'use client'

import { NAVIGATION_ITEMS, SITE_NAME } from '@/app/lib/constants'
import { ArrowUpRight, Menu, PhoneCall, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '../ui/Button'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
            {NAVIGATION_ITEMS.map((item) => {
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
            {NAVIGATION_ITEMS.map((item) => (
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
