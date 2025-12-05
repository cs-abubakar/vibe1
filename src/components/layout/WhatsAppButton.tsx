"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    // Show after initial page load
    const timer = setTimeout(() => setIsVisible(true), 2000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Show tooltip after a delay
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowTooltip(true), 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(
    "Hi! I'm interested in studying in China. Can you help me?"
  )}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-full right-0 mb-3"
              >
                <div className="relative bg-white rounded-xl shadow-xl shadow-neutral-200/50 p-4 pr-8 max-w-[280px]">
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <p className="text-sm text-neutral-600">
                    <span className="font-semibold text-neutral-900">Need help?</span>
                    <br />
                    Chat with our team on WhatsApp for instant guidance!
                  </p>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label="Chat on WhatsApp"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Pulse Ring */}
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-ring" />

              {/* Button */}
              <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-colors">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
