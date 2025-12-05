import { CountryPageTemplate } from "@/components/templates/CountryPage"
import { TESTIMONIALS } from "@/lib/constants"

export const metadata = {
  title: "MBBS in China for Pakistani Students | GEC",
  description: "Complete guide for Pakistani students to study MBBS in China. PMDC recognized universities, affordable fees, and expert guidance from GEC.",
}

export default function PakistanPage() {
  return (
    <CountryPageTemplate
      name="Pakistan"
      flag="🇵🇰"
      council="PMDC"
      councilFull="Pakistan Medical & Dental Council"
      greeting="Assalam-o-Alaikum! GEC welcomes Pakistani students with dedicated support, Urdu-speaking team members, and complete guidance for PMDC-recognized universities."
      whyStudy={[
        "PMDC recognized degrees",
        "70% lower cost than private medical colleges",
        "World-class education",
        "English-medium programs",
      ]}
      costComparison={{
        local: "PKR 10-15 Million",
        china: "PKR 4-6 Million",
        savings: "Up to 60%",
      }}
      visaInfo={[
        "Apply through Chinese Embassy in Islamabad or Consulates in Karachi/Lahore",
        "Required: JW202 form, admission letter, passport, photos",
        "Processing time: 4-7 working days",
        "GEC provides complete visa documentation support",
        "Interview preparation and embassy guidance included",
      ]}
      testimonials={TESTIMONIALS}
      features={[
        "Urdu-speaking support",
        "PMDC guidance",
        "Pakistan Embassy assistance",
        "Student community network",
      ]}
    />
  )
}
