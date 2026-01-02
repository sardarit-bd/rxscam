"use client"
import { Lock, Mail } from "lucide-react";
import { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import SpinLoader from "../../components/SpinLoader";
import BreachCheckerResult from "../../components/breach-check/BreachCheckerResult";
import scrollIntoView from "../../utility/scrollIntoView";




export default function BreachCheckSection() {


  const resultRef = useRef(null);
  const [isresultShow, setisResultShow] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [email, setemail] = useState('');


  /**************** handle url check functin is here *********************/
  function handleCheck(e) {

    e.preventDefault();

    if (!email) {
      toast('Please enter a valid Email');
      return;
    }


    setisloading(true);

    setTimeout(() => {
      setisloading(false);
      setisResultShow(true);
      scrollIntoView(resultRef);
    }, 2000);

  }






  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Lock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Breach Check
            </h2>
            <p className="text-gray-600">
              See if your email or phone number has been exposed in known data breaches
            </p>
          </div>

          {/* Card */}
          <div className="">
            <div className="space-y-4">

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  onChange={(e) => { setemail(e.target.value) }}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                focus:border-transparent text-gray-700"
                />
              </div>

              {/* Button */}
              <button
                onClick={(e) => { handleCheck(e) }}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 w-full pbg hover:bg-blue-800 text-white py-4 text-base font-semibold rounded-lg cursor-pointer`}>
                {
                  isloading ? (
                    <SpinLoader />
                  ) : (
                    "Breach Check"
                  )
                }
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="scroll-mt-[150px]" ref={resultRef}>
        {
          isresultShow && <BreachCheckerResult />
        }
      </div>


      <Toaster />
    </section>
  )
}
