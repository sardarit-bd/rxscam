// app/(site)/breach-check/page.js
'use client';

import { Mail, Phone, Lock, AlertCircle, Shield, Key, Database, CreditCard, User, Smartphone, MapPin, Globe, Calendar, RefreshCw, CircleCheckBig } from 'lucide-react';
import { useState } from 'react';

export default function BreachCheckForm() {
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('email');
  const [isChecking, setIsChecking] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6">
      <div className="w-full max-w-4xl py-7 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-3xl">
              <Lock className="text-blue-600" size={40} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Breach Check
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            See if your email or phone number has been exposed in known data breaches
          </p>
        </div>

        {/* Check Form */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border mb-8">
          
          {/* Tabs */}
          <div className="flex mb-6 md:mb-8 bg-gray-100 rounded-lg p-0.5 w-fit mx-auto gap-1">
            <button
                onClick={() => setActiveTab('email')}
                className={`px-4 md:px-5 py-3 md:py-4 text-sm flex items-center gap-2 rounded-lg font-semibold transition ${
                activeTab === 'email'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
            >
                <Mail size={15} />
                Email
            </button>

            <button
                onClick={() => setActiveTab('phone')}
                className={`px-4 md:px-5 py-3 md:py-4 text-sm flex items-center gap-2 rounded-lg font-semibold transition ${
                activeTab === 'phone'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
            >
                <Phone size={15} />
                Phone
            </button>
          </div>

          {/* Input */}
          <div className="mb-6 md:mb-8">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                {activeTab === 'email' ? <Mail size={18} /> : <Phone size={18} />}
              </div>

              <input
                type={activeTab === 'email' ? 'email' : 'tel'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  activeTab === 'email'
                    ? 'you@example.com'
                    : '+1 (555) 123-4567'
                }
                className="w-full border border-gray-300 rounded-lg py-3 md:py-4 pl-11 pr-4 text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleCheck}
            disabled={isChecking}
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold
                       py-3 md:py-4 rounded-lg transition disabled:opacity-60"
          >
            {isChecking ? 'Checking...' : 'Check for Breaches'}
          </button>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-6 md:space-y-8">
            
            {/* Breach Found Banner  */}
           <div className="bg-red-50 border border-red-200 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-3 mb-3 ">
                <AlertCircle className="text-red-600  flex-shrink-0" size={24} />
                <h2 className="text-2xl md:text-xl font-bold text-gray-800">
                  The account was found in 3 known breaches
                </h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base pl-9">
                Your information is a new approach to multiple data transfers. Follow the recommendations taken on a more than 1 year research and patient yourself from prehealth fund.
              </p>
            </div>

            {/* Breaches Found Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Breaches Found
            </h3>

            {/* Breaches Cards  */}
            <div className="space-y-6 md:space-y-8">
              
              {/* DataCorp Breach Card  */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {/* Title Row */}
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100">
                        <Database className="text-red-500" size={22} />
                        </div>

                        <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        DataCorp Breach
                        </h4>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm ml-10">
                        <Calendar size={14} />
                        <span>March 2024</span>
                        <span className="mx-1">•</span>
                        <span>45 million records</span>
                    </div>
                  </div>

                  <span className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-3 py-2 rounded-lg">
                    Data Breach
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Data types exposed:</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2  bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Mail size={14} />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <div className="flex items-center gap-2  bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Key size={14} />
                      <span className="text-sm font-medium">Password</span>
                    </div>
                    <div className="flex items-center gap-2  bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Globe size={14} />
                      <span className="text-sm font-medium">IP Address</span>
                    </div>
                    <div className="flex items-center gap-2  bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <User size={14} />
                      <span className="text-sm font-medium">Name</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SocialHub Leak Card*/}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100">
                        <Database className="text-red-500" size={20} />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        SocialHub Leak
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm ml-10">
                      <Calendar size={14} />
                      <span>January 2024</span>
                      <span className="mx-1">•</span>
                      <span>120 million records</span>
                    </div>
                  </div>

                  <span className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-3 py-2 rounded-lg">
                    Data Breach
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Data types exposed:</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Mail size={14} />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <User size={14} />
                      <span className="text-sm font-medium">Username</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Smartphone size={14} />
                      <span className="text-sm font-medium">Phone Number</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Database size={14} />
                      <span className="text-sm font-medium">Profile Data</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* CloudStore Incident Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100">
                        <Database className="text-red-500" size={20} />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900">
                        CloudStore Incident
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm ml-10">
                      <Calendar size={14} />
                      <span>November 2023</span>
                      <span className="mx-1">•</span>
                      <span>8 million records</span>
                    </div>
                  </div>

                  <span className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-3 py-2 rounded-lg">
                    Data Breach
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">Data types exposed:</p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <Mail size={14} />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <MapPin size={14} />
                      <span className="text-sm font-medium">Billing Address</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 text-gray-700 px-3 py-2 rounded-lg">
                      <CreditCard size={14} />
                      <span className="text-sm font-medium">Partial Credit Card</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to do next */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-lg">
                  <CircleCheckBig className="text-blue-600" size={24}/>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  What to do next
                </h3>
              </div>
              
              <div className="space-y-5 md:space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center ">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Change your password immediately.</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Create a web, copy, register, and update all relevant user releases. Use something of openness, username, content, and social domains.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Enable two-factor authentication (2FA)</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Add access to each client by their accounts. Use a particular use as they are automatically sent through the email message.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Monitor your financial account.</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Write for your financial breakdown or updates activity. Envelop acting on this item and you'll see other notifications.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center ">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Be alert like yesterday afternoon.</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Searching any key you failed with to keep you in pace without participating and then, become obvious with unexpected receipts.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center ">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Create an email message.</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      A member tweet at first named right up for mail messages such that it runs early. You may be curious if forwarding time for personal security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Warning Section  */}
            <div className="relative rounded-2xl overflow-hidden mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-800"></div>
              
              <div className="absolute inset-0 opacity-10" style={{
               
              }}></div>
              
              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3">
                      Worried about phishing after a breach?
                    </h4>
                    <p className="text-blue-100 text-sm md:text-base">
                      Use ScanRx Scam Engine to check suspicious messages and protect yourself from follow-up attacks
                    </p>
                  </div>
                  
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap">
                    Try Scam Engine →
                  </button>
                </div>
              </div>
            </div>          
          </div>
        )}
      </div>
    </div>
  );
}