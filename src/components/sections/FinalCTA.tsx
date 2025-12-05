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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-400 rounded-full blur-3xl" />
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Medical Journey?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary-100 mb-8 max-w-lg"
            >
              Get free expert consultation from our team based in China.
              We&apos;ll help you choose the right university and guide you through
              every step of the process.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-secondary-400 rounded-full" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-secondary-400 rounded-full" />
                <span className="text-sm">No obligation consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 bg-secondary-400 rounded-full" />
                <span className="text-sm">Expert guidance</span>
              </div>
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
