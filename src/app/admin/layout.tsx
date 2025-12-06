import Link from "next/link"
import { signOut } from "@/auth"
import { 
  LayoutDashboard, 
  GraduationCap, 
  MessageSquare, 
  BookOpen, 
  Users, 
  LogOut,
  Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-neutral-200 fixed h-full z-10 hidden md:flex flex-col">
        <div className="p-6 border-b border-neutral-100">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="font-bold text-lg text-neutral-900">Admin Panel</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <NavItem href="/admin" icon={LayoutDashboard}>Dashboard</NavItem>
          <NavItem href="/admin/universities" icon={GraduationCap}>Universities</NavItem>
          <NavItem href="/admin/testimonials" icon={MessageSquare}>Testimonials</NavItem>
          <NavItem href="/admin/blogs" icon={BookOpen}>Blog Posts</NavItem>
          <NavItem href="/admin/leads" icon={Users}>Leads</NavItem>
        </nav>

        <div className="p-4 border-t border-neutral-100">
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen">
        <header className="h-16 bg-white border-b border-neutral-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <h1 className="font-semibold text-neutral-900">Dashboard</h1>
          <div className="flex items-center gap-4">
             <span className="text-sm text-neutral-500">Admin</span>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <Button variant="ghost" className="w-full justify-start text-neutral-600 hover:text-primary-600 hover:bg-primary-50">
        <Icon className="w-4 h-4 mr-2" />
        {children}
      </Button>
    </Link>
  )
}
