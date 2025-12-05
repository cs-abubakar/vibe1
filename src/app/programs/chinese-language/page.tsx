"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Languages, Clock, BookOpen, Award, Users, CheckCircle, MessageCircle, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const programs = [
  {
    duration: "6 Months",
    level: "HSK 3-4",
    description: "Intensive program for students who need to reach HSK 4 before clinical studies",
    features: ["20+ hours/week", "Small class sizes", "HSK exam preparation", "Cultural activities"],
  },
  {
    duration: "1 Year",
    level: "HSK 5-6",
    description: "Comprehensive program for advanced Chinese proficiency and academic preparation",
    features: ["Full immersion", "Academic Chinese", "University preparation", "Internship options"],
  },
]

const benefits = [
  { icon: BookOpen, title: "Qualified Teachers", description: "Native speakers with teaching certifications" },
  { icon: Users, title: "Small Classes", description: "Maximum 15-20 students per class" },
  { icon: Award, title: "HSK Success", description: "95% pass rate for HSK exams" },
  { icon: GraduationCap, title: "University Pathway", description: "Direct entry to degree programs" },
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
            <Languages className="w-4 h-4 mr-1" />
            Language Programs
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Chinese Language <span className="text-secondary-600">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Build a strong foundation in Chinese to succeed in your academic journey and career.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Program Details
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProgramsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Choose Your Program
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {programs.map((program) => (
            <motion.div key={program.duration} variants={fadeInUp}>
              <Card hover className="h-full p-8">
                <Clock className="w-12 h-12 text-secondary-600 mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{program.duration}</h3>
                <p className="text-secondary-600 font-semibold mb-4">Target: {program.level}</p>
                <p className="text-neutral-600 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-secondary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Learn Chinese with GEC?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={fadeInUp}>
              <Card hover className="h-full p-6 text-center">
                <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-secondary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ChineseLanguagePage() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <BenefitsSection />
      <FinalCTA />
    </>
  )
}
