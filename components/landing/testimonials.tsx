export interface Testimonial {
  initials: string
  name: string
  role: string
  testimonial: string
}

export const testimonials: Testimonial[] = [
  {
    initials: 'AJ',
    name: 'Alex Johnson',
    role: 'Senior Frontend Developer',
    testimonial:
      'Reatom has completely changed how I think about state management. The explicit reactivity model makes complex state flows easy to reason about, and the TypeScript support is incredible.'
  },
  {
    initials: 'MG',
    name: 'Maria Garcia',
    role: 'Tech Lead at DevCorp',
    testimonial:
      "The small bundle size and powerful abstractions make Reatom perfect for our performance-critical applications. We've seen significant improvements in both developer productivity and application performance."
  },
  {
    initials: 'DK',
    name: 'David Kim',
    role: 'Full Stack Developer',
    testimonial:
      "I've tried many state managers, but Reatom's debugging experience and async handling are unmatched. The cause stack makes tracking down bugs trivial, and the async utilities save me hours of boilerplate code."
  }
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black py-24"
    >
      <div className="container">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by Developers</h2>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-400">
            Here&apos;s what the community has to say about Reatom.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

// This is needed for the component to work
import { TestimonialCard } from './testimonial-card'
