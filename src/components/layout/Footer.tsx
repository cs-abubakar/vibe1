"use client"

import Link from "next/link"
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Clock
} from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "MBBS in China", href: "/programs/mbbs" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

const programs = [
  { label: "MBBS", href: "/programs/mbbs" },
  { label: "Chinese Language", href: "/programs/chinese-language" },
  { label: "Masters & PhD", href: "/programs/masters-phd" },
  { label: "Other Programs", href: "/programs/other-programs" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/25">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <p className="font-bold text-xl text-white">GEC</p>
                <p className="text-xs text-neutral-400">Global Educational Consultants</p>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              {COMPANY_INFO.tagline}. Your trusted partner for studying in China, based on the ground in Jingzhou, Hubei.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mt-0.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{COMPANY_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm">{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <Clock className="w-5 h-5 mt-0.5" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM (CST)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-neutral-600">
                Based in {COMPANY_INFO.location} 🇨🇳
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
