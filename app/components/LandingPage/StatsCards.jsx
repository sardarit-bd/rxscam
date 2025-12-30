import React from 'react';

export default function StatsCards() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1e293b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Scans Today Card */}
            <div className="bg-[#0f172a]/50 border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                1,944
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-300 tracking-wide mb-1">
                SCANS TODAY
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Updates every second
              </p>
            </div>

            {/* Protected Card */}
            <div className="bg-[#0f172a]/50 border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3">
                $7.7M
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-300 tracking-wide mb-1">
                PROTECTED
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                This month alone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}