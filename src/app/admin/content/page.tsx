import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"

export default async function ContentPage() {
  const contents = await prisma.pageContent.findMany({
    orderBy: { key: 'asc' }
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Site Content Management</h2>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 font-medium text-neutral-600">Section Key</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Title</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Last Updated</th>
              <th className="px-6 py-4 font-medium text-neutral-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {contents.map((content) => (
              <tr key={content.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 font-medium text-neutral-900 font-mono bg-neutral-100 rounded-md inline-block m-2">{content.key}</td>
                <td className="px-6 py-4 text-neutral-500">{content.title || "-"}</td>
                <td className="px-6 py-4 text-neutral-500">{content.updatedAt.toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  <Link href={`/admin/content/${content.id}`}>
                    <Button size="sm" variant="outline">
                      <Pencil className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
