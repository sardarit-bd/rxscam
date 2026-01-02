"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function GlossaryCard({
  title,
  subtitle,
  description,
  moreDetails = "Common examples include Nigerian Prince scams, fake lottery winnings, and fraudulent job offers requiring upfront payment."
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 bg-gray-50 rounded-xl p-6">
      <h3 className="text-base font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {subtitle}
      </p>

      <p className="text-sm text-gray-600 mt-4 leading-relaxed">
        {description}
      </p>

      {open && (
        <>
          <div className="border-t border-gray-100 my-4"></div>
          <p className="text-sm text-gray-600">
            {moreDetails}
          </p>
        </>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm pcl mt-4 hover:underline"
      >
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {open ? "Show less" : "More details"}

      </button>
    </div>
  );
}
