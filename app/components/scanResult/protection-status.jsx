"use client"

import { Calendar, Flame, Lock, Shield } from "lucide-react"

const stats = [
  {
    icon: Shield,
    label: "Protection Score",
    value: "47",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Flame,
    label: "Total Threats Blocked",
    value: "5.3,200",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Calendar,
    label: "Days Protected",
    value: "89",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Lock,
    label: "Active Protections",
    value: "42",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export function ProtectionStatus() {
  return (
    <div className="p-4 mb-4">
      <h3 className="text-sm font-bold mb-4">Your Protection Status</h3>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-2">
              <div className={`${stat.bgColor} p-1.5 rounded`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <span className="text-xs text-gray-600">{stat.label}</span>
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
