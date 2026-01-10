"use client";

import { NAVIGATION_ITEMS, SITE_NAME } from "@/app/lib/constants";
import { services } from "@/data/services";
import { ArrowUpRight, ChevronDown, Menu, PhoneCall, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";

// Service menu items derived from services data
const serviceMenuItems = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileMenuOpen]);

  const homeNav = NAVIGATION_ITEMS.find((item) => item.name === "Home");
  const otherNav = NAVIGATION_ITEMS.filter(
    (item) => item.name !== "Home" && item.name !== "Services"
  );

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"
        />
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo + tagline */}
            <Link
              href="/"
              className="flex items-center space-x-3"
              aria-label={SITE_NAME}
            >
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
            <div className="hidden lg:flex items-center space-x-1">
              {homeNav && (
                <Link
                  key={homeNav.name}
                  href={homeNav.href}
                  className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${pathname === homeNav.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {homeNav.name}
                  <span
                    className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${pathname === homeNav.href
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                  />
                </Link>
              )}

              <div className="relative" ref={servicesRef}>
                <button
                  className={`group relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-primary inline-flex items-center gap-1 ${pathname.startsWith("/services/")
                    ? "text-primary"
                    : "text-gray-700"
                    }`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                      }`}
                  />
                  <span
                    className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${pathname.startsWith("/services/") || servicesOpen
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-3 w-80 rounded-xl border border-gray-100 bg-white shadow-2xl shadow-primary/10 py-2 overflow-hidden">
                    {serviceMenuItems.map((item) => {
                      const isServiceActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-4 py-3 transition-colors group/item ${isServiceActive
                            ? "bg-primary/5"
                            : "hover:bg-primary/5"
                            }`}
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className={`block text-sm font-semibold transition-colors ${isServiceActive
                            ? "text-primary"
                            : "text-gray-900 group-hover/item:text-primary"
                            }`}>
                            {item.label}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {otherNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                      }`}
                  >
                    {item.name}
                    <span
                      className={`absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-primary transition-all duration-200 ${isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="tel:+447400719523"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary/60 hover:text-primary"
              >
                <PhoneCall className="h-4 w-4 flex-shrink-0" />
                <span className="hidden xl:inline">Call</span>
                <span className="font-semibold lg:font-medium whitespace-nowrap">
                  +44 7400 719523
                </span>
              </Link>
              <Link href="/contact">
                <Button
                  size="sm"
                  className="cursor-pointer hidden xl:inline-flex items-center gap-2 shadow-md shadow-primary/20 whitespace-nowrap"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="outline"
                  className="cursor-pointer xl:hidden border-primary/60 text-primary whitespace-nowrap"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 transition hover:border-primary/60 hover:text-primary"
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
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-4 space-y-2 min-h-full">
            {homeNav && (
              <Link
                key={homeNav.name}
                href={homeNav.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === homeNav.href
                  ? "bg-primary/5 text-primary"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {homeNav.name}
              </Link>
            )}
            {otherNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === item.href
                  ? "bg-primary/5 text-primary"
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 space-y-3">
              <button
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-gray-50 ${pathname.startsWith("/services/")
                  ? "bg-primary/5 text-primary"
                  : "text-gray-900"
                  }`}
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileServicesOpen && (
                <div id="mobile-services-menu" className="space-y-1 pl-2">
                  {serviceMenuItems.map((item) => {
                    const isServiceActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-lg px-3 py-3 transition-colors ${isServiceActive
                          ? "bg-primary/5"
                          : "hover:bg-gray-50"
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className={`block text-sm font-semibold ${isServiceActive
                          ? "text-primary"
                          : "text-gray-900"
                          }`}>
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="pt-2 space-y-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  fullWidth
                  className="cursor-pointer flex items-center justify-center gap-2"
                >
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link
                href="tel:+447400719523"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-primary/60 hover:text-primary"
              >
                <PhoneCall className="w-4 h-4" />
                +44 7400 719523
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
