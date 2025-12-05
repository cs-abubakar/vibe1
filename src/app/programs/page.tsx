"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Stethoscope, Languages, GraduationCap, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const programs = [
  {
    id: "mbbs",
    title: "MBBS in China",
    subtitle: "Medical Studies",
    description: "6-year English-medium medical programs at WHO-recognized universities. Become a globally recognized doctor with world-class education at affordable costs.",
    badge: "Most Popular",
    icon: Stethoscope,
    href: "/programs/mbbs",
    features: ["WHO & PMDC Recognized", "English Medium", "From $3,000/Year", "6-Year Program"],
    color: "primary",
  },
  {
    id: "language",
    title: "Chinese Language Programs",
    subtitle: "Language Foundation",
    description: "6-month to 1-year Chinese language courses designed for students who want to build a strong foundation before starting their degree programs.",
    badge: "Foundation",
    icon: Languages,
    href: "/programs/chinese-language",
    features: ["6-Month & 1-Year Options", "HSK Preparation", "Cultural Immersion", "Scholarship Options"],
    color: "secondary",
  },
  {
    id: "masters-phd",
    title: "Masters & PhD Programs",
    subtitle: "Postgraduate Studies",
    description: "Advanced degrees with research opportunities at top Chinese universities. Multiple scholarship options available for qualified candidates.",
    badge: "Advanced",
    icon: GraduationCap,
    href: "/programs/masters-phd",
    features: ["Research Opportunities", "Scholarship Available", "English Programs", "Expert Supervision"],
    color: "primary",
  },
  {
    id: "other",
    title: "Other Programs",
    subtitle: "Diverse Options",
    description: "Engineering, Business, Nursing, AI, and other undergraduate programs for students interested in non-medical career paths.",
    badge: "Diverse",
    icon: Building2,
    href: "/programs/other-programs",
    features: ["Engineering", "Business", "Nursing", "Artificial Intelligence"],
    color: "secondary",
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
          <Badge variant="default" className="mb-6">Our Programs</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Find Your <span className="text-primary-600">Perfect Program</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600">
            From medical degrees to language courses, we offer pathways for every educational goal at top Chinese universities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ProgramsSection() {
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
          {programs.map((program, index) => (
            <motion.div key={program.id} variants={fadeInUp}>
              <Link href={program.href} className="block group">
                <Card hover className="p-8 md:p-10">
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                      program.color === "primary" ? "bg-primary-100" : "bg-secondary-100"
                    }`}>
                      <program.icon className={`w-10 h-10 ${
                        program.color === "primary" ? "text-primary-600" : "text-secondary-600"
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {program.title}
                        </h2>
                        <Badge variant={program.color === "primary" ? "default" : "secondary"}>
                          {program.badge}
                        </Badge>
                      </div>
                      <p className="text-neutral-500 text-sm mb-3">{program.subtitle}</p>
                      <p className="text-neutral-600 mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <span key={feature} className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-12 h-12 bg-neutral-100 group-hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors">
                        <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ProgramsPage() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <FinalCTA />
    </>
  )
}
