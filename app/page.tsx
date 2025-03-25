"use client"

import Link from "next/link"
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
  Database,
} from "lucide-react"

import { SearchToggle } from 'fumadocs-ui/components/layout/search-toggle';
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SpeedParticles, AnimatedGradientText, AnimatedCard, CodeBlock, ComparisonSection } from "@/components/landing"


export default function Home() {
  return (
    <main className="items-center justify-between">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-foreground" />
            <span className="text-xl font-bold tracking-tight">Reatom</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#comparison" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Comparison
            </Link>
            <Link href="#code" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Code
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/artalar/reatom"
              className="text-sm font-medium text-foreground/90 hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/docs" passHref>
              <Button variant="secondary" className="rounded-full bg-foreground/80 hover:bg-foreground/90 text-background">
                Get Started
              </Button>
            </Link>
            <SearchToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-background text-foreground">
        <div className="absolute inset-0 -z-10">
          <SpeedParticles />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-6">
              v3 Now Available
            </Badge>
            <AnimatedGradientText className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
              The State Manager That Moves at the Speed of Thought
            </AnimatedGradientText>
            <p className="max-w-[700px] text-lg md:text-xl mb-8">
              Simple, powerful, and blazingly fast state management for modern JavaScript applications. Only 2KB gzipped
              with the best TypeScript experience.
            </p>
            <div className="flex gap-4">
              <Link href="/docs/getting-started/setup" passHref>
                <Button
                  size="lg"
                  className="rounded-full gap-2 px-8 animate-pulse hover:animate-none text-background hover:bg-foreground/80"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/artalar/reatom" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full gap-2 px-8 bg-transparent hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-12">
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
      <section id="features" className="relative py-24 border-t border-white/10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineered for Performance</h2>
            <p className="text-zinc-400 text-lg max-w-[700px] mx-auto">
              Reatom provides powerful abstractions with minimal overhead, perfect for any project from small libraries
              to large applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Simple & Powerful Abstractions</h3>
              <p className="text-zinc-400">
                Only three main primitives: ctx, atom, action. All other features and packages work on top of that.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Immutable & Reliable</h3>
              <p className="text-zinc-400">
                All pure computations processed with atomicity guarantees for maximum reliability.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Gauge className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Explicit Reactivity</h3>
              <p className="text-zinc-400">
                No proxies. We use the atomization pattern to achieve maximum performance.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Effects Management</h3>
              <p className="text-zinc-400">
                Advanced async package for complex flows, including caching, retrying and automatic cancellation.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nice Debugging Experience</h3>
              <p className="text-zinc-400">
                Each atom and action updates the ctx&apos;s immutable cause stack, helping debug complex async flows.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="bg-white/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/20 transition-colors">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Built-in Data Fetching</h3>
              <p className="text-zinc-400">
                Alternative to TanStack Query with automatic caching, retrying, and dependency tracking out of the box.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Section - Now using the refactored component */}
      <ComparisonSection />

      {/* Code Examples Section */}
      <section id="code" className="py-24 border-t border-white/10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Code That Speaks for Itself</h2>
            <p className="text-zinc-400 text-lg max-w-[700px] mx-auto">
              Elegant, minimal API that&apos;s powerful enough for any use case.
            </p>
          </div>

          <Tabs defaultValue="basic" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-zinc-900/50">
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard>
              <h3 className="text-xl font-bold mb-4">Smallest Bundle Size</h3>
              <p className="text-zinc-400 mb-4">
                Only 2KB gzipped for the core package. The entire ecosystem with enterprise-level helpers takes only
                ~15KB.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Package className="h-4 w-4" />
                <span className="text-sm font-medium">2KB Core / 15KB Full</span>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-xl font-bold mb-4">TypeScript First</h3>
              <p className="text-zinc-400 mb-4">
                Perfect type inference is one of our main priorities. Get autocomplete and type checking for all your
                state.
              </p>
              <div className="flex items-center gap-2 text-white">
                <Code className="h-4 w-4" />
                <span className="text-sm font-medium">100% Type Safe</span>
              </div>
            </AnimatedCard>

            <AnimatedCard>
              <h3 className="text-xl font-bold mb-4">Framework Agnostic</h3>
              <p className="text-zinc-400 mb-4">
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
      <section className="py-24 border-t border-white/10 bg-gradient-to-b from-black to-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="mb-2 border-white/30 bg-white/10 text-white">
                Advanced Usage
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Complex State Made Simple</h2>
              <p className="text-zinc-400 text-lg">
                Handle complex async flows, caching, and state dependencies with ease. Reatom&apos;s explicit reactivity
                model makes even the most complex state manageable.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Automatic Cancellation</h3>
                    <p className="text-zinc-400">Cancel pending requests automatically when dependencies change</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
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
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dependency Tracking</h3>
                    <p className="text-zinc-400">Automatic dependency tracking between atoms for efficient updates</p>
                  </div>
                </div>
              </div>

              <Link href="https://v3.reatom.dev/advanced" passHref>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full gap-2 border-white/20 bg-transparent hover:bg-white/10"
                >
                  Explore Advanced Features
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-zinc-900 border border-white/10 rounded-lg p-6 shadow-xl">
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
      <section id="testimonials" className="py-24 border-t border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Loved by Developers</h2>
            <p className="text-zinc-400 text-lg max-w-[700px] mx-auto">
              Here&apos;s what the community has to say about Reatom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">AJ</span>
                </div>
                <div>
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p className="text-zinc-400 text-sm">Senior Frontend Developer</p>
                </div>
              </div>
              <p className="text-zinc-300">
                Reatom has completely changed how I think about state management. The explicit reactivity model makes
                complex state flows easy to reason about, and the TypeScript support is incredible.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">MG</span>
                </div>
                <div>
                  <h3 className="font-bold">Maria Garcia</h3>
                  <p className="text-zinc-400 text-sm">Tech Lead at DevCorp</p>
                </div>
              </div>
              <p className="text-zinc-300">
                The small bundle size and powerful abstractions make Reatom perfect for our performance-critical
                applications. We&apos;ve seen significant improvements in both developer productivity and application
                performance.
              </p>
            </AnimatedCard>

            <AnimatedCard>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">DK</span>
                </div>
                <div>
                  <h3 className="font-bold">David Kim</h3>
                  <p className="text-zinc-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-zinc-300">
                I&apos;ve tried many state managers, but Reatom&apos;s debugging experience and async handling are unmatched. The
                cause stack makes tracking down bugs trivial, and the async utilities save me hours of boilerplate
                code.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <SpeedParticles />
        </div>
        <div className="container relative z-10 text-center space-y-8">
          <AnimatedGradientText className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
            Ready to Build Faster, More Reliable Applications?
          </AnimatedGradientText>
          <p className="text-zinc-400 text-lg max-w-[700px] mx-auto">
            Get started with Reatom today and experience the perfect balance of simplicity, performance, and type
            safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/getting-started/setup" passHref>
              <Button
                size="lg"
                className="rounded-full gap-2 px-8 animate-pulse hover:animate-none bg-white text-black hover:bg-zinc-200"
              >
                Read the Docs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/artalar/reatom" passHref>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full gap-2 px-8 border-white/20 bg-transparent hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-white" />
                <span className="text-xl font-bold tracking-tight">Reatom</span>
              </div>
              <p className="text-zinc-400">The ultimate state manager for modern JavaScript applications.</p>
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
              <h3 className="font-medium mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/getting-started/setup"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://v3.reatom.dev/core-concepts"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Core Concepts
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://v3.reatom.dev/examples"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="https://v3.reatom.dev/api" className="text-zinc-400 hover:text-white transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/artalar/reatom"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    GitHub Repository
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/releases"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/issues"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/artalar/reatom/discussions"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Discussions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://patreon.com/artalar_dev"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Sponsor on Patreon
                  </Link>
                </li>
                <li>
                  <Link href="https://polar.sh/artalar" className="text-zinc-400 hover:text-white transition-colors">
                    Sponsor on Polar
                  </Link>
                </li>
                <li>
                  <Link href="https://boosty.to/artalar" className="text-zinc-400 hover:text-white transition-colors">
                    Sponsor on Boosty
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-6 text-center text-zinc-400">
            <p>© {new Date().getFullYear()} Reatom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

