import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-gray-800/50 backdrop-blur-sm p-6 shadow-lg transition-all duration-300",
        popular
          ? "border-purple-500 shadow-purple-500/20"
          : "border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/10",
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="ml-1 text-gray-400">/{period}</span>
        </div>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <p className="ml-3 text-gray-300">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          className={cn(
            "w-full font-semibold",
            popular
              ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              : "bg-gray-700 hover:bg-gray-600 text-white",
          )}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
