"use client";

import { Pointer, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function JumpSidebar() {
  const letters = ["A","B","C","D","E","I","M","P","R","S","T","V","W"];
  const [activeLetter, setActiveLetter] = useState("A");

  const handleClick = (letter) => {
    setActiveLetter(letter);

    // OPTIONAL: scroll support (future proof)
    const section = document.getElementById(`letter-${letter}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        Jump to
      </h3>

      <div className="space-y-1">
        {letters.map((letter) => (
          <button
            key={letter}
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(letter)}
            className={`w-full text-left px-3 py-2 text-sm rounded-md
              ${activeLetter === letter
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-white"}
            `}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Bottom Box */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
        <h4 className="text-sm font-bold text-gray-900 mb-2.5">
          New to ScamRx?
        </h4>
        <p className="text-xs text-gray-600 my-3">
          Learn how to use our tools to protect yourself
        </p>
        <button className="mt-3 w-full bg-blue-600 text-white text-sm py-3 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
          How to Use ScamRx <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
