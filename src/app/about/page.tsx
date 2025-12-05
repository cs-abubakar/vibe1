"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Target,
  Users,
  Shield,
  Award,
  MapPin,
  Stethoscope,
  Globe,
  Heart,
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Honest information, no hidden fees. We believe in clear communication and ethical practices.",
  },
  {
    icon: Stethoscope,
    title: "Expertise",
    description: "Doctor-led guidance with deep knowledge of Chinese medical education system.",
  },
  {
    icon: Heart,
    title: "Support",
    description: "With you from application to graduation. Your success is our mission.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Your achievement is our priority. We strive for the highest standards in everything we do.",
  },
]

const teamMembers = [
  {
    name: "Dr. Muhammad Hassan",
    role: "Founder & CEO",
    bio: "Medical professional with 10+ years of experience in international education consulting.",
    expertise: ["MBBS Admissions", "University Relations", "Strategic Planning"],
  },
  {
    name: "Dr. Aisha Rahman",
    role: "Head of Admissions",
    bio: "Former medical student in China, now helping others achieve their dreams.",
    expertise: ["Student Counseling", "Application Review", "Visa Guidance"],
  },
  {
    name: "Li Wei",
    role: "China Operations Manager",
    bio: "Native Chinese speaker managing university partnerships and student support.",
    expertise: ["University Liaison", "Student Affairs", "Cultural Integration"],
  },
  {
    name: "Ahmed Khan",
    role: "Student Support Lead",
    bio: "Dedicated to ensuring smooth transition and ongoing support for all students.",
    expertise: ["Student Welfare", "Crisis Support", "Academic Guidance"],
  },
]

const whyChinaReasons = [
  {
    title: "World-Class Education",
    description: "China's medical universities are globally recognized with WHO and WFME accreditation.",
  },
  {
    title: "Affordable Tuition",
    description: "Quality education at 70% lower cost compared to private medical colleges.",
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art laboratories, teaching hospitals, and research centers.",
  },
  {
    title: "Cultural Experience",
    description: "Immerse yourself in one of the world's oldest and richest cultures.",
  },
  {
    title: "Growing Economy",
    description: "Career opportunities in a rapidly developing global superpower.",
  },
  {
    title: "Safe Environment",
    description: "Low crime rates and welcoming communities for international students.",
  },
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
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="default" className="mb-6">
            About GEC
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Founded by Doctors,{" "}
            <span className="text-primary-600">Driven by Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            We&apos;re not just consultants - we&apos;re medical professionals who understand
            your journey and are committed to helping you achieve your dreams.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
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
            <motion.span
              variants={fadeInUp}
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            >
              Our Story
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6"
            >
              A Journey of Passion and Purpose
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-neutral-600">
              <p>
                Global Educational Consultants (GEC) was founded in {COMPANY_INFO.founded} by a team
                of medical professionals who experienced firsthand the challenges of studying
                medicine abroad. We understood the confusion, the misinformation, and the
                lack of genuine support that students face.
              </p>
              <p>
                Based in Jingzhou, Hubei, China - we&apos;re not remote agents working from
                another country. We&apos;re here on the ground, building direct relationships
                with universities, understanding the local systems, and providing real-time
                support to our students.
              </p>
              <p>
                Our mission is simple: to make quality medical education accessible to
                students worldwide, with transparency, integrity, and unwavering support
                at every step of the journey.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-primary-300" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">Est. {COMPANY_INFO.founded}</p>
              <p className="text-primary-200">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
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
          <motion.span
            variants={fadeInUp}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Values
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            What We Stand For
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeInUp}>
              <Card hover className="h-full text-center p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TeamSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="team" className="py-20 bg-white">
      <div className="container">
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
            Our Team
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            Meet the Experts
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 text-lg">
            Dedicated professionals committed to your success
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={fadeInUp}>
              <Card hover className="h-full p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function WhyChinaSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} id="why-china" className="py-20 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary-300 font-semibold text-sm uppercase tracking-wider"
          >
            Why Choose China
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4"
          >
            China: Your Gateway to Medical Excellence
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-primary-100 text-lg">
            Discover why thousands of international students choose China for their medical education
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChinaReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center mb-4 text-white font-bold">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-primary-200 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function OfficeSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary-100 to-primary-100 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-24 h-24 text-secondary-300" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeInUp}
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            >
              Our China Office
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6"
            >
              Based in Jingzhou, Hubei
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-neutral-600 mb-8">
              <p>
                Unlike remote consultants working from another country, we&apos;re based
                right here in China. Our office in Jingzhou, Hubei Province, gives us
                direct access to universities and enables us to provide real-time
                support to our students.
              </p>
              <p>
                Being on the ground means we can visit universities, meet with
                admissions officers, and resolve issues immediately. When you arrive
                in China, we&apos;re here to welcome you.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-neutral-50 rounded-lg px-4 py-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-neutral-700">{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-50 rounded-lg px-4 py-3">
                <Globe className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-neutral-700">On-Ground Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <WhyChinaSection />
      <OfficeSection />
      <FinalCTA />
    </>
  )
}
