"use client"

import { AlertTriangle } from "lucide-react"

export function RiskAssessment() {
  return (
    <div className="p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Risk Assessment</h2>

      <div className="flex flex-col items-center">
        {/* Risk Gauge */}
        <div className="relative w-48 h-24 mb-4">
          <svg viewBox="0 0 200 100" className="w-full h-full">
            {/* Background arc */}
            <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="#e5e7eb" strokeWidth="20" />
            {/* Green section */}
            <path d="M 20 90 A 80 80 0 0 1 66.67 23.33" fill="none" stroke="#22c55e" strokeWidth="20" />
            {/* Yellow section */}
            <path d="M 66.67 23.33 A 80 80 0 0 1 133.33 23.33" fill="none" stroke="#fbbf24" strokeWidth="20" />
            {/* Red section */}
            <path d="M 133.33 23.33 A 80 80 0 0 1 180 90" fill="none" stroke="#ef4444" strokeWidth="20" />
          </svg>

          {/* Needle */}
          <div
            className="absolute left-1/2 bottom-0 origin-bottom"
            style={{
              transform: "translateX(-50%) rotate(85deg)",
              transformOrigin: "bottom center",
              width: "4px",
              height: "70px",
            }}
          >
            <div className="w-1 h-full bg-gray-800 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-colors">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">Extreme</span>
        </button>

        <p className="text-xs text-center text-gray-600 mt-3">
          This email scored an <span className="font-semibold">extremely dangerous 97%</span>
          <br />
          on all Scamato signals scan
        </p>
      </div>
    </div>
  )
}
