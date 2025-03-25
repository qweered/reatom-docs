'use client'

import Link from 'next/link'
import { Zap, Github, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
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
  )
}
