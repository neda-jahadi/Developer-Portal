import Link from "next/link";
import { getPortalNav } from "@/lib/nav";
import { Role } from "@/app/types/user";

export function AppSidebar({ role }: { role: Role }) {
  const items = getPortalNav(role);

  return (
    <aside className="w-full border-r bg-white md:w-64">
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
            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
