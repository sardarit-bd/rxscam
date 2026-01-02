"use client"


const steps = [
  "Scammer sends mass email pretending to be from real company",
  "Creates urgency with fake 'account problem' or limited time",
  "Links lead to fake website that looks real but steals data",
  "If you enter info, they instantly access your real accounts",
]

export function ScamWorks() {
  return (
    <div className="p-4 mb-4">
      <h3 className="text-sm font-bold mb-3">How This Scam Works</h3>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
