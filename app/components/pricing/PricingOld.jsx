
'use client';

import { useState } from 'react';





const PricingOld = () => {


    const [isAnnual, setIsAnnual] = useState(false);

    // Calculate annual prices (20% discount)
    const annualPrice = {
        individual: 90 * 12 * 0.8, // $9.99/month * 12 months * 80% (20% off)
        family: 170 * 12 * 0.8,
        elder: 240 * 12 * 0.8,
        email: 19.95 // Yearly price already
    };

    const monthlyPrice = {
        individual: 90,
        family: 170,
        elder: 240,
        email: 19.95 / 12 // Monthly equivalent
    };





    return (
        <div className="bg-gradient-to-b from-slate-50 to-white px-6 py-20">
            <div className="mx-auto max-w-[1200px]">
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
                            className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-1'
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
                <div className="mt-16">
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
                </div>

                {/* CTA Section */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center">
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
                </div>
            </div>
        </div>
    )
};