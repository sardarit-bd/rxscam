// 'use client';

// import {
//     AlertCircle,
//     AlertTriangle,
//     CircleCheckBig,
//     Clock,
//     ShieldAlert
// } from 'lucide-react';

// export default function UrlCheckerResult({ data }) {
//     const { verdict, ai_analysis, url_display, scanned_at } = data;

//     return (
//         <div className="flex flex-col items-center px-4 py-16">
//             {/* ================= BOX 1: RESULT + SECURITY ================= */}
//             <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8">
//                 {/* Result */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//                     <div className="flex flex-col items-center">
//                         <div className="relative h-40 w-40 flex items-center justify-center">
//                             <div
//                                 className="absolute inset-0 rounded-full border-[12px]"
//                                 style={{ borderColor: verdict.badge_color }}
//                             />
//                             <div className="text-center">
//                                 <div className="text-4xl font-bold text-gray-900">
//                                     {verdict.is_threat ? '!' : '✓'}
//                                 </div>
//                                 <div className="text-xs uppercase tracking-wide text-gray-400">
//                                     {verdict.is_threat ? 'Threat Found' : 'Clean'}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div>
//                         <span
//                             className="inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium"
//                             style={{
//                                 backgroundColor: verdict.is_threat ? '#FEE2E2' : '#DCFCE7',
//                                 color: verdict.is_threat ? '#DC2626' : '#16A34A',
//                             }}
//                         >
//                             {verdict.is_threat ? <AlertTriangle size={14} /> : <CircleCheckBig size={14} />}
//                             {verdict.label}
//                         </span>

//                         <h2 className="mt-4 text-xl font-semibold text-gray-900">
//                             {ai_analysis.ai_verdict}
//                         </h2>

//                         <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//                             {ai_analysis.ai_summary}
//                         </p>

//                         <p className="mt-2 text-xs text-gray-400">
//                             URL: {url_display}
//                         </p>
//                     </div>
//                 </div>

//                 <div className="my-8 border-t border-gray-200" />

//                 {/* Security Analysis */}
//                 <div>
//                     <h3 className="text-sm font-semibold text-gray-700 mb-4">
//                         Security Analysis
//                     </h3>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {verdict.threat_types.map((type, index) => (
//                             <SecurityItem
//                                 key={index}
//                                 icon={<ShieldAlert size={16} />}
//                                 title="Threat Type"
//                                 desc={type.replace('_', ' ').toLowerCase()}
//                             />
//                         ))}
//                         {!verdict.is_threat && (
//                             <SecurityItem
//                                 icon={<Clock size={16} />}
//                                 title="Status"
//                                 desc="No known threats found in Google's database"
//                             />
//                         )}
//                     </div>

//                     {/* Google Attribution */}
//                     {/* <p className="text-xs text-gray-400 mt-4 text-center">
//                         Powered by Google Web Risk
//                     </p> */}
//                 </div>
//             </div>

//             {/* ================= BOX 2: WARNING (if threat) ================= */}
//             {verdict.is_threat && (
//                 <div className="w-full max-w-4xl bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
//                     <div className="flex gap-3">
//                         <AlertCircle className="text-red-600 mt-1" size={22} />
//                         <div>
//                             <h3 className="text-lg font-semibold text-red-800">
//                                 Warning: {verdict.label}
//                             </h3>
//                             <p className="mt-1 text-red-700">
//                                 {ai_analysis.ai_summary}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* ================= BOX 3: RECOMMENDED ACTIONS ================= */}
//             <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
//                 <div className="flex items-center gap-3 mb-7">
//                     <div className="rounded-lg">
//                         <CircleCheckBig className="text-blue-600" size={24} />
//                     </div>
//                     <h3 className="text-lg md:text-xl font-bold text-gray-900">
//                         Recommended Actions
//                     </h3>
//                 </div>

//                 <div className="space-y-5 mb-8">
//                     {ai_analysis.ai_actions.map((action, index) => (
//                         <ActionItem
//                             key={index}
//                             number={index + 1}
//                             title={action}
//                             desc=""
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* CTA Box */}
//             <div className="relative max-w-4xl rounded-2xl overflow-hidden mt-6">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800"></div>
//                 <div className="relative p-6 md:p-8">
//                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                         <div className="flex-1">
//                             <h4 className="text-lg md:text-xl font-bold text-white mb-3">
//                                 {verdict.is_threat
//                                     ? 'Your inbox could receive links exactly like this one.'
//                                     : 'This link appears clean — but new threats appear every minute.'}
//                             </h4>
//                             <p className="text-blue-100 text-sm md:text-base">
//                                 {verdict.is_threat
//                                     ? 'ScamRx monitors every email and text you receive and flags threats automatically.'
//                                     : 'ScamRx keeps you protected automatically.'}
//                             </p>
//                         </div>

