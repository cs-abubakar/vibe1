"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Target, Users, Globe, ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "Making quality medical education accessible to students worldwide",
  },
  {
    icon: Users,
    title: "Team",
    description: "Experienced doctors & education specialists guiding your journey",
  },
  {
    icon: Globe,
    title: "Reach",
    description: "Serving students from 10+ countries across the globe",
  },
]

export function AboutPreview() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 md:py-28 bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={fadeInUp}
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-6"
            >
              Your Trusted Partners in China
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-600 text-lg leading-relaxed mb-8"
            >
              Global Educational Consultants (GEC) is a China-based education consultancy
              founded by medical professionals who understand the journey to becoming a doctor.
              Based in Jingzhou, Hubei, we provide direct access to top Chinese universities
              and end-to-end support for international students.
            </motion.p>

            {/* Value Points */}
            <motion.div
              variants={staggerContainer}
              className="space-y-4 mb-8"
            >
              {values.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link href="/about">
                <Button variant="default">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 shadow-2xl shadow-primary-100/50 relative group">
              <img 
                src="https://placehold.co/800x600/e0f2fe/1e40af?text=GEC+Office+Team" 
                alt="GEC Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl shadow-neutral-200/50"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-600">Est. 2017</p>
                <p className="text-xs text-neutral-500">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
