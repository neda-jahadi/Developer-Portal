import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UnauthorizedPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold">Unauthorized</h1>
      <p className="mt-3 text-slate-600">You do not have permission to access this section.</p>
      <div className="mt-6">
        <Button asChild>
          <Link href="/portal/dashboard">Back to dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
