import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-10 space-y-4">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          React · TypeScript · Next.js · Tailwind
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight">
          Developer portal MVP with docs, dashboards and admin flows.
        </h1>
        <p className="max-w-2xl text-slate-600">
          A portfolio-ready frontend foundation demonstrating scalable UI structure, reusable
          components, role-based navigation and quality-focused patterns.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/portal/dashboard">View dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/marketing/docs">Browse docs</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Public guides, API references and code examples.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Developer dashboard</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            API usage overview, key management and recent activity.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admin area</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Users, roles, settings and scalable portal governance.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
