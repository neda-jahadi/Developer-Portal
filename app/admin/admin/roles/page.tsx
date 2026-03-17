import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminRolesPage() {
  return (
    <div>
      <PageHeader
        title="Roles & permissions"
        description="Role model for the portal."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Developer</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Can view docs, create API keys and review usage.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Admin</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Can manage users, roles, portal settings and governance.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
