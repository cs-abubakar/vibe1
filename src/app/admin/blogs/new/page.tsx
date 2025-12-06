import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function NewBlogPage() {
  async function createPost(formData: FormData) {
    "use server"
    
    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const image = formData.get("image") as string
    const published = formData.get("published") === "on"

    await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        published
      }
    })

    revalidatePath("/admin/blogs")
    revalidatePath("/")
    redirect("/admin/blogs")
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blogs">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
        <h2 className="text-2xl font-bold text-neutral-900">Create Blog Post</h2>
      </div>

      <form action={createPost} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Title</label>
          <Input name="title" required placeholder="e.g. 5 Reasons to Study MBBS in China" />
        </div>

        <div className="space-y-2">
           <label className="text-sm font-medium text-neutral-700">Slug (URL)</label>
           <Input name="slug" required placeholder="e.g. 5-reasons-study-mbbs-china" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Cover Image URL</label>
          <Input name="image" required placeholder="https://..." />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Excerpt</label>
          <Textarea name="excerpt" required placeholder="Short summary for preview cards..." rows={3} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Content (HTML)</label>
          <Textarea name="content" required placeholder="<p>Write your article content here...</p>" rows={12} className="font-mono text-sm" />
          <p className="text-xs text-neutral-500">Basic HTML is supported.</p>
        </div>

        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="published" defaultChecked className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
            <span className="text-sm font-medium text-neutral-700">Publish Immediately</span>
          </label>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end">
          <Button type="submit">Create Post</Button>
        </div>
      </form>
    </div>
  )
}
