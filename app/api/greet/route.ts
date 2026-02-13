import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  try {
    const random = crypto.randomUUID();
    prisma.user.create({
      data: {
        email: `email+${random}@gmail.com`,
      },
    });
  } catch (err) {
    console.log(err);
  }
  return NextResponse.json({ msg: "Hello" });
}
