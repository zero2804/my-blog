import { posts } from '../../../../data/posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="p-4">Пост не найден</div>;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      <p className="text-lg text-gray-700 mb-6">{post.description}</p>
      <article className="prose max-w-none">
        {post.content ?? 'Контент пока не добавлен'}
      </article>
    </main>
  );
}
