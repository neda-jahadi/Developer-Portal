import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="mb-10 space-y-4">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight">{t('heroHeader')}</h1>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/portal/dashboard">{t('dashboard')}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/marketing/docs">{t('docs')}</Link>
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
