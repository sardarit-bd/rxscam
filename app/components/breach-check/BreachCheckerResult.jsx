'use client';

import DOMPurify from "dompurify";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    AlertTriangle,
    CircleCheckBig,
    ExternalLink,
    Shield
} from 'lucide-react';
import { useEffect, useState } from "react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, duration = 1.2 }) {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
        let start = 0;
        const steps = 40;
        const increment = target / steps;
        const interval = (duration * 1000) / steps;
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setDisplay(target); clearInterval(timer); }
            else setDisplay(Math.floor(start));
        }, interval);
        return () => clearInterval(timer);
    }, [target, duration]);
    return <>{display}</>;
}

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
                    {/* scan bar */}
                    <motion.div
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.2, ease: "linear" }}
                    />
                    {/* dim overlay that lifts off */}
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

/* ─── Pulsing Ring (breached) ─── */
function PulseRings({ color }) {
    return (
        <>
            {[1, 2].map(i => (
                <motion.div
                    key={i}
                    className={`absolute inset-0 rounded-full border-2 ${color}`}
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
    );
}

/* ─── Floating Particle (safe state) ─── */
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
                        transition={{
                            duration: 1.5,
                            delay: 0.8 + i * 0.05,
                            ease: "easeOut",
                        }}
                    />
                );
            })}
        </>
    );
}

/* ─── Typewriter text ─── */
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

/* ─── Staggered list item ─── */
const listVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
};
const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22 } }
};

