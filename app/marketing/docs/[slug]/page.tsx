import { notFound } from 'next/navigation';
import { docs } from '@/lib/mock-data';
import { CodeExample } from '@/components/docs/code-example';

export default async function DocDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs.find((item) => item.slug === slug);

  if (!doc) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-3 text-3xl font-semibold">{doc.title}</h1>
      <p className="mb-6 text-slate-600">{doc.description}</p>
      <article className="prose max-w-none">
        <p>{doc.content}</p>
      </article>
      <div className="mt-8">
        <CodeExample
          code={`curl -X GET https://api.example.com/v1/projects \\
  -H "Authorization: Bearer <token>"`}
        />
      </div>
    </main>
  );
}
