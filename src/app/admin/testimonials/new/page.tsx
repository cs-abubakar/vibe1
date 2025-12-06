import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function NewTestimonialPage() {
  async function createTestimonial(formData: FormData) {
    "use server"
    
    const name = formData.get("name") as string
    const country = formData.get("country") as string
    const flag = formData.get("flag") as string
    const program = formData.get("program") as string
    const university = formData.get("university") as string
    const quote = formData.get("quote") as string
    const image = formData.get("image") as string
    const rating = parseInt(formData.get("rating") as string)

    await prisma.testimonial.create({
      data: {
        name,
        country,
        flag,
        program,
        university,
        quote,
        image,
        rating
      }
    })

    revalidatePath("/admin/testimonials")
    revalidatePath("/")
    redirect("/admin/testimonials")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/testimonials">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <h2 className="text-2xl font-bold text-neutral-900">Add Testimonial</h2>
      </div>

      <form action={createTestimonial} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Student Name</label>
            <Input name="name" required placeholder="e.g. Ahmed Khan" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">University</label>
            <Input name="university" required placeholder="e.g. Yangtze University" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Country</label>
            <Input name="country" required placeholder="e.g. Pakistan" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Flag Emoji</label>
            <Input name="flag" required placeholder="e.g. 🇵🇰" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Program</label>
            <Input name="program" required placeholder="e.g. MBBS" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Rating (1-5)</label>
            <Input name="rating" type="number" min="1" max="5" required defaultValue="5" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Student Image URL</label>
          <Input name="image" placeholder="https://..." />
          <p className="text-xs text-neutral-500">Optional: URL to student photo</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Testimonial Quote</label>
          <Textarea name="quote" required placeholder="What did they say?" rows={4} />
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <Button type="submit">Create Testimonial</Button>
        </div>
      </form>
    </div>
  )
}
