"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Globe,
  BookOpen,
  Clock,
  DollarSign,
  Building,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations"

const benefits = [
  { icon: Globe, text: "WHO & PMDC Recognized" },
  { icon: CheckCircle, text: "ECFMG Eligible" },
  { icon: BookOpen, text: "English-Medium Programs" },
  { icon: Clock, text: "6-Year Program" },
  { icon: DollarSign, text: "From $3,000/Year" },
  { icon: Building, text: "14+ Universities" },
]

export function MBBSSpotlight() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeInUp}>
                <Badge variant="accent" className="mb-4">
                  <GraduationCap className="w-3.5 h-3.5 mr-1" />
                  Most Popular Program
                </Badge>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                MBBS in China
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-primary-100 mb-8 max-w-lg"
              >
                World-class medical education at affordable costs. Join thousands of
                international students at top Chinese universities.
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.text}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-white"
                  >
                    <benefit.icon className="w-5 h-5 text-secondary-400" />
                    <span className="text-sm">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link href="/programs/mbbs">
                  <Button className="bg-white text-primary-700 hover:bg-primary-50" size="lg">
                    Explore MBBS Program
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  size="lg"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
              </motion.div>
            </motion.div>

            {/* Visual Side - University Logos */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-sm text-primary-200 mb-4 font-medium">Partner Universities Include:</p>
                <div className="grid grid-cols-3 gap-4">
                  {["Yangtze University", "Binzhou Medical", "CTGU", "Nanchang Univ.", "Hubei Medical", "Kunming Univ."].map((uni) => (
                    <div
                      key={uni}
                      className="bg-white/10 rounded-lg p-3 text-center text-white text-xs hover:bg-white/20 transition-colors"
                    >
                      {uni}
                    </div>
                  ))}
                </div>
                <p className="text-center text-primary-200 text-sm mt-4">
                  + 8 more universities
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
