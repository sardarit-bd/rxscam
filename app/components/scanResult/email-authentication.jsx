"use client"


const checks = [
  {
    name: "SPF Check",
    status: "Bad",
    description: "Sender is NOT an authorized mail server",
  },
  {
    name: "DKIM Check",
    status: "Bad",
    description: "Digital signature does NOT match claimed sender",
  },
  {
    name: "DMARC Check",
    status: "Bad",
    description: "Failed sender authentication policy check",
  },
]

export function EmailAuthentication() {
  return (
    <div className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
          <span className="text-yellow-600 text-sm">✉️</span>
        </div>
        <h2 className="text-lg font-bold">Email Authentication</h2>
      </div>

      <div className="space-y-3">
        {checks.map((check, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 bg-red-50 p-3 rounded-lg border border-red-200"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-sm mb-1">{check.name}</h3>
              <p className="text-xs text-gray-600">{check.description}</p>
            </div>
            <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">
              Bad
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
