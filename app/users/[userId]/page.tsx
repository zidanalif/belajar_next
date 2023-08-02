import getUserById from "@/lib/getUserById";
import Link from "next/link";

export default async function page({ params }: { params: { userId: string } }) {
  const userData = await getUserById(params.userId);
  return (
    <>
      <Link href="/users">back</Link>
      <br />
      <h1>{userData.name}</h1>
    </>
  );
}
