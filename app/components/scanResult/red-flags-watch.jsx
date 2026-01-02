"use client"

import { CheckCircle } from "lucide-react"

const flags = [
  "Domain different from the official",
  "Generic greeting ('Dear User' not your name)",
  "Typos, odd sentence structure, or off spacing",
  "Requests login credentials, payment info, or personal info",
]

export function RedFlagsWatch() {
  return (
    <div className="p-4 mb-4">
      <h3 className="text-sm font-bold mb-3">Red Flags to Watch For</h3>
      <div className="space-y-2">
        {flags.map((flag, index) => (
          <div key={index} className="flex gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700 leading-relaxed">{flag}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
