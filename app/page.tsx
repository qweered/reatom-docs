'use client'

import Link from 'next/link'
import { ArrowRight, Github, Zap, Package, Code, Layers } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  SpeedParticles,
  AnimatedGradientText,
  AnimatedCard,
  CodeBlock,
  ComparisonSection,
  FeaturesSection,
  TestimonialsSection,
  Header,
  Footer,
  HeroSection
} from '@/components/landing'

export default function Home() {
  return (
    <main className="items-center justify-between">
      <Header />
      <HeroSection />
      <FeaturesSection />
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

      <TestimonialsSection />

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

      <Footer />
    </main>
  )
}
