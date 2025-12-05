"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  MessageSquare,
  FileText,
  Plane,
  Briefcase,
  Home,
  BookOpen,
  Shield,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Award,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, SERVICES } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  MessageSquare,
  FileText,
  Plane,
  Briefcase,
  Home,
  BookOpen,
  Shield,
}

const serviceDetails = [
  {
    icon: MessageSquare,
    title: "Admission Consultation",
    description: "Free initial consultation to understand your goals and recommend the best universities.",
    features: ["One-on-one counseling", "University matching", "Program recommendations", "Eligibility assessment"],
    color: "primary",
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete support with document preparation, application submission, and university communication.",
    features: ["Document review", "Application forms", "Translation services", "University liaison"],
    color: "secondary",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Comprehensive visa application support including document checklist and interview preparation.",
    features: ["Document checklist", "Embassy procedures", "Interview tips", "JW202 processing"],
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Pre-Departure Support",
    description: "Travel arrangements, packing guidance, and cultural preparation for life in China.",
    features: ["Travel planning", "Packing checklist", "Cultural orientation", "Student connections"],
    color: "secondary",
  },
  {
    icon: Home,
    title: "Arrival & Settlement",
    description: "Airport pickup, university registration, accommodation setup, and city orientation.",
    features: ["Airport pickup", "Campus registration", "Accommodation setup", "SIM card & banking"],
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "HSK preparation courses, mock tests, and achievement programs for exam success.",
    features: ["HSK levels 3-6", "Mock exams", "Performance feedback", "Achievement awards"],
    color: "secondary",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "Continuous academic guidance, emergency assistance, and career counseling throughout your stay.",
    features: ["Academic support", "Emergency help", "Career guidance", "Alumni network"],
    color: "primary",
  },
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
          <Badge variant="default" className="mb-6">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            End-to-End <span className="text-primary-600">Support</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            From your first inquiry to graduation, we&apos;re with you every step of the way.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {serviceDetails.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp}>
              <Card hover className="p-8">
                <div className="grid md:grid-cols-[auto_1fr] gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    service.color === "primary" ? "bg-primary-100" : "bg-secondary-100"
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === "primary" ? "text-primary-600" : "text-secondary-600"
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
                      <Badge variant={service.color === "primary" ? "default" : "secondary"}>
                        Step {index + 1}
                      </Badge>
                    </div>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-secondary-500 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  const reasons = [
    { icon: Users, title: "500+ Students", description: "Successfully guided to Chinese universities" },
    { icon: Award, title: "95% Visa Success", description: "High success rate for student visas" },
    { icon: Shield, title: "On-Ground Team", description: "Based in China for real-time support" },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose GEC?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-primary-200">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <FinalCTA />
    </>
  )
}
