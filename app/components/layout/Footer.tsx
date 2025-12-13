import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  SITE_NAME,
  NAVIGATION_ITEMS,
  SERVICE_CATEGORIES,
} from "@/app/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Link
                href="/"
                aria-label={SITE_NAME}
                className="inline-flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt={`${SITE_NAME} logo`}
                  width={797}
                  height={559}
                  className="h-9 md:h-11 w-auto"
                />
              </Link>
            </div>
            <p className="text-xs md:text-sm mb-4">
              Professional technology services provider offering comprehensive
              solutions for businesses worldwide.
            </p>
            <div className="flex space-x-3 md:space-x-4 text-gray-400">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm md:text-lg font-semibold mb-3 md:mb-4">
              Services
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services/${category.id}`}
                    className="text-xs md:text-sm hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm md:text-lg font-semibold mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs md:text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-sm md:text-lg font-semibold mb-3 md:mb-4">
              Contact
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@minhajsolutions.com"
                  className="text-xs md:text-sm hover:text-white transition-colors"
                >
                  info@minhajsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-xs md:text-sm hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">
                  123 Business Street
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
