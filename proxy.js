import { NextResponse } from "next/server";
import verifyJWT from "./app/utility/verifyJWT";

export async function proxy(req) {

    const path = req.nextUrl.pathname;

    const token = req.cookies.get("token")?.value;


    const decoded = token ? await verifyJWT(token) : null;

    const protectedRoutes = ["/dashboard"];
    const isProtected = protectedRoutes.some(route => path.startsWith(route));



    //  Not logged in
    if (!decoded) {

        const res = NextResponse.redirect(new URL("/login", req.url));

        ["token", "name"].forEach(cookieName => {
            res.cookies.set(cookieName, "", {
                path: "/",
                maxAge: 0
            });
        });

        if (isProtected) return res;
    }


    //  Prevent logged user going to login
    if (decoded && path.startsWith("/login")) {

        return NextResponse.redirect(new URL("/dashboard", req.url));
    }


    if (!decoded && path.startsWith("/dashboard")) {

        return NextResponse.redirect(new URL("/login", req.url));
    }


    //  when user sign in as a admin and try to access user route
    // if (decoded?.role == "admin" && path.startsWith("/dashboard/user")) {

    //     return NextResponse.redirect(new URL("/dashboard/admin", req.url));
    // }


    //  when user sign in as a user and try to access admin route
    // if (decoded?.role == "user" && path.startsWith("/dashboard/admin")) {

    //     return NextResponse.redirect(new URL("/dashboard/user", req.url));
    // }






    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};