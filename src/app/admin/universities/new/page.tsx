import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function NewUniversityPage() {
  async function createUniversity(formData: FormData) {
    "use server"
    
    const name = formData.get("name") as string
    const location = formData.get("location") as string
    const tuitionRange = formData.get("tuitionRange") as string
    const ranking = formData.get("ranking") as string
    const image = formData.get("image") as string
    const description = formData.get("description") as string
    const pmdc = formData.get("pmdc") === "on"
    const who = formData.get("who") === "on"

    await prisma.university.create({
      data: {
        name,
        location,
        tuitionRange,
        ranking,
        image,
        description,
        pmdc,
        who
      }
    })

    revalidatePath("/admin/universities")
    revalidatePath("/")
    redirect("/admin/universities")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/universities">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <h2 className="text-2xl font-bold text-neutral-900">Add University</h2>
      </div>

      <form action={createUniversity} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">University Name</label>
            <Input name="name" required placeholder="e.g. Yangtze University" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Location</label>
            <Input name="location" required placeholder="e.g. Jingzhou, Hubei" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Tuition Range</label>
            <Input name="tuitionRange" required placeholder="e.g. $3,000 - $4,000/year" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Ranking</label>
            <Input name="ranking" placeholder="e.g. Top 100" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Image URL</label>
          <Input name="image" required placeholder="https://..." />
          <p className="text-xs text-neutral-500">Enter a direct image URL (e.g. from Unsplash)</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Description</label>
          <Textarea name="description" required placeholder="Brief description of the university..." rows={4} />
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="pmdc" className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
            <span className="text-sm font-medium text-neutral-700">PMDC Recognized</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="who" className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
            <span className="text-sm font-medium text-neutral-700">WHO Recognized</span>
          </label>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <Button type="submit">Create University</Button>
        </div>
      </form>
    </div>
  )
}
