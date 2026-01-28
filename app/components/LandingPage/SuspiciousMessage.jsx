'use client'

import ScamDetectionPage from '../scanResult/Landingpage/ScamDetectionPage';

export default function SuspiciousMessage({ selectedExample, isAnalyzing, setIsAnalyzing, showResult, setShowResult, isSafe, setIsSafe }) {


    return (
        <div className="w-full container mx-auto px-4 py-16 space-y-6">

            {/* Scanning State */}
            {isAnalyzing && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 sm:p-16 mb-10">
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
}