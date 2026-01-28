// import { Link } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl xl:max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#2B4FBF] text-white px-5 py-3 rounded-md shadow-lg">
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1767855074/APP-01_2_frwqus.png"
              alt="AI Icon"
              width={24}
              height={24}
              className="w-6 h-6 animate-bounce"
            />
            <span className="font-semibold text-sm sm:text-base tracking-wide">
              AI-POWERED SCAM PROTECTION
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight">
          <span className="text-gray-800">Stop Scammers</span>{' '}
          <span className="text-gray-800">Before They Steal From You</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-500">
          Know If It's A Scam & What To Do — in Seconds.
        </p>


        {/* Description */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 mb-10">
          AI Scams Are Getting Smarter. Your Protection Should Be Too.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">

          <Link href={"/login"} className="w-full sm:w-auto bg-[#2B4FBF] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#2441a8] transition-colors shadow-lg text-base sm:text-lg cursor-pointer">
            Start Free Trial
          </Link>


          <Link href={"/how-it-work"} className="w-full sm:w-auto bg-white text-gray-800 font-semibold px-8 py-3.5 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors text-base sm:text-lg cursor-pointer">
            See How It Works
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600">
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>3-day free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
}