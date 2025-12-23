import React from "react";

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Order Summary</h1>
        </div>

        <div className="p-6">
          
          {/* Family Plan Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Family Plan</h2>
            <div className="flex items-center gap-4 mb-6">
              <div>
                <span className="text-gray-600">Monthly billing</span>
                <div className="text-3xl font-bold text-gray-900">$19.99 per month</div>
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>200 scans per month</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Up to 5 family members</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Email forwarding included</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>SMS forwarding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Family monitoring & alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Scan history & reports</span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Account & Payment */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Account & Payment</h2>
            
            {/* Account Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Email</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-900">
                    you@example.com
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    This will be your login email
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-700">Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <span>Use magic-link instead </span>
                  <span className="text-blue-600 underline">[parameters/login]</span>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Payment Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="mb-1">
                    <span className="text-gray-700">Card Number</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-900">
                    1234 5678 9012 3456
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="mb-1">
                      <span className="text-gray-700">Expiry Date</span>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-900">
                      MM/YY
                    </div>
                  </div>
                  <div>
                    <div className="mb-1">
                      <span className="text-gray-700">CVC</span>
                    </div>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-900">
                      123
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  In production, this would be replaced with Stripe Elements.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Terms Checkbox */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-5 h-5"
                />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Complete Purchase Button */}
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}