import posts from '../../utils/data';
import Link from 'next/link';

export default function Posts() {
  return (
    <section>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
                <p>{post.date}</p>
            </li>
        ))}
      </ul>
    </section>
  );
}
