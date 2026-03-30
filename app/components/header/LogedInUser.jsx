import { CircleUserRound, LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import setCookie from "../../../app/utility/setCookie";

const LogedInUser = () => {




    const [IsLoading, setIsLoading] = useState(false);




    // useEffect(() => {

    //     let isMounted = true;

    //     const loadUser = async () => {
    //         try {
    //             const token = getTookn();

    //             if (!token) return;

    //             const decoded = await verifyJWT(token);

    //             if (isMounted && decoded) {
    //                 setname(decoded?.name);
    //                 setemail(decoded?.email);
    //                 setrole(decoded?.role);
    //             }

    //         } catch (err) {
    //             console.error("User load failed:", err);
    //         }
    //     };

    //     loadUser();

    //     return () => {
    //         isMounted = false; // cleanup
    //     };

    // }, []);












    const handleLogout = async (e) => {

        e.preventDefault();
        setIsLoading(true);

        // Make API call to log out
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });

        const res = await response.json();

        if (res.success) {
            setCookie("token", '', 1);
            router.push('/');
        } else {
            toast.error(res.message);
        }

        setIsLoading(false);

    };














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
                <button onClick={(e) => { handleLogout(e) }} className="flex items-center gap-3 pbg p-2 rounded-md mx-4 text-white text-center cursor-pointer">
                    <LogOut />
                    <span className="text-lg">Logout</span>
                </button>
            </div>
        </div>
    )
}

export default LogedInUser;