'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Github,
  Twitter,
  Star,
  GitFork,
  Zap,
  Package,
  Code,
  Layers,
  Gauge,
  Workflow,
  Sparkles,
  Lock,
  Database
} from 'lucide-react'

import { SearchToggle } from 'fumadocs-ui/components/layout/search-toggle'
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  SpeedParticles,
  AnimatedGradientText,
  AnimatedCard,
  CodeBlock,
  ComparisonSection
} from '@/components/landing'

export default function Home() {
  return (
    <main className="items-center justify-between">
      {/* Header */}
      <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-foreground h-5 w-5" />
            <span className="text-xl font-bold tracking-tight">Reatom</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#comparison"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              Comparison
            </Link>
            <Link
              href="#code"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              Code
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/docs"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/artalar/reatom"
              className="text-foreground/90 hover:text-foreground text-sm font-medium transition-colors"
            >
              GitHub
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/docs" passHref>
              <Button
                variant="secondary"
                className="bg-foreground/80 hover:bg-foreground/90 text-background rounded-full"
              >
                Get Started
              </Button>
            </Link>
            <SearchToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-background text-foreground relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <SpeedParticles />
        </div>
        <div className="relative z-10 container">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6">
              v3 Now Available
            </Badge>
            <AnimatedGradientText className="mb-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              The State Manager That Moves at the Speed of Thought
            </AnimatedGradientText>
            <p className="mb-8 max-w-[700px] text-lg md:text-xl">
              Simple, powerful, and blazingly fast state management for modern JavaScript
              applications. Only 2KB gzipped with the best TypeScript experience.
            </p>
            <div className="flex gap-4">
              <Link href="/docs/getting-started/setup" passHref>
                <Button
                  size="lg"
                  className="text-background hover:bg-foreground/80 animate-pulse gap-2 rounded-full px-8 hover:animate-none"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/artalar/reatom" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full bg-transparent px-8 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>1.1k+ Stars</span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                <span>117+ Forks</span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <div className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                <span>2KB gzipped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Simple & Powerful Abstractions</h3>
              <p className="text-zinc-400">
                Only three main primitives: ctx, atom, action. All other features and packages work
                on top of that.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Immutable & Reliable</h3>
              <p className="text-zinc-400">
                All pure computations processed with atomicity guarantees for maximum reliability.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Gauge className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Explicit Reactivity</h3>
              <p className="text-zinc-400">
                No proxies. We use the atomization pattern to achieve maximum performance.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Perfect Effects Management</h3>
              <p className="text-zinc-400">
                Advanced async package for complex flows, including caching, retrying and automatic
                cancellation.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Nice Debugging Experience</h3>
              <p className="text-zinc-400">
                Each atom and action updates the ctx&apos;s immutable cause stack, helping debug
                complex async flows.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 w-fit rounded-lg bg-white/10 p-3 transition-colors group-hover:bg-white/20">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Built-in Data Fetching</h3>
              <p className="text-zinc-400">
                Alternative to TanStack Query with automatic caching, retrying, and dependency
                tracking out of the box.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Section - Now using the refactored component */}
      <ComparisonSection />

      {/* Code Examples Section */}
      <section id="code" className="border-t border-white/10 py-24">
        <div className="container">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Code That Speaks for Itself
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-zinc-400">
              Elegant, minimal API that&apos;s powerful enough for any use case.
            </p>
          </div>

          <Tabs defaultValue="basic" className="mx-auto w-full max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-4 bg-zinc-900/50">
              <TabsTrigger value="basic">Basic Counter</TabsTrigger>
              <TabsTrigger value="async">Async Data</TabsTrigger>
              <TabsTrigger value="react">React Integration</TabsTrigger>
              <TabsTrigger value="query">Data Fetching</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <CodeBlock
                language="typescript"
                code={`import { createCtx } from '@reatom/core'
import { atom } from '@reatom/core/atom'
import { action } from '@reatom/core/action'

// Create a context
const ctx = createCtx()

// Create a counter atom
const counterAtom = atom(0, 'counterAtom')

// Create increment and decrement actions
const increment = action((ctx, step = 1) => {
  counterAtom(ctx, (count) => count + step)
}, 'increment')

const decrement = action((ctx, step = 1) => {
  counterAtom(ctx, (count) => count - step)
}, 'decrement')

// Subscribe to changes
ctx.subscribe(counterAtom, (count) => {
  console.log('Counter:', count)
})

// Update the state
increment(ctx, 5) // Counter: 5
decrement(ctx, 2) // Counter: 3`}
              />
            </TabsContent>
            <TabsContent value="async">
              <CodeBlock
                language="typescript"
                code={`import { createCtx } from '@reatom/core'
import { atom } from '@reatom/core/atom'
import { action } from '@reatom/core/action'
import { connectAtom } from '@reatom/async'

// Create a context
const ctx = createCtx()

// Define API
const fetchUser = async (id: string) => {
  const response = await fetch(\`https://api.example.com/users/\${id}\`)
  return response.json()
}

// Create atoms for state management
const userIdAtom = atom('1', 'userId')
const userAtom = atom(null, 'user')
const loadingAtom = atom(false, 'loading')
const errorAtom = atom(null, 'error')

// Create fetch action with automatic loading state
const fetchUserAction = action(async (ctx, id: string) => {
  userIdAtom(ctx, id)
  loadingAtom(ctx, true)
  errorAtom(ctx, null)
  
  try {
    const user = await fetchUser(id)
    userAtom(ctx, user)
  } catch (error) {
    errorAtom(ctx, error)
  } finally {
    loadingAtom(ctx, false)
  }
}, 'fetchUser')

// Connect atoms for automatic data fetching
connectAtom(userIdAtom, (ctx, id) => {
  fetchUserAction(ctx, id)
})

// Usage
fetchUserAction(ctx, '2') // Will update userId, trigger loading states and fetch data`}
              />
            </TabsContent>
            <TabsContent value="react">
              <CodeBlock
                language="typescript"
                code={`import { createCtx } from '@reatom/core'
import { atom } from '@reatom/core/atom'
import { action } from '@reatom/core/action'
import { reatomContext, useAtom, useAction } from '@reatom/npm-react'

// Create atoms and actions
const counterAtom = atom(0, 'counterAtom')

const increment = action((ctx, step = 1) => {
  counterAtom(ctx, (count) => count + step)
}, 'increment')

const decrement = action((ctx, step = 1) => {
  counterAtom(ctx, (count) => count - step)
}, 'decrement')

// React component
function Counter() {
  // Use atoms in React components
  const [count] = useAtom(counterAtom)
  
  // Bind actions to the context
  const handleIncrement = useAction(increment)
  const handleDecrement = useAction(decrement)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => handleDecrement(1)}>-</button>
      <button onClick={() => handleIncrement(1)}>+</button>
    </div>
  )
}

// App with Reatom context provider
function App() {
  return (
    <reatomContext.Provider value={createCtx()}>
      <Counter />
    </reatomContext.Provider>
  )
}`}
              />
            </TabsContent>
            <TabsContent value="query">
              <CodeBlock
                language="typescript"
                code={`import { createCtx } from '@reatom/core'
import { atom } from '@reatom/core/atom'
import { 
  createQuery, 
  withAbort, 
  withCache, 
  withRetry 
} from '@reatom/async'

// Create context
const ctx = createCtx()

// Define enhanced API with built-in features
const fetchUsers = withCache(
  withRetry(
    withAbort(
      async (signal: AbortSignal) => {
        const response = await fetch('https://api.example.com/users', { signal })
        if (!response.ok) throw new Error('Failed to fetch users')
        return response.json()
      }
    ),
    { attempts: 3, delay: 1000 }
  ),
  { ttl: 60000 } // 1 minute cache
)

// Create a query (alternative to TanStack Query)
const usersQuery = createQuery(async (ctx) => {
  return fetchUsers()
})

// Create a dependent query with parameters
const selectedUserIdAtom = atom<string | null>(null, 'selectedUserId')

const userDetailsQuery = createQuery(async (ctx) => {
  const selectedUserId = ctx.spy(selectedUserIdAtom)
  if (!selectedUserId) return null
  
  const response = await fetch(\`https://api.example.com/users/\${selectedUserId}\`)
  if (!response.ok) throw new Error('Failed to fetch user details')
  return response.json()
})

// In React component:
// const [users, { isLoading, error }] = useAtom(usersQuery)
// const [selectedUserId, setSelectedUserId] = useAtom(selectedUserIdAtom)
// const [userDetails] = useAtom(userDetailsQuery)
`}
              />
            </TabsContent>
          </Tabs>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatedCard>
              <h3 className="mb-4 text-xl font-bold">Smallest Bundle Size</h3>
              <p className="mb-4 text-zinc-400">
                Only 2KB gzipped for the core package. The entire ecosystem with enterprise-level
                helpers takes only ~15KB.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Package className="h-4 w-4" />
                <span className="text-sm font-medium">2KB Core / 15KB Full</span>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="mb-4 text-xl font-bold">TypeScript First</h3>
              <p className="mb-4 text-zinc-400">
                Perfect type inference is one of our main priorities. Get autocomplete and type
                checking for all your state.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Code className="h-4 w-4" />
                <span className="text-sm font-medium">100% Type Safe</span>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="mb-4 text-xl font-bold">Framework Agnostic</h3>
              <p className="mb-4 text-zinc-400">
                Works with any UI framework. First-class bindings for React, Vue, Svelte, and more.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Layers className="h-4 w-4" />
                <span className="text-sm font-medium">Use Anywhere</span>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Advanced Example Section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-zinc-900 py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <Badge variant="outline" className="mb-2 border-white/30 bg-white/10 text-white">
                Advanced Usage
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Complex State Made Simple
              </h2>
              <p className="text-lg text-zinc-400">
                Handle complex async flows, caching, and state dependencies with ease. Reatom&apos;s
                explicit reactivity model makes even the most complex state manageable.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white/20 p-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Cancellation</h3>
                    <p className="text-zinc-400">
                      Cancel pending requests automatically when dependencies change
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white/20 p-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Caching</h3>
                    <p className="text-zinc-400">
                      Built-in cache management with TTL and custom invalidation strategies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white/20 p-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dependency Tracking</h3>
                    <p className="text-zinc-400">
                      Automatic dependency tracking between atoms for efficient updates
                    </p>
                  </div>
                </div>
              </div>

              <Link href="https://v3.reatom.dev/advanced" passHref>
                <Button
                  variant="outline"
                  className="mt-4 gap-2 rounded-full border-white/20 bg-transparent hover:bg-white/10"
                >
                  Explore Advanced Features
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 bg-zinc-900 p-6 shadow-xl">
              <CodeBlock
                language="typescript"
                code={`import { createCtx } from '@reatom/core'
import { atom } from '@reatom/core/atom'
import { action } from '@reatom/core/action'
import { 
  connectAtom, 
  withAbort, 
  withCache, 
  withRetry 
} from '@reatom/async'

// Create context and atoms
const ctx = createCtx()
const userIdAtom = atom('1', 'userId')
const userAtom = atom(null, 'user')

// API with enhanced features
const fetchUserApi = withCache(
  withRetry(
    withAbort(
      async (id: string, signal: AbortSignal) => {
        const response = await fetch(
          \`https://api.example.com/users/\${id}\`,
          { signal }
        )
        if (!response.ok) throw new Error('Failed to fetch')
        return response.json()
      }
    ),
    { attempts: 3, delay: 1000 }
  ),
  { ttl: 60000 } // 1 minute cache
)

// Create action with automatic dependency tracking
const fetchUser = action(
  async (ctx, id: string) => {
    try {
      const user = await fetchUserApi(id)
      userAtom(ctx, user)
      return user
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Failed to fetch user:', error)
      }
      throw error
    }
  },
  'fetchUser'
)

// Connect atoms for reactive data fetching
// This will automatically fetch when userId changes
// and cancel previous requests
connectAtom(userIdAtom, (ctx, id) => {
  fetchUser(ctx, id)
})

// Usage
userIdAtom(ctx, '2') // Triggers fetch with automatic cancellation
// Change again before previous completes
userIdAtom(ctx, '3') // Previous request cancelled, new one started`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <AnimatedCard>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="font-bold text-white">AJ</span>
                </div>
                <div>
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p className="text-sm text-zinc-400">Senior Frontend Developer</p>
                </div>
              </div>
              <p className="text-zinc-300">
                Reatom has completely changed how I think about state management. The explicit
                reactivity model makes complex state flows easy to reason about, and the TypeScript
                support is incredible.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="font-bold text-white">MG</span>
                </div>
                <div>
                  <h3 className="font-bold">Maria Garcia</h3>
                  <p className="text-sm text-zinc-400">Tech Lead at DevCorp</p>
                </div>
              </div>
              <p className="text-zinc-300">
                The small bundle size and powerful abstractions make Reatom perfect for our
                performance-critical applications. We&apos;ve seen significant improvements in both
                developer productivity and application performance.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <span className="font-bold text-white">DK</span>
                </div>
                <div>
                  <h3 className="font-bold">David Kim</h3>
                  <p className="text-sm text-zinc-400">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-zinc-300">
                I&apos;ve tried many state managers, but Reatom&apos;s debugging experience and
                async handling are unmatched. The cause stack makes tracking down bugs trivial, and
                the async utilities save me hours of boilerplate code.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="absolute inset-0 -z-10">
          <SpeedParticles />
        </div>
        <div className="relative z-10 container space-y-8 text-center">
          <AnimatedGradientText className="mx-auto max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
            Ready to Build Faster, More Reliable Applications?
          </AnimatedGradientText>
          <p className="mx-auto max-w-[700px] text-lg text-zinc-400">
            Get started with Reatom today and experience the perfect balance of simplicity,
            performance, and type safety.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/getting-started/setup" passHref>
              <Button
                size="lg"
                className="animate-pulse gap-2 rounded-full bg-white px-8 text-black hover:animate-none hover:bg-zinc-200"
              >
                Read the Docs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/artalar/reatom" passHref>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-white/20 bg-transparent px-8 hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-white" />
                <span className="text-xl font-bold tracking-tight">Reatom</span>
              </div>
              <p className="text-zinc-400">
                The ultimate state manager for modern JavaScript applications.
              </p>
              <div className="flex gap-4">
                <Link href="https://github.com/artalar/reatom" passHref>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" passHref>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/getting-started/setup"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://v3.reatom.dev/core-concepts"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Core Concepts
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://v3.reatom.dev/examples"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://v3.reatom.dev/api"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/artalar/reatom"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    GitHub Repository
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/releases"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/issues"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/discussions"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Discussions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-medium">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://patreon.com/artalar_dev"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Sponsor on Patreon
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://polar.sh/artalar"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Sponsor on Polar
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://boosty.to/artalar"
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    Sponsor on Boosty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-zinc-400">
            <p>© {new Date().getFullYear()} Reatom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
