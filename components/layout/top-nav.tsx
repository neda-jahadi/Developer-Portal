import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function TopNav() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Developer Portal
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/marketing/docs" className="text-sm text-slate-600 hover:text-slate-900">
            Docs
          </Link>
          <Link href="/marketing/examples" className="text-sm text-slate-600 hover:text-slate-900">
            Examples
          </Link>
          <Button asChild>
            <Link href="/portal/dashboard">Open portal</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
