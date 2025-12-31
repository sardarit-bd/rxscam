'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone, MessageCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "How does ScamRX detect scams?",
      answer: "ScamRX uses advanced AI and machine learning algorithms combined with real-time threat databases to analyze messages. We check for phishing attempts, suspicious links, grammar mistakes, urgency tactics, and known scam patterns. Our system is continuously updated with the latest scam techniques to provide secure detection."
    },
    {
      question: "What types of scams can ScamRX detect?",
      answer: "ScamRX can detect various types of scams including phishing emails, smishing (SMS scams), vishing (voice call scams), investment scams, romance scams, tech support scams, lottery scams, and impersonation scams."
    },
    {
      question: "How do I use the email forwarding feature?",
      answer: "Simply forward any suspicious email to our designated email address. Our AI will analyze it and send you a detailed report within seconds, including risk level and recommended actions."
    },
    {
      question: "Can I protect my elderly parents with ScamRX?",
      answer: "Yes, with our Family and Elder Assist plans, you can monitor and protect elderly family members. They'll receive alerts for suspicious messages and you'll get notifications about high-risk threats."
    },
    {
      question: "What's the difference between the plans?",
      answer: "Individual plan offers basic protection for 30 scans/month. Family plan supports up to 5 members with 200 scans/month. Elder Assist provides comprehensive protection with 500 scans/month and dedicated support."
    },
    {
      question: "How accurate is the scam detection?",
      answer: "Our AI detection system has a 95% accuracy rate, verified through continuous testing against real-world scam data and user feedback."
    },
    {
      question: "Does ScamRX store my messages?",
      answer: "No, we respect your privacy. Messages are analyzed in real-time and immediately deleted from our servers after processing. We only retain anonymized metadata for improving our algorithms."
    },
    {
      question: "What should I do if I receive a high-risk score?",
      answer: "Immediately delete the message and do not engage. If you've already interacted, contact your bank or relevant institution and monitor your accounts closely."
    },
    {
      question: "Can ScamRX check text messages (SMS)?",
      answer: "Yes, all plans include SMS text scanning. You can forward suspicious texts or use our mobile app for automatic scanning."
    },
    {
      question: "How does the URL checker work?",
      answer: "Our URL checker analyzes links in real-time, checking against known malicious sites, examining domain age, SSL certificates, and analyzing page content for scam indicators."
    },
    {
      question: "What is the breach check feature?",
      answer: "Breach check monitors if your email appears in known data breaches and alerts you so you can change passwords and secure your accounts."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial for all our premium plans so you can experience full protection before committing."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use bank-level encryption and PCI-compliant payment processing. We never store your full payment details on our servers."
    },
    {
      question: "What if I need help or have questions?",
      answer: "Our support team is available 24/7 via email, chat, and phone. Priority support members get dedicated assistance and faster response times."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-12 mt-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-5xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-inter font-normal text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Everything you need to know about ScamRX and scam protection
          </p>
        </div>

        {/* FAQ Accordion Section */}
        <div className="w-full mb-16">
          {/* First FAQ Item - Expanded by default */}
          <div className="mb-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
            >
              <h3 className="font-bold text-lg text-gray-800">
                How does ScamRX detect scams?
              </h3>
              {openIndex === 0 ? (
                <ChevronUp className="h-6 w-6 text-blue-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-400" />
              )}
            </button>
            {openIndex === 0 && (
              <div className="px-8 pb-6">
                <p className="font-inter font-normal text-gray-700 text-lg leading-relaxed">
                  ScamRX uses advanced AI and machine learning algorithms combined with real-time threat databases to analyze messages. We check for phishing attempts, suspicious links, grammar mistakes, urgency tactics, and known scam patterns. Our system is continuously updated with the latest scam techniques to provide secure detection.
                </p>
              </div>
            )}
          </div>

          {/* Second FAQ Item */}
          <div className="mb-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
            >
              <h3 className="font-bold text-lg text-gray-800">
                What types of scams can ScamRX detect?
              </h3>
              {openIndex === 1 ? (
                <ChevronUp className="h-6 w-6 text-blue-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-400" />
              )}
            </button>
            {openIndex === 1 && (
              <div className="px-8 pb-6">
                <p className="font-inter font-normal text-gray-700 text-lg leading-relaxed">
                  ScamRX can detect various types of scams including phishing emails, smishing (SMS scams), vishing (voice call scams), investment scams, romance scams, tech support scams, lottery scams, and impersonation scams.
                </p>
              </div>
            )}
          </div>

          {/* Third FAQ Item */}
          <div className="mb-4 border border-gray-200 rounded-2xl bg-white shadow-sm">
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
            >
              <h3 className="font-bold text-lg text-gray-800">
                How do I use the email forwarding feature?
              </h3>
              {openIndex === 2 ? (
                <ChevronUp className="h-6 w-6 text-blue-600" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-400" />
              )}
            </button>
            {openIndex === 2 && (
              <div className="px-8 pb-6">
                <p className="font-inter font-normal text-gray-700 text-lg leading-relaxed">
                  Simply forward any suspicious email to our designated email address. Our AI will analyze it and send you a detailed report within seconds, including risk level and recommended actions.
                </p>
              </div>
            )}
          </div>

          {/* Additional FAQ Items - Collapsed List */}
          <div className="space-y-4">
            {faqItems.slice(3).map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl bg-white shadow-sm">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index + 3 ? -1 : index + 3)}
                >
                  <span className="font-inter font-bold text-gray-800 text-lg">
                    {item.question}
                  </span>
                  {openIndex === index + 3 ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openIndex === index + 3 && (
                  <div className="px-6 pb-4">
                    <p className="font-inter font-normal text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full pbg border border-blue-700 rounded-3xl shadow-xl p-10 mb-5">
            <div className="text-center mb-10">
                <h2 className="font-bold text-4xl text-white mb-4">
                Still have questions?
                </h2>
                <p className="font-inter font-normal text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                Our support team is here to help. Reach out anytime and we'll get back to you quickly.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button className="bg-white text-blue-900 font-inter font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg min-w-[180px] cursor-pointer">
                Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white font-inter font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors min-w-[180px] cursor-pointer">
                Contact Support
                </button>
            </div>         
        </div>
      </div>
  
    </div>
  );
}