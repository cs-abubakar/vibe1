"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, Quote, Camera, Trophy, Users, MessageCircle, Play, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { COMPANY_INFO, TESTIMONIALS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const galleryItems = [
  { title: "Campus Life", category: "Campus" },
  { title: "Graduation Ceremony", category: "Graduation" },
  { title: "Lab Sessions", category: "Studies" },
  { title: "Cultural Events", category: "Events" },
  { title: "Student Activities", category: "Activities" },
  { title: "City Exploration", category: "Lifestyle" },
  { title: "Hospital Training", category: "Clinical" },
  { title: "Student Community", category: "Community" },
]

const achievements = [
  { icon: Users, number: "500+", label: "Students Guided" },
  { icon: Trophy, number: "14+", label: "Partner Universities" },
  { icon: Star, number: "95%", label: "Visa Success Rate" },
  { icon: Heart, number: "100%", label: "Student Satisfaction" },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-6">
            <Camera className="w-4 h-4 mr-1" />
            Student Life
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Success Stories & <span className="text-secondary-600">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            See what life is like for our students in China and hear their inspiring stories.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievements.map((item) => (
            <motion.div key={item.label} variants={fadeInUp} className="text-center">
              <item.icon className="w-10 h-10 text-primary-200 mx-auto mb-3" />
              <p className="text-4xl font-bold text-white mb-1">{item.number}</p>
              <p className="text-primary-200">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Student Success Stories
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with GEC&apos;s guidance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card hover className="h-full p-6">
                <Quote className="w-10 h-10 text-primary-200 mb-4" />
                <p className="text-neutral-600 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{testimonial.name} {testimonial.flag}</p>
                    <p className="text-sm text-neutral-500">{testimonial.program} at {testimonial.university}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Photo Gallery
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600">
            A glimpse into student life at Chinese universities
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-12 h-12 text-primary-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                  <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AdmissionLettersSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Admission Letters & JW202
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-neutral-600">
            Celebrating our students&apos; successful admissions
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="aspect-[3/4] bg-gradient-to-br from-secondary-100 to-primary-100 rounded-2xl flex items-center justify-center"
            >
              <div className="text-center">
                <Trophy className="w-12 h-12 text-secondary-400 mx-auto mb-2" />
                <p className="text-sm text-secondary-600 font-medium">Admission Letter {i}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-8">
          <p className="text-neutral-600 mb-4">Want to be our next success story?</p>
          <Link href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5" />
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function StudentLifePage() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <TestimonialsSection />
      <GallerySection />
      <AdmissionLettersSection />
      <FinalCTA />
    </>
  )
}
