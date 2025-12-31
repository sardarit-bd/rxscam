'use client';

import { Check, Shield } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Calculate annual prices (20% discount)
  const annualPrice = {
    individual: 9.99 * 12 * 0.8, // $9.99/month * 12 months * 80% (20% off)
    family: 19.99 * 12 * 0.8,
    elder: 34.99 * 12 * 0.8,
    email: 19.95 // Yearly price already
  };

  const monthlyPrice = {
    individual: 9.99,
    family: 19.99,
    elder: 34.99,
    email: 19.95 / 12 // Monthly equivalent
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Main Content */}
      <div className="flex flex-col items-center w-full container mx-auto px-4 md:px-0 py-16">
        {/* Title */}
        <h1 className="font-bold text-4xl text-gray-900 mb-6 text-center">
          Simple plans to protect you and your family
        </h1>

        {/* Subtitle */}
        <p className="font-inter font-normal text-lg text-gray-600 mb-12 text-center">
          All plans include access to the ScamRX, Scam Engine and URL checker
        </p>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-16 space-x-4">

          {/* Monthly Button */}
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-xl font-inter font-medium transition
              ${!isAnnual
                ? 'pbg text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
          >
            Monthly
          </button>

          {/* Annual Button */}
          <div className="relative">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-xl font-inter font-medium transition
                ${isAnnual
                  ? 'pbg text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              Annual
            </button>

            {/* Save 20% Badge */}
            <span className="absolute -top-3 -right-4 bg-green-500 text-white text-xs font-inter font-medium px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {/* Individual Plan */}
          <div className="flex flex-col p-8 border border-gray-200 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-8">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Individual</h3>
              <div className="mb-4">
                <span className="font-bold text-5xl pcl">
                  ${isAnnual ? annualPrice.individual.toFixed(2) : monthlyPrice.individual}
                </span>
                <span className="font-inter font-normal text-gray-600 ml-2">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              {isAnnual && (
                <p className="text-green-600 font-inter font-medium mb-3">
                  Save 20% vs monthly
                </p>
              )}
              <button className="w-full pbg text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">30 scans per month</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Web-based scan engine</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">URL checker</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Breach monitoring</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Scan history & dashboard</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Email forwarding</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">SMS text scanning</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Family monitoring</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Priority support</span>
              </div>
            </div>

            {/* Scan Limits */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Scan limits:</span>
                <span className="font-inter font-semibold text-gray-800">50/month</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Max devices:</span>
                <span className="font-inter font-semibold text-gray-800">3/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter font-normal text-gray-600">Family members:</span>
                <span className="font-inter font-semibold text-gray-800">-</span>
              </div>
            </div>
          </div>

          {/* Family Plan - Most Popular */}
          <div className="flex flex-col p-8 border-2 border-blue-800 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative scale-[1.02]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pbg text-white px-6 py-2 rounded-full font-inter font-semibold text-sm">
              Most Popular
            </div>

            <div className="mb-8 mt-4">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Family</h3>
              <div className="mb-4">
                <span className="font-bold text-5xl pcl">
                  ${isAnnual ? annualPrice.family.toFixed(2) : monthlyPrice.family}
                </span>
                <span className="font-inter font-normal text-gray-600 ml-2">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              {isAnnual && (
                <p className="text-green-600 font-inter font-medium mb-3">
                  Save 20% vs monthly
                </p>
              )}
              <button className="w-full pbg text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">200 scans per month</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Web-based scan engine</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">URL checker</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Breach monitoring</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Scan history & dashboard</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Email forwarding</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">SMS text scanning</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Up to 5 family members</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Family monitoring & alerts</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Priority support</span>
              </div>
            </div>

            {/* Scan Limits */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Scan limits:</span>
                <span className="font-inter font-semibold text-gray-800">230/month</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Max devices:</span>
                <span className="font-inter font-semibold text-gray-800">10/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter font-normal text-gray-600">Family members:</span>
                <span className="font-inter font-semibold text-gray-800">-</span>
              </div>
            </div>
          </div>

          {/* Elder Assist Plan */}
          <div className="flex flex-col p-8 border border-gray-200 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-8">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Elder Assist</h3>
              <div className="mb-4">
                <span className="font-bold text-5xl pcl">
                  ${isAnnual ? annualPrice.elder.toFixed(2) : monthlyPrice.elder}
                </span>
                <span className="font-inter font-normal text-gray-600 ml-2">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              {isAnnual && (
                <p className="text-green-600 font-inter font-medium mb-3">
                  Save 20% vs monthly
                </p>
              )}
              <button className="w-full pbg text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
                Choose Plan
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">500 scans per month</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Web-based scan engine</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">URL checker</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Breach monitoring</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Scan history & dashboard</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Email forwarding</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">SMS text scanning</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Up to 10 family members</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Family monitoring & alerts</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Auto-alerts for high-risk scams</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Weekly protection reports</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Priority support</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-500 mr-3 h-5 w-5" />
                <span className="font-inter font-normal text-gray-700">Dedicated support line</span>
              </div>
            </div>

            {/* Scan Limits */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Scan limits:</span>
                <span className="font-inter font-semibold text-gray-800">500/month</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-inter font-normal text-gray-600">Max devices:</span>
                <span className="font-inter font-semibold text-gray-800">25/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-inter font-normal text-gray-600">Family members:</span>
                <span className="font-inter font-semibold text-gray-800">10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email Protection Section */}
        <div className="relative w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-green-50 via-white to-white p-8 mb-20 shadow-sm overflow-hidden">

          {/* Green glow */}
          <div className="absolute -top-12 -left-12 h-40 w-40 bg-green-300/40 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <span className="relative inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Best Value · Annual Only
          </span>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Email Protection
              </h3>
              <p className="text-gray-600 mb-4 max-w-sm">
                Advanced email scam protection and real-time link scanning.
              </p>

              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-gray-900">$19.95</span>
                <span className="text-gray-500">/year</span>
              </div>
            </div>

            {/* Middle */}
            <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
              {[
                'Email scan detection',
                'URL checker',
                'Phishing alerts',
                'SMS scanning'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  {item}
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="flex flex-col items-end gap-4">
              <div className="text-sm text-gray-500 text-right">
                <div>Scan limits: <span className="font-semibold text-gray-800">Unlimited</span></div>
                <div>Max devices: <span className="font-semibold text-gray-800">Unlimited</span></div>
              </div>

              <button className="pbg text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>
        </div>



        {/* Detailed Comparison */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 mb-16 overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Detailed Comparison
          </h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="text-left py-3">Feature</th>
                <th>Email Protection</th>
                <th>Individual</th>
                <th>Family</th>
                <th>Elder Assist</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {[
                ['Scan per month', '—', '50', '230', '500'],
                ['Email scan protection', '✔', '✔', '✔', '✔'],
                ['URL checker', '✔', '✔', '✔', '✔'],
                ['Breach monitoring', '—', '✔', '✔', '✔'],
                ['Family members', '—', '—', '5', '10'],
                ['SMS scanning', '✔', '✔', '✔', '✔'],
                ['Auto alerts', '—', '—', '✔', '✔'],
                ['Weekly reports', '—', '—', '—', '✔'],
                ['Priority support', '—', '✔', '✔', '✔'],
              ].map(([feature, e, i, f, el], idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="text-left py-4 font-medium text-gray-700">
                    {feature}
                  </td>
                  {[e, i, f, el].map((v, i2) => (
                    <td key={i2} className="py-4">
                      {v === '✔' ? (
                        <Check className="mx-auto text-green-500 w-5 h-5" />
                      ) : (
                        <span className="text-gray-500">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Risk-Free Trial */}
        <div className="w-full pbg rounded-2xl py-10 px-6 text-center text-white">
          {/* Logo Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-300">
            <Shield size={40} />
          </div>

          <h2 className="text-3xl font-bold mb-3">
            Try ScamRX risk-free
          </h2>
          <p className="text-blue-100 mb-8">
            Get 30 free scans. No credit card required. Cancel anytime.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get started free
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
