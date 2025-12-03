"use client"; // делаем страницу клиентской для работы со state
import { useState } from "react";
import PostCard from "../../../components/PostCard";
import { posts } from "../../../data/posts";

export default function PostsPage() {
  const [search, setSearch] = useState("");

  // Фильтруем статьи по заголовку или описанию
  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Статьи</h2>

      {/* Поисковая строка */}
      <input
        type="text"
        placeholder="Поиск статей..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p) => <PostCard key={p.slug} post={p} />)
        ) : (
          <p className="col-span-full text-gray-500">Статьи не найдены</p>
        )}
      </div>
    </section>
  );
}
