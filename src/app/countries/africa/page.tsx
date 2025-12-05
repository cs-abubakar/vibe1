"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle, Globe, MessageCircle, Award, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, TESTIMONIALS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const africanCountries = [
  { name: "Ghana", flag: "🇬🇭", council: "MDC Ghana" },
  { name: "Nigeria", flag: "🇳🇬", council: "MDCN" },
  { name: "Tanzania", flag: "🇹🇿", council: "MCT" },
  { name: "Kenya", flag: "🇰🇪", council: "KMPDC" },
  { name: "Uganda", flag: "🇺🇬", council: "UMDPC" },
  { name: "South Africa", flag: "🇿🇦", council: "HPCSA" },
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
          <div className="text-7xl mb-6">🌍</div>
          <Badge variant="default" className="mb-6">African Students Guide</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            MBBS in China for <span className="text-primary-600">African Students</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            GEC welcomes students from Ghana, Nigeria, Tanzania, and other African nations with dedicated support and emerging opportunities in China.
          </p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get Your Country Guide
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function CountriesSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Countries We Serve
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600">
            Dedicated support for students from these African nations
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {africanCountries.map((country) => (
            <motion.div key={country.name} variants={fadeInUp}>
              <Card hover className="p-6 text-center">
                <div className="text-5xl mb-4">{country.flag}</div>
                <h3 className="font-bold text-neutral-900 mb-1">{country.name}</h3>
                <p className="text-sm text-neutral-500">{country.council}</p>
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
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why African Students Choose China
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Affordable Education", description: "Quality medical education at a fraction of Western costs" },
              { title: "WHO Recognition", description: "Degrees recognized by World Health Organization" },
              { title: "Scholarship Opportunities", description: "Various scholarships available for African students" },
              { title: "Growing Bilateral Relations", description: "Strong China-Africa educational partnerships" },
              { title: "Modern Facilities", description: "State-of-the-art hospitals and laboratories" },
              { title: "Diverse Community", description: "Large African student communities in Chinese universities" },
            ].map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-neutral-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const africanTestimonials = TESTIMONIALS.filter(t =>
    t.country === "Ghana" || t.country === "Nigeria"
  )

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              African Student Success Stories
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {africanTestimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <p className="text-neutral-600 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{testimonial.name} {testimonial.flag}</p>
                      <p className="text-sm text-neutral-500">{testimonial.university}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function AfricaPage() {
  return (
    <>
      <HeroSection />
      <CountriesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  )
}
