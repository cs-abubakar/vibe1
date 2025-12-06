"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export function UniversitiesCarousel({ universities }: { universities: any[] }) {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })
  
  // Fallback if empty
  if (!universities || universities.length === 0) return null;

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
            {universities.length}+ Top Universities in China
          </motion.h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative overflow-hidden py-4">
        <div className="flex animate-[scroll_40s_linear_infinite] hover:pause">
          {[...universities, ...universities].map((uni, index) => (
            <div
              key={`${uni.id}-${index}`}
              className="flex-shrink-0 px-4"
            >
              <Link href={`/programs/mbbs#${uni.id}`} className="block h-full">
                <div className="bg-white rounded-2xl w-72 h-full shadow-sm hover:shadow-xl transition-all duration-300 group border border-neutral-100 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
                    <img 
                      src={uni.image || "https://placehold.co/600x400?text=University"} 
                      alt={uni.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    {uni.ranking && (
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-white text-xs font-medium truncate">
                          {uni.ranking}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-neutral-900 text-base leading-tight mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {uni.name}
                    </h3>
                    <div className="flex items-center text-neutral-500 text-xs mb-3">
                      <span className="truncate">{uni.location}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {uni.pmdc && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
                          PMDC
                        </span>
                      )}
                      {uni.who && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-100">
                          WHO
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
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
