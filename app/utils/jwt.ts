import { decodeJwt, jwtVerify, SignJWT } from "jose";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export interface JWTPayload {
  userId: string;
  phone: string;
  accountId: string;
}

/**
 * Generates a JWT token
 * @param user
 * @returns a promise that resolves to the JWT token
 */
export const generateJWT = async (user: any) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

  const alg = "HS256";

  const jwt = new SignJWT({
    userId: user.id,
    phone: user.phoneNumber,
    accountId: user.account.id,
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:mityaalim:issuer")
    .setExpirationTime("1d")
    .sign(secret);

  return jwt;
};

/**
 * Checks if the the token is expired
 * @param expirationDate Unix timestamp
 * @returns true if the token is expired, false otherwise
 */
export function isExpired(expirationDate: number) {
  const now = Math.floor(Date.now() / 1000); // current time in Unix timestamp format
  const oneDayAgo = now - 86400; // Unix timestamp one day ago
  if (expirationDate < oneDayAgo) {
    return true;
  } else {
    return false;
  }
}

/**
 * Checks if the token is valid
 * @param token
 * @returns true if the token is valid, false otherwise
 */
export async function isValid(token: RequestCookie) {
  try {
    const { payload } = await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
    return !isExpired(payload.exp!);
  } catch (error) {
    return false;
  }
}

/**
 * Decodes the token
 * @param token
 * @returns the decoded token
 */
export function decodeToken(token: RequestCookie): JWTPayload {
  const decoded = decodeJwt(token.value);
  return {
    userId: decoded.userId as string,
    accountId: decoded.accountId as string,
    phone: decoded.phone as string,
  };
}
