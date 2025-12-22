'use client'; // Important for React hooks in Next.js App Router

import Link from 'next/link';
import { Shield, Mail } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login'); // login or register

  return (
    <div className="min-h-screen flex bg-[#1E40AF]">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 text-white flex flex-col justify-center pl-40">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <Shield size={40} />
          <h2 className="font-bold text-4xl text-white">
            Scam<span className="text-blue-400">RX</span>
          </h2>
        </div>

        <h1 className="text-6xl py-4 font-bold mb-4">
          {activeTab === 'login' ? 'Check scams in seconds' : 'Create your account'}
        </h1>

        <p className="text-blue-100 text-2xl max-w-xl mb-10">
          {activeTab === 'login'
            ? 'Protect your inbox, texts, and loved ones from phishing, fraud, and scams with AI-powered detection.'
            : 'Join ScamRX today to protect your inbox, texts, and family from phishing, fraud, and scams.'}
        </p>

        {/* Stats */}
        <div className="flex gap-6">
          <div className="bg-white/10 rounded-2xl p-5 w-65">
            <p className="text-5xl font-bold py-3">95%</p>
            <p className="text-sm text-blue-100">Detection Accuracy</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 w-65">
            <p className="text-5xl font-bold py-3">50K+</p>
            <p className="text-sm text-blue-100">Scams Blocked</p>
          </div>

          <div className="bg-white/10 rounded-2xl p-5 w-65">
            <p className="text-5xl font-bold py-3">10K+</p>
            <p className="text-sm text-blue-100">Families Protected</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-7/12 flex flex-col items-center justify-center">
        {/* Card */}
        <div className="bg-white w-[550px] rounded-xl shadow-2xl p-10">
          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-xl p-2 mb-6 w-full max-w-[550px]">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition ${
                activeTab === 'login'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-500'
              }`}
            >
              Log In
            </button>

            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition ${
                activeTab === 'register'
                  ? 'bg-white shadow text-gray-900'
                  : 'text-gray-500'
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          {activeTab === 'login' ? (
            <form className="space-y-4">
              <div className='py-2'>
                <label className="text-md text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full border border-gray-300 placeholder-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='py-2'>
                <label className="text-md text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full border border-gray-300 placeholder-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-right text-sm">
                <Link href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button className="w-full bg-[#1E40AF] text-white py-4 rounded-lg font-semibold">
                Log In
              </button>
            </form>
          ) : (
            <form className="space-y-4">
              <div className='py-2'>
                <label className="text-md text-gray-600">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-1 w-full border placeholder-gray-300 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='py-2'>
                <label className="text-md text-gray-600">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full border placeholder-gray-300 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='py-2'>
                <label className="text-md text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full border placeholder-gray-300 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className='py-2'>
                <label className="text-md text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="mt-1 w-full border placeholder-gray-300 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="w-full bg-[#1E40AF] text-white my-2 py-4 rounded-lg font-semibold">
                Create Account
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-sm text-gray-400">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Magic Link */}
          <button className="w-full border border-gray-300 rounded-lg py-4 flex items-center justify-center gap-2 text-sm text-gray-700">
            <Mail size={16} />
            Send me a magic login link
          </button>
        </div>

        {/* Footer links below card */}
        <div className="flex justify-center gap-4 text-md text-white mt-10">
          <Link href="/">Back to Home</Link>
          <span>•</span>
          <Link href="/pricing">Pricing</Link>
          <span>•</span>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </div>
  );
}
