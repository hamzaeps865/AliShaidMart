import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

/**
 * PRIVATE ROUTES — require the user to be logged in.
 * Any route that starts with these paths is protected.
 */
const PRIVATE_ROUTES = [
    "/cart",       // Shopping cart & checkout
    "/orders",     // Order history
    "/profile",    // User profile / account settings
    "/checkout",   // Checkout flow (future)
    "/wishlist",   // Wishlist (future)
];

/**
 * AUTH ROUTES — only accessible when NOT logged in.
 * Logged-in users are redirected to home.
 */
const AUTH_ONLY_ROUTES = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
    const { nextUrl } = req;

    // getToken reads the NextAuth JWT cookie — works in Edge, no DB needed.
    const token = await getToken({
        req,
        secret: process.env.AUTH_SECRET,
    });

    const isLoggedIn = !!token;

    const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
        nextUrl.pathname.startsWith(route)
    );

    const isAuthOnlyRoute = AUTH_ONLY_ROUTES.some((route) =>
        nextUrl.pathname.startsWith(route)
    );

    // If NOT logged in and trying to access a private route →
    // redirect to homepage with ?auth=required&callbackUrl=<intended-route>
    // AuthGuard detects this and opens the login popup automatically.
    if (isPrivateRoute && !isLoggedIn) {
        const callbackUrl = nextUrl.pathname + nextUrl.search;
        const redirectUrl = new URL("/", nextUrl.origin);
        redirectUrl.searchParams.set("auth", "required");
        redirectUrl.searchParams.set("callbackUrl", callbackUrl);
        return NextResponse.redirect(redirectUrl);
    }

    // If logged in and trying to open /login or /signup → send home.
    if (isAuthOnlyRoute && isLoggedIn) {
        return NextResponse.redirect(new URL("/", nextUrl.origin));
    }

    return NextResponse.next();
}

export const config = {
    // Run on all routes except Next.js internals, static files, and API routes.
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

