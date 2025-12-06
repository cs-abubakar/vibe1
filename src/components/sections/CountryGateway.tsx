"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { COUNTRIES } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function CountryGateway() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50">
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
            Country Guides
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            Information for Your Country
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            Get country-specific guidance on recognition, visa requirements, and more.
          </motion.p>
        </motion.div>

        {/* Country Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {COUNTRIES.map((country) => (
            <motion.div key={country.id} variants={fadeInUp}>
              <Link
                href={`/countries/${country.id}`}
                className="block group"
              >
                <div className="bg-neutral-50 hover:bg-white rounded-2xl p-6 border-2 border-transparent hover:border-primary-100 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 text-center">
                  <div className="text-5xl mb-4">{country.flag}</div>
                  <h3 className="font-bold text-neutral-900 mb-2">
                    {country.name}
                  </h3>
                  <ul className="text-sm text-neutral-500 space-y-1 mb-4">
                    {country.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                    View Guide
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
