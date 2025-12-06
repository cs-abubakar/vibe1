import Link from "next/link"
import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react"
import { revalidatePath } from "next/cache"

export default async function BlogsPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function deletePost(formData: FormData) {
    "use server"
    const id = formData.get("id") as string
    await prisma.blogPost.delete({ where: { id } })
    revalidatePath("/admin/blogs")
    revalidatePath("/")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Blog Posts</h2>
        <Link href="/admin/blogs/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 border-b border-neutral-200">
            <tr>
              <th className="px-6 py-4 font-medium text-neutral-600">Title</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Slug</th>
              <th className="px-6 py-4 font-medium text-neutral-600">Status</th>
              <th className="px-6 py-4 font-medium text-neutral-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4 font-medium text-neutral-900">{post.title}</td>
                <td className="px-6 py-4 text-neutral-500">{post.slug}</td>
                <td className="px-6 py-4">
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.published ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                     {post.published ? 'Published' : 'Draft'}
                   </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/blog/${post.slug}`} target="_blank">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                           <ExternalLink className="w-4 h-4 text-neutral-400" />
                        </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Pencil className="w-4 h-4 text-neutral-500" />
                    </Button>
                    <form action={deletePost}>
                      <input type="hidden" name="id" value={post.id} />
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 hover:border-red-200">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-neutral-500">
                  No blog posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
