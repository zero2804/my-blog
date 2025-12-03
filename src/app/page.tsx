import Link from "next/link";
import { posts } from "../../data/posts";
import PostCard from "../../components/PostCard";

export default function HomePage() {
  const latestPosts = posts.slice(0, 4); // показываем последние 4 статьи

  return (
    <main className="flex flex-col gap-16">

      {/* Hero блок */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Добро пожаловать в мой блог</h1>
        <p className="text-xl mb-6">Читайте статьи о разработке, играх и интересных проектах.</p>
        <Link href="/posts" className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Смотреть статьи
        </Link>
      </section>

      {/* Секция последних статей */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Последние статьи</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
