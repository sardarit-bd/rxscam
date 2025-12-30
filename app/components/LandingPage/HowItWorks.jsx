import React from 'react';

export default function HowItWorks() {
  const features = [
    {
      icon: "🎯",
      title: "High-confidence scoring",
      description: "Advanced AI analyzes suspicious text, patterns, matching against legal modeling—not a single keyword check.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: "🌱",
      title: "Self-learning database",
      description: "ScamRx is updated with emerging scam patterns, outcomes, and user feedback to recognize new scams faster.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: "👁️",
      title: "One-aware risk context",
      description: "We understand  and regional slang so you're warned when a campaign is targeting near you.",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Send Anything Suspicious",
      description: "Enter information, paste messages, emails and screenshots, upload files and images and use our 'talk to text button' to describe what's going on. Forward emails and texts directly into ScamRx and get an instant reply with complete scam analysis and recommendations."
    },
    {
      number: 2,
      title: "Scam Engine Runs 250+ Checks",
      description: "Our proprietary AI models evaluate fraud signals across:",
      bulletPoints: [
        "Language & persuasion tactics (urgency, fear, romance, authority)",
        "Sender & origin patterns (routing, spoofing, look-alike domains)",
        "Links & destinations (redirect chains, risky infrastructure)",
        "Images (resized photos, synthetic cues, profile inconsistencies)"
      ]
    },
    {
      number: 3,
      title: "Self-Learning Pattern Matching",
      description: "ScamRx compares your situation to evolving scam \"fingerprints\" across our continuously updated database. This is how we stay current: when campaigns shift wording, numbers, or regions—we adapt."
    },
    {
      number: 4,
      title: "Get Clarity + Next Steps",
      description: "You get clear scoring (low, medium, high, use), a safe action plan—plus shareable results for family monitoring. Need help in the moment? Our AI call agents can guide verification steps and coach you on what to say (without tipping off scammers)."
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">⚡</span>
            <span className="text-sm sm:text-base font-semibold text-gray-600 tracking-wide uppercase">
              Built for Today's Scam Wave
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Real-time scam detection powered by 250+ data sources—analyzing language, images, origin, and tactics, then telling you exactly what to do next.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-xl p-5 sm:p-6 border border-gray-200`}
            >
              <div className="flex items-start space-x-3 mb-3">
                <span className={`text-2xl ${feature.iconColor}`}>{feature.icon}</span>
                <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number Circle */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2B4FBF] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl sm:text-3xl">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  {step.bulletPoints && (
                    <ul className="space-y-2">
                      {step.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm sm:text-base text-gray-700">
                          <span className="text-[#2B4FBF] font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Connecting Line (hidden on mobile, shown between steps on desktop) */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-20 left-8 w-0.5 h-full bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 bg-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-100">
          <div className="flex items-start space-x-4 mb-6">
            <span className="text-3xl sm:text-4xl">💡</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Why ScamRx is necessary right now
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Scam campaigns change fast—new scripts, new domains, new phone numbers, new "hot" regions. ScamRx is designed to keep up with that pace by combining multi-signal analysis, self-learning pattern recognition, and geo-aware campaign context—so you don't have to guess.
              </p>
            </div>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Real-time campaign patterns
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Self-learning database updates
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              Family monitoring & alerts
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              AI call agent guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}