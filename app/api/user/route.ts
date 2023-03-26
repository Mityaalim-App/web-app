/**
 * This file is in charge of updating user profile
 */

import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import { prisma } from "@/prisma/client";
import { User, Account } from "@prisma/client";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { user, account }: { user: User; account: Account } = body;

  try {
    const updated = await prisma.account.update({
      where: {
        id: account.id
      },
      data: {
        ...account,
        user: {
          update: {
            where: {
              id: user.id
            },
            data: {
              ...user
            }
          }
        }
      }
    });
    return NextResponse.json({ ...updated });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message, status: HttpStatusCode.BadRequest },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
