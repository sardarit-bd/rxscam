'use client';

import { Activity, CircleCheck, Link, Mail, Phone, ShieldCheck, TriangleAlert, Users, Zap } from "lucide-react";



export default function HowItWorksProfessional() {
    return (
        <section className="bg-slate-50 py-10">
            <div className="">
                <div className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-10 lg:p-20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-emerald-700 px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-wide border-2 border-emerald-500 mb-5">
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Bank-Grade Security
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
                            How ScamRx™ Protects You
                        </h2>

                        <p className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            Enterprise-level scam & fraud detection that anyone can use. No technical knowledge required—just instant protection when you need it most.
                        </p>

                        {/* Trust Bar */}
                        <div className="flex justify-center gap-10 mt-8 flex-wrap">
                            {[
                                '256-bit Encryption',
                                'Results in Seconds',
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 relative">

                        {[
                            {
                                step: 1,
                                title: 'Submit Any Suspicious Communication',
                                desc:
                                    'Forward, paste, use voice-to-text or type in any communication that raised your suspicions. You can also call our 24/7 AI Threat Advisors to get instant guidance.',
                                metrics: [{ name: 'Email', icons: <Mail size={16} /> }, { name: 'Phone', icons: <Phone size={16} /> }, { name: 'URL', icons: <Link size={16} /> }, { name: "Text", icons: <Mail size={16} /> }],
                                svg: (
                                    <div className="step-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                                        </svg>
                                    </div>
                                )
                            },
                            {
                                step: 2,
                                title: 'AI Analyzes Across 47 Threat Databases',
                                desc:
                                    'Our advanced AI cross-references millions of known scam patterns, verifies sender authenticity, and scans for manipulation tactics in seconds.',
                                metrics: [{ name: "Results in Seconds", icons: <Zap size={16} /> }, { name: "97.3% Accuracy", icons: <CircleCheck size={16} /> }, { name: 'Private & Secure', icons: <ShieldCheck size={16} /> }],
                                svg: (
                                    <div class="step-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    </div>
                                )
                            },
                            {
                                step: 3,
                                title: 'Receive Clear Action Steps',
                                desc:
                                    'Get an instant verdict in plain English: threat level, specific risks detected, and exactly what to do next.',
                                metrics: [{ name: "Risk Level", icons: <TriangleAlert size={16} /> }, { name: 'Action Plan', icons: <Activity size={16} /> }, { name: 'Family Alerts', icons: <Users size={16} /> }],
                                svg: (
                                    <div class="step-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                )
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="relative bg-white p-10 rounded-2xl border-2 border-slate-200 text-center transition-all hover:border-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-extrabold shadow-lg">
                                    {item.step}
                                </div>


                                {item.svg}


                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                                    {item.desc}
                                </p>

                                <div className="flex justify-center gap-3 flex-wrap">
                                    {item.metrics.map((m, i) => (
                                        <span
                                            key={i}
                                            className="bg-slate-100 border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2"
                                        >
                                            {m.icons}
                                            <span>{m.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-4 md:p-12 rounded-2xl shadow-[0_12px_40px_rgba(37,99,235,0.3)]">
                        <p className="text-white text-2xl font-bold mb-6">
                            Protection Against Today's Hard To Detect, AI Powered Scams
                        </p>

                        <div className="flex justify-center gap-4 flex-wrap mb-4">

                            <a href="/pricing" className="bg-white text-blue-600 font-bold px-10 py-4 rounded-xl shadow-md hover:-translate-y-1 transition w-full md:w-fit">
                                <div className="text-lg">Start Free Trial</div>
                                <div className="text-[11px] opacity-70">No Credit Card Required</div>
                            </a>

                            <a href="/pricing" className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 hover:-translate-y-1 transition flex items-center gap-2 w-full md:w-fit justify-center">
                                View All Plans
                            </a>

                        </div>

                        <p className="text-white/90 text-sm">
                            ✓ 3-day free trial • ✓ Cancel anytime
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
