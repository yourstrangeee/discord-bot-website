import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
      <div className="mb-2 sm:mb-0 sm:mr-4">{icon}</div>
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{value}</p>
        <p className="text-xs sm:text-sm text-gray-400">{label}</p>
      </div>
    </div>
  )
}
