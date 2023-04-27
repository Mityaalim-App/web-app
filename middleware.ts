import { NextRequest, NextResponse } from "next/server";
import { decodeToken, isValid, JWTPayload } from "./app/utils/jwt";

/**
 * The ,middleware checks if the user is logged in and if the token is valid.
 *
 * If the user is not logged in or the token is invalid, he is redirected to the login page.
 *
 * If the user is logged in and the token is valid, the user id and account id are added to the request headers.
 *
 */
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (token) {
    const isValidToken = await isValid(token);

    if (!isValidToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decoded: JWTPayload = decodeToken(token);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-user-id", decoded.userId);
  requestHeaders.set("x-account-id", decoded.accountId);

  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  return response;
}

//regexp that matches all url's that start with / but exclude /login
export const config = {
  matcher: "/((?!login|api/account|_next/static|_next/images|favicon.ico).*)",
};
