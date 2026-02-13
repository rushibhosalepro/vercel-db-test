import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request) {
  try {
    const random = crypto.randomUUID();

    const user = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: `email+${random}@gmail.com`,
        },
      });
      const post = await tx.posts.create({
        data: {},
      });
      return { user, post };
    });
    return NextResponse.json({ msg: "Hello", user });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
