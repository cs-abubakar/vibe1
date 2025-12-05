"use client"

import { useEffect, useState, useRef } from "react"

interface UseCountUpOptions {
  end: number
  duration?: number
  startOnMount?: boolean
}

export function useCountUp({ end, duration = 2000, startOnMount = false }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const frameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  const start = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    startTimeRef.current = null
    setIsComplete(false)

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const easeOutQuad = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutQuad * end)

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setIsComplete(true)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (startOnMount) {
      start()
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [startOnMount, end, duration])

  return { count, isComplete, start }
}
