import { CircleUserRound, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";

const LogedInUser = () => {
    return (
        <div className="relative group">
            <div className="">
                <CircleUserRound size={35} className="cursor-pointer" />
            </div>

            <div className="hidden group-hover:flex shadow-xl bg-white absolute top-9 right-60 lg:right-0 text-black py-4 rounded-md flex-col gap-5">

                <Link className="flex items-center gap-3 hover:text-blue-800 px-5" href="/dashboard">
                    <LayoutDashboard />
                    <span className="text-lg">Dashboard</span>
                </Link>
                <button className="flex items-center gap-3 pbg p-2 rounded-md mx-4 text-white text-center cursor-pointer">
                    <LogOut />
                    <span className="text-lg">Logout</span>
                </button>
            </div>
        </div>
    )
}

export default LogedInUser;