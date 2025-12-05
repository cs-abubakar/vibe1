import type { Metadata } from "next"
import "./globals.css"
import { Header, Footer, WhatsAppButton } from "@/components/layout"
import { COMPANY_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.shortName} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    "China-based education consultancy specializing in MBBS admissions. Expert guidance for students from Pakistan, Yemen, Saudi Arabia & Africa. 14+ partner universities, 500+ students guided.",
  keywords: [
    "MBBS in China",
    "Study medicine in China",
    "China medical university",
    "PMDC recognized universities China",
    "Medical education China",
    "Study abroad China",
    "GEC education",
    "Global Educational Consultants",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gecpathways.com",
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description:
      "China-based education consultancy specializing in MBBS admissions. Expert guidance for students from Pakistan, Yemen, Saudi Arabia & Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description:
      "China-based education consultancy specializing in MBBS admissions.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Inter and Plus Jakarta Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Analytics placeholders */}
        {/* Google Analytics */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        {/* Meta Pixel */}
        {/* Add your Meta Pixel code here */}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
