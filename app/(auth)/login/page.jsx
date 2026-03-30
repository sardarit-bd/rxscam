'use client'; // Important for React hooks in Next.js App Router


import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import SpinLoader from "../../components/SpinLoader";
import setCookie from "../../utility/setCookie";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login'); // login or register

  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setloading(true);


    const data = {
      email: email,
      password: password,
    };


    // Make API call to add the product
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.success) {
      toast.success(res.message);
      setCookie("token", res?.data?.token, 1);
      setemail('');
      setpassword('');
      router.push('/dashboard');
    } else {
      toast.error(res.message);
    }

    setloading(false);


  };


  return (


    < div className="" >
      {/* Card */}
      < div className="bg-white w-full lg:w-[550px] rounded-xl shadow-2xl p-6 lg:p-10" >
        {/* Tabs */}
        < div className="flex bg-gray-100 rounded-xl p-2 mb-6 w-full max-w-[550px]" >
          <Link
            href={'/login'}
            className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition bg-white shadow text-gray-900`}
          >
            Log In
          </Link>

          <Link
            href={'/signup'}
            className={`flex-1 py-3 text-md font-semibold text-center rounded-md transition text-gray-500`}
          >
            Create Account
          </Link>
        </ div >


        <form className="space-y-4">


          <div className='py-2'>
            <label className="text-md text-gray-600">Email Address</label>
            <input
              onChange={(e) => { setemail(e.target.value) }}
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border placeholder-gray-300 text-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='py-2'>
            <label className="text-md text-gray-600">Password</label>
            <input
              onChange={(e) => { setpassword(e.target.value) }}
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full border placeholder-gray-300 text-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button onClick={(e) => { handleSubmit(e) }} className="w-full pbg text-white my-2 py-4 rounded-lg font-semibold flex items-center justify-center mt-4 cursor-pointer">
            {loading ? <SpinLoader /> : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="hidden flex items-center gap-3 my-6">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* Magic Link */}
        <button className="hidden w-full border border-gray-300 rounded-lg py-4 flex items-center justify-center gap-2 text-sm text-gray-700">
          <Mail size={16} />
          Send me a magic login link
        </button>
      </div >


    </div >

  );
}
