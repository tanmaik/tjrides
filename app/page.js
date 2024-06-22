import Link from "next/link";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <div>loading...</div>;
  }
  try {
    const dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        image: user.profileImageUrl,
      },
    });
  } catch (e) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        image: user.profileImageUrl,
      },
    });
  }

  return <div></div>;
}
