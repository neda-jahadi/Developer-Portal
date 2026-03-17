import { redirect } from "next/navigation";
import { getCurrentRole } from "@/lib/auth";
import { canViewAdmin } from "@/lib/permissions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getCurrentRole();

  if (!canViewAdmin(role)) {
    redirect("/unauthorized");
  }

  return <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>;
}
