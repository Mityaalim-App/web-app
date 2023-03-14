import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const generateSmsCode = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { phone } = body;

  const headers = {
    Authorization: `Basic ${process.env.SMS_TOKEN}`,
    "Content-Type": "application/json"
  };
  try {
    const response = await fetch(
      "https://capi.inforu.co.il/api/v2/SMS/SendSms",
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          Data: {
            Message: `קוד האימות שלך הוא ${generateSmsCode()}`,
            Recipients: [
              {
                Phone: phone
              }
            ],
            Settings: {
              Sender: "Mityaalim"
            }
          }
        })
      }
    );
    const data = await response.json();
    const token = jwt.sign(body, process.env.TOKEN_SECRET!, {
      expiresIn: "1 days"
    });

    const resp = NextResponse.json({ ...data });
    resp.cookies.set("token", token);

    return resp;
  } catch (e: any) {
    return NextResponse.json({ message: e.message, status: e.HttpStatusCode });
  }
}