/* ─── Tag chip with pop animation ─── */
function DataChip({ label, index }) {
    return (
        <motion.li
            className="flex items-center gap-2 text-gray-600 text-sm"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, type: "spring", stiffness: 300 }}
        >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {label}
        </motion.li>
    );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function BreachCheckerResult({ ref, ScanResult }) {
    const [scanning, setScanning] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const isBreached = ScanResult?.breach_summary?.is_breached;
    const breachCount = ScanResult?.breach_summary?.breach_count ?? 0;

    useEffect(() => {
        const t1 = setTimeout(() => setScanning(false), 1600);
        const t2 = setTimeout(() => setShowContent(true), 1800);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const ringColor = isBreached ? "border-red-500" : "border-green-400";
    const pulseColor = isBreached ? "border-red-400" : "border-green-300";
    const particleColor = isBreached ? "bg-red-400" : "bg-green-400";

    /* risk bar position */
    const barPos = Math.min((breachCount / 10) * 100, 100);

    return (
        <div ref={ref} className="flex flex-col items-center px-4 py-16">

            {/* ══ BOX 1: RESULT ══ */}
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
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                            initial="hidden"
                            animate="show"
                            variants={listVariants}
                        >
                            {/* LEFT — circle */}
                            <motion.div
                                className="flex flex-col items-center"
                                variants={itemVariants}
                            >
                                <div className="relative h-40 w-40 flex items-center justify-center">
                                    {/* pulse rings */}
                                    {/* <PulseRings color={pulseColor} /> */}

                                    {/* main ring */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        transition={{ duration: 0.7, type: "spring", stiffness: 180 }}
                                        className={`absolute inset-0 rounded-full border-[12px] ${ringColor}`}
                                    />

                                    {/* particles on safe */}
                                    {!isBreached && <Particles color={particleColor} />}

                                    <div className="text-center z-10">
                                        <div className="text-4xl font-bold text-gray-900">
                                            <AnimatedCounter target={breachCount} />
                                        </div>
                                        <div className="text-xs uppercase tracking-wide text-gray-400">
                                            Breach Count
                                        </div>
                                    </div>
                                </div>

                                {/* Risk bar */}
                                <motion.div
                                    className="mt-5 w-full max-w-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="flex justify-between text-[11px] text-gray-400">
                                        <span>Safe</span>
                                        <span>High Risk</span>
                                    </div>
                                    <div className="relative mt-1 h-2 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">
                                        <motion.div
                                            initial={{ left: "0%" }}
                                            animate={{ left: `${barPos}%` }}
                                            transition={{ duration: 1.1, delay: 0.7, ease: "easeOut" }}
                                            className="absolute -top-1 w-4 h-4 bg-white border-2 border-gray-700 rounded-full shadow"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* RIGHT — text */}
                            <motion.div variants={itemVariants}>
                                <motion.span
                                    className={`inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs capitalize font-medium ${isBreached ? 'text-red-600 bg-red-100' : 'bg-green-100 text-green-600'
                                        }`}
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
                                >
                                    {isBreached ? <AlertTriangle size={14} /> : <Shield size={14} />}
                                    {ScanResult?.breach_summary?.risk_tier}
                                </motion.span>

                                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                    <Typewriter
                                        text={ScanResult?.text ?? ""}
                                        delay={0.5}
                                    />
                                </h2>

                                {isBreached && (
                                    <motion.h3
                                        className="text-sm font-semibold text-gray-700 mt-4"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        Most Recent Breach: {ScanResult?.breach_summary?.most_recent_breach}
                                    </motion.h3>
                                )}

                                {/* animated data badges */}
                                {isBreached && (
                                    <motion.div
                                        className="flex flex-wrap gap-2 mt-4"
                                        initial="hidden"
                                        animate="show"
                                        variants={listVariants}
                                    >
                                        {ScanResult?.breach_summary?.most_sessitive_Data?.map((d, i) => (
                                            <motion.span
                                                key={i}
                                                variants={itemVariants}
                                                className="text-[11px] bg-red-50 text-red-600 border border-red-200 rounded-full px-2.5 py-0.5 font-medium"
                                            >
                                                {d}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* ══ BOX 2: WARNING ══ */}
            <AnimatePresence>
                {showContent && isBreached && (
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
                                    Warning: {ScanResult?.breach_summary?.risk_tier} Risk Website
                                </h3>
                                <p className="mt-1 text-red-700">
                                    Avoid entering
                                    {ScanResult?.breach_summary?.most_sessitive_Data?.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            className="font-semibold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                        >
                                            {" " + item + ","}
                                        </motion.span>
                                    ))}.
                                    Do not download files or click suspicious links.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ BOX 3: RECOMMENDED ACTIONS ══ */}
            <AnimatePresence>
                {showContent && isBreached && (
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
                            {[
                                { n: "1", title: "Do not visit this website", desc: "Close the tab and avoid accessing this URL." },
                                { n: "2", title: "Report the website", desc: "Report it to your browser or antivirus provider." },
                                { n: "3", title: "Verify the source", desc: "If received via email or SMS, double-check the sender." },
                            ].map(({ n, title, desc }) => (
                                <motion.div
                                    key={n}
                                    className="flex gap-4"
                                    variants={itemVariants}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                                        {n}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{title}</p>
                                        <p className="text-sm text-gray-600 mt-1">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ══ BOX 4: BREACH LIST ══ */}
            <AnimatePresence>
                {showContent && isBreached && (
                    <motion.div
                        className="max-w-5xl rounded-2xl overflow-hidden mt-6 w-full bg-white shadow-lg border border-gray-200 p-5 mb-5"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    >
                        <h3 className="text-sm font-semibold text-gray-700 mb-4">
                            Breached Website List:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ScanResult?.breachs?.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ delay: index * 0.1, duration: 0.45, type: "spring" }}
                                    whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(0,0,0,0.09)" }}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm cursor-default"
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.div
                                            className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100"
                                            whileHover={{ scale: 1.08, rotate: 3 }}
                                            transition={{ type: "spring", stiffness: 280 }}
                                        >
                                            <img
                                                src={item?.LogoPath}
                                                alt={item?.Name}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </motion.div>
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">{item?.Name}</h2>
                                            <div className="flex items-center gap-1">
                                                <a target="_blank" className="text-gray-600/70 text-sm" href={item?.Domain}>
                                                    {item?.Domain}
                                                </a>
                                                <ExternalLink size={14} className="text-gray-600/70" />
                                            </div>
                                        </div>
                                    </div>

                                    <p
                                        className="text-sm text-gray-600 leading-relaxed mb-4"
                                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.Description) }}
                                    />

                                    <h4 className="text-gray-800 font-semibold mb-2">Compromised data:</h4>

                                    <ul className="space-y-1 mb-5">
                                        {item?.DataClasses?.map((d, idx) => (
                                            <DataChip key={idx} label={d} index={idx} />
                                        ))}
                                    </ul>

                                    {/* <motion.button
                                        className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        View Details
                                    </motion.button> */}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
