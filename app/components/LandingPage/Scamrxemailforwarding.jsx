
const ScamRxEmailForwarding = () => {
    return (
        <div className="min-h-screen bg-slate-50 px-5 py-5">
            <div className="max-w-[1400px] mx-auto">
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.4)]">
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
                        }}
                    />

                    <div className="relative z-10 px-8 py-20 md:px-12 lg:px-16 lg:py-20">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="text-lg font-bold tracking-[2.5px] text-white/85 mb-4">
                                ScamRx™ Email & Text Forwarding
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[44px] font-black text-white mb-5 leading-tight">
                                Forward. Analyze. Protect.<br />All in Seconds.
                            </h2>
                            <p className="text-lg md:text-xl text-white/95 max-w-[900px] mx-auto leading-relaxed">
                                Forward any suspicious email or text message to ScamRx™ and receive instant, expert-level analysis with clear action steps—no copying, pasting, or explaining needed.
                            </p>
                        </div>

                        {/* Value Props */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {/* Value 1 */}
                            <div className="bg-white/15 backdrop-blur-[10px] border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Simple as Forwarding</h3>
                                <p className="text-[15px] text-white/90 leading-relaxed">
                                    Just forward the email or text directly to ScamRx™—no typing, no screenshots, no copying links.
                                </p>
                            </div>

                            {/* Value 2 */}
                            <div className="bg-white/15 backdrop-blur-[10px] border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Results in Seconds</h3>
                                <p className="text-[15px] text-white/90 leading-relaxed">
                                    Our proprietary AI, machine learning models, and scam databases analyze and respond in under 10 seconds.
                                </p>
                            </div>

                            {/* Value 3 */}
                            <div className="bg-white/15 backdrop-blur-[10px] border border-white/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                                <div className="w-16 h-16 mx-auto mb-5 bg-white rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Clear Next Steps</h3>
                                <p className="text-[15px] text-white/90 leading-relaxed">
                                    Get straightforward guidance: Is it a scam? How dangerous? What should you do right now?
                                </p>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-14 mb-14">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center mb-12">
                                How Email & Text Forwarding Works
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-10">
                                {/* Step 1 */}
                                <div className="text-center">
                                    <div className="relative mt-10 mb-6">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-extrabold text-base border-4 border-white">
                                            1
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-3">Forward to ScamRx™</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Forward suspicious email or text to your unique ScamRx™ address—takes 2 seconds
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="text-center">
                                    <div className="relative mt-10 mb-6">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                                <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                                                <circle cx="12" cy="10" r="2" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-extrabold text-base border-4 border-white">
                                            2
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-3">AI Analyzes Instantly</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Advanced AI + machine learning + 47 threat databases scan for scam patterns, verify links, check sender
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="text-center">
                                    <div className="relative mt-10 mb-6">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-extrabold text-base border-4 border-white">
                                            3
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-3">Get Results Emailed/Texted</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Receive detailed verdict: risk level, what was detected, specific actions to take to stay safe
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="text-center">
                                    <div className="relative mt-10 mb-6">
                                        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
                                            <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                            </svg>
                                        </div>
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-extrabold text-base border-4 border-white">
                                            4
                                        </div>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 mb-3">Family Gets Alerted</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        If family members opted in, they receive copies of high-risk threat warnings to monitor your safety
                                    </p>
                                </div>
                            </div>

                            {/* Example Box */}
                            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-blue-600" viewBox="0 0 24 24">
                                            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800">Real Example: See It In Action</h4>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 items-center w-full">
                                    {/* You Forward */}
                                    <div className="bg-white border-2 border-slate-200 rounded-xl p-5 w-full col-span-3">
                                        <div className="text-xs font-bold tracking-wide text-slate-600 mb-3">You Forward →</div>
                                        <div className="text-sm text-slate-800 leading-relaxed font-mono">
                                            From: security@paypal-verify.tk<br />
                                            Subject: URGENT: Account Suspended<br /><br />
                                            Your PayPal account has been limited due to unusual activity. Click here to verify your identity within 24 hours or account will be permanently closed.<br /><br />
                                            [Verify Now]
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex flex-row lg:flex-col items-center gap-2 justify-center w-full lg:w-fit col-span-1">
                                        <div className="text-4xl text-emerald-500 rotate-90 lg:rotate-0">→</div>
                                        <div className="text-xs font-bold tracking-wide text-emerald-500 uppercase">8 Seconds</div>
                                        <div className="text-4xl text-emerald-500 rotate-270 lg:rotate-180">→</div>
                                    </div>

                                    {/* ScamRx Responds */}
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-500 rounded-xl p-5 w-full col-span-3">
                                        <div className="text-xs font-bold tracking-wide text-slate-600 mb-3">← ScamRx™ Responds</div>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-bold text-sm mb-3">
                                            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                            </svg>
                                            HIGH RISK SCAM
                                        </div>
                                        <div className="text-sm text-slate-800 leading-relaxed font-mono">
                                            <strong>⚠️ PHISHING ATTACK DETECTED</strong><br /><br />
                                            <strong>What We Found:</strong><br />
                                            • Fake domain (paypaI-verify.tk uses "I" not "l")<br />
                                            • Urgency tactic (24-hour deadline)<br />
                                            • Suspicious .tk domain (free hosting)<br />
                                            • Link goes to malicious site<br /><br />
                                            <strong>What To Do:</strong><br />
                                            ✓ Delete immediately, do NOT click<br />
                                            ✓ Report to real PayPal<br />
                                            ✓ Check actual PayPal account directly<br /><br />
                                            <strong>Family Notified:</strong> Sarah R. (daughter)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                            {/* Feature 1 */}
                            <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-xl p-6 flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-7 h-7 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-2">Full Header Analysis</h4>
                                    <p className="text-sm text-white/90 leading-relaxed">
                                        We analyze complete email headers to trace actual sender, detect spoofing, and verify domain authenticity
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-xl p-6 flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-7 h-7 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-2">Link Safety Check</h4>
                                    <p className="text-sm text-white/90 leading-relaxed">
                                        Every URL is scanned against blacklists, malware databases, and phishing patterns before you're at risk
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-xl p-6 flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-7 h-7 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-2">Language Pattern Detection</h4>
                                    <p className="text-sm text-white/90 leading-relaxed">
                                        Machine learning identifies urgency tactics, emotional manipulation, and common scam phrases
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white/10 backdrop-blur-[10px] border border-white/20 rounded-xl p-6 flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-7 h-7 fill-blue-600" viewBox="0 0 24 24">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L19 9l-8 8z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-white mb-2">Brand Impersonation Check</h4>
                                    <p className="text-sm text-white/90 leading-relaxed">
                                        Detects fake logos, similar domain names, and unauthorized use of trusted company branding
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScamRxEmailForwarding;