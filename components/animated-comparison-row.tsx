"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedComparisonRowProps {
  feature: string
  reatom: string
  redux: string
  mobx: string
  zustand: string
  isReatom?: boolean
  className?: string
}

export default function AnimatedComparisonRow({
  feature,
  reatom,
  redux,
  mobx,
  zustand,
  isReatom = false,
  className,
}: AnimatedComparisonRowProps) {
  const rowRef = useRef<HTMLTableRowElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (rowRef.current) {
      observer.observe(rowRef.current)
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current)
      }
    }
  }, [])

  return (
    <tr
      ref={rowRef}
      className={cn(
        "border-b border-white/10 opacity-0 translate-y-4 transition-all duration-700",
        isReatom && "bg-primary/5",
        className,
      )}
    >
      <td className="py-4 px-6 text-zinc-300">{feature}</td>
      <td className="py-4 px-6 text-center text-primary font-medium">{reatom}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{redux}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{mobx}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{zustand}</td>
    </tr>
  )
}

