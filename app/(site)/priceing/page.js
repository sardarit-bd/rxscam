"use client"

import  React from "react"

import { Check } from "lucide-react"
import { useState } from "react"

// Embedded Button component
const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles = "px-6 py-2.5 rounded-md font-medium transition-colors"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border-2 border-white text-white hover:bg-white/10",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default function PricingPageSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smarter Scams Need Smarter
            <br />
            Protection For Your Family
          </h1>
          <p className="text-gray-600 mb-6">Start with a free 7-day trial. No credit card needed.</p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === "yearly" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Individual Membership */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Individual Membership</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$90</div>
              <p className="text-sm text-gray-500">billed annually</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mb-6">
              Choose Individual
            </button>

            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Unlimited scam link and message analysis</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">AI-Guided Helpline text support</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Complete reports delivered to your inbox</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Educational resources and live webinars</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Access to ScamRx Safe Search extension</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Protect yourself from scams via phone, email, and text</span>
              </div>
            </div>
          </div>

          {/* Family Membership - Featured */}
          <div className="bg-white rounded-lg border-2 border-blue-600 p-6 flex flex-col relative shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Membership</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$170</div>
              <p className="text-sm text-gray-500">billed annually</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mb-6">
              Choose Family
            </button>

            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Everything in Individual, plus:</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Protect up to 4 family members (5 total accounts)</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Family dashboard to monitor activity</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Instant alerts when family members are targeted</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  Email and text forwarding (forward suspicious messages directly to ScamRx for analysis)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Add associate members for elderly parents</span>
              </div>
            </div>
          </div>

          {/* High-Risk Membership */}
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High-Risk Membership</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$240</div>
              <p className="text-sm text-gray-500">billed annually</p>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mb-6">
              Choose High-Risk
            </button>

            <div className="space-y-3 flex-grow">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Everything in Family, plus:</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Live phone support</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Priority response times</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Identity theft monitoring</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Dark web monitoring</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Breach notification and remediation assistance</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">White-glove service for high-risk situations</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">Dedicated scam coach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Associate Membership */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-8 mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Associate Membership</h3>
              </div>

              <p className="text-gray-600 mb-4">
                Designed for elderly parents or high-risk individuals who need extra help without managing their own
                account.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Must be added to an existing Family plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Account managed by primary user</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Full protection and monitoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Instant family alerts</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 text-center">
              <div className="text-4xl font-bold text-gray-900 mb-1">$10</div>
              <p className="text-sm text-gray-500 mb-4">per month</p>
              <button className="bg-blue-600 text-white px-8 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                Add Associate
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-16">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Detailed Comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Essential</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Family</th>
                  <th className="text-center p-4 font-semibold text-gray-900">Elite-level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Scam link analysis</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Email and message analysis</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">AI-powered detection</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Browser SAFE ALERTS</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Number of accounts</td>
                  <td className="text-center p-4 text-gray-700">1</td>
                  <td className="text-center p-4 text-gray-700">1</td>
                  <td className="text-center p-4 text-gray-700">5</td>
                  <td className="text-center p-4 text-gray-700">5</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Family dashboard</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Email forwarding</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Text forwarding</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Live phone support</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Dark web & ID theft monitoring</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-4 text-gray-700">Dedicated scam coach</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Priority support</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk-Free CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-12 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Try ScamRx risk-free</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with a free 7-day trial. If you're not 100% satisfied, cancel anytime—no questions asked, no credit
            card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
