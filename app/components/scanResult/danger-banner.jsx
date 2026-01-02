"use client"

import { AlertTriangle } from "lucide-react"

export function DangerBanner() {
  return (
    <div className="border-2 border-red-500 bg-red-50 rounded-lg p-6 mb-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-3">
          <AlertTriangle className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-red-600 mb-1">DANGER: This is Almost Certainly a Scam</h1>
        <p className="text-sm text-red-600">Do NOT click links, reply, or share any information</p>
      </div>
    </div>
  )
}
