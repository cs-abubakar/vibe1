"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle,
  Globe,
  MessageCircle,
  DollarSign,
  Plane,
  Award,
  Users,
  BookOpen,
  Shield,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, TESTIMONIALS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface CountryPageProps {
  name: string
  flag: string
  council: string
  councilFull: string
  greeting: string
  whyStudy: string[]
  costComparison: {
    local: string
    china: string
    savings: string
  }
  visaInfo: string[]
  testimonials: typeof TESTIMONIALS
  features: string[]
}

export function CountryPageTemplate({
  name,
  flag,
  council,
  councilFull,
  greeting,
  whyStudy,
  costComparison,
  visaInfo,
  testimonials,
  features,
}: CountryPageProps) {
  return (
    <>
      <HeroSection name={name} flag={flag} greeting={greeting} features={features} />
      <RecognitionSection council={council} councilFull={councilFull} />
      <CostSection name={name} costComparison={costComparison} />
      <VisaSection name={name} visaInfo={visaInfo} />
      <TestimonialsSection testimonials={testimonials} flag={flag} />
      <SupportSection name={name} />
      <FinalCTA />
    </>
  )
}

function HeroSection({ name, flag, greeting, features }: { name: string; flag: string; greeting: string; features: string[] }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-7xl mb-6">{flag}</div>
          <Badge variant="default" className="mb-6">Student Guide</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            MBBS in China for <span className="text-primary-600">{name} Students</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">{greeting}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm">
                <CheckCircle className="w-4 h-4 text-secondary-500" />
                {feature}
              </div>
            ))}
          </div>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl">
              <MessageCircle className="w-5 h-5" />
              Get {name} Student Guide
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function RecognitionSection({ council, councilFull }: { council: string; councilFull: string }) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Recognition & Accreditation
            </h2>
            <p className="text-neutral-600">
              Information specific to {councilFull} ({council}) recognition
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 border-2 border-secondary-200 bg-secondary-50">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-secondary-600" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{council} Recognized Universities</h3>
                  <p className="text-neutral-600">Our partner universities are recognized by {councilFull}</p>
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                GEC only partners with universities that have {council} recognition. After graduation,
                you will need to pass the national licensing examination to practice medicine.
              </p>
              <Link href="/programs/mbbs#recognition" className="text-primary-600 font-semibold inline-flex items-center">
                View Full Recognition Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CostSection({ name, costComparison }: { name: string; costComparison: { local: string; china: string; savings: string } }) {
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
              Cost Comparison
            </h2>
            <p className="text-neutral-600">
              See how much you can save by studying in China
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <DollarSign className="w-10 h-10 text-neutral-400 mx-auto mb-4" />
              <p className="text-sm text-neutral-500 mb-2">Private College in {name}</p>
              <p className="text-2xl font-bold text-neutral-900">{costComparison.local}</p>
            </Card>
            <Card className="p-6 text-center border-2 border-primary-500 bg-primary-50">
              <DollarSign className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <p className="text-sm text-neutral-500 mb-2">MBBS in China</p>
              <p className="text-2xl font-bold text-primary-600">{costComparison.china}</p>
            </Card>
            <Card className="p-6 text-center border-2 border-secondary-500 bg-secondary-50">
              <CheckCircle className="w-10 h-10 text-secondary-600 mx-auto mb-4" />
              <p className="text-sm text-neutral-500 mb-2">Your Savings</p>
              <p className="text-2xl font-bold text-secondary-600">{costComparison.savings}</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function VisaSection({ name, visaInfo }: { name: string; visaInfo: string[] }) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Visa Process for {name} Students
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8">
              <Plane className="w-12 h-12 text-primary-600 mb-6" />
              <div className="space-y-3">
                {visaInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-0.5 shrink-0" />
                    <span className="text-neutral-700">{info}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-neutral-500">
                GEC provides complete visa guidance including document preparation, embassy procedures, and interview tips.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection({ testimonials, flag }: { testimonials: typeof TESTIMONIALS; flag: string }) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const countryTestimonials = testimonials.filter(t => t.flag === flag).slice(0, 2)

  if (countryTestimonials.length === 0) {
    return null
  }

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
              Success Stories
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
            {countryTestimonials.map((testimonial) => (
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

function SupportSection({ name }: { name: string }) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            GEC Support for {name} Students
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 mb-8">
            Dedicated support tailored for students from {name}
          </motion.p>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Cultural Understanding", description: "Team members familiar with your culture" },
              { icon: Globe, title: "Language Support", description: "Communication in your preferred language" },
              { icon: Shield, title: "Complete Guidance", description: "End-to-end support throughout your journey" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card hover className="p-6 h-full">
                  <item.icon className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
