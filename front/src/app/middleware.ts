import { NextResponse } from "next/server";

export function middleware(request: any) {
  const user = "";

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/user"],
};
