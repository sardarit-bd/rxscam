import { AlertCircle, AlertTriangle, BarChart3, CheckCircle, ChevronRight, DollarSign, FileText, Mail, Search, Shield, TrendingUp, Users } from 'lucide-react';
import RiskAssessment from './allcomponnent/RiskAssessment';

export default function ScamDetectionPage({ isSafe, setIsSafe }) {

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 rounded-2xl">
            <div className="w-full">
                {/* Warning Banner */}
                <div className={`${isSafe ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-2 rounded-lg p-6 mb-8`}>
                    <div className="flex flex-col items-center text-center">
                        <div className={`${isSafe ? 'bg-green-500' : 'bg-red-500'} text-white p-3 rounded-full mb-4`}>
                            {isSafe ? <CheckCircle className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                        </div>
                        <h1 className={`text-2xl font-bold ${isSafe ? 'text-green-700' : 'text-red-700'} mb-2`}>
                            {isSafe ? 'SAFE: This Message Appears Legitimate' : 'DANGER: This is Almost Certainly a Scam'}
                        </h1>
                        <p className={`${isSafe ? 'text-green-600' : 'text-red-600'} text-sm`}>
                            {isSafe ? 'All security checks passed. This message appears to be safe.' : 'Do NOT click links, reply, or share any information. Delete and exit.'}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Threat Analysis */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Threat Analysis</h2>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">What This Is?</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        This email is a scam email / phishing attempt. It is designed to deceive you into
                                        clicking on malicious links or providing personal information. The sender is
                                        impersonating a legitimate organization to gain your trust and exploit you.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">What They Want?</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        The scammer wants to steal your personal and financial information. This includes any
                                        account login, email accounts, credit card data, and banking data that are stored
                                        in your device. They may also want to install malware on your device.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2">How They Do It?</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Scammers use urgent language (like "verify now" or "suspended account") to pressure you
                                        into clicking on a malicious link or attachment. They often create a sense of urgency
                                        or fear to manipulate you into acting without thinking. The sender's email address
                                        may look similar to a legitimate organization but will have small differences.
                                    </p>
                                </div>

                                {/* Risk Gauge */}
                                <RiskAssessment isSafe={isSafe} setIsSafe={setIsSafe} />
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <FileText className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Overview</h2>
                            </div>
                            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                                <p>
                                    This message contains multiple red flags indicating it's a scam. The sender is
                                    attempting to impersonate a legitimate organization using urgent language and
                                    suspicious links. <span className="font-semibold text-red-600">DO NOT interact with any links, attachments,
                                        or reply to this email.</span>
                                </p>
                                <p>
                                    If you've interacted with this email or clicked on any links, immediately change your
                                    passwords and monitor your accounts for unusual activity. Consider running a security
                                    scan on your device and contact your bank if you've shared any financial information.
                                </p>
                            </div>
                        </div>

                        {/* Red Flags */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertCircle className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Red Flags</h2>
                            </div>

                            <div className="space-y-3">
                                <div className={`border-l-4 ${isSafe ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'} p-4`}>
                                    <div className="flex items-start gap-3">
                                        {isSafe ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <h3 className={`font-semibold ${isSafe ? 'text-green-800' : 'text-red-800'} mb-1`}>{isSafe ? 'PROFESSIONAL LANGUAGE' : 'URGENT LANGUAGE'}</h3>
                                            <p className="text-sm text-gray-700">
                                                {isSafe
                                                    ? 'The email uses professional and calm language without pressure tactics. No urgency or threatening tone detected.'
                                                    : 'The email uses urgent or threatening language like "verify now," "suspended account," or "immediate action required" to pressure you into acting quickly without thinking.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`border-l-4 ${isSafe ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'} p-4`}>
                                    <div className="flex items-start gap-3">
                                        {isSafe ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <h3 className={`font-semibold ${isSafe ? 'text-green-800' : 'text-orange-800'} mb-1`}>{isSafe ? 'VERIFIED LINKS' : 'SUSPICIOUS LINK'}</h3>
                                            <p className="text-sm text-gray-700">
                                                {isSafe
                                                    ? 'All links in the email point to legitimate, verified domains matching the sender\'s organization.'
                                                    : 'The email contains a suspicious link. Hovering over the link reveals it doesn\'t lead to the legitimate website mentioned in the email.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`border-l-4 ${isSafe ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'} p-4`}>
                                    <div className="flex items-start gap-3">
                                        {isSafe ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <h3 className={`font-semibold ${isSafe ? 'text-green-800' : 'text-red-800'} mb-1`}>{isSafe ? 'SENDER VERIFIED' : 'SENDER MISMATCH'}</h3>
                                            <p className="text-sm text-gray-700">
                                                {isSafe
                                                    ? 'The sender\'s email address matches the official domain and passes all authentication checks (SPF, DKIM, DMARC).'
                                                    : 'The email sender claims to be from a well-known organization, but the actual email address doesn\'t match their official domain. This is a clear sign of impersonation.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`border-l-4 ${isSafe ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'} p-4`}>
                                    <div className="flex items-start gap-3">
                                        {isSafe ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <h3 className={`font-semibold ${isSafe ? 'text-green-800' : 'text-yellow-800'} mb-1`}>{isSafe ? 'PERSONALIZED GREETING' : 'GENERIC GREETING'}</h3>
                                            <p className="text-sm text-gray-700">
                                                {isSafe
                                                    ? 'The email addresses you by your actual name, indicating the sender has legitimate access to your account information.'
                                                    : 'The email uses a generic greeting like "Dear Customer" or "Dear User" instead of your actual name, which legitimate companies typically use.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className={`border-l-4 ${isSafe ? 'border-green-500 bg-green-50' : 'border-blue-500 bg-blue-50'} p-4`}>
                                    <div className="flex items-start gap-3">
                                        {isSafe ? <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />}
                                        <div>
                                            <h3 className={`font-semibold ${isSafe ? 'text-green-800' : 'text-blue-800'} mb-1`}>{isSafe ? 'NO SENSITIVE DATA REQUEST' : 'INFORMATION REQUEST'}</h3>
                                            <p className="text-sm text-gray-700">
                                                {isSafe
                                                    ? 'The email does not request any sensitive personal information such as passwords, account numbers, or security codes.'
                                                    : 'The email asks you to verify or provide personal information such as passwords, account numbers, or security codes. Legitimate companies never ask for this via email.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Details */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Technical Details</h2>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Domain Investigation
                                    </h3>
                                    <ul className="space-y-2 ml-6">
                                        <li className="text-sm text-gray-600">
                                            <span className="font-medium">Sender Domain:</span> suspicious-domain.xyz (not legitimate)
                                        </li>
                                        <li className="text-sm text-gray-600">
                                            <span className="font-medium">Domain Created:</span> Recently registered (red flag)
                                        </li>
                                        <li className="text-sm text-gray-600">
                                            <span className="font-medium">SPF/DKIM Check:</span> Failed authentication
                                        </li>
                                        <li className="text-sm text-gray-600">
                                            <span className="font-medium">IP Reputation:</span> Listed on multiple spam blacklists
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Email Authentication */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Email Authentication</h2>
                            </div>
                            <div className="space-y-3">
                                <div className={`flex items-center justify-between p-3 ${isSafe ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} rounded border`}>
                                    <span className="text-sm font-medium text-gray-700">SPF Check</span>
                                    <span className={`px-3 py-1 ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} text-xs font-semibold rounded-full`}>
                                        {isSafe ? 'PASS' : 'FAIL'}
                                    </span>
                                </div>
                                <div className={`flex items-center justify-between p-3 ${isSafe ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} rounded border`}>
                                    <span className="text-sm font-medium text-gray-700">DKIM Status</span>
                                    <span className={`px-3 py-1 ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} text-xs font-semibold rounded-full`}>
                                        {isSafe ? 'PASS' : 'FAIL'}
                                    </span>
                                </div>
                                <div className={`flex items-center justify-between p-3 ${isSafe ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} rounded border`}>
                                    <span className="text-sm font-medium text-gray-700">DMARC Policy</span>
                                    <span className={`px-3 py-1 ${isSafe ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} text-xs font-semibold rounded-full`}>
                                        {isSafe ? 'PASS' : 'FAIL'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content Analysis */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <FileText className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Content Analysis</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className={`text-3xl font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '0' : '3'}</div>
                                    <div className="text-xs text-gray-600 mt-1">Suspicious Links</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className={`text-3xl font-bold ${isSafe ? 'text-green-600' : 'text-orange-600'}`}>{isSafe ? '0' : '1'}</div>
                                    <div className="text-xs text-gray-600 mt-1">Dangerous Attachments</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className={`text-3xl font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '0' : '8'}</div>
                                    <div className="text-xs text-gray-600 mt-1">Scam Keywords</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className={`text-3xl font-bold ${isSafe ? 'text-green-600' : 'text-yellow-600'}`}>{isSafe ? '0' : '2'}</div>
                                    <div className="text-xs text-gray-600 mt-1">Urgency Phrases</div>
                                </div>
                            </div>
                        </div>

                        {/* Campaign Intelligence */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <TrendingUp className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Campaign Intelligence</h2>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-sm">
                                        <p className="font-semibold text-gray-800 mb-1">CAMPAIGN:</p>
                                        <p className="text-gray-700">Mass Phishing Campaign - "Account Verification Scam"</p>
                                        <p className="text-gray-600 mt-2">
                                            <span className="font-medium">First Seen:</span> Dec 15, 2024 |
                                            <span className="font-medium ml-2">Victims:</span> ~5,000+
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Risk Score Breakdown */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-5 h-5 text-gray-700" />
                                <h2 className="text-xl font-bold text-gray-800">Risk Score Breakdown</h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">Sender Reputation</span>
                                        <span className={`text-sm font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '5' : '95'}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${isSafe ? 'bg-green-500' : 'bg-red-500'} h-2 rounded-full`} style={{ width: isSafe ? '5%' : '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">Content Risk</span>
                                        <span className={`text-sm font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '8' : '88'}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${isSafe ? 'bg-green-500' : 'bg-red-500'} h-2 rounded-full`} style={{ width: isSafe ? '8%' : '88%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">Link Analysis</span>
                                        <span className={`text-sm font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '3' : '92'}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${isSafe ? 'bg-green-500' : 'bg-red-500'} h-2 rounded-full`} style={{ width: isSafe ? '3%' : '92%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-700">Authentication</span>
                                        <span className={`text-sm font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '2' : '100'}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className={`${isSafe ? 'bg-green-500' : 'bg-red-500'} h-2 rounded-full`} style={{ width: isSafe ? '2%' : '100%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                                <span className="font-bold text-gray-800">Overall Score</span>
                                <span className={`text-2xl font-bold ${isSafe ? 'text-green-600' : 'text-red-600'}`}>{isSafe ? '5/100' : '93/100'}</span>
                            </div>
                        </div>

                        {/* What to Do Next */}
                        <div className="bg-green-50 border border-green-200 rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-green-700" />
                                <h2 className="text-xl font-bold text-green-800">What to Do Next</h2>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-semibold">Delete This Email:</span> Remove it from your inbox and trash folder immediately.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-semibold">Block the Sender:</span> Add the sender's email address to your blocked list.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-semibold">Report as Spam:</span> Mark this email as spam or phishing in your email client.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-semibold">Change Passwords:</span> If you clicked any links, immediately change your passwords and monitor your accounts for suspicious activity.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">
                                        <span className="font-semibold">Run Security Scan:</span> If you downloaded any attachments, scan your device for malware immediately.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* If You Already Clicked */}
                        <div className="bg-red-50 border border-red-200 rounded-lg shadow-sm p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-red-700" />
                                <h2 className="text-xl font-bold text-red-800">If You Already Clicked</h2>
                            </div>
                            <p className="text-sm text-gray-700 mb-4">
                                If you've already clicked on a link or provided information, take these immediate steps:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Change all your passwords immediately, starting with email and banking accounts.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Enable two-factor authentication (2FA) on all your accounts if you haven't already.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Contact your bank or credit card company to alert them to potential fraud.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Monitor your accounts for any unauthorized transactions or changes.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-red-600 font-bold">•</span>
                                    <span>Consider placing a fraud alert on your credit report.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Scanned Message */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3">Scanned Message</h3>
                            <div className="bg-gray-50 rounded p-3 text-xs text-gray-600 font-mono break-all leading-relaxed">
                                URGENT: Your account requires immediate verification. Click here to avoid suspension. We detected unusual activity...
                            </div>
                        </div>

                        {/* Scam Classification */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3">Scam Classification</h3>
                            <div className={`${isSafe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-4 py-2 rounded-lg text-center font-semibold`}>
                                {isSafe ? 'Legitimate Message' : 'Phishing/Impersonation'}
                            </div>
                        </div>

                        {/* How This Scam Works */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3">How This Scam Works</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <span>Scammer sends fake "urgent" email</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <span>You click on a link or attachment</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        3
                                    </div>
                                    <span>Fake website captures your credentials</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                        4
                                    </div>
                                    <span>Scammer accesses your accounts and steals money or data</span>
                                </li>
                            </ul>
                        </div>

                        {/* Red Flags to Watch For */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3">Red Flags to Watch For</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>⚠ Urgency or fear tactics ("Act now!")</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>⚠ Suspicious sender email address</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>⚠ Requests for personal or financial info</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>⚠ Generic greetings like "Dear Customer"</span>
                                </li>
                            </ul>
                        </div>

                        {/* Search the Report */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button className="w-full pbg hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Search className="w-4 h-4" />
                                Search this Report
                            </button>
                        </div>

                        {/* Protection Status */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-4">Your Protection Status</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Protected</span>
                                    </div>
                                    <span className="text-2xl font-bold text-gray-800">47</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Quarantined</span>
                                    </div>
                                    <span className="text-2xl font-bold text-gray-800">12</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm text-gray-700">Blocked</span>
                                    </div>
                                    <span className="text-2xl font-bold text-gray-800">8</span>
                                </div>
                            </div>
                        </div>

                        {/* Similar Scams */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-600" />
                                Similar Scams Detected
                            </h3>
                            <div className="space-y-2">
                                <div className="p-3 bg-orange-50 rounded border border-orange-200 text-xs">
                                    <div className="font-semibold text-gray-800">Bank Account Verification</div>
                                    <div className="text-gray-600 mt-1">Detected 2 days ago</div>
                                </div>
                                <div className="p-3 bg-orange-50 rounded border border-orange-200 text-xs">
                                    <div className="font-semibold text-gray-800">Payment Suspended Alert</div>
                                    <div className="text-gray-600 mt-1">Detected 5 days ago</div>
                                </div>
                            </div>
                        </div>

                        {/* Financial Impact */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-yellow-600" />
                                Potential Financial Loss
                            </h3>
                            <div className="text-center py-4">
                                <div className="text-4xl font-bold text-yellow-600">$3,200</div>
                                <div className="text-xs text-gray-600 mt-2">Average loss per victim</div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-gray-600">Reported Cases</span>
                                    <span className="font-semibold text-gray-800">1,247</span>
                                </div>
                            </div>
                        </div>

                        {/* Global Reach */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-600" />
                                Global Reach
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700">Targets</span>
                                    <span className="font-semibold text-gray-800">52 Countries</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700">Languages</span>
                                    <span className="font-semibold text-gray-800">12</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-700">Active Since</span>
                                    <span className="font-semibold text-gray-800">Dec 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* View Full Report */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button className="w-full bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 font-semibold py-3 px-4 rounded-lg transition-colors">
                                View Full Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}