"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { ReactNode } from "react"
import CommandList from "@/components/command-list"

interface FeatureCardInteractiveProps {
  icon: ReactNode
  title: string
  description: string
  commands: { name: string; desc: string }[]
  className?: string
}

export default function FeatureCardInteractive({
  icon,
  title,
  description,
  commands,
  className,
}: FeatureCardInteractiveProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800 hover:border-blue-500/50",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4">{title} Commands</h4>
          <CommandList commands={commands} />
        </div>
      )}
    </div>
  )
}
