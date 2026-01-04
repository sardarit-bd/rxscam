'use client'

import { Calendar, ChevronRight, DollarSign, Globe, Mail, MessageSquare, Plus, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ScamRXDashboard() {
    const [activeTab, setActiveTab] = useState('All');

    const recentScans = [
        {
            icon: Mail,
            title: 'URGENT: Your account has been locked - Immediate action...',
            type: 'Likely Scam',
            typeColor: 'text-red-600 bg-red-50',
            time: '2 hours ago',
        },
        {
            icon: MessageSquare,
            title: 'Package Delivery failed. Click to reschedule: bit.ly...',
            type: 'Likely Scam',
            typeColor: 'text-red-600 bg-red-50',
            time: '5 hours ago',
        },
        {
            icon: Globe,
            title: 'https://secure-bank-verify.xyz/...',
            type: 'Likely Scam',
            typeColor: 'text-orange-600 bg-orange-50',
            time: 'Yesterday',
        },
        {
            icon: Mail,
            title: 'Hi! Long time no see. Can you help me with...',
            type: 'Suspicious',
            typeColor: 'text-yellow-600 bg-yellow-50',
            time: 'Yesterday',
        },
        {
            icon: Mail,
            title: 'Your Amazon order #12345 has shipped and will arrive...',
            type: 'Likely Safe',
            typeColor: 'text-green-600 bg-green-50',
            time: '2 days ago',
        },
        {
            icon: Mail,
            title: 'Hi John, this is Sarah from ABC Bank. Please call us back...',
            type: 'Suspicious',
            typeColor: 'text-yellow-600 bg-yellow-50',
            time: '3 days ago',
        },
        {
            icon: Mail,
            title: 'Your Netflix subscription is expiring - update payment...',
            type: 'Likely Scam',
            typeColor: 'text-red-600 bg-red-50',
            time: '4 days ago',
        },
    ];

    const familyMembers = [
        { name: 'Mom (Jane)', statusColor: 'bg-green-500', scans: 45 },
        { name: 'Dad (John)', statusColor: 'bg-red-500', scans: 89 },
        { name: 'Sister (Sarah)', statusColor: 'bg-yellow-500', scans: 12 },
    ];

    return (
        <div className="bg-gray-50 p-4 lg:p-8">
            <div className="w-full">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {/* Scans Remaining */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">Scans Remaining</span>
                            <TrendingUp className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
                        <div className="text-xs text-gray-500 mb-3">of 200 this month</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="pbg h-2 rounded-full" style={{ width: '21%' }}></div>
                        </div>
                    </div>

                    {/* Total Scans */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">Total Scans</span>
                            <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">158</div>
                        <div className="text-xs text-gray-500">All time</div>
                    </div>

                    {/* Estimated Saved */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">Estimated Saved</span>
                            <DollarSign className="w-4 h-4 text-yellow-500" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">$1,200</div>
                        <div className="text-xs text-gray-500">From blocked scams</div>
                    </div>

                    {/* Current Plan */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">Current Plan</span>
                            <Calendar className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">Family</div>
                        <div className="text-xs text-gray-500">Renews Jan 15, 2026</div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Scans - Takes 2 columns on large screens */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Scans</h2>

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['All', 'Scan', 'Suspicious', 'Legit'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                            ? 'pbg text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex flex-wrap gap-2 mb-4 text-sm">
                                <button className="px-3 py-2 pbg text-white rounded-lg font-medium">
                                    All Channels
                                </button>
                                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    Email
                                </button>
                                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    Text
                                </button>
                                <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 flex items-center gap-1">
                                    <Globe className="w-4 h-4" />
                                    URL
                                </button>
                            </div>

                            {/* Scan List */}
                            <div className="space-y-1">
                                {recentScans.map((scan, index) => {
                                    const Icon = scan.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className="p-2 bg-gray-100 rounded-lg mt-1">
                                                <Icon className="w-5 h-5 text-gray-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-gray-900 mb-1">{scan.title}</p>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs px-2 py-1 rounded ${scan.typeColor} font-medium`}>
                                                        {scan.type}
                                                    </span>
                                                    <span className="text-xs text-gray-500">{scan.time}</span>
                                                </div>
                                            </div>
                                            <button className="pcl text-sm font-medium flex items-center gap-1 whitespace-nowrap mt-1">
                                                View details
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Takes 1 column */}
                    <div className="space-y-6">
                        {/* Plan & Usage */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Plan & Usage</h3>
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Plan</span>
                                    <span className="font-medium text-gray-900">Family</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Scan limit</span>
                                    <span className="font-medium text-gray-900">200/month</span>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">Usage</span>
                                        <span className="font-medium text-gray-900">158 / 200</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="pbg h-2.5 rounded-full" style={{ width: '79%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full pbg text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Upgrade Plan
                            </button>
                        </div>

                        {/* Family Monitoring */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Family Monitoring</h3>
                            <div className="space-y-3 mb-4">
                                {familyMembers.map((member, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-sm">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div className={`absolute bottom-0 right-0 w-3 h-3 ${member.statusColor} rounded-full border-2 border-white`}></div>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{member.name}</p>
                                                <p className="text-xs text-gray-500">Scans: {member.scans}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <Plus className="w-5 h-5" />
                                Add Family Member
                            </button>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full pbg text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors flex items-center justify-center gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    Check Message
                                </button>
                                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <Globe className="w-5 h-5" />
                                    Check URL
                                </button>
                                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Breach Check
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}