import { prisma } from "@/prisma/client";
import { Days } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { time, selectedDays }: { time: Date; selectedDays: Days[] } = body;

  //TODO: Change the hardcoded account id - get it from token
  await prisma.account.update({
    where: {
      id: 2
    },
    data: {
      weeklyAlertDays: selectedDays,
      weeklyAlertHour: time,
      isVerified: true
    }
  });

  return NextResponse.json({ time });
}
