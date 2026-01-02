"use client"

import { FileText } from "lucide-react"

export function Overview() {
  return (
    <div className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-bold">Overview</h2>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-50 p-3 rounded border border-gray-200">
          <p className="text-sm font-mono text-gray-700">
            <span className="text-blue-600">Scammer package</span> includes{" "}
            <span className="text-red-600">"I'm an authorized rep to an</span>{" "}
            <span className="text-red-600">incorrect address"</span> message.{" "}
            <span className="text-blue-600">Always</span> update your shipping information via{" "}
            <span className="font-bold">DIRECT</span> to website (type URL manually).
          </p>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          <span className="font-semibold">3 huge impossibilities:</span>
        </p>

        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2">
            <span className="text-gray-400">•</span>
            <span>No shipping company uses the word "authorized"</span>
          </li>
          <li className="flex gap-2">
            <span className="text-gray-400">•</span>
            <span>
              <span className="font-semibold">Legitimate email</span> came from "k" instead of "u"
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
