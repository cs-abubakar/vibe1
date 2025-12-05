"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-700 border border-slate-200",
        secondary: "bg-emerald-50 text-emerald-700 border border-emerald-200",
        success: "bg-green-50 text-green-700 border border-green-200",
        warning: "bg-amber-50 text-amber-700 border border-amber-200",
        error: "bg-red-50 text-red-700 border border-red-200",
        outline: "border-2 border-current bg-transparent",
        accent: "bg-gradient-to-r from-amber-400 to-amber-500 text-white border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
