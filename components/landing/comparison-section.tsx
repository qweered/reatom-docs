'use client'

import { useRef, RefObject } from 'react'
import type { JSX } from 'react'
import { useIntersectionAnimation } from '@/components/hooks/use-intersection-animation'

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
    feature: 'Bundle Size',
    reatom: '2KB',
    redux: '16KB+',
    mobx: '22KB+',
    zustand: '3KB+'
  },
  {
    feature: 'TypeScript Support',
    reatom: 'Excellent',
    redux: 'Good',
    mobx: 'Good',
    zustand: 'Good'
  },
  {
    feature: 'Async Handling',
    reatom: 'Built-in',
    redux: 'Middleware',
    mobx: 'Manual',
    zustand: 'Manual'
  },
  {
    feature: 'Debugging',
    reatom: 'DevTools + Cause Stack',
    redux: 'Console + DevTools',
    mobx: 'Console + DevTools',
    zustand: 'Console + DevTools'
  },
  {
    feature: 'Reactivity Model',
    reatom: 'Explicit',
    redux: 'Manual',
    mobx: 'Proxies',
    zustand: 'Subscriptions'
  },
  {
    feature: 'Data Fetching',
    reatom: 'Built-in',
    redux: 'External',
    mobx: 'External',
    zustand: 'External'
  },
  {
    feature: 'Dependency Tracking',
    reatom: 'Automatic',
    redux: 'Manual',
    mobx: 'Automatic',
    zustand: 'Manual'
  }
]

export function ComparisonSection(): JSX.Element {
  return (
    <section
      id="comparison"
      className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-950 py-24"
    >
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Reatom?</h2>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-400">
            See how Reatom compares to other popular state management solutions.
          </p>
        </div>

        {/* Desktop comparison table - hidden on mobile */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">Reatom</th>
                <th className="px-6 py-4 text-center">Redux</th>
                <th className="px-6 py-4 text-center">MobX</th>
                <th className="px-6 py-4 text-center">Zustand</th>
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
        <div className="space-y-6 md:hidden">
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
      className="bg-primary/5 translate-y-4 border-b border-white/10 opacity-0 transition-all duration-700"
    >
      <td className="px-6 py-4 text-zinc-300">{item.feature}</td>
      <td className="text-primary px-6 py-4 text-center font-medium">{item.reatom}</td>
      <td className="px-6 py-4 text-center text-zinc-400">{item.redux}</td>
      <td className="px-6 py-4 text-center text-zinc-400">{item.mobx}</td>
      <td className="px-6 py-4 text-center text-zinc-400">{item.zustand}</td>
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
      className="translate-y-4 overflow-hidden rounded-lg border border-white/10 opacity-0 transition-all duration-700"
    >
      <div className="bg-white/5 px-4 py-3 font-medium">{item.feature}</div>
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <div className="bg-white/10 p-4">
          <div className="mb-1 text-sm text-zinc-400">Reatom</div>
          <div className="font-bold text-white">{item.reatom}</div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="mb-1 text-sm text-zinc-400">Redux</div>
              <div className="font-medium">{item.redux}</div>
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-400">MobX</div>
              <div className="font-medium">{item.mobx}</div>
            </div>
            <div>
              <div className="mb-1 text-sm text-zinc-400">Zustand</div>
              <div className="font-medium">{item.zustand}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
