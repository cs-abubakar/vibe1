"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle,
  Shield,
  Globe,
  Users,
  Building,
  DollarSign,
  Award,
  ChevronDown,
  MessageCircle,
  Star,
  Clock,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeadForm } from "@/components/forms/LeadForm"
import { COMPANY_INFO, UNIVERSITIES, TESTIMONIALS } from "@/lib/constants"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, fadeInRight } from "@/lib/animations"
import { useState } from "react"

const faqs = [
  {
    q: "Is MBBS from China recognized in my country?",
    a: "Yes! Our partner universities are recognized by WHO, PMDC (Pakistan), and other medical councils. We only work with properly accredited universities.",
  },
  {
    q: "What's the total cost for 6 years?",
    a: "Total costs range from $30,000-$50,000 for the entire 6-year program, including tuition, accommodation, and living expenses. This is 50-70% less than private medical colleges.",
  },
  {
    q: "Is it safe to study in China?",
    a: "Absolutely! China is one of the safest countries in the world with low crime rates. Universities provide secure campus housing and comprehensive support for international students.",
  },
  {
    q: "What about the language barrier?",
    a: "Programs are taught in English! You'll learn Chinese during the first year to help with patient interaction during clinical years. GEC provides HSK preparation support.",
  },
  {
    q: "How long does the admission process take?",
    a: "The entire process from application to visa typically takes 2-3 months. Starting early gives you the best chance of securing your preferred university.",
  },
]

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-secondary-500 text-white mb-6">
              2025 Admissions Open
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Study MBBS in China
            </h1>

            <p className="text-xl text-primary-100 mb-6">
              WHO-Recognized | English-Medium | From $3,000/Year
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm">
                <CheckCircle className="w-4 h-4 text-secondary-400" />
                PMDC Recognized
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm">
                <Building className="w-4 h-4 text-secondary-400" />
                14+ Universities
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-sm">
                <Users className="w-4 h-4 text-secondary-400" />
                500+ Students Enrolled
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "70% lower cost than private colleges",
                "6-year program including internship",
                "Expert guidance from China-based team",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-secondary-400" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="w-full mb-4">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp Now
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm
              variant="landing"
              title="Get Free Consultation"
              subtitle="Speak with our China-based admissions team"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValueStackSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: DollarSign,
              title: "Save 70% on Fees",
              description: "Total cost ~$35,000 vs $100,000+ at private colleges",
            },
            {
              icon: Globe,
              title: "Global Recognition",
              description: "WHO, PMDC, ECFMG recognized degrees",
            },
            {
              icon: Shield,
              title: "Expert Guidance",
              description: "China-based team with 500+ successful students",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function UniversityShowcase() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const featuredUniversities = UNIVERSITIES.slice(0, 6)

  return (
    <section ref={ref} className="py-16 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Top Partner Universities
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600">
            All WHO and PMDC recognized
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredUniversities.map((uni) => (
            <motion.div key={uni.id} variants={fadeInUp}>
              <Card hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary-600" />
                  </div>
                  <Badge variant="success">PMDC</Badge>
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">{uni.name}</h3>
                <p className="text-sm text-neutral-500 mb-2">{uni.location}</p>
                <p className="text-primary-600 font-semibold text-sm">{uni.tuitionRange}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <Link href="/programs/mbbs#universities">
            <Button variant="outline">
              View All 14+ Universities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  const steps = [
    { title: "Free Consultation", description: "Tell us your goals" },
    { title: "Application", description: "We handle the paperwork" },
    { title: "Admission", description: "Get your acceptance letter" },
    { title: "Arrival Support", description: "We welcome you in China" },
  ]

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12"
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={fadeInUp} className="relative text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {index + 1}
              </div>
              <h3 className="font-bold text-neutral-900 mb-1">{step.title}</h3>
              <p className="text-sm text-neutral-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-primary-200" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12"
        >
          Student Success Stories
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
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
      </div>
    </section>
  )
}

function FAQSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12"
        >
          Common Questions
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-neutral-50 rounded-xl p-5 flex items-center justify-between text-left hover:bg-neutral-100 transition-colors"
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              {openIndex === index && (
                <div className="bg-neutral-50 px-5 pb-5 rounded-b-xl">
                  <p className="text-neutral-600">{faq.a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-primary-700 to-primary-900">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            2025 Admissions Closing Soon
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Limited seats available for September intake. Start your application today!
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5" />
                Chat Now for Instant Response
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 text-white text-sm"
          >
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              500+ students enrolled
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              95% visa success
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              24-hour response
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function FloatingStickyButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md shadow-2xl shadow-neutral-400/30 lg:hidden">
      <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button variant="whatsapp" size="lg" className="w-full">
          <MessageCircle className="w-5 h-5" />
          Get Free Consultation
        </Button>
      </Link>
    </div>
  )
}

export default function MBBSLandingPage() {
  return (
    <div className="pt-0">
      {/* Remove header for landing page */}
      <style jsx global>{`
        header { display: none !important; }
        footer { display: none !important; }
      `}</style>

      <HeroSection />
      <ValueStackSection />
      <UniversityShowcase />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <FloatingStickyButton />
    </div>
  )
}
