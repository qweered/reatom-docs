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


export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose Reatom?</h2>
          <p className="text-zinc-400 text-lg max-w-[700px] mx-auto">
            See how Reatom compares to other popular state management solutions.
          </p>
        </div>

        {/* Desktop comparison table - hidden on mobile */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Reatom</th>
                <th className="py-4 px-6 text-center">Redux</th>
                <th className="py-4 px-6 text-center">MobX</th>
                <th className="py-4 px-6 text-center">Zustand</th>
              </tr>
            </thead>
            <tbody>
              <AnimatedComparisonRow
                feature="Bundle Size"
                reatom="2KB"
                redux="16KB+"
                mobx="22KB+"
                zustand="3KB+"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="TypeScript Support"
                reatom="Excellent"
                redux="Good"
                mobx="Good"
                zustand="Good"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="Async Handling"
                reatom="Built-in"
                redux="Middleware"
                mobx="Manual"
                zustand="Manual"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="Debugging"
                reatom="DevTools + Cause Stack"
                redux="Console + DevTools"
                mobx="Console + DevTools"
                zustand="Console + DevTools"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="Reactivity Model"
                reatom="Explicit"
                redux="Manual"
                mobx="Proxies"
                zustand="Subscriptions"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="Data Fetching"
                reatom="Built-in"
                redux="External"
                mobx="External"
                zustand="External"
                isReatom={true}
              />
              <AnimatedComparisonRow
                feature="Dependency Tracking"
                reatom="Automatic"
                redux="Manual"
                mobx="Automatic"
                zustand="Manual"
                isReatom={true}
              />
            </tbody>
          </table>
        </div>

        {/* Mobile comparison cards - visible only on mobile */}
        <div className="md:hidden space-y-6">
          {/* Bundle Size comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Bundle Size</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">2KB</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">16KB+</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">22KB+</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">3KB+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TypeScript Support comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">TypeScript Support</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">Excellent</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">Good</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">Good</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">Good</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Async Handling comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Async Handling</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">Built-in</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">Middleware</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">Manual</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">Manual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debugging comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Debugging</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">DevTools + Cause Stack</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">Console + DevTools</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">Console + DevTools</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">Console + DevTools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reactivity Model comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Reactivity Model</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">Explicit</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">Manual</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">Proxies</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">Subscriptions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Fetching comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Data Fetching</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">Built-in</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">External</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">External</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">External</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dependency Tracking comparison */}
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="bg-white/5 px-4 py-3 font-medium">Dependency Tracking</div>
            <div className="grid grid-cols-2 divide-x divide-white/10">
              <div className="p-4 bg-white/10">
                <div className="text-sm text-zinc-400 mb-1">Reatom</div>
                <div className="font-bold text-white">Automatic</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Redux</div>
                    <div className="font-medium">Manual</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">MobX</div>
                    <div className="font-medium">Automatic</div>
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Zustand</div>
                    <div className="font-medium">Manual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 