import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { revalidatePath } from "next/cache"

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function toggleStatus(formData: FormData) {
    "use server"
    const id = formData.get("id") as string
    const currentStatus = formData.get("status") as string
    
    const newStatus = currentStatus === "PENDING" ? "CONTACTED" : 
                      currentStatus === "CONTACTED" ? "CLOSED" : "PENDING"

    await prisma.lead.update({
      where: { id },
      data: { status: newStatus }
    })
    
    revalidatePath("/admin/leads")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Lead Management</h2>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 font-medium text-neutral-600">Date</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Name</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Contact</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Message</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Status</th>
              <th className="px-6 py-4 font-medium text-neutral-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 text-neutral-500 whitespace-nowrap">
                  {lead.createdAt.toLocaleDateString()}
                </td>
                <td className="px-6 py-4 font-medium text-neutral-900">
                  {lead.name}
                </td>
                <td className="px-6 py-4 text-neutral-500">
                  <div className="flex flex-col">
                    <span>{lead.email}</span>
                    <span className="text-xs text-neutral-400">{lead.phone}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-neutral-500 max-w-xs truncate">
                  {lead.message || "-"}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={
                    lead.status === "PENDING" ? "warning" : 
                    lead.status === "CONTACTED" ? "secondary" : "success"
                  }>
                    {lead.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <form action={toggleStatus}>
                    <input type="hidden" name="id" value={lead.id} />
                    <input type="hidden" name="status" value={lead.status} />
                    <Button size="sm" variant="outline">
                      Next Status
                    </Button>
                  </form>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-neutral-500">
                  No leads received yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
