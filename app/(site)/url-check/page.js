'use client'

import { Globe, Search } from "lucide-react";
import { useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import SpinLoader from "../../components/SpinLoader";
import UrlCheckerResult from "../../components/scanResult/url-check/UrlCheckerResult";
import scrollIntoView from "../../utility/scrollIntoView";

export default function URLCheckerPage() {
  const resultRef = useRef(null);
  const [isresultShow, setisResultShow] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [url, seturl] = useState('');
  const [scanResult, setScanResult] = useState(null);

  const isValidUrl = (urlString) => {
    try {
      const url = new URL(urlString);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();

    if (!url) {
      toast('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      toast('Please enter a valid URL starting with http:// or https://');
      return;
    }

    setisloading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/v1/free/url-scan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, consent: true }), // consent always true
      });

      const data = await response.json();


      if (response.status === 429) {
        toast(data.message || 'Rate limit exceeded. Try again after 24 hours.');
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || 'Scan failed');
      }

      setScanResult(data);
      setisResultShow(true);
      scrollIntoView(resultRef);
    } catch (error) {
      toast(error.message || 'Failed to scan URL. Please try again.');
    } finally {
      setisloading(false);
    }
  };



  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Globe className="w-8 h-8 pcl" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Check a Website URL
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Find out if a website is safe before you click
          </p>

          {/* Form */}
          <div className="space-y-4">
            {/* URL Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                onChange={(e) => seturl(e.target.value)}
                value={url}
                type="url"
                placeholder="https://example.com"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                disabled={isloading}
              />
            </div>

            {/* Check Button */}
            <button
              onClick={handleCheck}
              disabled={isloading}
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 w-full bg-[#1E40AF] hover:bg-[#2049cf] text-white py-4 text-base font-semibold rounded-lg cursor-pointer`}
            >
              {isloading ? <SpinLoader /> : "Check URL"}
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            We'll scan domain age, reputation, and phishing/malware reports.
          </p>
        </div>
      </div>

      <div className="scroll-mt-[150px]" ref={resultRef}>
        {isresultShow && scanResult && <UrlCheckerResult data={scanResult} />}
      </div>
      <Toaster />
    </section>
  );
}