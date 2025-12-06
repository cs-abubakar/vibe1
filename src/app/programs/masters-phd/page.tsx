import Link from "next/link";

export default function MastersPhDPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-6">Masters & PhD Programs in China</h1>
      <p className="text-lg text-neutral-600 mb-8">
        Unlock your potential with advanced research and specialization opportunities in China.
        We assist students in securing admissions to top-tier universities for Master's and Doctoral degrees
        across various fields of study.
      </p>
      <div className="prose lg:prose-xl max-w-none">
        <h2>Why Pursue Postgraduate Studies in China?</h2>
        <ul>
          <li>World-class research facilities and faculty.</li>
          <li>Generous scholarship opportunities (including CSC).</li>
          <li>Diverse range of programs in English.</li>
          <li>Globally recognized degrees.</li>
        </ul>
        <h3>Popular Fields of Study</h3>
        <ul>
          <li>Engineering (Civil, Electrical, Software, etc.)</li>
          <li>Business Administration (MBA, Finance)</li>
          <li>Science (Biotechnology, Material Science)</li>
          <li>Humanities & Social Sciences</li>
        </ul>
        <p>
          Our expert consultants provide end-to-end support, from application to visa processing,
          ensuring a smooth transition to your academic journey in China.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/contact" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Explore Postgraduate Options
        </Link>
      </div>
    </div>
  );
}
