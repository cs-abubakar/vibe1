import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = await prisma.program.findUnique({
    where: { slug },
  });

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           {program.image && (
             <img 
               src={program.image} 
               alt={program.title} 
               className="w-full h-full object-cover"
             />
           )}
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-900/90" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{program.title}</h1>
          {program.subtitle && (
            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto mb-8">
              {program.subtitle}
            </p>
          )}
          <Link href="/contact">
             <Button size="lg" className="bg-primary-600 hover:bg-primary-500 text-white">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
             </Button>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
          <div 
             className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-primary-600 prose-li:text-neutral-600"
             dangerouslySetInnerHTML={{ __html: program.content }} 
          />
          
          <div className="mt-12 pt-12 border-t border-neutral-100">
             <h3 className="text-2xl font-bold mb-6">Ready to take the next step?</h3>
             <div className="bg-primary-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <p className="text-primary-800 font-medium mb-2">Get Expert Guidance</p>
                   <p className="text-neutral-600">Our team will guide you through the entire application process.</p>
                </div>
                <Link href="/contact">
                  <Button size="lg">Contact Us Today</Button>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
