import Link from 'next/link';
import { docs } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Documentation</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link href={`/marketing/docs/${doc.slug}`} key={doc.slug}>
            <Card className="h-full transition hover:shadow-sm">
              <CardHeader>
                <CardTitle>{doc.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{doc.description}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
