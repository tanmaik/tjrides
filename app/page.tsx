import Link from "next/link";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser();
  return <div>Hello</div>;
}
