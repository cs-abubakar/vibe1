"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Cpu, Briefcase, Heart, Cog, TrendingUp, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const programs = [
  {
    icon: Cog,
    title: "Engineering",
    description: "Civil, Mechanical, Electrical, and Computer Engineering programs at top technical universities.",
    duration: "4 Years",
    available: true,
  },
  {
    icon: Briefcase,
    title: "Business & Management",
    description: "International Business, Finance, Marketing, and Management degrees for future business leaders.",
    duration: "4 Years",
    available: true,
  },
  {
    icon: Heart,
    title: "Nursing",
    description: "Bachelor of Nursing programs with clinical training at affiliated hospitals.",
    duration: "4 Years",
    available: true,
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Cutting-edge AI and Machine Learning programs at China's leading tech universities.",
    duration: "4 Years",
    available: true,
  },
  {
    icon: TrendingUp,
    title: "International Economy & Trade",
    description: "Programs focused on global economics, trade relations, and international commerce.",
    duration: "4 Years",
    available: true,
  },
  {
    icon: Building2,
    title: "International Relations",
    description: "Study diplomacy, global politics, and international affairs at prestigious institutions.",
    duration: "4 Years",
    available: true,
  },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-6">
            <Building2 className="w-4 h-4 mr-1" />
            Diverse Programs
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Other <span className="text-secondary-600">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Explore diverse undergraduate programs beyond medicine at top Chinese universities.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Inquire About Programs
            </Button>
          </Link>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program) => (
            <motion.div key={program.title} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-secondary-600" />
                  </div>
                  <Badge variant={program.available ? "success" : "warning"}>
                    {program.available ? "Available" : "Coming Soon"}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{program.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{program.description}</p>
                <p className="text-secondary-600 font-semibold text-sm">{program.duration}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Interested in These Programs?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 mb-8">
            Contact us to learn more about admission requirements, universities, and scholarship opportunities for these programs.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button size="lg">
                Contact Us for Details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function OtherProgramsPage() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <CTASection />
      <FinalCTA />
    </>
  )
}
