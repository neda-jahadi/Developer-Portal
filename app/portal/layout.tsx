import { AppSidebar } from "@/components/layout/app-sidebar";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { RoleSwitcher } from "@/components/layout/role-switcher";
import { getCurrentRole } from "@/lib/auth";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getCurrentRole();

  return (
    <div className="min-h-screen md:flex">
      <aside className="hidden md:block">
        <AppSidebar role={role} />
      </aside>
      <section className="flex-1 p-6">
        <div className="mb-6 flex justify-between">
          <MobileSidebar role={role} />
          <RoleSwitcher defaultRole={role} />
        </div>
        {children}
      </section>
    </div>
  );
}
