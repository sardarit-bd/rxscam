'use client';

import {
    AlertCircle,
    AlertTriangle,
    CircleCheckBig,
    Clock,
    ShieldAlert
} from 'lucide-react';

export default function UrlCheckerResult({ data }) {
    const { verdict, ai_analysis, url_display, scanned_at } = data;

    return (
        <div className="flex flex-col items-center px-4 py-16">
            {/* ================= BOX 1: RESULT + SECURITY ================= */}
            <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
                {/* Result */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col items-center">
                        <div className="relative h-40 w-40 flex items-center justify-center">
                            <div
                                className="absolute inset-0 rounded-full border-[12px]"
                                style={{ borderColor: verdict.badge_color }}
                            />
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900">
                                    {verdict.is_threat ? '!' : '✓'}
                                </div>
                                <div className="text-xs uppercase tracking-wide text-gray-400">
                                    {verdict.is_threat ? 'Threat Found' : 'Clean'}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span
                            className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium"
                            style={{
                                backgroundColor: verdict.is_threat ? '#FEE2E2' : '#DCFCE7',
                                color: verdict.is_threat ? '#DC2626' : '#16A34A',
                            }}
                        >
                            {verdict.is_threat ? <AlertTriangle size={14} /> : <CircleCheckBig size={14} />}
                            {verdict.label}
                        </span>

                        <h2 className="mt-4 text-xl font-semibold text-gray-900">
                            {ai_analysis.ai_verdict}
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                            {ai_analysis.ai_summary}
                        </p>

                        <p className="mt-2 text-xs text-gray-400">
                            URL: {url_display}
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
                        {verdict.threat_types.map((type, index) => (
                            <SecurityItem
                                key={index}
                                icon={<ShieldAlert size={16} />}
                                title="Threat Type"
                                desc={type.replace('_', ' ').toLowerCase()}
                            />
                        ))}
                        {!verdict.is_threat && (
                            <SecurityItem
                                icon={<Clock size={16} />}
                                title="Status"
                                desc="No known threats found in Google's database"
                            />
                        )}
                    </div>

                    {/* Google Attribution */}
                    {/* <p className="text-xs text-gray-400 mt-4 text-center">
                        Powered by Google Web Risk
                    </p> */}
                </div>
            </div>

            {/* ================= BOX 2: WARNING (if threat) ================= */}
            {verdict.is_threat && (
                <div className="w-full max-w-4xl bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
                    <div className="flex gap-3">
                        <AlertCircle className="text-red-600 mt-1" size={22} />
                        <div>
                            <h3 className="text-lg font-semibold text-red-800">
                                Warning: {verdict.label}
                            </h3>
                            <p className="mt-1 text-red-700">
                                {ai_analysis.ai_summary}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* ================= BOX 3: RECOMMENDED ACTIONS ================= */}
            <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                <div className="flex items-center gap-3 mb-7">
                    <div className="rounded-lg">
                        <CircleCheckBig className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        Recommended Actions
                    </h3>
                </div>

                <div className="space-y-5 mb-8">
                    {ai_analysis.ai_actions.map((action, index) => (
                        <ActionItem
                            key={index}
                            number={index + 1}
                            title={action}
                            desc=""
                        />
                    ))}
                </div>
            </div>

            {/* CTA Box */}
            <div className="relative max-w-4xl rounded-2xl overflow-hidden mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800"></div>
                <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                                {verdict.is_threat
                                    ? 'Your inbox could receive links exactly like this one.'
                                    : 'This link appears clean — but new threats appear every minute.'}
                            </h4>
                            <p className="text-blue-100 text-sm md:text-base">
                                {verdict.is_threat
                                    ? 'ScamRx monitors every email and text you receive and flags threats automatically.'
                                    : 'ScamRx keeps you protected automatically.'}
                            </p>
                        </div>

                        <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap">
                            {verdict.is_threat ? 'Protect My Inbox →' : 'Start Free Trial →'}
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
        <div className="flex gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
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
                {desc && <p className="text-sm text-gray-600 mt-1">{desc}</p>}
            </div>
        </div>
    );
}