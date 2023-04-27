import { getAccountId } from "@/app/utils";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const accountId = getAccountId(request);
  const body = await request.json();
  const { goal }: { goal: number; accountId: number } = body;

  await prisma.account.update({
    where: {
      id: accountId
    },
    data: {
      monthlySavings: goal
    }
  });
  return NextResponse.json({ goal });
}
