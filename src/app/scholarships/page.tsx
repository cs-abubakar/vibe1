"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Award, CheckCircle, Globe, MessageCircle, Star, DollarSign, GraduationCap, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, SCHOLARSHIPS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const eligibilityGeneral = [
  "Non-Chinese citizen in good health",
  "Age requirements vary by program",
  "Good academic record",
  "Meet language requirements",
  "No other Chinese government scholarships",
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-400/10 via-white to-primary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="accent" className="mb-6">
            <Award className="w-4 h-4 mr-1" />
            Financial Support
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Scholarship <span className="text-primary-600">Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Multiple funding options to support your education in China. Let us help you find the right scholarship.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Check Your Eligibility
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ScholarshipsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

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
            Available Scholarships
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 max-w-2xl mx-auto">
            GEC helps students apply for various scholarship programs based on eligibility and goals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SCHOLARSHIPS.map((scholarship, index) => (
            <motion.div key={scholarship.id} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <Badge variant={index === 0 ? "accent" : "default"}>
                    {index === 0 ? "Top Choice" : "Available"}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{scholarship.name}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-3">{scholarship.coverage}</p>
                <p className="text-neutral-600 text-sm mb-4">{scholarship.description}</p>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="text-xs text-neutral-500">
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EligibilitySection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              General Eligibility Requirements
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {eligibilityGeneral.map((req) => (
                <div key={req} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-600 shrink-0" />
                  <span className="text-neutral-700">{req}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeInUp} className="text-neutral-600 text-sm">
              * Specific requirements vary by scholarship program. Contact us for detailed eligibility assessment.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
              <h3 className="text-2xl font-bold mb-6">Scholarship Application Tips</h3>
              <ul className="space-y-4">
                {[
                  "Apply early - deadlines are typically 6 months before intake",
                  "Maintain strong academic records (above 80%)",
                  "Prepare compelling personal statement",
                  "Get strong recommendation letters",
                  "Consider learning basic Chinese before applying",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                    <span className="text-primary-100">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  const steps = [
    { title: "Eligibility Check", description: "We assess your profile for suitable scholarships" },
    { title: "Document Preparation", description: "Help you prepare all required documents" },
    { title: "Application Submission", description: "Submit to scholarship programs on your behalf" },
    { title: "Follow-up & Results", description: "Track your application and celebrate success" },
  ]

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
            How We Help You Apply
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeInUp} className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {index + 1}
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ScholarshipsPage() {
  return (
    <>
      <HeroSection />
      <ScholarshipsSection />
      <EligibilitySection />
      <ProcessSection />
      <FinalCTA />
    </>
  )
}
