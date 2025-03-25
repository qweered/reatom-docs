import type React from "react"
import { cn } from "@/lib/utils"

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <h1 className={cn("bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent", className)}>
      {children}
    </h1>
  )
}

