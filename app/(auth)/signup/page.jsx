'use client'; // Important for React hooks in Next.js App Router

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import SpinLoader from "../../components/SpinLoader";

export default function SignupPage() {






  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [confirm, setconfirm] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("user");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirm) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirm) {
      toast.error("Password and Confirm Password must be same");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
      role: role,
    };


    setloading(true);

    // Make API call to add the product
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (res.success) {
      toast.success(res.message);
      setname("");
      setemail("");
      setpassword("");
      setconfirm("");
      router.push('/login');
    } else {
      toast.error(res.message);
    }

    setTimeout(() => {
      setloading(false);
    }, 1000);

  };





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
              onChange={(e) => { setname(e.target.value) }}
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full border placeholder-gray-300 text-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
              type="password"
              onChange={(e) => { setpassword(e.target.value) }}
              placeholder="Enter your password"
              className="mt-1 w-full border placeholder-gray-300 text-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='py-2'>
            <label className="text-md text-gray-600">Confirm Password</label>
            <input
              type="password"
              onChange={(e) => { setconfirm(e.target.value) }}
              placeholder="Confirm your password"
              className="mt-1 w-full border placeholder-gray-300 text-gray-600 border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button onClick={(e) => { handleSubmit(e) }} className="w-full pbg text-white my-2 py-4 rounded-lg font-semibold  flex items-center justify-center mt-4 cursor-pointer">
            {loading ? <SpinLoader /> : "Create Account"}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}
