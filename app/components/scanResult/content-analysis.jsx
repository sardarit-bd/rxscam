"use client"



const stats = [
  {
    number: "3",
    label: "Suspicious external links",
    color: "text-red-600",
  },
  {
    number: "1",
    label: "Phishing keywords found",
    color: "text-red-600",
  },
  {
    number: "0",
    label: "Attachments sent flagged",
    color: "text-green-600",
  },
  {
    number: "9",
    label: "Grammatical mistakes found",
    color: "text-orange-600",
  },
]

export function ContentAnalysis() {
  return (
    <div className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-purple-600 text-sm">📊</span>
        </div>
        <h2 className="text-lg font-bold">Content Analysis</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
            <p className="text-xs text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-600 mt-4 text-center">
        <span className="font-semibold">Sentiment Analysis:</span> Message engineered to trigger fear and create urgency
        to bypass logic. Ai confidence: 94%
      </p>
    </div>
  )
}
