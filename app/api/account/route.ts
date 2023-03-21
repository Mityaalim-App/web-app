import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";
import { HttpStatusCode } from "axios";
import { generateSmsCode, sendSms } from "../sms/route";

async function createAccount(tempCode: number, phone: string) {
  return await prisma.account.create({
    data: {
      user: {
        create: [
          {
            phoneNumber: phone,
            verificationCode: tempCode
          }
        ]
      }
    }
  });
}

async function getUser(phone: string) {
  return await prisma.user.findUnique({
    where: {
      phoneNumber: phone
    },
    select: {
      id: true,
      phoneNumber: true,
      firstName: true,
      lastName: true,
      account: true
    }
  });
}

/**
 * Handles *login / account creation* process
 */
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { phone }: { phone: string } = body;

  try {
    let account = null;
    const tempCode = generateSmsCode();

    let dbUser = await getUser(phone);

    const response = await sendSms(tempCode, phone);
    const data = await response.json();
    if (data.StatusId < 1) {
      throw new Error("השליחה נכשלה, אנא וודא כי הכנסת את המספר הנכון");
    }

    if (!dbUser) {
      account = await createAccount(tempCode, phone);
      dbUser = await getUser(phone);
      return NextResponse.json({ ...dbUser });
    }

    await prisma.user.update({
      where: {
        id: dbUser.id
      },
      data: {
        verificationCode: tempCode
      }
    });

    return NextResponse.json({ ...dbUser });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, status: HttpStatusCode.BadRequest },
      { status: HttpStatusCode.BadRequest }
    );
  }
}