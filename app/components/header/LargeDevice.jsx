'use client';

import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogedInUser from "./LogedInUser";
import LogoSection from "./LogoSection";

const LeargeDevice = ({ userLoggedIn, setuserLoggedIn }) => {

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
        <div className="hidden lg:flex flex-row items-center gap-[103px] h-fit py-5 pbg w-full">


            {/* Desktop Navigation Links */}
            <nav className="flex-1 flex items-center justify-between container mx-auto">

                {/* Logo Section */}
                <LogoSection />

                <div className="flex items-center gap-10 ml-8">
                    {navItems.map((item, index) => (
                        <div className='relative group flex items-center gap-2' key={index}>
                            <Link
                                href={item.href}
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
                </div>

                {/* Right Side - Auth Buttons */}
                <div className="flex items-center gap-6">
                    {!userLoggedIn ? (
                        <>
                            <Link
                                href="/login"
                                className="text-white hover:text-blue-200 font-medium text-lg"
                            >
                                Login
                            </Link>
                            <Link
                                href="/login"
                                className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-lg transition-colors duration-200"
                            >
                                Get Started
                            </Link>
                        </>
                    ) : (
                        <LogedInUser />
                    )}
                </div>
            </nav>
        </div>
    )
}

export default LeargeDevice;