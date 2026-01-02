"use client"


export function ScannedMessage() {
  return (
    <div className="p-4 mb-4">
      <h3 className="text-sm font-bold mb-3">Scanned Message</h3>
      <div className="bg-gray-50 p-3 rounded text-xs text-gray-600 leading-relaxed border border-gray-200">
        <p>
          Hello, We've noticed there may be an issue with your account. We were unable to process your payment for the
          latest subscription. Please verify and update your billing info at our service page to avoid any interruption.
        </p>
      </div>
    </div>
  )
}
