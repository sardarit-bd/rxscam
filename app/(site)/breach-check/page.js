"use client"

import * as React from "react"
import { Mail, Lock } from "lucide-react"

/* =========================
   Button – Function Component
========================= */
function Button({className = "",...props}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 
      bg-blue-700 text-white hover:bg-blue-800 h-11 px-8 w-full ${className}`}
      {...props}
    />
  )
}

/* =========================
   Breach Check Section
========================= */
export default function BreachCheckSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-xl mx-auto">

        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-yellow-600" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Breach Check
          </h2>
          <p className="text-gray-600">
            See if your email or phone number has been exposed in known data breaches
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-4">

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent text-gray-700"
              />
            </div>

            {/* Button */}
            <Button>Check for Breaches</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
