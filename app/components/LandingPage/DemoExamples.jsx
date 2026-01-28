'use client';

import { Check } from "lucide-react";
import scrollIntoView from "../../utility/scrollIntoView";
import SpinLoader from "../SpinLoader";
import SuspiciousEmailAlert from "./SuspiciousEmailAlert";



export default function DemoExamples({ selectedExample, setSelectedExample, isAnalyzing, setIsAnalyzing, showResult, setShowResult, isSafe, setIsSafe, resultRef }) {



  const selectedExamples = [
    {
      step: 1,
      tag: 'Email Phishing',
      title: 'Fake Bank of America Alert',
      desc:
        'A convincing email claiming suspicious activity on your account with urgent verification required.',
      metrics: ["Domain authenticity verification", "Email header inspection for spoofing", "Urgency language detection", "Link safety & destination analysis", "Brand impersonation indicators"],
      btntext: "Analyze This Email →",
      title: "Suspicious Email",
      fromEmail: `From: [email protected]`,
      subject: "Subject: Unusual Activity Detected on Your Account",
      message: '"Verify your identity within 24 hours..."',
      count: 0,
      svg: (
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
      )
    },
    {
      step: 2,
      tag: 'Romance Scam',
      title: 'Fake Dating Profile Detection',
      desc:
        'Analyze profile photos to detect stolen images, stock photos, and verify if the person is real.',
      metrics: ["Reverse image search across databases", "Stock photo & model photo detection", "Image metadata & EXIF data analysis", "Multiple profile usage identification", "Social media cross-reference verification"],
      btntext: "Analyze Photo →",
      title: `Suspicious Profile`,
      fromEmail: `Dating App: "Sarah M., 34, Los Angeles"`,
      subject: `Dating App: "Sarah M., 34, Los Angeles"`,
      message: 'Upload profile photo for analysis →',
      count: 1,
      svg: (
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      )
    },
    {
      step: 3,
      tag: 'Service Provider Scam',
      title: 'Fake Verizon Outage Credit',
      desc:
        'An email offering account credit for a recent service outage, asking you to claim it online.',
      metrics: ["Official carrier domain verification", "Subdomain & typosquatting detection", "Account credential harvesting patterns", "Fake compensation offer indicators", "Real Verizon communication methods"],
      btntext: "Analyze This Email →",
      title: "Suspicious Email",
      fromEmail: `From: [email protected]`,
      subject: `Subject: Your $45 Service Credit Is Ready`,
      message: '"Click here to claim your outage compensation..."',
      count: 2,
      svg: (
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
  ]




  const handleAnalyze = (e, count) => {

    e.preventDefault();

    setSelectedExample(count);
    setIsAnalyzing(true);
    setShowResult(false);


    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      scrollIntoView(resultRef);
      setShowResult(true);
    }, 3000);
  };





  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-emerald-700 px-5 py-2 rounded-full text-[13px] font-bold uppercase tracking-wide border-2 border-emerald-500 mb-5">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ScamRx™ Demo
          </div>

          {/* Title and Description */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            See ScamRx™ In Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a real-world scam scenario below to experience instant AI-powered threat analysis. See exactly how ScamRx™ protects you in seconds.
          </p>
        </div>

        {/* Example Cards */}


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 relative">

          {selectedExamples.map((item) => (
            <div
              key={item.step}
              className="relative group bg-white p-10 rounded-2xl border-2 border-slate-200 text-center transition-all hover:border-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)] hover:-translate-y-1"
            >

              <div className="h-2 bg-blue-700 absolute inset-0 rounded-t-2xl w-0 group-hover:w-full transition-all duration-300" />

              {item.svg}

              <div className="scenario-type">Email Phishing</div>


              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {item.desc}
              </p>

              <SuspiciousEmailAlert
                title={item?.title}
                fromEmail={item?.fromEmail}
                subject={item?.subject}
                message={item?.message}
              />


              <div className="hidden transition-all duration-500 group-hover:flex flex-col justify-center gap-3">
                <div className="flex items-center gap-2">
                  <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="#357af3">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#357af3] font-semibold">What ScamRx™ Analyzes</span>
                </div>
                <ol className="flex flex-col items-start gap-4 pl-3">
                  {item.metrics.map((m, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-green-300" />
                      <span className="text-sm text-gray-500">
                        {m}
                      </span>
                    </li>
                  ))}
                </ol>


                <button onClick={(e) => { handleAnalyze(e, item?.count) }} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 cursor-pointer rounded-lg transition-all shadow-xl hover:scale-105 duration-300 flex items-center justify-center">
                  {
                    isAnalyzing ? (
                      <SpinLoader />
                    ) : (
                      item.btntext
                    )
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}