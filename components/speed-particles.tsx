"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function SpeedParticles() {
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

    // Create particles
    const particles: Particle[] = []
    const particleCount = 100

    const colors = ["#3498db", "#2ecc71", "#9b59b6", "#f1c40f", "#e74c3c"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: -Math.random() * 15 - 5, // Negative to move left (fast)
        speedY: (Math.random() - 0.5) * 2, // Small vertical movement
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Reset position if off screen
        if (particle.x < -10) {
          particle.x = canvas.width + 10
          particle.y = Math.random() * canvas.height
        }

        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.3 // Semi-transparent
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle.x + particle.size * 5, particle.y)
        ctx.lineTo(particle.x, particle.y + particle.size / 2)
        ctx.closePath()
        ctx.fill()
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

