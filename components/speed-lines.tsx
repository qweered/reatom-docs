"use client"

import { useEffect, useRef } from "react"

export default function SpeedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create lines
    const lines: {
      x: number
      y: number
      length: number
      speed: number
      width: number
      color: string
      alpha: number
    }[] = []

    const lineCount = 100

    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 150 + 50,
        speed: Math.random() * 15 + 10,
        width: Math.random() * 2 + 0.5,
        color: "#3b82f6",
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw lines
      lines.forEach((line) => {
        // Update position
        line.x -= line.speed

        // Reset position if off screen
        if (line.x < -line.length) {
          line.x = canvas.width + line.length
          line.y = Math.random() * canvas.height
        }

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + line.length, line.y)
        ctx.lineWidth = line.width
        ctx.strokeStyle = `rgba(59, 130, 246, ${line.alpha})`
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

