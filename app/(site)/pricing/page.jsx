'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Check } from 'lucide-react';

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
      <div className="flex flex-col items-center w-full max-w-7xl px-8 py-16">
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
                ? 'bg-blue-600 text-white' 
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
                  ? 'bg-blue-600 text-white' 
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
                <span className="font-bold text-5xl text-blue-700">
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
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
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
          <div className="flex flex-col p-8 border-2 border-blue-600 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative scale-[1.02]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-inter font-semibold text-sm">
              Most Popular
            </div>
            
            <div className="mb-8 mt-4">
              <h3 className="font-bold text-3xl text-gray-900 mb-4">Family</h3>
              <div className="mb-4">
                <span className="font-bold text-5xl text-blue-700">
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
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
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
                <span className="font-bold text-5xl text-blue-700">
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
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
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
        <div className="w-full bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="font-bold text-3xl text-gray-900 mb-2">Email Protection</h3>
              <div className="flex items-baseline">
                <span className="font-bold text-5xl text-blue-700">$19.95</span>
                <span className="font-inter font-normal text-gray-600 ml-2">/year</span>
              </div>
              {!isAnnual && (
                <p className="text-gray-500 font-inter font-normal mt-1">
                  (${(19.95/12).toFixed(2)}/month)
                </p>
              )}
            </div>
            <button className="mt-4 md:mt-0 bg-blue-600 text-white py-3 px-8 rounded-lg font-inter font-semibold hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Risk-Free Trial */}
        <div className="text-center">
          <h2 className="font-bold text-4xl text-gray-900 mb-6">
            Try ScamRX risk-free
          </h2>
          <button className="bg-blue-600 text-white py-4 px-12 rounded-lg font-inter font-semibold text-xl hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="flex flex-col items-center">
          {/* Footer Navigation */}
          <div className="flex flex-row justify-center items-center mb-6 space-x-8">
            <Link href="/how-it-works" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              How it Works
            </Link>
            <Link href="/pricing" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              Pricing
            </Link>
            <Link href="/glossary" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              Glossary
            </Link>
            <Link href="/faq" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              FAQ
            </Link>
            <Link href="/privacy" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              Privacy
            </Link>
            <Link href="/terms" className="font-inter font-normal text-gray-600 hover:text-blue-700">
              Terms
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="font-inter font-normal text-gray-500">
              © 2025 ScamRX, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}