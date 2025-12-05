"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to MBBS Admission in China 2025",
    excerpt: "Everything you need to know about applying to Chinese medical universities, from requirements to deadlines.",
    category: "Admission Guide",
    readTime: "8 min read",
    image: "/images/blog/admission-guide.jpg",
    slug: "complete-guide-mbbs-admission-china-2025",
  },
  {
    id: 2,
    title: "HSK Requirements: What Level Do You Need?",
    excerpt: "Understanding HSK requirements for different programs and how to prepare effectively for the exam.",
    category: "Language",
    readTime: "5 min read",
    image: "/images/blog/hsk-requirements.jpg",
    slug: "hsk-requirements-what-level-do-you-need",
  },
  {
    id: 3,
    title: "Student Life in China: What to Expect",
    excerpt: "A comprehensive look at campus life, accommodation, food, and cultural experiences for international students.",
    category: "Student Life",
    readTime: "6 min read",
    image: "/images/blog/student-life.jpg",
    slug: "student-life-in-china-what-to-expect",
  },
]

export function BlogPreview() {
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
            Resources & Blog
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-3 mb-4"
          >
            Latest Insights & Guides
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-neutral-600 text-lg"
          >
            Stay informed with our expert articles on studying in China.
          </motion.p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card hover className="h-full overflow-hidden p-0">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary-300 text-sm">Blog Image</span>
                    </div>
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="default">{post.category}</Badge>
                      <span className="flex items-center text-xs text-neutral-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-sm font-semibold text-primary-600">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button variant="outline">
              Visit Resource Center
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
