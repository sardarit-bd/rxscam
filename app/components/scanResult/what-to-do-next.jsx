"use client"

import { CheckCircle } from "lucide-react"

const steps = [
  "Delete this message immediately and do not click any links.",
  "Do NOT attempt to connect these scam attackers.",
  "If you clicked a link or REPLIED: STOP. Go to the REAL site (type URL manually) and immediately change your password.",
  "Forward to Report a official at Billing, report as spam, Monitor account Securely for 48-72 hrs (unusual activity, etc.)",
  "If you're worried or lost important, inform your Manager account DIRECTLY by calling them (using phone # from your card).",
]

export function WhatToDoNext() {
  return (
    <div className="p-6 mb-6 bg-green-50 border-green-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-lg font-bold text-green-800">What to Do Next</h2>
      </div>

      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
