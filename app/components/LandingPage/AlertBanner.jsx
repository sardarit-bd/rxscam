'use client'

import React from 'react';

export default function AlertBanner() {
  const alerts = [
    {
      icon: "🛡️",
      label: "PROTECTED:",
      message: "47,329 scams detected this month by ScamRx users",
      bgColor: "bg-[#1a1a1a]"
    },
    {
      icon: "🔥",
      label: "TRENDING:",
      message: "Fake package delivery texts spreading rapidly",
      bgColor: "bg-[#1a1a1a]"
    },
    {
      icon: "⚠️",
      label: "ALERT:",
      message: "Credit card \"fraud alert\" scams targeting seniors",
      bgColor: "bg-[#1a1a1a]"
    }
  ];

  return (
    <div className="relative w-full bg-[#1a1a1a] text-white overflow-hidden py-3">
      <div className="flex animate-scroll">
        {/* First set of alerts */}
        {alerts.map((alert, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center space-x-2 px-8 whitespace-nowrap flex-shrink-0"
          >
            <span className="text-lg">{alert.icon}</span>
            <span className="font-bold text-sm">{alert.label}</span>
            <span className="text-sm text-gray-300">{alert.message}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {alerts.map((alert, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center space-x-2 px-8 whitespace-nowrap flex-shrink-0"
          >
            <span className="text-lg">{alert.icon}</span>
            <span className="font-bold text-sm">{alert.label}</span>
            <span className="text-sm text-gray-300">{alert.message}</span>
          </div>
        ))}
        {/* Third set for extra smooth loop */}
        {alerts.map((alert, index) => (
          <div
            key={`third-${index}`}
            className="flex items-center space-x-2 px-8 whitespace-nowrap flex-shrink-0"
          >
            <span className="text-lg">{alert.icon}</span>
            <span className="font-bold text-sm">{alert.label}</span>
            <span className="text-sm text-gray-300">{alert.message}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}