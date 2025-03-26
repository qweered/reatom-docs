'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ThemeToggle } from 'fumadocs-ui/components/layout/theme-toggle'
import { SearchToggle } from 'fumadocs-ui/components/layout/search-toggle'

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'Examples', href: '/#examples' },
  { name: 'Comparison', href: '/#comparison' },
  { name: 'Docs', href: '/docs' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && isHomePage) {
      e.preventDefault()
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        })

        // Close mobile menu if open
        setMobileMenuOpen(false)

        // Update URL without reloading the page
        window.history.pushState({}, '', href)
      }
    }
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80'
          : 'bg-transparent'
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Reatom</span>
          </Link>

          <div className="hidden md:flex md:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="hover:text-primary dark:hover:text-primary text-sm font-medium text-zinc-700 transition-colors dark:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <SearchToggle />
            <ThemeToggle className="border border-zinc-200 dark:border-zinc-800" />
          </div>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link
              href="https://github.com/artalar/reatom"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 md:hidden dark:text-zinc-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="container space-y-1 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-4 px-3">
              <SearchToggle />
              <ThemeToggle />
              <Button asChild size="sm">
                <Link
                  href="https://github.com/artalar/reatom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
