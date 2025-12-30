import React from "react"
import { Target, Users, GraduationCap, Zap, Lock, CheckCircle } from "lucide-react"


function FeatureCard({icon, title, description} ) {
  return (
    <div className="rounded-lg bg-gray-50 p-6 transition-shadow hover:shadow-md">
      <div className="mb-4 text-blue-600">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI Detection",
      description: "Powered by Claude AI, trained on millions of scam patterns and updated daily with new threats.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Family Protection",
      description: "High Risk feature lets you monitor and protect elderly family members from scams remotely.",
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Learn to spot scams yourself with detailed explanations and pattern recognition training.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Results",
      description: "Get risk analysis in under 5 seconds - fast enough to stop you before you click or respond.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your data is encrypted, never sold, and automatically deleted after analysis. GDPR compliant.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Money-Back Guarantee",
      description: "30-day full refund if ScamRx doesn't meet your expectations. No questions asked.",
    },
  ]

  return (
    <section className="w-full bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="text-xl">🏆</span>
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">Industry-Leading</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">Why Choose ScamRx</h2>
          <p className="text-base text-gray-600">Comprehensive protection that goes beyond basic spam filters</p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
