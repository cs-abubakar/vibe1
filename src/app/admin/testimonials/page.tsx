import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { revalidatePath } from "next/cache"

export default async function TestimonialsPage() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function deleteTestimonial(formData: FormData) {
    "use server"
    const id = formData.get("id") as string
    await prisma.testimonial.delete({ where: { id } })
    revalidatePath("/admin/testimonials")
    revalidatePath("/")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Testimonials</h2>
        <Link href="/admin/testimonials/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Testimonial
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 font-medium text-neutral-600">Student Name</th>
              <th className="px-6 py-4 font-medium text-neutral-600">University</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Country</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Rating</th>
              <th className="px-6 py-4 font-medium text-neutral-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {testimonials.map((t) => (
              <tr key={t.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 font-medium text-neutral-900">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{t.name.charAt(0)}</span>
                      )}
                    </div>
                    {t.name}
                  </div>
                </td>
                <td className="px-6 py-4 text-neutral-500">{t.university}</td>
                <td className="px-6 py-4 text-neutral-500">{t.flag} {t.country}</td>
                <td className="px-6 py-4 text-neutral-500">{t.rating}/5</td>
                <td className="px-6 py-4 text-right">
                  <form action={deleteTestimonial}>
                    <input type="hidden" name="id" value={t.id} />
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </form>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-neutral-500">
                  No testimonials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
