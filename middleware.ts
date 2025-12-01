import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Normalize requests hitting the root so they don't get treated as /<random>.
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

