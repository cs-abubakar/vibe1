"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/forms/LeadForm"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO } from "@/lib/constants"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

export function FinalCTA() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Ready to Start Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
                Medical Journey?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary-100 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Get free expert consultation from our team based in China.
              We&apos;ll help you choose the right university and guide you through
              every step of the process.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mb-10"
            >
              {[
                "Response within 24 hours",
                "No obligation consultation",
                "Expert guidance",
                "Direct University Access"
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                  <span className="text-sm font-medium">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-primary-200 text-sm mb-3">Or chat with us directly:</p>
              <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <LeadForm
              title="Get Free Consultation"
              subtitle="Our team will contact you within 24 hours"
              variant="compact"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
