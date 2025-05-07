import type React from "react"
interface PremiumFeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function PremiumFeatureCard({ icon, title, description }: PremiumFeatureCardProps) {
  return (
    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
