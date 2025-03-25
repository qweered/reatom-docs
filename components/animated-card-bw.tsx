"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardBWProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedCardBW({ children, className }: AnimatedCardBWProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const moveX = (x - centerX) / 20
    const moveY = (y - centerY) / 20

    setPosition({ x: moveX, y: moveY })
  }

  return (
    <div
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setPosition({ x: 0, y: 0 })
      }}
    >
      <Card
        className={cn("bg-zinc-900/50 border-white/10 hover:border-white/50 transition-all duration-300", className)}
        style={{
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
          transition: isHovering ? "transform 0.1s ease-out" : "transform 0.3s ease-out",
        }}
      >
        <CardContent className="p-6 relative z-10">{children}</CardContent>
      </Card>
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10 blur-xl"
        style={{
          transform: `translateX(${position.x * 2}px) translateY(${position.y * 2}px)`,
        }}
      />
    </div>
  )
}

