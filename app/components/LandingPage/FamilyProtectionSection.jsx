import { Users, Bell, BarChart3, Share2 } from "lucide-react"

export default function FamilyProtectionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            FAMILY PROTECTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Always-On Family Protection,
            <br />
            With Live Scam Guidance
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Monitor high-risk family members and get instant alerts when they encounter suspicious activity
          </p>
        </div>

        {/* Family Dashboard Mockup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Family Dashboard</h3>
            <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">✓ 4 Members Protected</span>
          </div>

          {/* Family Members List */}
          <div className="space-y-3 mb-6">
            {/* Mom */}
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  MA
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mom (Margaret)</div>
                  <div className="text-sm text-gray-500">Last scan: 2 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded">⚠ 1 Alert</span>
                <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  View Activity
                </button>
              </div>
            </div>

            {/* Dad */}
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  DJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dad (John)</div>
                  <div className="text-sm text-gray-500">Last scan: 5 hours ago</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded">✓ All Clear</span>
                <button className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                  View Activity
                </button>
              </div>
            </div>

            {/* Grandma */}
            <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  GM
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Grandma (Mary)</div>
                  <div className="text-sm text-gray-500">Last scan: 10 mins ago</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded">🚨 2 High Risk</span>
                <button className="text-sm bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  View Activity
                </button>
              </div>
            </div>

            {/* Sister */}
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sister (Sarah)</div>
                  <div className="text-sm text-gray-500">Last scan: Yesterday</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded">✓ All Clear</span>
                <button className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                  View Activity
                </button>
              </div>
            </div>
          </div>

          {/* Alert Box */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                🚨
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">High Risk Alert - Grandma (Mary)</h4>
                  <span className="text-sm text-gray-500">30 minutes ago</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Scanned message claiming to be from <span className="font-semibold">"Medicare"</span> requesting
                  immediate payment for new card.{" "}
                  <span className="text-red-600 font-semibold">96% scam likelihood detected.</span>
                </p>
                <div className="flex gap-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
                    View Full Report
                  </button>
                  <button className="bg-white text-red-600 border border-red-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50">
                    Call Grandma
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instant Alerts */}
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Alerts</h3>
            <p className="text-sm text-gray-600">
              Get notified immediately when high-risk family members encounter potential scams
            </p>
          </div>

          {/* Activity Monitoring */}
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Activity Monitoring</h3>
            <p className="text-sm text-gray-600">
              See what scams your family members are checking and how they're protected
            </p>
          </div>

          {/* Share Protection */}
          <div className="text-center p-6 bg-pink-50 rounded-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Share Protection</h3>
            <p className="text-sm text-gray-600">
              Give up to 6 family members under one plan with centralized monitoring
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
