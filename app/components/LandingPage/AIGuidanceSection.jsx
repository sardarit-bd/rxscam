import { Trophy, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AIGuidanceSection() {
  return (
    <section className="bg-slate-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-red-500 text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4" />
            <span>FEATURE PROTECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Instant AI Guidance
            <br />
            Before You Fall Victim
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Our AI-driven helpline gives you real-time voice detection, step-by-step guidance—perfect for high-risk
            individuals who need expert help when facing suspicious calls, texts, or emails.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* How It Works */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Our AI Scam Helpline</h4>
                  <p className="text-slate-400 text-sm">
                    Toll-free number available anytime for anyone in the United States
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Describe What&apos;s Happening</h4>
                  <p className="text-slate-400 text-sm">
                    Tell us about the suspicious call, message, or &quot;I&apos;m on the phone with...&quot;
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our AI Walks You Through Next Steps</h4>
                  <p className="text-slate-400 text-sm">
                    Get clear advice on the spot. We analyze the caller, ask the right questions, and tell you the next
                    best recommendation
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">You&apos;re Now Safe. Or Report Automatically</h4>
                  <p className="text-slate-400 text-sm">
                    If it&apos;s a scam, we&apos;ll help you alert it—clearly and immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Perfect For</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    •
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">High-Risk Individuals</h4>
                  <p className="text-slate-400 text-sm">
                    Seniors, people with accessibility needs, or anyone who wants a second opinion in real-time—rapidly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    •
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Family Caregivers</h4>
                  <p className="text-slate-400 text-sm">
                    Give the phone number to loved ones so they know where to call to help them 24/7 support when
                    you&apos;re not available.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                    •
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">In-the-Moment Situations</h4>
                  <p className="text-slate-400 text-sm">
                    When you&apos;re actively on the phone with a scammer, need instant triages that various harm
                    (wethering), or unsure if you&apos;re request is legitimate
                  </p>
                </div>
              </div>

              {/* Upgrade Box */}
              <div className="bg-teal-900/40 border border-teal-700/50 rounded-lg p-4 mt-8">
                <p className="text-teal-300 text-sm">
                  <span className="text-teal-200">→ </span>
                  Adding the next tier with{" "}
                  <Link href="#" className="text-teal-400 font-semibold hover:underline">
                    PLUS & DELUXE
                  </Link>{" "}
                  <span className="text-teal-400">✦ free.</span>
                  <br />
                  (or purchase add-on separately with BASIC tier)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real User Example */}
        <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-6 mb-8">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-yellow-500 font-bold mb-2">Real user example:</h4>
              <p className="text-slate-200 text-sm leading-relaxed">
                &quot;I got a call saying my grandson was in jail and needed $4,000 bail money immediately. I was
                terrified. I called the AI helpline while they were still on the line—AI confirmed it was a known
                &apos;grandparent scam&apos; targeting seniors. They even coached me on what to say to safely hang up. I
                reported it, and the scammer gave up. This feature literally saved me $4,000.&quot;
                <br />
                <span className="text-slate-400 italic">— Pat R. • Virginia • Age 72yrs</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mb-4">
            Start Your Free Protection
          </button>
          <p className="text-slate-400 text-sm">
            Available with <span className="text-white font-semibold">PLUS & DELUXE</span> • No Setup Fees • Cancel
            Anytime
          </p>
        </div>
      </div>
    </section>
  )
}
