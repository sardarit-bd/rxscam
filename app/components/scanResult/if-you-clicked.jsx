"use client"

import { AlertTriangle } from "lucide-react"

const urgentSteps = [
  "Change your password at the REAL site (type URL manually) NOW.",
  "Check your account for ANY unauthorized activity (charges, login attempts, changes).",
  "Inform your account or service directly using verified contact from their website (Call them if possible).",
  "Report the scam to local authorities if you provided sensitive financial info or lost money.",
  "Monitor your credit report and consider a fraud alert if you shared SSN or financial data.",
]

export function IfYouClicked() {
  return (
    <div className="p-6 mb-6 bg-red-100 border-red-300">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-bold text-red-800">If You Already Clicked</h2>
      </div>

      <ul className="space-y-3">
        {urgentSteps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
