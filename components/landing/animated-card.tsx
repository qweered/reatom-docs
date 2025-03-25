'use client'

import { useRef, RefObject } from 'react'
import type { ReactNode } from 'react'
import { useIntersectionAnimation } from '@/components/hooks/use-intersection-animation'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  icon?: ReactNode
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}

export function AnimatedCard({ icon, title, description, children, className }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  useIntersectionAnimation(cardRef as unknown as RefObject<HTMLElement>)

  // If children are provided, render them directly
  if (children) {
    return (
      <div
        ref={cardRef}
        className={cn(
          'group translate-y-4 rounded-lg border border-white/10 bg-white/5 p-6 opacity-0 transition-all duration-300 hover:bg-white/10',
          className
        )}
      >
        {children}
      </div>
    )
  }

  // Otherwise, render with the structured props
  return (
    <div
      ref={cardRef}
      className={cn(
        'group translate-y-4 rounded-lg border border-white/10 bg-white/5 p-6 opacity-0 transition-all duration-300 hover:bg-white/10',
        className
      )}
    >
      {icon && (
        <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
          {icon}
        </div>
      )}
      {title && <h3 className="mb-2 text-xl font-bold">{title}</h3>}
      {description && <p className="text-zinc-400">{description}</p>}
    </div>
  )
}
