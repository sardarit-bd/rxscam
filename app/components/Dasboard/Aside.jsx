'use client';

import { BookOpen, CreditCard, Home, Shield } from 'lucide-react';
import Link from 'next/link';
import LogoSection from '../header/LogoSection';

const Aside = ({ isSidebarOpen, activeMenu, setIsSidebarOpen }) => {


    const menuItems = [
        { id: 'dashboard', href: "/dashboard", name: 'Dashboard', icon: Home },
        { id: 'url-check', href: "/url-check", name: 'URL Check', icon: BookOpen },
        { id: 'breach-check', href: "/breach-check", name: 'Breach Check', icon: Shield },
        { id: 'pricing', href: "/pricing", name: 'Plan & Pricing', icon: CreditCard },
        { id: 'education', href: "/glossary", name: 'Education', icon: BookOpen },
    ];



    return (
        <aside
            className={`${isSidebarOpen ? 'w-64' : 'w-0'
                } bg-blue-900 text-white transition-all duration-300 overflow-hidden sticky top-0 h-screen relative`}
        >
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-8">
                    <LogoSection />
                </div>


                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const link = item.href;
                        return (
                            <Link
                                href={link}
                                key={item.id}
                                onClick={() => { setIsSidebarOpen(false), setActiveMenu(item.id) }}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${activeMenu === item.id
                                    ? 'bg-blue-800 text-white'
                                    : 'text-blue-100 hover:bg-blue-900'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{item.name}</span>
                            </Link>

                        );
                    })}
                </nav>
            </div>
            <div className='px-4 absolute bottom-6 w-full'>
                <button className='text-black bg-white w-full py-2 rounded-md  font-semibold cursor-pointer'>Logout</button>
            </div>
        </aside>
    )
}

export default Aside;