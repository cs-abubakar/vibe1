import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // 1. Create Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gecpathways.com' },
    update: {},
    create: {
      email: 'admin@gecpathways.com',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // 2. Seed Universities
  const universities = [
    {
      name: "Yangtze University",
      location: "Hubei, China",
      tuitionRange: "$3,500 - $4,500/year",
      ranking: "Top 300 in China",
      pmdc: true,
      who: true,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
      description: "One of the oldest and most prestigious universities in Hubei Province.",
    },
    {
      name: "Binzhou Medical University",
      location: "Shandong, China",
      tuitionRange: "$4,000 - $5,000/year",
      ranking: "Top Medical University",
      pmdc: true,
      who: true,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      description: "Renowned for its medical programs and modern facilities.",
    },
    {
      name: "China Three Gorges University",
      location: "Hubei, China",
      tuitionRange: "$3,000 - $4,000/year",
      ranking: "Top 250 in China",
      pmdc: true,
      who: true,
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
      description: "Located near the famous Three Gorges Dam with excellent facilities.",
    },
  ]

  for (const uni of universities) {
    await prisma.university.upsert({
      where: { id: uni.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
         id: uni.name.toLowerCase().replace(/\s+/g, '-'), // predictable ID for seeding
         ...uni 
      }
    })
  }

  // 3. Seed Programs (Dynamic Pages)
  const programs = [
    {
      title: "Masters & PhD Programs",
      slug: "masters-phd",
      subtitle: "Advanced Research & Specialization",
      description: "Pursue your postgraduate studies in China's top research institutions.",
      content: `
        <h2>Why Pursue Postgraduate Studies in China?</h2>
        <p>China offers world-class research facilities and generous scholarships for Master's and PhD students. Whether you are interested in Engineering, Medicine, Business, or Technology, Chinese universities provide a robust academic environment.</p>
        
        <h3>Popular Fields</h3>
        <ul>
          <li><strong>Clinical Medicine (MD/MS):</strong> Specializations in Surgery, Internal Medicine, Pediatrics, etc.</li>
          <li><strong>Engineering:</strong> Civil, Mechanical, Electrical, and Software Engineering.</li>
          <li><strong>Business:</strong> MBA and International Trade.</li>
        </ul>

        <h3>Scholarship Opportunities</h3>
        <p>Most postgraduate students in China study on full scholarships, including the Chinese Government Scholarship (CSC), University Scholarships, and Silk Road Scholarships. These often cover tuition, accommodation, and provide a monthly stipend.</p>
      `,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Chinese Language Programs",
      slug: "chinese-language",
      subtitle: "Bridge to Opportunities",
      description: "Learn the world's most widely spoken language in its native land.",
      content: `
        <h2>Immerse Yourself in Chinese Culture</h2>
        <p>Our Chinese Language programs (1 semester to 1 year) are designed for students who want to master Mandarin for business, further studies, or personal growth.</p>
        
        <h3>Program Highlights</h3>
        <ul>
          <li>Comprehensive HSK preparation.</li>
          <li>Cultural immersion activities (Calligraphy, Tai Chi, etc.).</li>
          <li>Pathway to degree programs in China.</li>
        </ul>
      `,
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1000&auto=format&fit=crop"
    }
  ]

  for (const prog of programs) {
    await prisma.program.upsert({
      where: { slug: prog.slug },
      update: {},
      create: prog
    })
  }

  // 4. Seed Page Content
  await prisma.pageContent.upsert({
    where: { key: 'home_hero' },
    update: {},
    create: {
      key: 'home_hero',
      title: 'Your Medical Career Begins Here',
      subtitle: 'China-based education consultants helping students from Pakistan, Yemen, Saudi Arabia & Africa achieve their MBBS dreams at world-class universities.',
      image: 'https://placehold.co/800x600/1e293b/ffffff?text=Future+Doctor+in+China'
    }
  })

  await prisma.pageContent.upsert({
    where: { key: 'about_preview' },
    update: {},
    create: {
      key: 'about_preview',
      title: 'Who We Are',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop' // Team/Office image
    }
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })