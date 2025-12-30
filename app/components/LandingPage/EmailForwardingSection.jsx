import { Mail, Search, FileText, Bell, Briefcase, AlertTriangle, Users, ShieldCheck } from "lucide-react"

export default function EmailForwardingSection() {
  return (
    <section className="bg-blue-50/50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Premium Feature Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
            <span className="text-yellow-400">⭐</span>
            PREMIUM FEATURE
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Email & Text Forwarding</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Forward suspicious emails & texts directly to ScamRx and get a complete threat analysis sent back to you
            instantly. No copy-paste, no hassle.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Forward</h3>
            <p className="text-gray-600 text-sm">Send suspicious emails to your unique ScamRx address</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analyze</h3>
            <p className="text-gray-600 text-sm">AI scans message content, links, and sender reputation</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Results</h3>
            <p className="text-gray-600 text-sm">Instant detailed report sent back to your inbox</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Family Alerts</h3>
            <p className="text-gray-600 text-sm">Critical threats shared with your protection network</p>
          </div>
        </div>

        {/* Feature Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Busy Professionals</h3>
              <p className="text-gray-600 text-sm">Check on-the-go without logging into apps or websites</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">High-Risk Individuals</h3>
              <p className="text-gray-600 text-sm">No copy-paste required—just forward from phone</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Family Peace of Mind</h3>
              <p className="text-gray-600 text-sm">
                Parents forward suspicious messages—you get notified and can step in immediately
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Protection</h3>
              <p className="text-gray-600 text-sm">
                Get scam alerts in seconds—before you click, call, or share information
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <p className="text-gray-900 text-lg italic mb-4">
            "I forward every suspicious text I get. Results in my inbox in seconds. So much easier than logging in or
            copy-pasting!"
          </p>
          <p className="text-gray-500 text-sm">— Robert C., Family Plan Member</p>
        </div>
      </div>
    </section>
  )
}
