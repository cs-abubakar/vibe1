"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, ArrowRight, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FinalCTA } from "@/components/sections"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to MBBS Admission in China 2025",
    excerpt: "Everything you need to know about applying to Chinese medical universities, from requirements to deadlines.",
    category: "Admission Guide",
    readTime: "8 min read",
    date: "Dec 1, 2025",
    slug: "complete-guide-mbbs-admission-china-2025",
    featured: true,
  },
  {
    id: 2,
    title: "HSK Requirements: What Level Do You Need?",
    excerpt: "Understanding HSK requirements for different programs and how to prepare effectively for the exam.",
    category: "Language",
    readTime: "5 min read",
    date: "Nov 28, 2025",
    slug: "hsk-requirements-what-level-do-you-need",
    featured: false,
  },
  {
    id: 3,
    title: "Student Life in China: What to Expect",
    excerpt: "A comprehensive look at campus life, accommodation, food, and cultural experiences for international students.",
    category: "Student Life",
    readTime: "6 min read",
    date: "Nov 25, 2025",
    slug: "student-life-in-china-what-to-expect",
    featured: false,
  },
  {
    id: 4,
    title: "PMDC Recognition: Which Universities Are Approved?",
    excerpt: "A detailed list of Chinese medical universities recognized by Pakistan Medical & Dental Council.",
    category: "Recognition",
    readTime: "4 min read",
    date: "Nov 20, 2025",
    slug: "pmdc-recognition-which-universities-approved",
    featured: false,
  },
  {
    id: 5,
    title: "Scholarship Opportunities for Medical Students in China",
    excerpt: "Explore various scholarship options available for international students pursuing MBBS in China.",
    category: "Scholarships",
    readTime: "7 min read",
    date: "Nov 15, 2025",
    slug: "scholarship-opportunities-medical-students-china",
    featured: false,
  },
  {
    id: 6,
    title: "Cost of Living in China: A Complete Breakdown",
    excerpt: "Detailed analysis of living expenses in different Chinese cities for international students.",
    category: "Finance",
    readTime: "6 min read",
    date: "Nov 10, 2025",
    slug: "cost-of-living-china-complete-breakdown",
    featured: false,
  },
]

const categories = ["All", "Admission Guide", "Language", "Student Life", "Recognition", "Scholarships", "Finance"]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Badge variant="default" className="mb-6">
            <BookOpen className="w-4 h-4 mr-1" />
            Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Blog & <span className="text-primary-600">Resources</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8">
            Expert articles, guides, and insights to help you navigate your education journey in China.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function BlogSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.1 })
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <Card hover className="p-0 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-primary-300" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="accent" className="w-fit mb-4">Featured</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-neutral-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span>{featuredPost.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-primary-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularPosts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <Card hover className="h-full overflow-hidden p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary-300" />
                  </div>
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
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{post.excerpt}</p>
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
      </div>
    </section>
  )
}

export default function BlogPage() {
  return (
    <>
      <HeroSection />
      <BlogSection />
      <FinalCTA />
    </>
  )
}
