'use client'

import Link from 'next/link'
import { Zap, Github, Twitter, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <span className="text-xl font-bold tracking-tight">Reatom</span>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              The ultimate state manager for modern JavaScript applications.
              <br className="hidden sm:block" />
              Simple, powerful, and blazingly fast.
            </p>
            <div className="flex gap-3">
              <Link href="https://github.com/artalar/reatom" passHref>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:text-blue-500"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" passHref>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:text-blue-500"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Documentation links */}
          <div className="sm:pl-4 lg:pl-0">
            <h3 className="text-foreground/70 mb-3 text-sm font-semibold tracking-wider uppercase">
              Documentation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs/getting-started/setup"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/core-concepts"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Core Concepts
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Examples
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  API Reference
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="sm:pl-4 lg:pl-0">
            <h3 className="text-foreground/70 mb-3 text-sm font-semibold tracking-wider uppercase">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/artalar/reatom"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  GitHub Repository
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/artalar/reatom/releases"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Releases
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/artalar/reatom/issues"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Issues
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/artalar/reatom/discussions"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Discussions
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Community links */}
          <div className="sm:pl-4 lg:pl-0">
            <h3 className="text-foreground/70 mb-3 text-sm font-semibold tracking-wider uppercase">
              Community
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://patreon.com/artalar_dev"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Sponsor on Patreon
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://polar.sh/artalar"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Sponsor on Polar
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://boosty.to/artalar"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Sponsor on Boosty
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/reatom"
                  className="group text-foreground/80 flex items-center transition-colors hover:text-blue-500"
                >
                  Join Discord
                  <ExternalLink className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground mb-4 text-center text-sm sm:mb-0">
            © {new Date().getFullYear()} Reatom. All rights reserved.
          </p>
          <div className="text-muted-foreground flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
