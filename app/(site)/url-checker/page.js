'use client';

import {
  Globe,
  AlertTriangle,
  Clock,
  Database,
  ShieldAlert,
  Lock,
  AlertCircle,
  CircleCheckBig
} from 'lucide-react';

export default function WebsiteCheckerPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center px-4 py-16">

      {/* Header */}
      <div className="text-center mb-10 ">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
          <Globe className="text-blue-600" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Check a Website URL
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Find out if a website is safe before you click.
        </p>
      </div>

      {/* URL Input */}
      <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-10">
        <input
          type="text"
          placeholder="https://example.com"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700 transition">
          Check URL
        </button>
        <p className="mt-3 text-center text-xs text-gray-400">
          We'll scan domain age, reputation, and phishing/malware reports.
        </p>
      </div>

      {/* ================= BOX 1: RESULT + SECURITY ================= */}
      <div className="w-full max-w-4xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">

        {/* Result */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center">
            <div className="relative h-40 w-40 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[12px] border-red-500" />
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">78</div>
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  Risk Score
                </div>
              </div>
            </div>

            <div className="mt-5 w-full max-w-xs">
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>Safe</span>
                <span>High Risk</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500" />
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-1 rounded-md bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
              <AlertTriangle size={14} />
              High Risk
            </span>

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              This site appears unsafe
            </h2>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              We've detected several red flags that suggest this website may be malicious.
              We strongly recommend avoiding this site.
            </p>
          </div>
        </div>

        <div className="my-8 border-t border-gray-200" />

        {/* Security Analysis */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-4">
            Security Analysis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SecurityItem
              icon={<Clock size={16} />}
              title="Domain age"
              desc="3 days old. Newly created domains are often used for scams."
            />
            <SecurityItem
              icon={<Database size={16} />}
              title="Phishing databases"
              desc="Found in 2 databases. Reported for phishing activity."
            />
            <SecurityItem
              icon={<ShieldAlert size={16} />}
              title="Reputation score"
              desc="Poor (12/100). Low trust score from providers."
            />
            <SecurityItem
              icon={<Lock size={16} />}
              title="SSL Certificate"
              desc="Invalid or self-signed certificate."
            />
          </div>
        </div>
      </div>

      {/* ================= BOX 2: WARNING ================= */}
      <div className="w-full max-w-4xl bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
        <div className="flex gap-3">
          <AlertCircle className="text-red-600 mt-1" size={22} />
          <div>
            <h3 className="text-lg font-semibold text-red-800">
              Warning: High Risk Website
            </h3>
            <p className="mt-1 text-red-700">
              Avoid entering passwords, personal information, or financial details.
              Do not download files or click suspicious links.
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOX 3: RECOMMENDED ACTIONS + CTA ================= */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-7">
                <div className="rounded-lg">
                  <CircleCheckBig className="text-blue-600" size={24}/>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                 Recommended Actions
                </h3>
              </div>

        <div className="space-y-5 mb-8">
          <ActionItem
            number="1"
            title="Do not visit this website"
            desc="Close the tab and avoid accessing this URL."
          />
          <ActionItem
            number="2"
            title="Report the website"
            desc="Report it to your browser or antivirus provider."
          />
          <ActionItem
            number="3"
            title="Verify the source"
            desc="If received via email or SMS, double-check the sender."
          />
        </div>

        
      </div>
      <div className="relative  max-w-4xl rounded-2xl overflow-hidden mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800"></div>
              
              <div className="absolute inset-0 opacity-10" style={{
               
              }}></div>
              
              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                      Worried about phishing after a breach?
                    </h4>
                    <p className="text-blue-100 text-sm md:text-base">
                      Use ScanRx Scam Engine to check suspicious messages and protect yourself from follow-up attacks
                    </p>
                  </div>
                  
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap">
                    Try Scam Engine →
                  </button>
                </div>
              </div>
            </div>   
    </div>
  );
}

/* Components */
function SecurityItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 rounded-lg bg-red-50 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-xs text-gray-600">{desc}</p>
      </div>
    </div>
  );
}

function ActionItem({ number, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
        {number}
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  );
}
