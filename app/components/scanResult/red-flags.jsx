"use client"

import { AlertCircle, FileQuestion, Flag, LinkIcon, MessageSquare, UserX } from "lucide-react"

const flags = [
  {
    id: 1,
    icon: AlertCircle,
    title: "URGENT LANGUAGE",
    description: '"Act now" or "respond quickly"',
    detail:
      "Creates false time pressure to bypass thinking. Legitimate companies rarely demand immediate action via unsolicited email.",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: 2,
    icon: LinkIcon,
    title: "SUSPICIOUS LINK",
    description: "URL doesn't match claimed sender",
    detail: 'Domain used "k" instead of "u". Always bad shown URL are commonly used, but the link could redirect.',
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: 3,
    icon: UserX,
    title: "SENDER MISMATCH",
    description: "Display name doesn't match email",
    detail:
      "Email is sent from a Gmail address while impersonating a company. Examples like these showing this is a fake email.",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "GENERIC GREETING",
    description: '"Dear User" instead of your name',
    detail: "Mass-sent without true customer data. Real companies address their customers by name when possible.",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: 5,
    icon: FileQuestion,
    title: "INFORMATION REQUEST",
    description: 'Asks for "verification" info',
    detail:
      "You cannot use this message as proof you have any important info to the company. No company will ask your password by email.",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
]

export function RedFlags() {
  return (
    <div className="p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="w-5 h-5 text-gray-600" />
        <h2 className="text-lg font-bold">Red Flags</h2>
      </div>

      <div className="space-y-3">
        {flags.map((flag) => (
          <div key={flag.id} className={`${flag.bgColor} border ${flag.borderColor} rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <flag.icon className={`w-5 h-5 ${flag.iconColor} flex-shrink-0 mt-0.5`} />
              <div className="flex-1">
                <h3 className="font-bold text-sm text-red-600 mb-1">{flag.title}</h3>
                <p className="text-sm text-red-600 mb-2">{flag.description}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{flag.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
