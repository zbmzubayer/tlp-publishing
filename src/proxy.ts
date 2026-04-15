import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const AUTH_ROUTES = ["/login", "/register"];

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const returnTo = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  if (!session) {
    if (!AUTH_ROUTES.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(
        new URL(`/login?returnTo=${encodeURIComponent(returnTo)}`, request.url),
      );
    }
  } else {
    // TODO: Protect against authenticated users accessing auth routes like /login and /register
    if (AUTH_ROUTES.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/website/:path*", // Apply auth middleware to all routes under /website
    "/login",
    "/register",
  ],
};
