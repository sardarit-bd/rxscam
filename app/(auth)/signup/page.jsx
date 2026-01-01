'use client'; // Important for React hooks in Next.js App Router

import Link from 'next/link';

export default function SignupPage() {

  return (

    <div className="">
      {/* Card */}
      <div className="bg-white w-full lg:w-[550px] rounded-xl shadow-2xl p-6 lg:p-10">
        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-2 mb-6 w-full max-w-[550px]">
          <Link
            href={'/login'}
            className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition text-gray-500`}
          >
            Log In
          </Link>

          <Link
            href={'/signup'}
            className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition bg-white shadow text-gray-900`}
          >
            Create Account
          </Link>
        </div>


        <form className="space-y-2">
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

          <button className="w-full pbg text-white my-2 py-4 rounded-lg font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
