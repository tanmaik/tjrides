import Link from "next/link";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  let dbUser = null;
  if (!user) {
    return <div>loading...</div>;
  }
  try {
    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        image: user.profileImageUrl,
      },
    });
  } catch (e) {
    dbUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        image: user.profileImageUrl,
      },
    });
  }

  return (
    <div className="p-2">
      <h1>hi, {dbUser.fullName.split(" ")[0].toLowerCase()}</h1>
      <div className="mt-2">
        <Link href="/ride/create">
          <p>start a new ride</p>
        </Link>
        <Link href="/ride">
          <p>join existing rides</p>
        </Link>
      </div>
    </div>
  );
}
