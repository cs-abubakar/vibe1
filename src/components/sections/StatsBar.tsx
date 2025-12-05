"use client"

import { motion } from "framer-motion"
import { STATS } from "@/lib/constants"
import { useCountUp } from "@/hooks/useCountUp"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

function StatItem({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const { count, start } = useCountUp({ end: stat.value, duration: 2000 })

  if (inView) {
    start()
  }

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}
        {stat.suffix}
      </div>
      <p className="text-primary-100 text-sm md:text-base">{stat.label}</p>
    </motion.div>
  )
}

export function StatsBar() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-12 md:py-16"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
