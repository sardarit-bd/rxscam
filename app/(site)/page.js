// app/page.js
import Link from 'next/link';
import { Upload, Mic, MessageSquare, Users, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center py-4">
        {/* Header / Logo */}
        <div className="flex flex-col items-center mt-6">
          <img src="/logo2.png" alt="Logo" className="w-25 h-auto mb-2" />
          <h2 className="font-bold text-3xl text-blue-700 mb-2">Scam<span className="text-blue-500">RX</span></h2>
          <p className='text-gray-400'>Protect yourself from scam in one second</p>
        </div>

        {/* Main Container */}
        <div 
          className="flex flex-col items-start mt-10"
          style={{
            width: '1235px',
            minHeight: '1700px',
            gap: '60px',
            padding: '40px 0'
          }}
        >
          <h3 className="text-4xl md:text-3xl lg:text-5xl font-bold text-blue-700 mb-6 leading-tight text-center">
            The most advanced AI Powered asset protection on the planet
          </h3>
          {/* First Row: Two Column Layout */}
          <div 
            className="flex flex-row items-center"
            style={{
              width: '1235px',
              height: '570.39px',
              gap: '80px'
            }}
          >
            {/* Left Column - Text Content */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '571px',
                height: '561px',
                gap: '32px'
              }}
            >
              {/* Main Heading */}
              <div 
                className="font-inter font-bold text-3xl"
                style={{
                  width: '571px',
                  height: '51px',
                  color: '#1E40AF',
                  lineHeight: '160%',
                  fontSize: '32px'
                }}
              >
                We Stop You From Falling for Scams
              </div>

              {/* Text Content */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: '571px',
                  height: '478px',
                  gap: '24px'
                }}
              >
                {/* Paragraph 1 */}
                <div 
                  className="font-inter font-normal"
                  style={{
                    width: '571px',
                    height: '87px',
                    color: '#1F2937',
                    lineHeight: '160%',
                    fontSize: '18px'
                  }}
                >
                  Our real-time, AI-powered protection instantly analyzes suspicious URLs, files, texts, images, emails, and phone calls, giving you confidence in every decision you make online.
                </div>

                {/* Paragraph 2 */}
                <div 
                  className="font-inter font-normal"
                  style={{
                    width: '571px',
                    height: '87px',
                    color: '#1F2937',
                    lineHeight: '160%',
                    fontSize: '18px'
                  }}
                >
                  Using advanced analysis and a self-learning database, our system adapts to new scams, providing round-the-clock protection for you and your family.
                </div>

                {/* Paragraph 3 */}
                <div 
                  className="font-inter font-normal"
                  style={{
                    width: '571px',
                    height: '116px',
                    color: '#1F2937',
                    lineHeight: '160%',
                    fontSize: '18px'
                  }}
                >
                  Within seconds, you receive a complete, easy-to-understand report that includes detailed threat analysis, a scam probability rating, and clear recommended actions, so you always know what to do next.
                </div>

                {/* Paragraph 4 */}
                <div 
                  className="font-inter font-normal"
                  style={{
                    width: '571px',
                    height: '116px',
                    color: '#1F2937',
                    lineHeight: '160%',
                    fontSize: '18px'
                  }}
                >
                  For added convenience, members can forward suspicious emails and text messages directly to our platform for instant analysis and expert-level insight, making scam detection simple, fast, and reliable.
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div 
              className="flex flex-col items-start shrink-0"
              style={{
                width: '584px',
                height: '570.39px',
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '16.4px',
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
                padding: '25px 25px 1px'
              }}
            >
              {/* Form Container */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: '534px',
                  height: '524.39px',
                  gap: '20px'
                }}
              >
                {/* Upload Section */}
                <div className="flex flex-col items-start w-[534px] h-[268px] bg-white border border-gray-300 rounded-[10px] p-[21px_21px_1px]">
                  {/* Text Input Area */}
                  <input
                    type="text"
                    placeholder="Type, Paste, Upload a File or Use Voice To Text (mic icon)"
                    className="w-full h-[24px] text-gray-400 font-inter font-normal text-[16px] leading-[24px] outline-none"
                  />

                  {/* Note Text */}
                  {/* <p className="mt-2 text-center text-gray-500 font-inter font-normal text-[14px] leading-[22px] w-[431px] mx-auto">
                    One Complementary Scan Per Email Address Before Membership
                  </p> */}
                  
                  {/* Upload File and Voice Buttons */}
                  
                </div>

                <div className="flex mt-5 gap-[12px] w-full">
                    {/* Upload File Button */}
                    <button className="flex items-center justify-center gap-2 w-1/2 h-[48px] bg-[#EEF4FF] border border-gray-300 rounded-[8px]">
                      <Upload size={20} className="text-gray-500" />
                      <span className="font-arimo text-gray-500 text-[16px] leading-[24px]">
                        Upload File
                      </span>
                    </button>

                    {/* Use Voice Button */}
                    <button className="flex items-center justify-center gap-2 w-1/2 h-[48px] bg-[#EEF4FF] border border-gray-300 rounded-[8px]">
                      <Mic size={20} className="text-gray-500" />
                      <span className="font-inter text-gray-500 text-[16px] leading-[24px]">
                        Use Voice
                      </span>
                    </button>

                  </div>

                  {/* Email Input */}
                  <div className="flex items-center justify-center w-full h-[50px] bg-[#EEF4FF] border border-gray-300 rounded-[8px] px-5">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full text-center bg-transparent outline-none text-gray-500 font-inter font-normal text-[16px] leading-[19px]"
                    />
                  </div>

                {/* Check for Scam Button */}
                <button 
                  className="relative flex justify-center items-center"
                  style={{
                    width: '534px',
                    height: '56px',
                    background: '#1E40AF',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    className="font-inter font-semibold"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '18px',
                      lineHeight: '24px'
                    }}
                  >
                    Check for Scam
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div 
            style={{
              width: '1235px',
              height: '0px',
              border: '1px solid #E5E7EB'
            }}
          ></div>

          {/* Second Row: URL Check Section */}
          <div 
            className="flex flex-row items-center"
            style={{
              width: '1235px',
              height: '279px',
              gap: '67px'
            }}
          >
            {/* URL Check Form */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '584px',
                height: '265.59px',
                gap: '24px'
              }}
            >
              {/* Heading */}
              <div 
                className="relative"
                style={{
                  width: '584px',
                  height: '41.59px'
                }}
              >
                <h2 
                  className="font-inter font-bold absolute"
                  style={{
                    width: '330px',
                    height: '42px',
                    left: '0px',
                    top: '-3px',
                    color: '#1E40AF',
                    fontSize: '32px',
                    lineHeight: '42px'
                  }}
                >
                  FREE URL Link Check
                </h2>
              </div>

              {/* Form Container */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: '584px',
                  height: '200px',
                  gap: '16px'
                }}
              >
                {/* URL Input */}
                <div 
                  className="flex flex-row items-center"
                  style={{
                    width: '584px',
                    height: '58px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    padding: '16px 20px'
                  }}
                >
                  <input 
                    type="text"
                    placeholder="Enter or paste suspicious URL here"
                    className="w-full outline-none"
                    style={{
                      color: '#9CA3AF',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  />
                </div>

                {/* Email Input */}
                <div 
                  className="flex flex-row justify-center items-center"
                  style={{
                    width: '584px',
                    height: '54px',
                    background: '#EEF4FF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    padding: '16px 20px'
                  }}
                >
                  <input 
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full text-center bg-transparent outline-none"
                    style={{
                      color: '#64748B',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  />
                </div>

                {/* Analyze Button */}
                <button 
                  className="relative flex justify-center items-center"
                  style={{
                    width: '584px',
                    height: '56px',
                    background: '#1E40AF',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    className="font-inter font-semibold"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '18px',
                      lineHeight: '24px'
                    }}
                  >
                    Analyze This Link
                  </span>
                </button>
              </div>
            </div>

            {/* Text Content */}
            <div 
              className="font-inter font-normal"
              style={{
                width: '584px',
                height: '279px',
                color: '#1F2937',
                fontSize: '18px',
                lineHeight: '170%'
              }}
            >
              <p className="font-bold text-xl mb-4">⚠️ Hackers can break into company systems and steal customer data</p>
              <p className="mb-4">including your email, passwords, and other personal information.</p>
              
              <p className="font-bold text-lg mb-2">Why This Matters:</p>
              <p>Scammers purchase this stolen data to craft highly personalized phishing emails. These emails appear authentic because they contain your real information, putting you at greater risk of fraud and identity theft.</p>
            </div>
          </div>

          {/* Horizontal Line */}
          <div 
            style={{
              width: '1235px',
              height: '0px',
              border: '1px solid #E5E7EB'
            }}
          ></div>

          {/* Third Row: Text and Email Check */}
          <div 
            className="flex flex-row items-start"
            style={{
              width: '1235px',
              height: '248px',
              gap: '67px'
            }}
          >
            {/* Left Text Content */}
            <div 
              className="font-inter font-normal"
              style={{
                width: '584px',
                height: '248px',
                color: '#1F2937',
                fontSize: '18px',
                lineHeight: '170%'
              }}
            >
              <p className="font-bold text-xl mb-4">Scammers often disguise harmful websites as legitimate links.</p>
              <p className="mb-4">Our proprietary AI analyses URLs in real-time, detecting phishing sites, malware, and fraud before they can put you or your assets at risk.</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>No sign up required – start protecting yourself immediately</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Instant results – analysis completed in seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Comprehensive protection – checks against 6.4B+ threat databases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Privacy guaranteed – links are never stored</span>
                </li>
              </ul>
            </div>

            {/* Right Email Check Form */}
            <div 
              className="flex flex-col items-start"
              style={{
                width: '584px',
                height: '195.59px',
                gap: '24px'
              }}
            >
              {/* Heading */}
              <div 
                className="relative"
                style={{
                  width: '584px',
                  height: '41.59px'
                }}
              >
                <h2 
                  className="font-arimo font-bold absolute"
                  style={{
                    width: '394px',
                    height: '42px',
                    left: '0px',
                    top: '-3px',
                    color: '#1E40AF',
                    fontSize: '32px',
                    lineHeight: '42px'
                  }}
                >
                  FREE Email BreachCheck
                </h2>
              </div>

              {/* Form Container */}
              <div 
                className="flex flex-col items-start"
                style={{
                  width: '584px',
                  height: '130px',
                  gap: '16px'
                }}
              >
                {/* Email Input */}
                <div 
                  className="flex flex-row items-center"
                  style={{
                    width: '584px',
                    height: '58px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '6.8px',
                    padding: '16px 20px'
                  }}
                >
                  <input 
                    type="email"
                    placeholder="Enter email address here"
                    className="w-full outline-none"
                    style={{
                      color: '#9CA3AF',
                      fontFamily: 'Inter',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '19px'
                    }}
                  />
                </div>

                {/* Check Button */}
                <button 
                  className="relative flex justify-center items-center"
                  style={{
                    width: '584px',
                    height: '56px',
                    background: '#1E40AF',
                    borderRadius: '6.8px',
                    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    className="font-inter font-semibold"
                    style={{
                      color: '#FFFFFF',
                      fontSize: '18px',
                      lineHeight: '24px'
                    }}
                  >
                    Check My Email
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> {/* End of flex-1 content area */}

      {/* Fourth Row: Feature Cards */}
      <div className="flex flex-row justify-center gap-4 my-10 py-10">
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-xl p-6 shadow-md w-[392px] mx-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
              <Mail className="text-blue-600" size={20} />
            </div>
            <h4 className="font-inter text-xl font-semibold text-gray-900 mb-2">
              Email scans
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Forward suspicious emails for instant checks.
            </p>
          </div>
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-xl p-6 shadow-md w-[392px] mx-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
              <MessageSquare className="text-blue-600" size={20} />
            </div>
            <h4 className="font-inter text-xl font-semibold text-gray-900 mb-2">
              Text scans
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Text suspicious messages to get a safety score.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start bg-white border border-gray-200 rounded-xl p-6 shadow-md w-[392px] mx-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
              <Users className="text-blue-600" size={20} />
            </div>
            <h4 className="font-inter text-xl font-semibold text-gray-900 mb-2">
              Family monitoring
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Protect parents and loved ones with alerts.
            </p>
          </div>
      </div> {/* close fourth row */}
      
      {/* Footer will naturally be at bottom now */}
    </div>
  );
}