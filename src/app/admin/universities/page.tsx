import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { revalidatePath } from "next/cache"

export default async function UniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function deleteUniversity(formData: FormData) {
    "use server"
    const id = formData.get("id") as string
    await prisma.university.delete({ where: { id } })
    revalidatePath("/admin/universities")
    revalidatePath("/")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Universities</h2>
        <Link href="/admin/universities/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add University
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 font-medium text-neutral-600">Name</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Location</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Ranking</th>
              <th className="px-6 py-4 font-medium text-neutral-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {universities.map((uni) => (
              <tr key={uni.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 font-medium text-neutral-900">{uni.name}</td>
                <td className="px-6 py-4 text-neutral-500">{uni.location}</td>
                <td className="px-6 py-4 text-neutral-500">{uni.ranking || "-"}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Pencil className="w-4 h-4 text-neutral-500" />
                    </Button>
                    <form action={deleteUniversity}>
                      <input type="hidden" name="id" value={uni.id} />
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {universities.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                  No universities found. Click "Add University" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
