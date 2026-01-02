"use client"


const scores = [
  { label: "Sender Authentication Failed", value: 25, color: "bg-red-500" },
  { label: "Suspicious Content & Language", value: 22, color: "bg-orange-500" },
  { label: "Link & URL Deception", value: 20, color: "bg-yellow-500" },
  { label: "Known Scam Pattern Match", value: 18, color: "bg-yellow-400" },
  { label: "Domain & Email Infrastructure", value: 12, color: "bg-yellow-300" },
]

export function RiskScoreBreakdown() {
  return (
    <div className="p-6 mb-6 bg-red-50 border-red-200">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">⚠️</span>
        </div>
        <h2 className="text-lg font-bold">Risk Score Breakdown</h2>
      </div>

      <div className="space-y-3">
        {scores.map((score, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">{score.label}</span>
              <span className="text-xs font-bold text-gray-700">+{score.value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${score.color} h-2 rounded-full transition-all`}
                style={{ width: `${(score.value / 25) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-red-300 flex justify-between items-center">
        <span className="text-sm font-bold">Total Risk Score</span>
        <span className="text-2xl font-bold text-red-600">97/100</span>
      </div>
    </div>
  )
}
