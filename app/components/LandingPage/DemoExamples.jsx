import Image from "next/image";
import logo from "../../../public/logo-2.png";


export default function DemoExamples() {
  const examples = [
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Phishing Scam",
      description: "Fake Norton antivirus purchase confirmation with $349 charge to panic you into calling",
      warnings: [
        {
          icon: "📞",
          text: "Uses large charge ($349.99)",
          color: "text-gray-600"
        },
        {
          icon: "☎️",
          text: "Pressures you to call number",
          color: "text-gray-600"
        }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Package Delivery",
      description: "Fake USPS/FedEx message about missed delivery with suspicious tracking link",
      warnings: [
        {
          icon: "⚠️",
          text: "Targets online shoppers",
          color: "text-red-600"
        },
        {
          icon: "🔗",
          text: "Malicious tracking links",
          color: "text-gray-600"
        }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Bank Alert",
      description: "Fake fraud alert claiming suspicious transactions on your account requiring verification",
      warnings: [
        {
          icon: "⚠️",
          text: "Spoofs bank phone numbers",
          color: "text-red-600"
        },
        {
          icon: "💳",
          text: "Asks for Card/PIN details",
          color: "text-gray-600"
        }
      ]
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          {/* Badge */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm sm:text-base font-semibold text-blue-600 tracking-wide uppercase">
              Instant Protection
            </span>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-2">
              <Image src={logo} alt="Logo" width={200} height={200} className="w-auto h-auto" />
            </div>
          </div>

          {/* Title and Description */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Try The Demo- Select An Example
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Choose one of the real scam examples below to see instant AI-powered analysis
          </p>
        </div>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {examples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group"
            >
              {/* Icon */}
              <div className="mb-5">
                {example.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {example.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                {example.description}
              </p>

              {/* Warning Icons */}
              <div className="space-y-2.5">
                {example.warnings.map((warning, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-lg flex-shrink-0">{warning.icon}</span>
                    <span className={`text-sm ${warning.color} leading-relaxed`}>
                      {warning.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Arrow Indicator */}
              <div className="mt-5 pt-5 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  <span>Try this example</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}