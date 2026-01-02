"use client"

import { Shield } from "lucide-react"

export function ThreatAnalysis() {
  return (
    <div className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-bold">Threat Analysis</h2>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-sm mb-2">What This Is?</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A phishing attempt designed to steal your login credentials by impersonating a trusted service. The scammer
            creates a sense of urgency to bypass your critical thinking and trick you into revealing sensitive
            information.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">What They Want?</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Your login credentials (username and password), likely combined with any saved payment methods or other
            personal data that they can use to access your real accounts and potentially steal money, identity, or
            sensitive information to sell or exploit. They will use stolen information to impersonate you.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            Once they have your credentials, they will use them to access any connected account, from email (which has
            more data) to banking services. They will continue using it until they stop, and, if you reuse passwords,
            the damage can multiply.
          </p>
        </div>
      </div>
    </div>
  )
}
