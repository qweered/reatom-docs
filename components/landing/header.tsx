'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { SearchToggle } from 'fumadocs-ui/components/layout/search-toggle'
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full backdrop-blur-md">
      {/* TODO: fix adaptive header */}
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
              className="bg-foreground/80 text-background hover:bg-foreground/90 rounded-full"
            >
              Get Started
            </Button>
          </Link>
          <SearchToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
