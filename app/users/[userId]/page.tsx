import getUserById from "@/lib/getUserById";
import Link from "next/link";
import UserPosts from "./components/userPosts";
import { Metadata } from "next";

interface Params {
  params: { userId: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const userData = await getUserById(params.userId);

  return {
    title: userData.name,
    description: `This is metadata description for ${userData.name}`,
  };
}

export default async function page({ params }: Params) {
  const userData = await getUserById(params.userId);
  return (
    <>
      <Link href="/users">back</Link>
      <br />
      <h1>{userData.name}</h1>
      <p>List Posts</p>
      <UserPosts userId={params.userId} />
    </>
  );
}
