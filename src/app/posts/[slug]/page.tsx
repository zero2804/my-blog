// src/app/posts/[slug]/page.tsx
import { posts } from '../../../../data/posts';

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Promise<Props>) {
  // Разворачиваем Promise для params
  const { slug } = await params;

  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="p-4">Пост не найден</div>;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <article className="mt-6 prose max-w-none">
        {post.content ?? 'Контент пока не добавлен'}
      </article>
    </main>
  );
}
