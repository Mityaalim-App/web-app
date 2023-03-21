import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { goal, accountId }: { goal: number; accountId: number } = body;

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
