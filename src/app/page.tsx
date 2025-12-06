import {
  Hero,
  StatsBar,
  AboutPreview,
  MBBSSpotlight,
  WhyChooseUs,
  ProgramsOverview,
  CountryGateway,
  Testimonials,
  UniversitiesCarousel,
  BlogPreview,
  FinalCTA,
} from "@/components/sections"
import { prisma } from "@/lib/db"

export default async function HomePage() {
  const heroContent = await prisma.pageContent.findUnique({ where: { key: 'home_hero' } })
  const aboutContent = await prisma.pageContent.findUnique({ where: { key: 'about_preview' } })
  
  const universities = await prisma.university.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' }
  })
  
  const testimonials = await prisma.testimonial.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  })

  const blogPosts = await prisma.blogPost.findMany({
    take: 3,
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  })
  
  return (
    <>
      <Hero 
        title={heroContent?.title || undefined}
        subtitle={heroContent?.subtitle || undefined}
        image={heroContent?.image || undefined}
      />
      <StatsBar />
      <AboutPreview 
        image={aboutContent?.image || undefined}
      />
      <MBBSSpotlight />
      <WhyChooseUs />
      <ProgramsOverview />
      <CountryGateway />
      <Testimonials testimonials={testimonials} />
      <UniversitiesCarousel universities={universities} />
      <BlogPreview posts={blogPosts} />
      <FinalCTA />
    </>
  )
}
