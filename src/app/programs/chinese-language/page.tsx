import Link from "next/link";

export default function ChineseLanguagePage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl font-bold mb-6">Chinese Language Programs</h1>
      <p className="text-lg text-neutral-600 mb-8">
        Immerse yourself in Chinese culture and master Mandarin with our language programs.
        We offer various courses from beginner to advanced levels, designed to enhance your communication skills
        for academic, professional, or personal growth.
      </p>
      <div className="prose lg:prose-xl max-w-none">
        <h2>Program Highlights</h2>
        <ul>
          <li>Comprehensive HSK preparation.</li>
          <li>Experienced native-speaking teachers.</li>
          <li>Cultural immersion activities.</li>
          <li>Flexible course durations (from 1 semester to 1 year).</li>
        </ul>
        <p>
          Learning Chinese opens doors to vast opportunities in China and globally. Start your journey today!
        </p>
      </div>
      <div className="mt-10">
        <Link href="/contact" className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Inquire About Language Programs
        </Link>
      </div>
    </div>
  );
}
