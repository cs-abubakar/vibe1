"use client"

import { motion } from "framer-motion"
import { Stethoscope, MapPin, Shield, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const features = [
  {
    icon: Stethoscope,
    title: "Doctor-Led Expertise",
    description:
      "Founded and run by medical professionals who've walked the same path you're about to take. We understand your journey.",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "On-Ground in China",
    description:
      "We're based in Jingzhou, China - not remote agents. Direct university access and real-time support when you need it.",
    color: "secondary",
  },
  {
    icon: Shield,
    title: "End-to-End Support",
    description:
      "From application to graduation - visa help, arrival support, and ongoing guidance throughout your entire journey.",
    color: "primary",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description:
      "No hidden fees, no false promises. Clear information about costs, requirements, and recognition status.",
    color: "secondary",
  },
]

export function WhyChooseUs() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
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
            Why Choose GEC
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            What Makes Us Different
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            Experience the difference of working with a consultancy that truly understands
            international medical education in China.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    feature.color === "primary"
                      ? "bg-primary-100"
                      : "bg-secondary-100"
                  }`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${
                      feature.color === "primary"
                        ? "text-primary-600"
                        : "text-secondary-600"
                    }`}
                  />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