//                         <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap">
//                             {verdict.is_threat ? 'Protect My Inbox →' : 'Start Free Trial →'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* Components */
// function SecurityItem({ icon, title, desc }) {
//     return (
//         <div className="flex gap-4 rounded-lg bg-gray-50 p-4">
//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-xs text-gray-600">{desc}</p>
//             </div>
//         </div>
//     );
// }

// function ActionItem({ number, title, desc }) {
//     return (
//         <div className="flex gap-4">
//             <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
//                 {number}
//             </div>
//             <div>
//                 <p className="font-medium text-gray-900">{title}</p>
//                 {desc && <p className="text-sm text-gray-600 mt-1">{desc}</p>}
//             </div>
//         </div>
//     );
// }





































'use client';

import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    AlertTriangle,
    CircleCheckBig,
    Clock,
    ShieldAlert
} from 'lucide-react';
import { useEffect, useState } from "react";

/* ─── Scan Line Overlay ─── */
function ScanOverlay({ active }) {
    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.6, duration: 0.4 }}
                >
                    <motion.div
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.2, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-white/60"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ─── Typewriter ─── */
function Typewriter({ text, delay = 0 }) {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        let i = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, ++i));
                if (i >= text.length) clearInterval(interval);
            }, 22);
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [text, delay]);
    return (
        <span>
            {displayed}
            {displayed.length < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-4 bg-current ml-0.5 align-middle"
                />
            )}
        </span>
    );
}

/* ─── Stagger variants ─── */
const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } }
};

