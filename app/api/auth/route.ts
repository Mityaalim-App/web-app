/**
 * This file is in charge of checking whether the code the user entered is valid or not
 * A code is considered invalid in 2 cases:
 *
 * 1. The code does not exist in the DB
 * 2. The code is more than 5 minutes old
 */

import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { HttpStatusCode } from "axios";

/**
 * Checks whether the verification code is expired (if it was generated more than 5 minutes ago)
 */
function isExpired(user: User) {
  // Convert the dates to milliseconds
  const time1 = Date.now();
  const time2 = new Date(user.updatedAt).getTime();

  // Calculate the difference in milliseconds
  const difference = Math.abs(time2 - time1);

  // Convert the difference to minutes
  const differenceInMinutes = difference / (1000 * 60);

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
