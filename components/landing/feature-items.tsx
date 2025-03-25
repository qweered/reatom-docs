import { ReactNode } from 'react'
import { Code, Lock, Gauge, Workflow, Sparkles, Database } from 'lucide-react'
import { AnimatedCard } from './animated-card'

export interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

export const featureItems: FeatureItem[] = [
  {
    icon: <Code className="h-6 w-6 text-white" />,
    title: 'Simple & Powerful Abstractions',
    description:
      'Only three main primitives: ctx, atom, action. All other features and packages work on top of that.'
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    title: 'Immutable & Reliable',
    description:
      'All pure computations processed with atomicity guarantees for maximum reliability.'
  },
  {
    icon: <Gauge className="h-6 w-6 text-white" />,
    title: 'Explicit Reactivity',
    description: 'No proxies. We use the atomization pattern to achieve maximum performance.'
  },
  {
    icon: <Workflow className="h-6 w-6 text-white" />,
    title: 'Perfect Effects Management',
    description:
      'Advanced async package for complex flows, including caching, retrying and automatic cancellation.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: 'Nice Debugging Experience',
    description:
      "Each atom and action updates the ctx's immutable cause stack, helping debug complex async flows."
  },
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: 'Built-in Data Fetching',
    description:
      'Alternative to TanStack Query with automatic caching, retrying, and dependency tracking out of the box.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative border-t border-white/10 py-24">
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Engineered for Performance
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-400">
            Reatom provides powerful abstractions with minimal overhead, perfect for any project
            from small libraries to large applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((feature, index) => (
            <AnimatedCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
