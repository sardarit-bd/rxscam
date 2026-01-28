
const SuspiciousEmailAlert = ({
    fromEmail,
    subject,
    message,
    title
}) => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-4">
            <div className="bg-gray-50 rounded-lg border-l-4 border-red-500 shadow-sm">
                {/* Header */}
                <div className="px-4 py-3 sm:px-5 sm:py-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex-shrink-0">
                            <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 text-red-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h2 className="text-red-400 text-xs sm:text-xs uppercase tracking-wide">
                            {title}
                        </h2>
                    </div>

                    {/* Email Details */}
                    <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                            <span
                                className="text-gray-500 break-all"
                            >
                                {fromEmail}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                            <span className="text-gray-500 break-words text-left">
                                {subject}
                            </span>
                        </div>

                        <div className="pt-1">
                            <p className="text-gray-500 leading-relaxed break-words text-left">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SuspiciousEmailAlert;