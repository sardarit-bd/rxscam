import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

const RiskAssessment = ({ isSafe, setIsSafe }) => {
    const [needleRotation, setNeedleRotation] = useState(-90);
    const riskScore = isSafe ? 25 : 75;

    useEffect(() => {
        // Animate needle rotation based on risk score
        const targetRotation = (riskScore / 100) * 180 - 90;

        let start = null;
        const duration = 1500; // 1.5 seconds

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
            const currentRotation = needleRotation + (targetRotation - needleRotation) * easeOutCubic;

            setNeedleRotation(currentRotation);

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [riskScore]);

    return (
        <div className="mt-6 bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-6 text-center text-lg">Risk Assessment</h3>

            <div className="relative w-full max-w-sm mx-auto">
                {/* Gauge Container */}
                <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                    {/* SVG Gauge */}
                    <svg viewBox="0 0 200 120" className="w-full">
                        {/* Background Arc */}
                        <defs>
                            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                                <stop offset="25%" style={{ stopColor: '#84cc16', stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: '#eab308', stopOpacity: 1 }} />
                                <stop offset="75%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>

                        {/* Main arc gauge */}
                        <path
                            d="M 30 100 A 70 70 0 0 1 170 100"
                            fill="none"
                            stroke="url(#gaugeGradient)"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />

                        {/* Tick marks */}
                        {[0, 25, 50, 75, 100].map((value, index) => {
                            const angle = (value / 100) * 180 - 90;
                            const radians = (angle * Math.PI) / 180;
                            const x1 = 100 + 60 * Math.cos(radians);
                            const y1 = 100 + 60 * Math.sin(radians);
                            const x2 = 100 + 70 * Math.cos(radians);
                            const y2 = 100 + 70 * Math.sin(radians);

                            return (
                                <line
                                    key={value}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="#1f2937"
                                    strokeWidth="2"
                                />
                            );
                        })}

                        {/* Needle */}
                        <g transform={`rotate(${needleRotation} 100 100)`}>
                            <circle cx="100" cy="100" r="8" fill="#1f2937" />
                            <path
                                d="M 100 100 L 95 105 L 100 35 L 105 105 Z"
                                fill="#ef4444"
                                stroke="#991b1b"
                                strokeWidth="1"
                            />
                        </g>

                        {/* Center circle */}
                        <circle cx="100" cy="100" r="6" fill="#374151" />
                    </svg>

                    {/* Labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs font-semibold text-gray-600">
                        <span>0</span>
                        <span className="text-emerald-600">25</span>
                        <span className="text-red-600">75</span>
                        <span>100</span>
                    </div>
                </div>

                {/* Risk Score Display */}
                <div className="text-center mt-6">
                    <div className={`inline-flex items-center gap-2 ${isSafe ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'} border-2 px-6 py-2 rounded-full`}>
                        <AlertTriangle className={`w-4 h-4 ${isSafe ? 'text-green-700' : 'text-red-700'}`} />
                        <span className={`font-bold text-sm ${isSafe ? 'text-green-700' : 'text-red-700'}`}>
                            {isSafe ? 'LOW RISK' : 'HIGH RISK'}
                        </span>
                    </div>
                </div>

                {/* Warning Message */}
                <div className={`mt-6 p-4 rounded-lg ${isSafe ? 'bg-green-50' : 'bg-red-50'}`}>
                    <p className={`text-sm text-center ${isSafe ? 'text-green-900' : 'text-red-900'} font-semibold`}>
                        {isSafe
                            ? 'This score is lower and safer than 87% of all ScamRx system scans'
                            : 'This score is higher and more dangerous than 87% of all ScamRx system scans'}
                    </p>
                </div>
            </div>

            {/* Toggle Demo Button */}
            <div className="mt-6 text-center">
                <button
                    onClick={() => setIsSafe(!isSafe)}
                    className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                    Toggle Risk Level
                </button>
            </div>
        </div>
    );
};

export default RiskAssessment;