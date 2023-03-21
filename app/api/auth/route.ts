import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { HttpStatusCode } from "axios";
import { generateSmsCode, sendSms } from "../sms/route";

/**
 * Checks whether the verification code is expired (if it was generated more than 5 minutes ago)
 */
function isExpired(user: User) {
  // Convert the dates to milliseconds
  const time1 = Date.now();
  const time2 = new Date(user.updatedAt).getTime();

  console.log({ time1 }, { time2 });

  // Calculate the difference in milliseconds
  const difference = Math.abs(time2 - time1);

  // Convert the difference to minutes
  const differenceInMinutes = difference / (1000 * 60);

  console.log({ differenceInMinutes });

  // Return whether the difference is more than 5 minutes
  return differenceInMinutes > 5;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { code }: { code: string } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        verificationCode: +code
      }
    });

    if (user) {
      if (!isExpired(user)) {
        return NextResponse.json({ message: "success" });
      } else {
        throw new Error(
          "פג תוקפו של הקוד, לחץ על ׳שלח שוב׳ בשביל לקבל קוד חדש"
        );
      }
    } else {
      throw new Error("המספר שהכנסת שגוי, אנא נסה שנית");
    }
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, status: HttpStatusCode.BadRequest },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
