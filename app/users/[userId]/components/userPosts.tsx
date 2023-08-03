import getUserPosts from "@/lib/getUserPosts";

export default async function userPosts({ userId }: { userId: string }) {
  const posts = await getUserPosts(userId);

  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        );
      })}
    </>
  );
}
