/**
 * This file is in charge of updating user profile
 */

import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import { prisma } from "@/prisma/client";
import { User, Account } from "@prisma/client";
import { getUserId } from "@/app/utils";

async function getUser(id: string) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      phoneNumber: true,
      firstName: true,
      lastName: true,
      account: true,
    },
  });
}

export const GET = async (request: NextRequest) => {
  console.log("GET....");
  const userId = getUserId(request);
  console.log("USER-ID: 2...",userId)
  let userDetails = await getUser(userId);
  return NextResponse.json( userDetails );//.firstName );
}

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
