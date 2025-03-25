'use client'

import { useRef, RefObject } from 'react'
import { useIntersectionAnimation } from '@/components/hooks/use-intersection-animation'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  initials: string
  name: string
  role: string
  testimonial: string
  className?: string
}

export function TestimonialCard({
  initials,
  name,
  role,
  testimonial,
  className
}: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  useIntersectionAnimation(cardRef as unknown as RefObject<HTMLElement>)

  return (
    <div
      ref={cardRef}
      className={cn(
        'group translate-y-4 rounded-lg border border-white/10 bg-white/5 p-6 opacity-0 transition-all duration-300 hover:bg-white/10',
        className
      )}
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
          <span className="font-bold text-white">{initials}</span>
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-zinc-400">{role}</p>
        </div>
      </div>
      <p className="text-zinc-300">{testimonial}</p>
    </div>
  )
}
