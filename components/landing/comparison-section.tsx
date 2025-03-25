"use client"

import {  useRef, RefObject } from "react"
import type { JSX } from "react"
import { useIntersectionAnimation } from "@/components/hooks/use-intersection-animation"

interface ComparisonItem {
  feature: string
  reatom: string
  redux: string
  mobx: string
  zustand: string
}

// Shared data structure for all comparisons
const comparisonData: ComparisonItem[] = [
  {
    feature: "Bundle Size",
    reatom: "2KB",
    redux: "16KB+",
    mobx: "22KB+",
    zustand: "3KB+"
  },
  {
    feature: "TypeScript Support",
    reatom: "Excellent",
    redux: "Good",
    mobx: "Good",
    zustand: "Good"
  },
  {
    feature: "Async Handling",
    reatom: "Built-in",
    redux: "Middleware",
    mobx: "Manual",
    zustand: "Manual"
  },
  {
    feature: "Debugging",
    reatom: "DevTools + Cause Stack",
    redux: "Console + DevTools",
    mobx: "Console + DevTools",
    zustand: "Console + DevTools"
  },
  {
    feature: "Reactivity Model",
    reatom: "Explicit",
    redux: "Manual",
    mobx: "Proxies",
    zustand: "Subscriptions"
  },
  {
    feature: "Data Fetching",
    reatom: "Built-in",
    redux: "External",
    mobx: "External",
    zustand: "External"
  },
  {
    feature: "Dependency Tracking",
    reatom: "Automatic",
    redux: "Manual",
    mobx: "Automatic",
    zustand: "Manual"
  }
]

export function ComparisonSection(): JSX.Element {
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
              {comparisonData.map((item, index) => (
                <TableRow key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile comparison cards - visible only on mobile */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((item, index) => (
            <MobileCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface RowProps {
  item: ComparisonItem
}

// Simplified table row component
function TableRow({ item }: RowProps): JSX.Element {
  const rowRef = useRef<HTMLTableRowElement>(null)
  useIntersectionAnimation(rowRef as unknown as RefObject<HTMLElement>)
  
  return (
    <tr
      ref={rowRef}
      className="border-b border-white/10 opacity-0 translate-y-4 transition-all duration-700 bg-primary/5"
    >
      <td className="py-4 px-6 text-zinc-300">{item.feature}</td>
      <td className="py-4 px-6 text-center text-primary font-medium">{item.reatom}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{item.redux}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{item.mobx}</td>
      <td className="py-4 px-6 text-center text-zinc-400">{item.zustand}</td>
    </tr>
  )
}

// Simplified mobile card component
function MobileCard({ item }: RowProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null)
  useIntersectionAnimation(cardRef as unknown as RefObject<HTMLElement>)
  
  return (
    <div 
      ref={cardRef}
      className="rounded-lg border border-white/10 overflow-hidden opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="bg-white/5 px-4 py-3 font-medium">{item.feature}</div>
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <div className="p-4 bg-white/10">
          <div className="text-sm text-zinc-400 mb-1">Reatom</div>
          <div className="font-bold text-white">{item.reatom}</div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="text-sm text-zinc-400 mb-1">Redux</div>
              <div className="font-medium">{item.redux}</div>
            </div>
            <div>
              <div className="text-sm text-zinc-400 mb-1">MobX</div>
              <div className="font-medium">{item.mobx}</div>
            </div>
            <div>
              <div className="text-sm text-zinc-400 mb-1">Zustand</div>
              <div className="font-medium">{item.zustand}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 