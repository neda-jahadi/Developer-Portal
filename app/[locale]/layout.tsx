import type { Metadata } from 'next';
import './globals.css';
import { TopNav } from '@/components/layout/top-nav';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Developer Portal',
  description: 'A scalable frontend demo built with Next.js.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <TopNav />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
