"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle, Stethoscope, MapPin, CheckCircle, GraduationCap, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { COMPANY_INFO } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30" />

      {/* Animated Background Shapes */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-slate-100/50 to-blue-100/30 rounded-full blur-3xl animate-blob-delay-2" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-amber-50/30 to-orange-50/20 rounded-full blur-3xl animate-blob-delay-4" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <Badge variant="default" className="gap-2 px-4 py-2 text-sm">
                <Stethoscope className="w-4 h-4" />
                Doctor-Led Team
              </Badge>
              <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                <MapPin className="w-4 h-4" />
                Based in China
              </Badge>
              <Badge variant="success" className="gap-2 px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4" />
                500+ Students
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight"
            >
              Your Medical Career{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Begins Here
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 3 150 3 198 8" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              China-based education consultants helping students from Pakistan, Yemen, Saudi Arabia & Africa achieve their MBBS dreams at world-class universities.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12"
            >
              <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto shadow-lg shadow-green-500/20">
                  <MessageCircle className="w-5 h-5" />
                  Start Free Consultation
                </Button>
              </Link>
              <Link href="/programs/mbbs">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Explore MBBS Programs
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5"
            >
              <div className="flex -space-x-3">
                {[
                  "bg-gradient-to-br from-emerald-400 to-emerald-600",
                  "bg-gradient-to-br from-teal-400 to-teal-600",
                  "bg-gradient-to-br from-slate-400 to-slate-600",
                  "bg-gradient-to-br from-amber-400 to-amber-600",
                  "bg-gradient-to-br from-blue-400 to-blue-600",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-full ${gradient} border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-lg">Join 500+ students</p>
                <p className="text-slate-500 text-sm">already enrolled in top universities</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-[2.5rem] blur-2xl" />

              {/* Main Card */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://placehold.co/800x600/1e293b/ffffff?text=Future+Doctor+in+China" 
                  alt="Medical Student in China"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">MBBS in China</p>
                      <p className="text-emerald-400 text-sm font-medium">Admissions Open 2025</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Join thousands of international students in world-class medical universities.
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-8 top-8 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50 animate-float"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">WHO Recognized</p>
                    <p className="text-sm text-slate-500">All Universities</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute -right-6 top-1/3 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50 animate-float-delay"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">14+ Universities</p>
                    <p className="text-sm text-slate-500">Partner Network</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute right-8 -bottom-6 bg-white rounded-2xl p-5 shadow-xl shadow-slate-200/50 animate-float-slow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">95% Success</p>
                    <p className="text-sm text-slate-500">Visa Approval Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
