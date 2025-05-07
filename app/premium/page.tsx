"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Premium Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that works best for your server needs</p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700">
            <PricingTable />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Need a custom plan for multiple servers? Contact our support team</p>
            <a href="bot-support-server" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function PricingTable() {
  const [selectedDuration, setSelectedDuration] = useState<string>("day")

  return (
    <div className="w-full">
      <div className="flex justify-center p-4 border-b border-gray-700">
        <div className="inline-flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setSelectedDuration("day")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "day" ? "bg-blue-600 text-white" : "text-blue-400 hover:text-white",
            )}
          >
            Daily
          </button>
          <button
            onClick={() => setSelectedDuration("week")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "week" ? "bg-blue-600 text-white" : "text-blue-400 hover:text-white",
            )}
          >
            Weekly
          </button>
          <button
            onClick={() => setSelectedDuration("month")}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors",
              selectedDuration === "month" ? "bg-blue-600 text-white" : "text-blue-400 hover:text-white",
            )}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="block md:hidden">
        {selectedDuration === "day" && (
          <>
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-medium text-white text-center mb-2">1 Day</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">1 Guild</p>
                  <p className="text-lg font-medium text-white">₹10</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">3 Guilds</p>
                  <p className="text-lg font-medium text-white">₹25</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">5 Guilds</p>
                  <p className="text-lg font-medium text-white">₹35</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">10 Guilds</p>
                  <p className="text-lg font-medium text-white">₹60</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-medium text-white text-center mb-2">3 Days</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">1 Guild</p>
                  <p className="text-lg font-medium text-white">₹25</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">3 Guilds</p>
                  <p className="text-lg font-medium text-white">₹60</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">5 Guilds</p>
                  <p className="text-lg font-medium text-white">₹90</p>
                </div>
                <div className="bg-gray-800/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-400">10 Guilds</p>
                  <p className="text-lg font-medium text-white">₹150</p>
                </div>
              </div>
            </div>
          </>
        )}

        {selectedDuration === "week" && (
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-medium text-white text-center mb-2">1 Week</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">1 Guild</p>
                <p className="text-lg font-medium text-white">₹45</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">3 Guilds</p>
                <p className="text-lg font-medium text-white">₹110</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">5 Guilds</p>
                <p className="text-lg font-medium text-white">₹160</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">10 Guilds</p>
                <p className="text-lg font-medium text-white">₹280</p>
              </div>
            </div>
          </div>
        )}

        {selectedDuration === "month" && (
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-medium text-white text-center mb-2">1 Month</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">1 Guild</p>
                <p className="text-lg font-medium text-white">₹129</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">3 Guilds</p>
                <p className="text-lg font-medium text-white">₹270</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">5 Guilds</p>
                <p className="text-lg font-medium text-white">₹399</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-400">10 Guilds</p>
                <p className="text-lg font-medium text-white">₹650</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:block">
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
      </div>

      <div className="p-4 text-center">
        <a href="bot-support-server" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Premium Now</Button>
        </a>
      </div>
    </div>
  )
}
