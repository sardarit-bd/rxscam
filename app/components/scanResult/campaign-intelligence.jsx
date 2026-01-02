"use client"

// import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function CampaignIntelligence() {
  return (
    <div className="p-6 mb-6 bg-yellow-50 border-yellow-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-lg font-bold">Campaign Intelligence</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg border border-yellow-200">
          <p className="text-xs text-gray-600 mb-1">KNOWN VICTIMS</p>
          <p className="text-2xl font-bold text-yellow-600">347</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-yellow-200">
          <p className="text-xs text-gray-600 mb-1">SIMILAR PATTERNS</p>
          <p className="text-2xl font-bold text-yellow-600">12,489</p>
        </div>
      </div>

      <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300 flex items-start gap-2">
        <AlertTriangle className="w-4 h-4 text-yellow-700 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-800">This scam is a living, active AI bot that started on Dec 3rd</p>
      </div>
    </div>
  )
}