/* ─── Floating Particles (safe) ─── */
function Particles({ count = 12, color }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => {
                const angle = (i / count) * 360;
                const distance = 80 + Math.random() * 30;
                const x = Math.cos((angle * Math.PI) / 180) * distance;
                const y = Math.sin((angle * Math.PI) / 180) * distance;
                return (
                    <motion.div
                        key={i}
                        className={`absolute w-1.5 h-1.5 rounded-full ${color}`}
                        style={{ top: "50%", left: "50%" }}
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                        animate={{ x, y, opacity: [0, 1, 0], scale: [0, 1, 0.5] }}
                        transition={{ duration: 1.5, delay: 0.8 + i * 0.05, ease: "easeOut" }}
                    />
                );
            })}
        </>
    );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function UrlCheckerResult({ data }) {
    const [scanning, setScanning] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setScanning(false), 1600);
        const t2 = setTimeout(() => setShowContent(true), 1800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const { verdict, ai_analysis, url_display } = data;
    const isThreat = verdict?.is_threat;

    const ringColor = isThreat ? "border-red-500" : "border-green-400";
    const particleColor = isThreat ? "bg-red-400" : "bg-green-400";

    return (
        <div className="flex flex-col items-center px-4 py-16">

            {/* ══ BOX 1: RESULT + SECURITY ══ */}
            <motion.div
                className="relative w-full max-w-5xl bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-8 overflow-hidden min-h-[250px]"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <ScanOverlay active={scanning} />

                {/* shimmer stripe while scanning */}
                {scanning && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent pointer-events-none"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                    />
                )}

                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={listVariants}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                {/* LEFT — circle */}
                                <motion.div
                                    className="flex flex-col items-center"
                                    variants={itemVariants}
                                >
                                    <div className="relative h-40 w-40 flex items-center justify-center">
                                        {/* main ring */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                            transition={{ duration: 0.7, type: "spring", stiffness: 180 }}
                                            className={`absolute inset-0 rounded-full border-[12px] ${ringColor}`}
                                        />

                                        {/* particles for safe */}
                                        {!isThreat && <Particles color={particleColor} />}

                                        {/* pulsing rings for threat */}
                                        {isThreat && (
                                            <>
                                                {[1, 2].map(i => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute inset-0 rounded-full border-2 border-red-400"
                                                        initial={{ scale: 1, opacity: 0.6 }}
                                                        animate={{ scale: 1.6 + i * 0.3, opacity: 0 }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: i * 0.5,
                                                            ease: "easeOut"
                                                        }}
                                                    />
                                                ))}
                                            </>
                                        )}

                                        <div className="text-center z-10">
                                            <motion.div
                                                className="text-4xl font-bold text-gray-900"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                            >
                                                {isThreat ? '!' : '✓'}
                                            </motion.div>
                                            <div className="text-xs uppercase tracking-wide text-gray-400">
                                                {isThreat ? 'Threat Found' : 'Clean'}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* RIGHT — text */}
                                <motion.div variants={itemVariants}>
                                    <motion.span
                                        className={`inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-medium ${isThreat ? 'text-red-600 bg-red-100' : 'bg-green-100 text-green-600'
                                            }`}
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
                                    >
                                        {isThreat ? <AlertTriangle size={14} /> : <CircleCheckBig size={14} />}
                                        {verdict?.label}
                                    </motion.span>

                                    <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                        <Typewriter text={ai_analysis?.ai_verdict ?? " "} delay={0.5} />
                                    </h2>

                                    <motion.p
                                        className="mt-2 text-sm text-gray-600 leading-relaxed"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.0 }}
                                    >
                                        {ai_analysis?.ai_summary}
                                    </motion.p>

                                    <motion.p
                                        className="mt-2 text-xs text-gray-400"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        URL: {url_display}
                                    </motion.p>
                                </motion.div>
                            </div>

                            {/* Divider */}
                            <motion.div
                                className="my-8 border-t border-gray-200"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                style={{ originX: 0 }}
                            />

                            {/* Security Analysis */}
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <h3 className="text-sm font-semibold text-gray-700 mb-4">
                                    Security Analysis
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    initial="hidden"
                                    animate="show"
                                    variants={listVariants}
                                >
                                    {verdict?.threat_types?.map((type, index) => (
                                        <motion.div key={index} variants={itemVariants} whileHover={{ x: 4 }}>
                                            <SecurityItem
                                                icon={<ShieldAlert size={16} />}
                                                title="Threat Type"
                                                desc={type.replace('_', ' ').toLowerCase()}
                                            />
                                        </motion.div>
                                    ))}
                                    {!isThreat && (
                                        <motion.div variants={itemVariants}>
                                            <SecurityItem
                                                icon={<Clock size={16} />}
                                                title="Status"
                                                desc="No known threats found in Google's database"
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* ══ BOX 2: WARNING ══ */}
            <AnimatePresence>
                {showContent && isThreat && (
                    <motion.div
                        className="w-full max-w-5xl bg-red-50 border border-red-200 rounded-2xl p-8 mb-8"
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                        <div className="flex gap-3">
                            <motion.div
                                animate={{ rotate: [0, -8, 8, -8, 0] }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                <AlertCircle className="text-red-600 mt-1" size={22} />
                            </motion.div>
                            <div>
                                <h3 className="text-lg font-semibold text-red-800">
                                    Warning: {verdict?.label}
                                </h3>
                                <p className="mt-1 text-red-700">
                                    {ai_analysis?.ai_summary}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ BOX 3: RECOMMENDED ACTIONS ══ */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5, type: "spring" }}
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <motion.div
                                initial={{ rotate: -30, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ delay: 0.6, type: "spring", stiffness: 220 }}
                            >
                                <CircleCheckBig className="text-blue-600" size={24} />
                            </motion.div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                Recommended Actions
                            </h3>
                        </div>

                        <motion.div
                            className="space-y-5 mb-8"
                            initial="hidden"
                            animate="show"
                            variants={listVariants}
                        >
                            {ai_analysis?.ai_actions?.map((action, index) => (
                                <motion.div
                                    key={index}
                                    className="flex gap-4"
                                    variants={itemVariants}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{action}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ BOX 4: CTA ══ */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        className="relative max-w-5xl rounded-2xl overflow-hidden mt-6 w-full"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800" />
                        <div className="relative p-6 md:p-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex-1">
                                    <motion.h4
                                        className="text-lg md:text-xl font-bold text-white mb-3"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        {isThreat
                                            ? 'Your inbox could receive links exactly like this one.'
                                            : 'This link appears clean — but new threats appear every minute.'}
                                    </motion.h4>
                                    <motion.p
                                        className="text-blue-100 text-sm md:text-base"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        {isThreat
                                            ? 'ScamRx monitors every email and text you receive and flags threats automatically.'
                                            : 'ScamRx keeps you protected automatically.'}
                                    </motion.p>
                                </div>
                                <motion.button
                                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.0, type: "spring", stiffness: 260 }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    {isThreat ? 'Protect My Inbox →' : 'Start Free Trial →'}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ─── Sub-components ─── */
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