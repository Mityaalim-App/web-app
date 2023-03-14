import jwt from "jsonwebtoken";

export function createToken(data: any) {
  const token = jwt.sign(data, process.env.TOKEN_SECRET!, {
    expiresIn: "1 days"
  });

  return token;
}
