import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { revalidatePath } from "next/cache"
import { redirect, notFound } from "next/navigation"

export default async function EditContentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const content = await prisma.pageContent.findUnique({
    where: { id }
  })

  if (!content) {
    notFound();
  }

  async function updateContent(formData: FormData) {
    "use server"
    
    const title = formData.get("title") as string
    const subtitle = formData.get("subtitle") as string
    const image = formData.get("image") as string
    const textContent = formData.get("content") as string

    await prisma.pageContent.update({
      where: { id },
      data: {
        title,
        subtitle,
        image,
        content: textContent
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/content")
    redirect("/admin/content")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/content">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <h2 className="text-2xl font-bold text-neutral-900">Edit: {content.key}</h2>
      </div>

      <form action={updateContent} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Title (Headline)</label>
          <Input name="title" defaultValue={content.title || ""} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Subtitle / Description</label>
          <Textarea name="subtitle" defaultValue={content.subtitle || ""} rows={3} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Image URL</label>
          <Input name="image" defaultValue={content.image || ""} />
          {content.image && (
             <div className="mt-2 h-32 w-48 relative overflow-hidden rounded-md border border-neutral-200">
                <img src={content.image} alt="Preview" className="w-full h-full object-cover" />
             </div>
          )}
        </div>
        
        <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Extra Content (HTML - Optional)</label>
            <Textarea name="content" defaultValue={content.content || ""} rows={5} className="font-mono text-sm" />
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <Button type="submit">Update Content</Button>
        </div>
      </form>
    </div>
  )
}
