import { CountryPageTemplate } from "@/components/templates/CountryPage"
import { TESTIMONIALS } from "@/lib/constants"

export const metadata = {
  title: "MBBS in China for Saudi Arabian Students | GEC",
  description: "Complete guide for Saudi Arabian students to study MBBS in China. WHO recognized universities, premium consultation, and family guidance from GEC.",
}

export default function SaudiArabiaPage() {
  return (
    <CountryPageTemplate
      name="Saudi Arabia"
      flag="🇸🇦"
      council="SCFHS"
      councilFull="Saudi Commission for Health Specialties"
      greeting="Ahlan wa Sahlan! GEC provides premium consultation services for Saudi Arabian students seeking world-class medical education in China."
      whyStudy={[
        "WHO recognized degrees",
        "High-quality medical education",
        "Modern facilities",
        "International exposure",
      ]}
      costComparison={{
        local: "SAR 400,000+",
        china: "SAR 150,000-200,000",
        savings: "Up to 60%",
      }}
      visaInfo={[
        "Apply through Chinese Embassy in Riyadh or Consulate in Jeddah",
        "Required: JW202 form, admission letter, passport, photos",
        "Express processing available",
        "GEC provides VIP visa assistance",
        "Family guidance and support included",
      ]}
      testimonials={TESTIMONIALS}
      features={[
        "Premium consultation",
        "Family guidance",
        "Arabic support",
        "VIP services",
      ]}
    />
  )
}
