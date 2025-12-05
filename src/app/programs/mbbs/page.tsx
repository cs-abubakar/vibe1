"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Globe,
  CheckCircle,
  BookOpen,
  Clock,
  DollarSign,
  Building,
  Award,
  FileText,
  Plane,
  Briefcase,
  Home,
  Shield,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Download,
  Calendar,
  GraduationCap,
  Stethoscope,
  Users,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, UNIVERSITIES, FAQS } from "@/lib/constants"
import { fadeInUp, staggerContainer, fadeInRight } from "@/lib/animations"

const benefits = [
  { icon: Globe, title: "Globally Recognized", description: "WHO, PMDC, ECFMG recognized degrees" },
  { icon: DollarSign, title: "Affordable", description: "70% lower than private colleges" },
  { icon: BookOpen, title: "English Medium", description: "MOE-listed programs available" },
  { icon: Building, title: "Modern Facilities", description: "State-of-the-art labs and hospitals" },
  { icon: Stethoscope, title: "Clinical Training", description: "Hands-on experience from year 1" },
  { icon: GraduationCap, title: "Global Career", description: "Practice worldwide after licensing" },
]

const programStructure = [
  {
    year: "Year 1",
    title: "Foundation",
    items: ["Chinese Language (HSK preparation)", "Basic Sciences introduction", "Campus orientation"],
  },
  {
    year: "Years 2-3",
    title: "Pre-Clinical",
    items: ["Anatomy, Physiology, Biochemistry", "Pathology, Pharmacology", "Laboratory work"],
  },
  {
    year: "Years 4-5",
    title: "Clinical",
    items: ["Hospital rotations", "Clinical skills training", "Patient interaction"],
  },
  {
    year: "Year 6",
    title: "Internship",
    items: ["Full-time hospital placement", "Supervised practice", "Exam preparation"],
  },
]

const applicationSteps = [
  { icon: MessageCircle, title: "Free Consultation", description: "Contact GEC, discuss goals, get university recommendations" },
  { icon: FileText, title: "Document Preparation", description: "Gather documents, translation, GEC reviews and verifies" },
  { icon: Briefcase, title: "Application Submission", description: "Submit to universities, GEC handles communication" },
  { icon: Award, title: "Admission & Payment", description: "Receive admission letter, pay tuition, get JW202 form" },
  { icon: Plane, title: "Visa Application", description: "Document preparation, embassy appointment, GEC guidance" },
  { icon: Calendar, title: "Pre-Departure", description: "Travel arrangements, orientation, connect with students" },
  { icon: Home, title: "Arrival in China", description: "Airport pickup, registration, accommodation, ongoing support" },
]

