"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function TechnicalDetails() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="p-6 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between hover:bg-gray-50 -m-6 p-6 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-sm">🔧</span>
          </div>
          <h2 className="text-lg font-bold">Technical Details</h2>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="text-red-600">🔍</span>
              Domain Investigation
            </h3>
            <p className="text-gray-600 text-xs ml-6">Analyzed domain is less than 30 days old and is not registered</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">IP Chain Detection</h3>
            <p className="text-gray-600 text-xs">Message headers show 3 suspicious hops in non-standard locations</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">URL Obfuscation</h3>
            <p className="text-gray-600 text-xs">Link uses character substitution to hide: o→0, i→l, rn→m</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Attachments</h3>
            <p className="text-gray-600 text-xs">No suspicious attachments detected in this message</p>
          </div>
        </div>
      )}
    </div>
  )
}
