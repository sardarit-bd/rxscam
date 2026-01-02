import { Trophy } from "lucide-react"
import Link from "next/link"

export default function ProtectionLevelSection() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header with icon */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 text-sm font-semibold tracking-wide uppercase">Plans & Pricing</span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Protection Level</h2>

        {/* Subheading */}
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Compare plans and find the perfect protection for your family
        </p>

        {/* CTA Button */}
        <Link href={"/pricing"}>
          <button className="cursor-pointer bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            View All Plans & Pricing
          </button>
        </Link>
      </div>
    </section>
  )
}
