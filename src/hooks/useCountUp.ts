"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface UseCountUpOptions {
  end: number
  duration?: number
  trigger?: boolean
}

export function useCountUp({ end, duration = 2000, trigger = false }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp
    }

    const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
    const easeOutCubic = 1 - Math.pow(1 - progress, 3)
    const currentCount = Math.floor(easeOutCubic * end)

    setCount(currentCount)

    if (progress < 1) {
      frameRef.current = requestAnimationFrame(animate)
    } else {
      setCount(end)
      setIsComplete(true)
    }
  }, [end, duration])

  useEffect(() => {
    if (trigger && !hasStartedRef.current) {
      hasStartedRef.current = true
      startTimeRef.current = null
      setIsComplete(false)
      frameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [trigger, animate])

  return { count, isComplete }
}
