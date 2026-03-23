'use client';

import Link from 'next/link';
import { getPortalNav } from '@/lib/nav';
import { Role } from '@/app/[locale]/types/user';
import { usePathname } from 'next/navigation';

export function AppSidebar({ role }: { role: Role }) {
  const items = getPortalNav(role);
  const pathname = usePathname();

  return (
    <div className="w-full border-r bg-white md:w-64 md:min-h-screen">
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Portal navigation
        </p>
      </div>
      <nav className="space-y-1 px-3 pb-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-md px-3 py-2 text-sm hover:bg-slate-100 ${pathname === item.href ? 'text-blue-700 font-medium' : ' text-slate-700'}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
