'use client'; // Important for React hooks in Next.js App Router

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "../../public/logo.png";

export default function AuthLayout({ children }) {

  const pathname = usePathname();



  console.log(pathname);

  return (
    <div className="min-h-screen flex items-center justify-center gap-5 pbg">

      {/* LEFT SIDE */}
      <div className="hidden xl:flex w-1/2 text-white flex-col justify-center pl-40">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <Image src={logo} alt="Logo" width={200} height={200} className="w-auto h-auto" />
              </div>
            </Link>
          </div>
        </div>

        <h1 className="text-6xl py-4 font-bold mb-4">
          {pathname === '/login' ? 'Check scams in seconds' : 'Create your account'}
        </h1>

        <p className="text-blue-100 text-2xl max-w-xl mb-10">
          {pathname === '/login'
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

        {/* Footer links below card */}
        <div className="flex justify-center gap-4 text-md text-white mt-10">
          <Link href="/">Back to Home</Link>
          <span>•</span>
          <Link href="/pricing">Pricing</Link>
          <span>•</span>
          <Link href="/support">Support</Link>
        </div>

      </div>

      <div className='w-full m-4 lg:m-0 lg:w-7/12 flex flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
