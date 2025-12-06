"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion } from "framer-motion"
import { Loader2, CheckCircle, Shield, Zap, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createLead } from "@/lib/actions"

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid WhatsApp number"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().min(1, "Please select your country"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional(),
})

type LeadFormData = z.infer<typeof leadSchema>

interface LeadFormProps {
  variant?: "default" | "compact" | "landing"
  title?: string
  subtitle?: string
  onSuccess?: () => void
}

const countryOptions = [
  { value: "pakistan", label: "Pakistan" },
  { value: "yemen", label: "Yemen" },
  { value: "saudi-arabia", label: "Saudi Arabia" },
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "tanzania", label: "Tanzania" },
  { value: "other", label: "Other" },
]

const programOptions = [
  { value: "mbbs", label: "MBBS" },
  { value: "chinese-language", label: "Chinese Language" },
  { value: "masters-phd", label: "Masters / PhD" },
  { value: "engineering", label: "Engineering" },
  { value: "business", label: "Business" },
  { value: "other", label: "Other" },
]

export function LeadForm({
  variant = "default",
  title = "Get Free Consultation",
  subtitle = "Speak with our China-based admissions team",
  onSuccess
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setServerError(null)

    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("phone", data.phone)
    formData.append("program", data.program)
    
    // Append country to message for context
    const fullMessage = `Country: ${data.country}\n${data.message || ""}`
    formData.append("message", fullMessage)

    const result = await createLead(null, formData)

    if (result?.success) {
      setIsSuccess(true)
      reset()
      if (onSuccess) onSuccess()
      setTimeout(() => setIsSuccess(false), 8000)
    } else {
      setServerError(result?.message || "Something went wrong.")
    }
    
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-secondary-600" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          Thank You!
        </h3>
        <p className="text-neutral-600 mb-6">
          We&apos;ve received your request. Our team will contact you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </motion.div>
    )
  }

  const isLanding = variant === "landing"
  const isCompact = variant === "compact"

  return (
    <div className={`bg-white rounded-2xl ${isLanding ? "p-6 md:p-8" : "p-6"} shadow-xl shadow-neutral-200/50`}>
      {title && (
        <div className="mb-6 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-neutral-500">{subtitle}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className={isLanding ? "grid grid-cols-1 gap-4" : ""}>
          <Input
            placeholder="Full Name *"
            {...register("name")}
            error={errors.name?.message}
          />

          <Input
            placeholder="WhatsApp Number (with country code) *"
            {...register("phone")}
            error={errors.phone?.message}
          />

          <Input
            type="email"
            placeholder="Email Address *"
            {...register("email")}
            error={errors.email?.message}
          />

          <Select
            placeholder="Select Country *"
            options={countryOptions}
            {...register("country")}
            error={errors.country?.message}
          />

          <Select
            placeholder="Program of Interest *"
            options={programOptions}
            {...register("program")}
            error={errors.program?.message}
          />

          {!isCompact && (
            <Textarea
              placeholder="Your Message (Optional)"
              {...register("message")}
              className="min-h-[100px]"
            />
          )}
        </div>

        {serverError && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
              {serverError}
            </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Get Free Expert Advice"
          )}
        </Button>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-neutral-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" />
            100% Free
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" />
            Response in 24 hours
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            No obligation
          </span>
        </div>
      </form>
    </div>
  )
}
