"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, Award, BookOpen, Globe, Users, CheckCircle, MessageCircle, Microscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const programs = [
  {
    level: "Masters Programs",
    duration: "2-3 Years",
    fields: ["Medical Sciences", "Public Health", "Biomedical Engineering", "Pharmacology", "Clinical Medicine"],
    scholarships: true,
  },
  {
    level: "PhD Programs",
    duration: "3-4 Years",
    fields: ["Medical Research", "Life Sciences", "Biomedical Sciences", "Traditional Chinese Medicine", "Clinical Research"],
    scholarships: true,
  },
]

const scholarships = [
  { name: "Chinese Government Scholarship", coverage: "Full tuition + stipend" },
  { name: "ANSO Scholarship", coverage: "For research students" },
  { name: "University Scholarships", coverage: "Partial to full coverage" },
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
          <Badge variant="default" className="mb-6">
            <GraduationCap className="w-4 h-4 mr-1" />
            Postgraduate Studies
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Masters & PhD <span className="text-primary-600">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Advance your career with postgraduate degrees from top Chinese universities. Scholarship opportunities available.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Explore Opportunities
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
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {programs.map((program) => (
            <motion.div key={program.level} variants={fadeInUp}>
              <Card hover className="h-full p-8">
                <div className="flex items-center gap-3 mb-4">
                  {program.level.includes("PhD") ? (
                    <Microscope className="w-10 h-10 text-primary-600" />
                  ) : (
                    <GraduationCap className="w-10 h-10 text-primary-600" />
                  )}
                  {program.scholarships && <Badge variant="success">Scholarships Available</Badge>}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{program.level}</h3>
                <p className="text-primary-600 font-semibold mb-4">{program.duration}</p>
                <p className="text-neutral-600 mb-4">Available fields:</p>
                <ul className="space-y-2">
                  {program.fields.map((field) => (
                    <li key={field} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-primary-500" />
                      {field}
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

function ScholarshipsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

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
            Scholarship Opportunities
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-100">
            Multiple funding options for postgraduate students
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {scholarships.map((scholarship) => (
            <motion.div
              key={scholarship.name}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <Award className="w-10 h-10 text-secondary-400 mb-4" />
              <h3 className="font-bold text-white mb-2">{scholarship.name}</h3>
              <p className="text-primary-200 text-sm">{scholarship.coverage}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-8">
          <Link href="/scholarships">
            <Button className="bg-white text-primary-700 hover:bg-primary-50">
              View All Scholarships
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function MastersPhDPage() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <ScholarshipsSection />
      <FinalCTA />
    </>
  )
}
