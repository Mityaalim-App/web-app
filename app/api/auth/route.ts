import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "../../../prisma/client";
import { User, UserDetails } from "@prisma/client";
import { HttpStatusCode } from "axios";
import { generateSmsCode, sendSms } from "../sms/route";

interface IFullUser extends User, UserDetails {}

async function createUser(tempCode: number, phone: string) {
  const user: Partial<User> = {
    phoneNumber: phone,
    verificationCode: tempCode
  };

  return await prisma.user.create({
    data: user as any
  });
}

function createRedirectUrl(user: IFullUser, request: NextRequest) {
  if (user.isVerified) {
    return new URL("/home", request.url);
  }
  if (!user.email) {
    return new URL("/personal-info", request.url);
  }
  if (!user.monthlySavings) {
    return new URL("/monthly-savings", request.url);
  }
  if (!user.weeklyAlertDays) {
    return new URL("/weekly-alerts", request.url);
  }

  return "";
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { phone }: { phone: string } = body;

  const dbUser = await prisma.user.findUnique({
    where: {
      phoneNumber: phone
    }
  });

  try {
    const tempCode = generateSmsCode();

    const response = await sendSms(tempCode, phone);
    const data = await response.json();
    if (data.StatusId < 1) {
      throw new Error("השליחה נכשלה, אנא וודא כי הכנסת את המספר הנכון");
    }

    if (!dbUser) {
      await createUser(tempCode, phone);
    }
    return NextResponse.json({ message: "Success" });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, status: HttpStatusCode.BadRequest },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
