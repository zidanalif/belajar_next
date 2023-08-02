import Link from "next/link";
import getUsers from "@/lib/getUsers";

export default async function UsersPage() {
  const usersData = await getUsers();

  return (
    <>
      <h1>Users Page</h1>
      <Link href="/">back to home page</Link>
      <br />
      {usersData.map((user) => {
        return (
          <>
            <Link key={user.id} href={`/users/${user.id}`}>
              {user.name}
            </Link>
            <br />
          </>
        );
      })}
    </>
  );
}
