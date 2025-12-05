"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle, Stethoscope, MapPin, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { COMPANY_INFO, STATS } from "@/lib/constants"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 animate-gradient" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-200/30 rounded-full blur-3xl" />

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Badge variant="default" className="gap-1.5 py-1.5">
                <Stethoscope className="w-3.5 h-3.5" />
                Doctor-Led Team
              </Badge>
              <Badge variant="secondary" className="gap-1.5 py-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Based in China
              </Badge>
              <Badge variant="success" className="gap-1.5 py-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                500+ Students Guided
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight"
            >
              Your Medical Career Begins with{" "}
              <span className="text-primary-600 relative">
                Expert Guidance
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary-300" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              China-based consultants helping students from Pakistan, Yemen, Saudi Arabia & Africa achieve their MBBS dreams at world-class universities.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  Start Free Consultation
                </Button>
              </Link>
              <Link href="/programs/mbbs">
                <Button variant="outline" size="xl">
                  Explore MBBS Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">Join 500+ students</span>
                <br />
                already enrolled
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl shadow-primary-200/50">
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-20 h-20 text-primary-300 mx-auto mb-4" />
                  <p className="text-primary-400 text-sm">Student Image</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-6 top-1/4 bg-white rounded-xl p-4 shadow-xl shadow-neutral-200/50 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">WHO Recognized</p>
                  <p className="text-xs text-neutral-500">All Partner Universities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -right-6 top-1/2 bg-white rounded-xl p-4 shadow-xl shadow-neutral-200/50 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-primary-600">14+</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Universities</p>
                  <p className="text-xs text-neutral-500">Partner Network</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -right-2 bottom-10 bg-white rounded-xl p-4 shadow-xl shadow-neutral-200/50 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-accent-600">95%</span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Visa Success</p>
                  <p className="text-xs text-neutral-500">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
