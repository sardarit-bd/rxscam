'use client';

import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react';
import Aside from '../../components/Dasboard/Aside';
import LogedInUser from "../../components/header/LogedInUser";
import LogoSection from "../../components/header/LogoSection";

export default function DashboardLayout({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('dashboard');


    useEffect(() => {
        const handleResize = (e) => {
            setIsSidebarOpen(window.innerWidth >= 768);
        };

        handleResize(); // run on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex h-fit bg-gray-100">
            {/* Sidebar */}
            <Aside isSidebarOpen={isSidebarOpen} activeMenu={activeMenu} setIsSidebarOpen={setIsSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="pbg shadow-md">
                    <div className="flex items-center justify-between px-6 py-4">
                        {/* Left Side - Menu Toggle & Logo */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="text-white hover:text-gray-900 transition-colors cursor-pointer"
                            >
                                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                            {!isSidebarOpen && (
                                <LogoSection />
                            )}
                        </div>

                        {/* Right Side - User Avatar */}
                        <LogedInUser />
                    </div>
                </header>

                {children}
            </div>
        </div>
    );
}

