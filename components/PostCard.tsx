import Link from "next/link";
import type { Post } from "../data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className=" bg-base-post rounded-lg p-4">
      <Link href={`/posts/${post.slug}`} className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.description}</p>
        <time className="text-xs text-gray-400">{post.date}</time>
      </Link>
    </article>
  );
}
