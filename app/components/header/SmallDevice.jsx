'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoSection from './LogoSection';

const SmallDevice = () => {

    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userLoggedIn, setuserLoggedIn] = useState(false);

    const navItems = [
        { name: 'ScamRX DEMO', href: '/', nested: false },
        { name: 'URL Check', href: '/url-check', nested: false },
        { name: 'Breach Check', href: '/breach-check', nested: false },
        { name: 'Plan & Pricing', href: '/pricing', nested: false },
        {
            name: 'Education', href: '/faq', nested: true, sub: [
                { name: 'Glossary', href: '/glossary', nested: false },
                { name: 'Scam Quiz', href: '/faq', nested: false },
                { name: 'How It Works', href: '/how-it-work', nested: false },
                { name: 'Resources', href: '/faq', nested: false },
                { name: 'FAQ', href: '/faq', nested: false }
            ]
        },
    ];


    return (
        <div className="lg:hidden bg-blue-800 container mx-auto">
            {/* Mobile Header Top Bar */}
            <div className="flex items-center justify-between px-4 py-4">

                <LogoSection />

                <div className="flex items-center gap-4">
                    {!userLoggedIn && (
                        <Link
                            href="/signup"
                            className="bg-white text-blue-800 hover:bg-gray-100 px-4 py-1.5 rounded-lg font-semibold text-sm transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                    )}

                    <button
                        className="text-white p-0 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="bg-blue-900 border-t border-blue-700">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-white hover:bg-blue-700 font-medium py-3 px-6 border-b border-blue-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {!userLoggedIn ? (
                        <>
                            <Link
                                href="/login"
                                className="block text-white hover:bg-blue-700 font-medium py-3 px-6 border-b border-blue-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/login"
                                className="block bg-white text-blue-800 font-medium py-3 px-6"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started Free
                            </Link>
                        </>
                    ) : (
                        <Link
                            href="/dashboard"
                            className="block bg-white text-blue-800 font-medium py-3 px-6"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Go to Dashboard
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}

export default SmallDevice;