"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Mail, MapPin, Clock, Phone, Send, Globe, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeadForm } from "@/components/forms/LeadForm"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, staggerContainer, fadeInRight } from "@/lib/animations"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: COMPANY_INFO.whatsapp,
    link: COMPANY_INFO.whatsappLink,
    description: "Fastest response - Chat with us directly",
    color: "text-[#25D366]",
    bgColor: "bg-[#25D366]/10",
  },
  {
    icon: Mail,
    title: "Email",
    value: COMPANY_INFO.email,
    link: `mailto:${COMPANY_INFO.email}`,
    description: "For detailed inquiries and documents",
    color: "text-primary-600",
    bgColor: "bg-primary-100",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="default" className="mb-6">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600">
            Ready to start your journey? Reach out to us through any of the channels below.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-neutral-900 mb-8">
              Contact Information
            </motion.h2>

            {/* Primary Contact Methods */}
            <motion.div variants={staggerContainer} className="space-y-4 mb-8">
              {contactMethods.map((method) => (
                <motion.div key={method.title} variants={fadeInUp}>
                  <Link href={method.link} target="_blank" rel="noopener noreferrer">
                    <Card hover className="p-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.bgColor}`}>
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-neutral-900">{method.title}</h3>
                          <p className="text-primary-600 font-medium">{method.value}</p>
                          <p className="text-sm text-neutral-500">{method.description}</p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Office Info */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-neutral-50">
                <h3 className="font-bold text-neutral-900 mb-4">China Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">{COMPANY_INFO.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">Mon - Sat: 9:00 AM - 6:00 PM (CST)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-600">On-ground support for students in China</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="mt-8">
              <h3 className="font-bold text-neutral-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-100 hover:bg-primary-100 rounded-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <LeadForm
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you within 24 hours"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-neutral-900 mb-4">
            Our Location
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600">
            Based in China
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="aspect-[21/9] bg-neutral-200 rounded-2xl overflow-hidden"
        >
          {/* Map placeholder - in production, integrate Google Maps or Baidu Maps */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                                  <p className="text-primary-600 font-medium">China</p>              <p className="text-sm text-neutral-500 mt-2">Map integration available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
      <MapSection />
    </>
  )
}
