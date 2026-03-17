import { AppSidebar } from "@/components/layout/app-sidebar";
import { RoleSwitcher } from "@/components/layout/role-switcher";
import { getCurrentRole } from "@/lib/auth";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getCurrentRole();

  return (
    <main className="min-h-screen md:flex">
      <AppSidebar role={role} />
      <section className="flex-1 p-6">
        <div className="mb-6 flex justify-end">
          <RoleSwitcher defaultRole={role} />
        </div>
        {children}
      </section>
    </main>
  );
}
