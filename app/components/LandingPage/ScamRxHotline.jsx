
const ScamRxHotline = () => {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="container mx-auto">
                <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
                        }}
                    />

                    <div className="relative z-10 px-8 py-20 md:px-12 lg:px-16 lg:py-20">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="text-lg font-bold tracking-[2.5px] text-white/85 mb-6">
                                ScamRx™ 24/7 Threat Advisory Hotline
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white mb-5 leading-tight">
                                Talk To An AI Threat Advisor<br />The Moment Something Feels Wrong
                            </h2>
                            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-[900px] mx-auto leading-relaxed">
                                Real-time voice guidance from our advanced, AI trained Threat Advisors to detect scams, verify threats and walk you through EXACTLY what to do to stay SAFE. No waiting, no confusion, just instant, expert guidance when you need it most.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {/* Feature 1 */}
                            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/8 hover:border-blue-500/50 hover:-translate-y-1">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
                                    <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                                <h3 className="text-[22px] font-bold text-white mb-3">Call 24/7 Anytime</h3>
                                <p className="text-[15px] text-slate-300 leading-relaxed">
                                    Reach our AI Threat Advisors any time, day or night, whenever you need instant guidance. No waiting on hold.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/8 hover:border-blue-500/50 hover:-translate-y-1">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
                                    <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-[22px] font-bold text-white mb-3">Voice Verification</h3>
                                <p className="text-[15px] text-slate-300 leading-relaxed">
                                    Advanced voice analysis detects manipulation tactics, urgency patterns, and common scam scripts.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/8 hover:border-blue-500/50 hover:-translate-y-1">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
                                    <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                    </svg>
                                </div>
                                <h3 className="text-[22px] font-bold text-white mb-3">Instant Analysis</h3>
                                <p className="text-[15px] text-slate-300 leading-relaxed">
                                    AI analyzes the threat in real-time while you're on the call—no waiting for callbacks or email responses.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/8 hover:border-blue-500/50 hover:-translate-y-1">
                                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center shadow-[0_8px_24px_rgba(59,130,246,0.3)]">
                                    <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-[22px] font-bold text-white mb-3">Step-by-Step Guidance</h3>
                                <p className="text-[15px] text-slate-300 leading-relaxed">
                                    Clear, simple instructions on exactly what to do next—customized to your specific situation.
                                </p>
                            </div>
                        </div>

                        {/* When to Call */}
                        <div className="bg-emerald-500/10 border-2 border-emerald-500/30 rounded-2xl p-10 mb-16">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-extrabold text-emerald-500 mb-3">
                                    When To Call Our AI Threat Advisor
                                </h3>
                                <p className="text-base text-slate-300">
                                    If any of these situations sound familiar, call us immediately—don't wait
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Scenario 1 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
                                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-2">You Received a Suspicious Call</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Someone claiming to be from your bank, the IRS, tech support, or a government agency asking for personal information or payment.
                                        </p>
                                    </div>
                                </div>

                                {/* Scenario 2 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-2">Urgent Email Demanding Action</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Email saying your account will be closed, you owe money, or you've won a prize. Read it to our AI and get an instant verdict before you click anything.
                                        </p>
                                    </div>
                                </div>

                                {/* Scenario 3 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-2">Threatening Text Message</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Text about a package delivery, unpaid bill, or account verification with a suspicious link. We'll check the link safety and guide you on next steps.
                                        </p>
                                    </div>
                                </div>

                                {/* Scenario 4 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 fill-emerald-400" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-bold text-white mb-2">Something Just Feels Off</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Can't explain why, but something about the message, call, or request doesn't feel right. Trust your instincts—call us and we'll investigate together.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="mb-16">
                            <h3 className="text-3xl font-extrabold text-white text-center mb-12">
                                How The AI Threat Advisor Works
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Step 1 */}
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]">
                                        1
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Call Anytime</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Contact our hotline from any phone, 24/7/365. No waiting on hold.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]">
                                        2
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Describe Situation</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Tell our AI what happened or read the suspicious message out loud.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]">
                                        3
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">AI Analyzes</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Advanced AI checks threat databases, analyzes patterns, verifies authenticity in real-time.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-[0_8px_24px_rgba(59,130,246,0.4)]">
                                        4
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">Get Guidance</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Receive clear verdict, risk level, and exact steps to protect yourself.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Real User Example */}
                        <div className="bg-emerald-500/10 border-2 border-emerald-500/30 backdrop-blur-[10px] rounded-2xl p-10">
                            <div className="text-md font-bold tracking-[2px] text-emerald-400 mb-6 text-left">
                                Real User Example:
                            </div>
                            <div className="relative">
                                <div className="flex flex-col lg:flex-row gap-1">
                                    <div className="w-fit">
                                        <svg className="w-12 h-12 fill-green-400/30 mb-6 mx-auto" viewBox="0 0 24 24">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>
                                    <p className="w-full text-md md:text-lg text-slate-200 leading-relaxed mb-8 text-left font-light italic">
                                        "I got a call saying my grandson was in jail and needed $7,500 bail money immediately. I was terrified. I called the ScamRx helpline—they confirmed it was a known 'grandparent scam' targeting seniors. They even coached me on what to do. This feature literally saved me $7,500."
                                    </p>
                                </div>
                                <div className="text-left">
                                    <div className="text-lg font-bold text-white mb-1">— Pat R.</div>
                                    <div className="text-sm text-slate-400">Virginia • Age 72</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScamRxHotline;