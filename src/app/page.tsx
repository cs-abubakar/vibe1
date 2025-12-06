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
  const heroContent = await prisma.pageContent.findUnique({
    where: { key: 'home_hero' }
  })

  const universities = await prisma.university.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' }
  })
  
  const testimonials = await prisma.testimonial.findMany({
    take: 5,
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
      <AboutPreview />
      <MBBSSpotlight />
      <WhyChooseUs />
      <ProgramsOverview />
      <CountryGateway />
      <Testimonials testimonials={testimonials} />
      <UniversitiesCarousel universities={universities} />
      <BlogPreview />
      <FinalCTA />
    </>
  )
}
