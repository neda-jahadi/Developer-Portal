import { AppSidebar } from "@/components/layout/app-sidebar";
import LogoutButton from "@/components/layout/logout-button";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { RoleSwitcher } from "@/components/layout/role-switcher";
import { getCurrentRole } from "@/lib/auth";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen md:flex">
      <aside className="hidden md:block">
        <AppSidebar role={user.role} />
      </aside>
      <section className="flex-1 p-6">
        <div className="mb-6 flex justify-between">
          <MobileSidebar role={user.role} />
          <div>
            <p>{user.name}</p>
            <p>
              {user.email} . {user.role}
            </p>
          </div>
          <LogoutButton />
        </div>
        {children}
      </section>
    </div>
  );
}
