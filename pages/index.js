import axios from "axios";
import Link from "next/link";
export default function Home({ posts }) {
  return (
    <div>
      <h1>Next.js App</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/comments?id=${post.id}`} as={`/comments/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return {
    props: {
      posts: data,
    },
  };
}
