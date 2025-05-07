"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PricingTable() {
  const [selectedDuration, setSelectedDuration] = useState<string>("month")

  return (
    <div className="w-full">
      <div className="flex justify-center p-4 border-b border-gray-700">
        <div className="inline-flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setSelectedDuration("day")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "day" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white",
            )}
          >
            Daily
          </button>
          <button
            onClick={() => setSelectedDuration("week")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "week" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white",
            )}
          >
            Weekly
          </button>
          <button
            onClick={() => setSelectedDuration("month")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "month" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white",
            )}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 text-center py-4 border-b border-gray-700 bg-gray-800/50">
        <div className="font-medium text-gray-300">Duration</div>
        <div className="font-medium text-gray-300">1 Guild</div>
        <div className="font-medium text-gray-300">3 Guilds</div>
        <div className="font-medium text-gray-300">5 Guilds</div>
        <div className="font-medium text-gray-300">10 Guilds</div>
      </div>

      {selectedDuration === "day" && (
        <>
          <div className="grid grid-cols-5 text-center py-4 border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
            <div className="font-medium text-white">1 Day</div>
            <div className="text-gray-300">₹10</div>
            <div className="text-gray-300">₹25</div>
            <div className="text-gray-300">₹35</div>
            <div className="text-gray-300">₹60</div>
          </div>
          <div className="grid grid-cols-5 text-center py-4 border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
            <div className="font-medium text-white">3 Days</div>
            <div className="text-gray-300">₹25</div>
            <div className="text-gray-300">₹60</div>
            <div className="text-gray-300">₹90</div>
            <div className="text-gray-300">₹150</div>
          </div>
        </>
      )}

      {selectedDuration === "week" && (
        <div className="grid grid-cols-5 text-center py-4 border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
          <div className="font-medium text-white">1 Week</div>
          <div className="text-gray-300">₹45</div>
          <div className="text-gray-300">₹110</div>
          <div className="text-gray-300">₹160</div>
          <div className="text-gray-300">₹280</div>
        </div>
      )}

      {selectedDuration === "month" && (
        <div className="grid grid-cols-5 text-center py-4 border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
          <div className="font-medium text-white">1 Month</div>
          <div className="text-gray-300">₹129</div>
          <div className="text-gray-300">₹270</div>
          <div className="text-gray-300">₹399</div>
          <div className="text-gray-300">₹650</div>
        </div>
      )}

      <div className="p-4 text-center">
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
          Get Premium Now
        </Button>
      </div>
    </div>
  )
}
