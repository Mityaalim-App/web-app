import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { HttpStatusCode } from "axios";
import { prisma } from "@/prisma/client";

export const generateSmsCode = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};

export async function sendSms(tempCode: number, phone: string) {
  const headers = {
    Authorization: `Basic ${process.env.SMS_TOKEN}`,
    "Content-Type": "application/json"
  };

  return await fetch("https://capi.inforu.co.il/api/v2/SMS/SendSms", {
    method: "POST",
    headers,
    body: JSON.stringify({
      Data: {
        Message: `קוד האימות שלך הוא ${tempCode}`,
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
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { phone }: { phone: string } = body;

  try {
    /**
     * Send SMS
     */
    const tempCode = generateSmsCode();

    const response = await sendSms(tempCode, phone);
    const data = await response.json();
    if (data.StatusId < 1) {
      throw new Error("השליחה נכשלה, אנא נסה שנית");
    }

    /**
     * Update user with new verificationCode
     */
    prisma.user.update({
      where: {
        phoneNumber: phone
      },
      data: {
        verificationCode: tempCode
      }
    });

    return NextResponse.json({});
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, status: HttpStatusCode.BadRequest },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