const requirements = [
  "Age: 17-25 years",
  "High school diploma with science subjects",
  "Minimum 60% in Biology, Chemistry, Physics",
  "English proficiency (for English-medium programs)",
  "Valid passport",
  "Medical fitness certificate",
  "No criminal record",
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge variant="accent" className="mb-6">
            <GraduationCap className="w-4 h-4 mr-1" />
            Most Popular Program
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            MBBS in China:{" "}
            <span className="text-primary-600">Your Path to Becoming a Doctor</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            WHO-recognized, English-taught programs at world-class universities - starting from $3,000/year
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5" />
                Start Application
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              <Download className="w-5 h-5" />
              Download Complete Guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Why MBBS in China
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Benefits of Studying Medicine in China
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function RecognitionSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Recognition & Accreditation
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Globally Recognized Degrees
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { title: "WHO", description: "World Health Organization listed universities" },
            { title: "PMDC", description: "Pakistan Medical & Dental Council recognized" },
            { title: "ECFMG", description: "Educational Commission for Foreign Medical Graduates" },
            { title: "WFME", description: "World Federation for Medical Education" },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className="h-full p-6 text-center border-2 border-secondary-200 bg-secondary-50">
                <CheckCircle className="w-10 h-10 text-secondary-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notice */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-neutral-900 mb-2">Important Note for Indian Students</h4>
            <p className="text-neutral-700 text-sm mb-4">
              Only graduates from the 45 MOE-listed universities can appear for FMGE/NExT in India.
              GEC provides transparent information about each university&apos;s recognition status.
              We recommend discussing your specific situation with our team before applying.
            </p>
            <Link href="/contact" className="text-primary-600 font-semibold text-sm hover:underline">
              Contact us for details →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function UniversitiesSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [showAll, setShowAll] = useState(false)
  const displayedUniversities = showAll ? UNIVERSITIES : UNIVERSITIES.slice(0, 6)

  return (
    <section ref={ref} id="universities" className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Partner Universities
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            14+ Top Chinese Universities
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 text-lg">
            All our partner universities are WHO and PMDC recognized
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedUniversities.map((uni) => (
            <motion.div key={uni.id} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex gap-2">
                    {uni.pmdc && <Badge variant="success" className="text-xs">PMDC</Badge>}
                    {uni.who && <Badge variant="default" className="text-xs">WHO</Badge>}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{uni.name}</h3>
                <p className="text-sm text-neutral-500 mb-3">{uni.location}</p>
                <p className="text-sm text-neutral-600 mb-4">{uni.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-sm font-semibold text-primary-600">{uni.tuitionRange}</span>
                  <span className="text-xs text-neutral-400">{uni.ranking}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {UNIVERSITIES.length > 6 && (
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : `View All ${UNIVERSITIES.length} Universities`}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProgramStructureSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            Program Structure
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            6-Year Medical Program
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programStructure.map((phase, index) => (
            <motion.div
              key={phase.year}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                {index + 1}
              </div>
              <p className="text-secondary-400 font-medium text-sm mb-1">{phase.year}</p>
              <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-primary-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-secondary-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function RequirementsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Admission Requirements
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6">
              Eligibility Criteria
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {requirements.map((req) => (
                <div key={req} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary-600 shrink-0" />
                  <span className="text-neutral-700">{req}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button>
                <Download className="w-4 h-4" />
                Download Document Checklist
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Card className="p-8 bg-neutral-50">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Fee Structure (Sample)</h3>
              <div className="space-y-4 mb-6">
                {[
                  { item: "Tuition (per year)", cost: "$3,500" },
                  { item: "Accommodation", cost: "$800/year" },
                  { item: "Living expenses", cost: "$200/month" },
                  { item: "Insurance", cost: "$100/year" },
                ].map((fee) => (
                  <div key={fee.item} className="flex justify-between border-b border-neutral-200 pb-2">
                    <span className="text-neutral-600">{fee.item}</span>
                    <span className="font-semibold text-neutral-900">{fee.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-neutral-900">Total 6-Year Estimate</span>
                  <span className="font-bold text-primary-600">~$35,000</span>
                </div>
              </div>
              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
                <p className="text-sm text-secondary-700">
                  <strong>Compare:</strong> Private MBBS in Pakistan costs PKR 10-15 million.
                  Save up to 50% while getting internationally recognized education!
                </p>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                * Fees vary by university. Contact us for current rates.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function IntakeSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Intake Information
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Two Intakes Per Year
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Card className="p-8 border-2 border-primary-200 bg-primary-50">
              <Calendar className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">September Intake</h3>
              <p className="text-primary-600 font-semibold mb-4">Main Intake - More Seats</p>
              <p className="text-neutral-600 mb-4">
                The primary intake with maximum seat availability. Best option for scholarship applicants.
              </p>
              <p className="text-sm text-neutral-500">
                <strong>Deadline:</strong> Apply by June-July
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 border-2 border-secondary-200 bg-secondary-50">
              <Calendar className="w-10 h-10 text-secondary-600 mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">March Intake</h3>
              <p className="text-secondary-600 font-semibold mb-4">Additional Intake</p>
              <p className="text-neutral-600 mb-4">
                Available at many universities for self-funded students. Limited seats available.
              </p>
              <p className="text-sm text-neutral-500">
                <strong>Deadline:</strong> Apply by December-January
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ApplicationProcessSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Application Process
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Your Journey to China in 7 Steps
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {applicationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index < applicationSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-primary-200 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
                </div>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            FAQs
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {FAQS.mbbs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-5 flex items-center justify-between text-left shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white px-5 pb-5 pt-2 rounded-b-xl">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function MBBSPage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <RecognitionSection />
      <UniversitiesSection />
      <ProgramStructureSection />
      <RequirementsSection />
      <IntakeSection />
      <ApplicationProcessSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
