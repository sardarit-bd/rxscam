import {
    ArrowRight,
    Copy,
    Globe,
    Mail,
    MessageSquare,
    Users,
} from "lucide-react";
import Link from "next/link";

export default function HowScamRXWorks() {
    return (
        <div className="min-h-screen bg-white py-16">
            <div className="container mx-auto py-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">
                        How ScamRX Works
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg">
                        Three simple ways to check scams and keep your family safe
                    </p>
                </div>

                {/* ===================== */}
                {/* On-site Scam Engine */}
                {/* ===================== */}
                <div className="bg-gray-50 rounded-2xl p-10 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Globe className="pcl w-6 h-6" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    On-site Scam Engine
                                </h3>
                            </div>

                            <p className="text-base text-gray-600 mb-8 max-w-lg">
                                The fastest way to check suspicious messages right from your browser.
                            </p>

                            <ul className="space-y-5 text-base text-gray-700">
                                <li className="flex gap-4">
                                    <span className="pcl font-bold text-lg">1</span>
                                    <div>
                                        <span className="font-medium">Paste any suspicious message</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Copy and paste emails, texts, or DMs into our analyzer
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="pcl font-bold text-lg">2</span>
                                    <div>
                                        <span className="font-medium">Get instant analysis & score</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            AI-powered detection provides a risk score and explanation
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="pcl font-bold text-lg">3</span>
                                    <div>
                                        <span className="font-medium">Review and save to dashboard</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Access your scan history anytime from your dashboard
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <button className="mt-10 inline-flex items-center gap-3 pbg text-white text-base font-medium px-6 py-4 rounded-lg hover:bg-blue-800 transition-colors">
                                Try Scam Engine
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Right Mock UI */}
                        <div className="bg-gray-100 border border-gray-200 shadow-xl rounded-2xl p-6">
                            <div className="flex justify-center">
                                <div className="bg-white rounded-xl shadow-lg p-5 w-[420px]">
                                    <div className="flex items-center gap-2 mb-5">
                                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 mb-8 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-10 bg-blue-200 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===================== */}
                {/* Email Forwarding */}
                {/* ===================== */}
                <div className="bg-green-50 rounded-2xl p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Left Mock */}
                        <div className="flex justify-center">
                            <div className="bg-blue-100 border-3 border-blue-200 shadow-2xl rounded-3xl p-8 w-[420px]">

                                {/* First Container - Email Preview */}
                                <div className="bg-white rounded-2xl p-5 shadow-2xl">
                                    <div className="flex items-start gap-4 mb-4 border-b border-gray-200 pb-4">
                                        <Mail className="text-gray-800 w-6 h-6 my-auto" />
                                        <div>
                                            <p className="text-sm text-gray-500">To:</p>
                                            <p className="text-base font-medium text-gray-900">
                                                check@scamrx.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Placeholder lines */}
                                    <div className="h-3 bg-gray-200 rounded-xl w-3/4 mt-4"></div>
                                    <div className="h-3 bg-gray-200 rounded-xl w-full mt-3"></div>
                                    <div className="h-3 bg-gray-200 rounded-xl w-3/4 mt-3"></div>
                                </div>

                                {/* Arrow Icon - Center and smaller */}
                                <div className="flex justify-center my-5">
                                    <ArrowRight size={20} strokeWidth={1.75} className="text-gray-900" />
                                </div>

                                {/* Second Container - Result */}
                                <div className="bg-white rounded-lg p-5 flex items-center gap-4 shadow-2xl">
                                    <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-sm font-bold text-red-600">
                                        87
                                    </span>
                                    <div>
                                        <p className="text-base font-semibold text-gray-900">
                                            Likely Scam
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            High risk detected
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                    <Mail className="text-green-600 w-6 h-6" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Email Forwarding
                                </h3>
                            </div>

                            <p className="text-base text-gray-600 mb-8 max-w-lg">
                                Simply forward suspicious emails to ScamRx for automatic analysis.
                            </p>

                            <ul className="space-y-5 text-base text-gray-700">
                                <li className="flex gap-4 items-start">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm ">
                                        1
                                    </span>
                                    <div>
                                        <span className="font-medium">Forward to your ScamRx address</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Each user gets a unique forwarding email
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm ">2</span>
                                    <div>
                                        <span className="font-medium">We analyze and reply instantly</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Get a detailed report sent back to your inbox
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-100 text-green-600 text-sm ">3</span>
                                    <div>
                                        <span className="font-medium">Results saved to dashboard</span>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Access your full scan history anytime
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 max-w-lg">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-3">Your forwarding address:</p>
                                        <p className="text-lg font-semibold pcl">
                                            check@scamrx.com
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm bg-blue-50 pcl hover:bg-blue-100 font-medium px-4 py-2 rounded-lg transition-colors">
                                        <Copy size={16} />
                                        Copy
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ===================== */}
                {/* Text Forwarding - CHANGED ALIGNMENT */}
                {/* ===================== */}
                <div className="bg-yellow-50 rounded-2xl p-10 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Text (SMS) Forwarding
                                </h3>
                            </div>

                            <p className="text-gray-600 mb-8 max-w-lg">
                                Forward or send suspicious text messages directly to ScamRx.
                            </p>

                            <ul className="space-y-5 text-base text-gray-700">
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-yellow-100 text-yellow-600 font-bold">1</span>
                                    <div>
                                        <span className="font-medium">
                                            Forward to ScamRx number
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Send suspicious texts to our dedicated number
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-yellow-100 text-yellow-600 font-bold">2</span>
                                    <div>
                                        <span className="font-medium">
                                            Get SMS reply with risk score
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Instant analysis sent back via text
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-yellow-100 text-yellow-600 font-bold">3</span>
                                    <div>
                                        <span className="font-medium">
                                            View detailed results online
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Full analysis available in your dashboard
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 bg-white rounded-xl border p-6 max-w-md">
                                <p className="text-sm text-gray-500 mb-2">
                                    ScamRx SMS number:
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold pcl">
                                        +1 (555) 123-4567
                                    </span>
                                    <button className="flex items-center gap-2 text-sm bg-blue-50 pcl px-4 py-2 rounded-lg">
                                        <Copy size={16} /> Copy
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Mock UI - ONLY CHANGED MARGINS FOR ALIGNMENT */}
                        <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-8 w-full max-w-[400px] space-y-5 shadow-lg mx-auto">

                            {/* Message 1 */}
                            <div className="bg-white px-4 py-3 ml-12 rounded-[15px_15px_15px_0] shadow-sm">
                                <p className="text-sm text-gray-800 leading-snug">
                                    Package delivery failed. Click to reschedule:
                                    <span className="block text-blue-600">
                                        bit.ly/pk9123
                                    </span>
                                </p>
                                <p className="text-[10px] text-gray-400 mt-1">
                                    11:23 AM
                                </p>
                            </div>

                            {/* Forward Button */}
                            <div className="pbg mr-12 rounded-[15px_0_15px_15px] px-4 py-3 text-center shadow-lg">
                                <p className="text-sm text-white font-medium">
                                    Forward to +1 (555) 123-4567
                                </p>
                                <p className="text-[10px] text-blue-200 mt-1">
                                    11:24 AM
                                </p>
                            </div>

                            {/* Result */}
                            <div className="bg-white ml-12 rounded-[15px_15px_15px_0] px-4 py-3 shadow-lg flex gap-3">
                                <div>
                                    <div className="my-2 flex items-center">
                                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 text-red-500 text-sm font-bold">92</span>
                                        <span className="text-sm mx-2 font-bold text-red-500">Likely Scam</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Phishing attempt detected. Do not click the link.</p>
                                    <p className="text-[10px] text-gray-400 mt-1">
                                        11:24 AM
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ===================== */}
                {/* Family Monitoring - CHANGED PADDING TO MATCH OTHER SECTIONS */}
                {/* ===================== */}
                <div className="bg-gray-50 rounded-2xl p-10 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* Mock UI Container - ADJUSTED TO CENTER */}
                        <div className="flex justify-center">
                            <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
                                <div className="space-y-4">

                                    {/* Member Card 1 */}
                                    <div className="bg-white border-2 border-gray-300 shadow-lg rounded-xl px-4 py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                                                MJ
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    Mom (Jane)
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Last scan: 15
                                                </p>
                                            </div>
                                        </div>
                                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                                    </div>

                                    {/* Member Card 2 */}
                                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg px-4 py-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600">
                                                DJ
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    Dad (John)
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Last scan: 89
                                                </p>
                                            </div>
                                        </div>
                                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                                    </div>

                                    {/* Alert Box */}
                                    <div className="bg-red-50 border-2 border-red-200 shadow-lg rounded-xl px-4 py-3 flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">
                                            !
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-red-700">
                                                Alert: High-risk scam detected
                                            </p>
                                            <p className="text-xs text-red-600 mt-1">
                                                Dad received a likely scam (Score: 89)
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Family Monitoring
                                </h3>
                            </div>

                            <p className="text-gray-600 mb-8 max-w-lg">
                                Protect your loved ones by monitoring their scam checks and receiving instant alerts.
                            </p>

                            <ul className="space-y-5 text-base text-gray-700">
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600">1</span>
                                    <div>
                                        <span className="font-medium">Add family members</span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Invite parents, grandparents, or anyone you want to protect
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600">2</span>
                                    <div>
                                        <span className="font-medium">
                                            They scan suspicious messages
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Family members use ScamRx like you do
                                        </p>
                                    </div>
                                </li>

                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600">3</span>
                                    <div>
                                        <span className="font-medium">
                                            Get instant alerts for high-risk scams
                                        </span>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Receive notifications when they encounter danger
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <button className="mt-10 inline-flex items-center gap-3 bg-blue-400 text-white px-6 py-4 rounded-lg">
                                Get Started <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ===================== */}
                {/* CTA */}
                {/* ===================== */}
                <div className="pbg rounded-2xl mx-4 lg:mx-0 p-14 mt-20 text-center text-white">
                    <h3 className="text-3xl font-bold mb-3">
                        Ready to protect yourself and your family?
                    </h3>
                    <p className="text-blue-100 mb-8">
                        Choose the plan that fits your needs and start detecting scams today
                    </p>

                    <div className="flex justify-center gap-6">
                        <Link
                            href="/pricing"
                            className="bg-white pcl hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors inline-block cursor-pointer"
                        >
                            View Pricing
                        </Link>
                        <Link
                            href="/login"
                            className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors inline-block cursor-pointer"
                        >
                            Try Free Scan
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}