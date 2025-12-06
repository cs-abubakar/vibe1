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

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <MBBSSpotlight />
      <WhyChooseUs />
      <ProgramsOverview />
      <CountryGateway />
      <Testimonials />
      <UniversitiesCarousel />
      <BlogPreview />
      <FinalCTA />
    </>
  )
}