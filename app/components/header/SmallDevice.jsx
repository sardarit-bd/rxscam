'use client';

import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogedInUser from "./LogedInUser";
import LogoSection from './LogoSection';

const SmallDevice = ({ userLoggedIn, setuserLoggedIn }) => {

    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <div className="bg-blue-900 border-t h-screen p-4 border-blue-700">
                    {navItems.map((item, index) => (


                        <div className='relative group flex items-center rounded-md p-2 py-4 hover:bg-blue-800 gap-2 border-b border-blue-800 ' key={index}>
                            <Link
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`hover:text-blue-200 font-medium text-lg whitespace-nowrap ${pathName == item.href ? "text-[#60A5FA]" : 'text-white'}`}
                            >
                                {item.name}
                            </Link>
                            {item?.nested && (
                                <ChevronDown className={`group-hover:rotate-180 transition-all duration-300 ${pathName == item.href ? "text-[#60A5FA]" : 'text-white'}`} />
                            )}
                            {
                                item?.nested && (
                                    <div className='hidden group-hover:flex transition-all duration-300 absolute top-7 left-0 bg-white px-6 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-xl flex-col gap-3'>
                                        {item.sub.map((subItem, index) => (
                                            <Link
                                                href={subItem.href}
                                                className={`text-blue-900 hover:text-blue-800 font-semibold text-lg whitespace-nowrap `}
                                                key={index}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )
                            }
                        </div>



                    ))}

                    {!userLoggedIn ? (
                        <>
                            <Link
                                href="/login"
                                className="block text-white hover:bg-blue-700 font-medium py-3 px-3 pb-9 border-b border-blue-800 hover:text-blue-200 font-medium text-lg whitespace-nowrap text-white"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                href="/login"
                                className="block rounded-md bg-white text-blue-800 font-medium py-3 px-6"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started Free
                            </Link>
                        </>
                    ) : (
                        <LogedInUser />
                    )}
                </div>
            )}
        </div>
    )
}

export default SmallDevice;