import { CountryPageTemplate } from "@/components/templates/CountryPage"
import { TESTIMONIALS } from "@/lib/constants"

export const metadata = {
  title: "MBBS in China for Yemeni Students | GEC",
  description: "Complete guide for Yemeni students to study MBBS in China. WHO recognized universities, scholarship opportunities, and Arabic support from GEC.",
}

export default function YemenPage() {
  return (
    <CountryPageTemplate
      name="Yemen"
      flag="🇾🇪"
      council="SYHMC"
      councilFull="Supreme Council for Health"
      greeting="Marhaba! GEC welcomes Yemeni students with Arabic-speaking support and comprehensive guidance for studying medicine in China."
      whyStudy={[
        "WHO recognized degrees",
        "Affordable tuition fees",
        "Scholarship opportunities",
        "Safe learning environment",
      ]}
      costComparison={{
        local: "$80,000+",
        china: "$30,000-40,000",
        savings: "Up to 50%",
      }}
      visaInfo={[
        "Apply through Chinese Embassy in Yemen or nearest diplomatic mission",
        "Required: JW202 form, admission letter, passport, photos",
        "GEC assists with document attestation",
        "Complete visa application support provided",
        "Scholarship application assistance available",
      ]}
      testimonials={TESTIMONIALS}
      features={[
        "Arabic support available",
        "Scholarship assistance",
        "Cultural guidance",
        "Community connections",
      ]}
    />
  )
}
