import Link from "next/link";

export default function ScamRxFeatureSectionAIHotline() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-6">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.05) 0%, transparent 50%)`
                }}
            />

            <div className="max-w-[1100px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="font-black text-[clamp(36px,5vw,52px)] bg-gradient-to-br from-violet-500 to-violet-600 bg-clip-text text-transparent m-0 mb-5 leading-tight">
                        Real-Time Scam Advice - Talk To An AI Threat Advisor
                    </h2>

                    <h2 className="font-black text-[clamp(36px,5vw,52px)] text-white m-0 mb-5 leading-tight">
                        Now You (& Your Parents) Can Call ScamRx<br />
                        <span className="bg-gradient-to-br from-violet-500 to-violet-600 bg-clip-text text-transparent">
                            24/7 When Something Feels Wrong
                        </span>
                    </h2>

                    <p className="text-white/90 text-[22px] leading-relaxed max-w-[700px] mx-auto mb-3 font-medium">
                        We detect scams with cutting-edge AI Technology and Data. Just describe the suspicious call, text, email or situation and get IMMEDIATE guidance in plain English.
                    </p>
                    <p className="text-white/75 text-xl leading-normal max-w-[650px] mx-auto">
                        And family members can get notified instantly too.
                    </p>
                </div>

                {/* Two-Column Feature Layout */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 mb-12">
                    {/* Left: How It Works */}
                    <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-8">
                        <h3 className="text-white text-[28px] font-extrabold mb-6 flex items-center gap-3">
                            <span className="text-4xl">📞</span>
                            How It Works
                        </h3>

                        <div className="grid gap-4">
                            {/* Step 1 */}
                            <div className="flex gap-4">
                                <div className="min-w-[40px] h-10 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    1
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1 text-lg">
                                        Call the ScamRx Hotline
                                    </div>
                                    <div className="text-white/75 text-[17px] leading-normal">
                                        One simple number. Answered instantly, 24/7, 365 days a year. No waiting, no menus.
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-4">
                                <div className="min-w-[40px] h-10 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    2
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1 text-lg">
                                        Describe What's Happening
                                    </div>
                                    <div className="text-white/75 text-[17px] leading-normal">
                                        Just talk normally. "Someone texted about a package..." Our AI understands plain English.
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4">
                                <div className="min-w-[40px] h-10 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    3
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1 text-lg">
                                        Get Your Answer in Seconds
                                    </div>
                                    <div className="text-white/75 text-[17px] leading-normal">
                                        Is it a scam? How serious? What should you do right now? Clear guidance immediately.
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-4">
                                <div className="min-w-[40px] h-10 bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    4
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1 text-lg">
                                        Family Gets Notified
                                    </div>
                                    <div className="text-white/75 text-[17px] leading-normal">
                                        Family members can receive instant alerts about the scam check to follow up.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Perfect For */}
                    <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-8">
                        <h3 className="text-white text-[28px] font-extrabold mb-6 flex items-center gap-3">
                            <span className="text-4xl">🛡️</span>
                            Perfect For
                        </h3>

                        <div className="grid gap-5">
                            {/* Feature 1 */}
                            <div className="p-[18px] bg-violet-500/10 border-l-[3px] border-violet-500 rounded-lg">
                                <div className="text-white font-bold mb-1.5 text-lg">
                                    👵 Your Elderly Parents or Other High Risk Family Members
                                </div>
                                <div className="text-white/80 text-[17px] leading-normal">
                                    Give them one simple number to call anytime they're unsure. No shame, no judgment—just help.
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="p-[18px] bg-violet-500/10 border-l-[3px] border-violet-500 rounded-lg">
                                <div className="text-white font-bold mb-1.5 text-lg">
                                    😰 When You're Not Sure
                                </div>
                                <div className="text-white/80 text-[17px] leading-normal">
                                    Something feels off but you can't explain why? Call us. We analyze it instantly.
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="p-[18px] bg-violet-500/10 border-l-[3px] border-violet-500 rounded-lg">
                                <div className="text-white font-bold mb-1.5 text-lg">
                                    👨‍👩‍👧 Peace of Mind for Families
                                </div>
                                <div className="text-white/80 text-[17px] leading-normal">
                                    You can get notified immediately, every time your parents or other high-risk family members call. See what scams they're dealing with and intervene if necessary.
                                </div>
                            </div>
                        </div>

                        {/* Included in High Risk Plan */}
                        <Link href="/pricing">
                            <div className="mt-6 py-3.5 px-5 bg-emerald-500/10 border border-emerald-500/30 rounded-[10px] text-center transition-all duration-300 cursor-pointer hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)]">
                                <div className="text-emerald-500 font-bold text-[15px]">
                                    Feature Available In High Risk Plan
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Real-World Example */}
                <div className="bg-gradient-to-br from-violet-500/10 to-violet-600/5 border-2 border-violet-500/30 rounded-2xl p-8">
                    <div className="flex gap-4 items-start">
                        <div className="text-[40px] leading-none">💬</div>
                        <div className="flex-1">
                            <p className="text-white text-xl italic leading-relaxed m-0 mb-3 font-medium">
                                "I got a text saying my bank account was locked. I called ScamRx and just read them the message. The AI told me it was a phishing scam in about 15 seconds. They even told me exactly what to look for. My daughter got a notification too, so she knows I'm being careful."
                            </p>
                            <div className="text-white/70 text-[17px] font-semibold">
                                — Dorothy M., Age 72, High Risk Plan Member
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}