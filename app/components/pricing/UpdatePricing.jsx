'use client'

import React from 'react'

const plans = [
    {
        key: 'individual',
        popular: false,
        name: 'Individual Membership',
        iconBg: 'text-blue-500',
        iconPath:
            'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
        monthly: { reg: 'Reg $12/month', price: '$9', suffix: '/month' },
        annual: { reg: 'Reg $120/year', price: '$90', suffix: '/year' },
        cta: 'Get Protected Now',
        features: [
            { t: '20 ScamRx™ Scans Per Month', d: 'Results, detailed recommendations & next steps in seconds' },
            { t: '24/7 AI Powered ScamRx™ Detection Hotline', d: '15 min/month of real-time analysis and recommendations with our AI powered Threat Advisors' },
            { t: 'E-Mail & Text Forwarding', d: 'Forward suspicious emails & texts directly to ScamRx™ and get results and recommendations back in seconds' },
            { t: 'Interactive Dashboard & Report History', d: 'See past scans, reports, and personal targeting trends' },
            { t: 'Real-Time Text / Email Scam Alerts', d: 'Keep up to date on the latest scams & fraud techniques' },
            { t: 'Member-Only Webinars', d: 'Industry leading guests with the latest scams & fraud insights' },
            { t: 'Enterprise-Grade Security & Privacy', d: 'AES-256 encryption - no personal info is ever stored' },
            { t: 'Scam Awareness Toolkit & Resources', d: 'Downloadable guides and educational materials' },
            { t: 'Email Support', d: 'Priority email support' },
        ],
    },
    {
        key: 'family',
        popular: true,
        name: 'Family Membership',
        iconBg: 'text-blue-500',
        iconPath:
            'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
        monthly: { reg: 'Reg $25/month', price: '$18', suffix: '/month' },
        annual: { reg: 'Reg $250/year', price: '$180', suffix: '/year' },
        cta: 'Get Protected Now',
        features: [
            { t: 'Up To 5 Users', d: 'Protect yourself and family members' },
            { t: '100 ScamRx™ Scans Per Month', d: 'Results, detailed recommendations & next steps in seconds' },
            { t: '24/7 AI Powered ScamRx™ Detection Hotline', d: '60 min/month of real-time analysis and recommendations with our AI powered Threat Advisors' },
            { t: 'E-Mail & Text Forwarding', d: 'Forward suspicious emails & texts directly to ScamRx™ and get results and recommendations back in seconds' },
            { t: 'Interactive Family Dashboard & Report History', d: 'See past scans, reports, and personal targeting trends' },
            { t: 'Real-Time Text / Email Scam Alerts', d: 'Keep up to date on the latest scams & fraud techniques' },
            { t: 'Member-Only Webinars', d: 'Industry leading guests with the latest scams & fraud insights' },
            { t: 'Enterprise-Grade Security & Privacy', d: 'AES-256 encryption - no personal info is ever stored' },
            { t: 'Scam Awareness Toolkit & Resources', d: 'Downloadable guides and educational materials' },
            { t: 'Email Support', d: 'Priority email support' },
        ],
    },
    {
        key: 'highrisk',
        popular: false,
        name: 'High Risk Membership',
        iconBg: 'text-blue-500',
        iconPath:
            'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
        monthly: { reg: 'Reg $31/month', price: '$24', suffix: '/month' },
        annual: { reg: 'Reg $310/year', price: '$240', suffix: '/year' },
        cta: 'Get Protected Now',
        features: [
            { t: 'Up To 5 Users', d: 'Protect yourself and family members' },
            {
                t: 'Real-Time Family Member Monitoring & Alerts',
                d: "Get instant notifications when high-risk family members run scans—see what threats they're facing, review results, and step in before it's too late",
                highlight: true,
            },
            { t: '100 ScamRx™ Scans Per Month', d: 'Results, detailed recommendations & next steps in seconds' },
            { t: '24/7 AI Powered ScamRx™ Detection Hotline', d: '60 min/month of real-time analysis and recommendations with our AI powered Threat Advisors' },
            { t: 'E-Mail & Text Forwarding', d: 'Forward suspicious emails & texts directly to ScamRx™ and get results and recommendations back in seconds' },
            { t: 'Interactive Family Dashboard & Report History', d: 'See past scans, reports, and personal targeting trends' },
            { t: 'Real-Time Text / Email Scam Alerts', d: 'Keep up to date on the latest scams & fraud techniques' },
            { t: 'Member-Only Webinars', d: 'Industry leading guests with the latest scams & fraud insights' },
            { t: 'Enterprise-Grade Security & Privacy', d: 'AES-256 encryption - no personal info is ever stored' },
            { t: 'Scam Awareness Toolkit & Resources', d: 'Downloadable guides and educational materials' },
            { t: 'Email & Chat Support', d: 'Priority email & chat support' },
        ],
    },
]

