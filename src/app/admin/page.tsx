import { prisma } from "@/lib/db"
import { Card } from "@/components/ui/card"
import { GraduationCap, Users, MessageSquare, BookOpen } from "lucide-react"

export default async function AdminDashboard() {
  const uniCount = await prisma.university.count()
  const testimonialCount = await prisma.testimonial.count()
  const blogCount = await prisma.blogPost.count()
  const leadCount = await prisma.lead.count()

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Universities" 
          value={uniCount} 
          icon={GraduationCap}
          color="bg-blue-500"
        />
        <StatCard 
          title="Testimonials" 
          value={testimonialCount} 
          icon={MessageSquare}
          color="bg-green-500"
        />
        <StatCard 
          title="Blog Posts" 
          value={blogCount} 
          icon={BookOpen}
          color="bg-purple-500"
        />
        <StatCard 
          title="Total Leads" 
          value={leadCount} 
          icon={Users}
          color="bg-orange-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Recent Leads</h3>
          <p className="text-neutral-500 text-sm">No leads yet.</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">System Status</h3>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500" />
             <span className="text-sm text-neutral-600">Database Connected</span>
          </div>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
        <div className={`p-2 rounded-lg ${color} bg-opacity-10`}>
          <Icon className={`w-5 h-5 ${color.replace('bg-', 'text-')}`} />
        </div>
      </div>
      <p className="text-2xl font-bold text-neutral-900">{value}</p>
    </div>
  )
}
