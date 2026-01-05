'use client'

import { useState } from 'react';
import ScamDetectionPage from '../scanResult/Landingpage/ScamDetectionPage';


const PackageDeliveryInput = ({ }) => {


    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isSafe, setIsSafe] = useState(true); // false = danger, true = safe
    const [message, setMessage] = useState('Fake USPS/FedEx message about missed delivery with suspicious tracking link');

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        setShowResult(false);

        // Simulate analysis delay
        setTimeout(() => {
            setIsAnalyzing(false);
            setShowResult(true);
        }, 3000);
    };



    return (
        <div className="w-full container mx-auto px-4 py-16 space-y-6">
            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4 flex items-center gap-4">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>Enter Suspicious Package Delivery Message Here</span>
                </label>

                <div className="space-y-4">
                    {/* Message Type Badge */}
                    <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium">
                        Package Delivery
                    </div>

                    {/* Message Input */}
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Fake USPS/FedEx message about missed delivery with suspicious tracking link"
                        className="w-full h-24 px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-800 focus:border-transparent resize-none text-sm sm:text-base"
                    />

                    {/* Analyze Button */}
                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="w-full bg-[#2B4FBF] text-white font-semibold py-4 rounded-xl hover:bg-[#2441a8] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" opacity="0.3" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span className="text-base sm:text-lg">Analyze Package Delivery</span>
                    </button>
                </div>
            </div>

            {/* Scanning State */}
            {isAnalyzing && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 sm:p-16">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        {/* Spinner */}
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                        </div>

                        {/* Scanning Text */}
                        <p className="text-xl sm:text-2xl font-semibold text-gray-600">
                            Scanning Now....
                        </p>
                    </div>
                </div>
            )}

            {/* Result State */}
            {showResult && (
                <div className={`border-4 rounded-xl ${isSafe ? 'border-green-500' : 'border-red-500'}`}>
                    <ScamDetectionPage isSafe={isSafe} setIsSafe={setIsSafe} />
                </div>
            )}
        </div>
    );
};

export default PackageDeliveryInput;
