"use client"

import { motion } from "framer-motion"
import { STATS } from "@/lib/constants"
import { useCountUp } from "@/hooks/useCountUp"
import { useInView } from "@/hooks/useInView"

function StatItem({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const { count } = useCountUp({ end: stat.value, duration: 2500, trigger: inView })

  return (
    <div className="text-center group">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 tabular-nums tracking-tight">
        {count}
        <span className="text-emerald-400">{stat.suffix}</span>
      </div>
      <p className="text-slate-300 text-sm sm:text-base font-medium uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsBar() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <StatItem stat={stat} inView={isInView} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
