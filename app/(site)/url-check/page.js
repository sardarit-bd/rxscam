import  React from "react"
import { Globe, Search, Mail } from "lucide-react"



function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function URLCheckerPage() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">Check a Website URL</h2>
          <p className="text-center text-gray-600 mb-8">Find out if a website is safe before you click</p>

          {/* Form */}
          <div className="space-y-4">
            {/* URL Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Check Button */}
            <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-base font-semibold rounded-lg">
              Check URL
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            We'll scan domain age, reputation, and phishing/malware reports.
          </p>
        </div>
      </div>
    </section>
  )
}
