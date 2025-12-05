"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Stethoscope, Languages, GraduationCap, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const programs = [
  {
    id: "mbbs",
    title: "Medical Studies",
    subtitle: "MBBS • Clinical Medicine",
    description: "6-year English-medium medical programs at WHO-recognized universities.",
    badge: "Most Popular",
    icon: Stethoscope,
    href: "/programs/mbbs",
    color: "primary",
  },
  {
    id: "language",
    title: "Chinese Language",
    subtitle: "6-Month • 1-Year Programs",
    description: "Foundation language courses for academic and career advancement.",
    badge: "Foundation",
    icon: Languages,
    href: "/programs/chinese-language",
    color: "secondary",
  },
  {
    id: "postgrad",
    title: "Masters & PhD",
    subtitle: "Postgraduate Programs",
    description: "Advanced degrees with research opportunities and scholarship options.",
    badge: "Advanced",
    icon: GraduationCap,
    href: "/programs/masters-phd",
    color: "primary",
  },
  {
    id: "other",
    title: "Other Programs",
    subtitle: "Engineering • Business • Nursing • AI",
    description: "Diverse undergraduate programs for various career paths.",
    badge: "Diverse Options",
    icon: Building2,
    href: "/programs/other-programs",
    color: "secondary",
  },
]

export function ProgramsOverview() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-neutral-50">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Programs
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            Find Your Perfect Program
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            From medical degrees to language courses, we offer pathways for every
            educational goal.
          </motion.p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={fadeInUp}>
              <Link href={program.href} className="block group">
                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-neutral-200/50 border border-neutral-100 hover:shadow-xl hover:shadow-neutral-300/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                      program.color === "primary"
                        ? "bg-primary-600"
                        : "bg-secondary-600"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          program.color === "primary"
                            ? "bg-primary-100"
                            : "bg-secondary-100"
                        }`}
                      >
                        <program.icon
                          className={`w-7 h-7 ${
                            program.color === "primary"
                              ? "text-primary-600"
                              : "text-secondary-600"
                          }`}
                        />
                      </div>
                      <Badge
                        variant={program.color === "primary" ? "default" : "secondary"}
                      >
                        {program.badge}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">{program.subtitle}</p>
                    <p className="text-neutral-600 text-sm mb-4">{program.description}</p>

                    <div className="flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