function CheckItem({ title, description, highlight }) {
    return (
        <li className="flex items-start gap-3 border-b border-slate-100 py-4 last:border-b-0">
            <span className="mt-[2px] shrink-0 text-[16px] font-bold text-emerald-500">✓</span>
            <div className={`flex-1 ${highlight ? 'rounded-lg border-l-[3px] border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 p-4' : ''}`}>
                <div className={`mb-1 text-[15px] font-semibold leading-[1.4] ${highlight ? 'text-blue-900' : 'text-slate-900'}`}>{title}</div>
                <div className="text-[14px] leading-[1.5] text-slate-500">{description}</div>
            </div>
        </li>
    )
}

export default function UpdatePricing() {
    const [billing, setBilling] = React.useState('monthly') // 'monthly' | 'annual'
    const isAnnual = billing === 'annual'

    return (
        <div className="bg-gradient-to-b from-slate-50 to-white px-6 py-20">
            <div className="mx-auto container">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-[48px] font-extrabold leading-[1.2] text-slate-900 max-sm:text-[36px]">
                        AI-Powered Scam Defense Built on Machine Learning
                    </h1>
                    <p className="mx-auto max-w-4xl text-[22px] text-slate-500">
                        Every plan includes real-time protection from hundreds of threat intelligence sources, advanced pattern recognition, and 24/7 AI-powered analysis
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="mb-12 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => setBilling('monthly')}
                        className={`text-[16px] font-semibold ${!isAnnual ? 'text-slate-900' : 'text-slate-600'}`}
                    >
                        Monthly
                    </button>

                    <button
                        type="button"
                        aria-label="Toggle billing"
                        onClick={() => setBilling((v) => (v === 'monthly' ? 'annual' : 'monthly'))}
                        className={`relative h-8 w-14 cursor-pointer rounded-full transition-colors duration-300 ${isAnnual ? 'bg-blue-500' : 'bg-slate-200'
                            }`}
                    >
                        <span
                            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-0' : '-translate-x-6'
                                }`}
                        />
                    </button>

                    <button
                        type="button"
                        onClick={() => setBilling('annual')}
                        className={`text-[16px] font-semibold ${isAnnual ? 'text-slate-900' : 'text-slate-600'}`}
                    >
                        Annual
                    </button>

                    <span className="inline-block rounded-xl bg-emerald-100 px-3 py-1 text-[13px] font-bold text-emerald-800">Save 20%</span>
                </div>

                {/* Pricing Cards */}
                <div className="mb-12 grid grid-cols-3 gap-6 max-[968px]:grid-cols-1">
                    {plans.map((p) => {
                        const data = isAnnual ? p.annual : p.monthly
                        return (
                            <div
                                key={p.key}
                                className={[
                                    'relative rounded-2xl border-2 bg-white p-8 transition-all duration-300',
                                    p.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-200',
                                    'hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/15',
                                ].join(' ')}
                            >
                                {p.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.5px] text-white">
                                        Most Popular
                                    </div>
                                )}

                                {/* Icon */}
                                <div className="mb-6 h-16 w-16">
                                    <svg viewBox="0 0 24 24" className={`h-16 w-16 ${p.iconBg}`} fill="currentColor" aria-hidden="true">
                                        <path d={p.iconPath} />
                                    </svg>
                                </div>

                                <h3 className="mb-4 text-[24px] font-bold text-slate-900">{p.name}</h3>

                                <div className="mb-2">
                                    {/* Reg price */}
                                    <div className="mb-1 text-[18px] font-semibold text-slate-400 line-through">{data.reg}</div>

                                    {/* Main price */}
                                    <div className="text-[42px] font-extrabold text-slate-900 max-sm:text-[36px]">
                                        {data.price}
                                        <span className="text-[18px] font-semibold text-slate-500">{data.suffix}</span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="mb-6 w-full rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
                                >
                                    {p.cta}
                                </button>

                                <ul className="list-none">
                                    {p.features.map((f, idx) => (
                                        <CheckItem key={idx} title={f.t} description={f.d} highlight={f.highlight} />
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Annual Awareness Membership Plan (same as your HTML, kept static) */}
                <div className="relative mb-12 rounded-2xl border-2 border-amber-400 bg-gradient-to-br from-amber-100 to-amber-200 p-8">
                    <div className="absolute -top-3 left-6 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.5px] text-white">
                        Best Value · Annual Only
                    </div>

                    <div className="grid grid-cols-[2fr_1fr] items-center gap-8 max-[968px]:grid-cols-1">
                        <div>
                            <h3 className="mb-2 text-[28px] font-bold text-slate-900">ScamRx™ Awareness Membership</h3>
                            <p className="mb-4 text-[15px] text-slate-600">Stay informed and protected with essential scam education and alerts.</p>

                            <ul className="mt-4 grid list-none grid-cols-2 gap-x-6 max-[968px]:grid-cols-1">
                                {[
                                    { t: 'Member-Only Webinars', d: 'Stay informed & protected' },
                                    { t: 'Scam Alert Newsletter', d: 'Stay ahead of threats' },
                                    { t: 'Real-Time Text Alerts', d: 'Breaking threat notifications' },
                                    { t: '20% Upgrade Discount', d: 'Save when you upgrade to full protection' },
                                ].map((x, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 border-b border-white/20 py-3 last:border-b-0"
                                    >
                                        <span className="mt-[2px] shrink-0 text-[16px] font-bold text-emerald-500">✓</span>
                                        <div className="flex-1">
                                            <div className="mb-1 text-[14px] font-semibold text-slate-900">{x.t}</div>
                                            <div className="text-[14px] text-slate-500">{x.d}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center">
                            <div className="mb-2 text-[16px] font-semibold text-slate-400 line-through">Reg $25/year</div>
                            <div className="mb-2 text-[48px] font-extrabold text-slate-900 max-sm:text-[36px]">
                                $19.95<span className="text-[20px] font-semibold text-slate-500">/year</span>
                            </div>
                            <button
                                type="button"
                                className="rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-3.5 text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/30"
                            >
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>


                {/* Comparison Table */}
                {/* <div className="mt-16">
                    <h2 className="mb-8 text-center text-[32px] font-bold text-slate-900">Detailed Comparison</h2>

                    <div className="overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5 max-[968px]:overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-50">
                                    {['Feature', 'Email Protection', 'Individual', 'Family', 'Elder Assist'].map((h) => (
                                        <th
                                            key={h}
                                            className="border-b-2 border-slate-200 px-5 py-5 text-left font-bold text-slate-900"
                                        >
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Scan per month', '—', '50', '230', '500'],
                                    ['Email scan protection', '✓', '✓', '✓', '✓'],
                                    ['URL checker', '✓', '✓', '✓', '✓'],
                                    ['Breach monitoring', '—', '✓', '✓', '✓'],
                                    ['Family members', '—', '—', '5', '10'],
                                    ['SMS scanning', '✓', '✓', '✓', '✓'],
                                    ['Auto alerts', '—', '—', '✓', '✓'],
                                    ['Weekly reports', '—', '—', '—', '✓'],
                                    ['Priority support', '—', '✓', '✓', '✓'],
                                ].map((row, i) => (
                                    <tr key={i} className="last:[&>td]:border-b-0">
                                        <td className="border-b border-slate-100 px-5 py-4 text-slate-600">
                                            <strong className="text-slate-900">{row[0]}</strong>
                                        </td>
                                        {row.slice(1).map((v, j) => (
                                            <td
                                                key={j}
                                                className={[
                                                    'border-b border-slate-100 px-5 py-4 text-slate-600',
                                                    v === '✓' ? 'text-center font-bold text-emerald-500' : '',
                                                    v === '—' ? 'text-center text-slate-300' : '',
                                                ].join(' ')}
                                            >
                                                {v}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}

                {/* CTA Section */}
                {/* <div className="mt-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center">
                    <h2 className="mb-4 text-[32px] font-bold text-slate-900">Try ScamRX risk-free</h2>
                    <p className="mb-8 text-[18px] text-slate-500">Get 30 free scans. No credit card required. Cancel anytime.</p>

                    <div className="flex justify-center gap-4 max-[968px]:flex-col">
                        <button className="rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-4 text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">
                            Get Started Free
                        </button>
                        <button className="rounded-lg border-2 border-slate-200 bg-white px-8 py-4 text-[16px] font-semibold text-slate-900 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">
                            View FAQ
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
