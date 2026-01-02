"use client"

import { Share2 } from "lucide-react"

export function ScanHubButton() {
  return (
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
      <Share2 className="w-4 h-4 mr-2" />
      Scam Hub Report
    </button>
  )
}
