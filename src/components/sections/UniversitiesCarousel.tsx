"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { UNIVERSITIES } from "@/lib/constants"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export function UniversitiesCarousel() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-20 bg-neutral-100">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
          >
            Our Partner Universities
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-neutral-900 mt-2"
          >
            14+ Top Universities in China
          </motion.h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] hover:pause">
          {[...UNIVERSITIES, ...UNIVERSITIES].map((uni, index) => (
            <div
              key={`${uni.id}-${index}`}
              className="flex-shrink-0 px-4"
            >
              <div className="bg-white rounded-xl p-6 w-64 h-32 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group">
                <p className="font-semibold text-neutral-800 text-center text-sm group-hover:text-primary-600 transition-colors">
                  {uni.name}
                </p>
                <p className="text-xs text-neutral-500 mt-1">{uni.location}</p>
                {uni.pmdc && (
                  <span className="mt-2 text-xs bg-secondary-100 text-secondary-700 px-2 py-0.5 rounded-full">
                    PMDC Recognized
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <Link href="/programs/mbbs#universities">
            <Button variant="outline">
              View All Universities
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-\\[scroll_30s_linear_infinite\\] {
          animation: scroll 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
