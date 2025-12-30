import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      initial: "MJ",
      name: "Margaret Johnson",
      role: "Retired Teacher",
      rating: 5,
      text: "I almost fell for an IRS scam that would have cost me $8,500. ScamRx flagged it immediately and explained exactly why it was fake. I showed my daughter and she signed up her whole family!",
      badge: "Verified Scam Prevented",
      badgeColor: "bg-green-100 text-green-700",
      savings: "$8,500",
      bgColor: "bg-green-50"
    },
    {
      initial: "RC",
      name: "Robert Chen",
      role: "Software Engineer",
      rating: 5,
      text: "My parents are in their 80s and receive scam calls daily. The High Risk feature lets me monitor suspicious messages they receive. We've prevented 3 major scams in 3 months. Worth every penny for peace of mind.",
      badge: "Family Plan User",
      badgeColor: "bg-blue-100 text-blue-700",
      savings: null,
      bgColor: "bg-white border-2 border-gray-200"
    },
    {
      initial: "ST",
      name: "Sarah Thompson",
      role: "Small Business Owner",
      rating: 5,
      text: "A 'vendor' sent me an invoice that looked completely legitimate. ScamRx caught subtle red flags I missed. Saved my business $12,000. Now I check every invoice before paying!",
      badge: "Business Protected",
      badgeColor: "bg-teal-100 text-teal-700",
      savings: "$12,000",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50/30 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-sm sm:text-base font-semibold text-blue-600 tracking-wide uppercase">
              Verified Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Real People, Real Protection
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See how ScamRx has saved families from devastating financial loss
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${testimonial.bgColor} rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow`}
            >
              {/* Avatar and Name */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                {testimonial.text.split(testimonial.savings).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && testimonial.savings && (
                      <span className="font-bold text-green-700">
                        {testimonial.savings}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>

              {/* Badge */}
              <div className="inline-block">
                <span className={`${testimonial.badgeColor} px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium`}>
                  ✓ {testimonial.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}