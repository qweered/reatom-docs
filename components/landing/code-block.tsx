"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    // This is where you would normally initialize a syntax highlighter like Prism or highlight.js
    // For simplicity, we're just using basic styling
  }, [code])

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-zinc-400">{language}</div>
      </div>
      <pre ref={preRef} className="p-4 overflow-x-auto bg-zinc-950 text-white text-sm font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}

