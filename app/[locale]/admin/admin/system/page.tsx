import { PageHeader } from '@/components/layout/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminSystemPage() {
  return (
    <div>
      <PageHeader title="System settings" description="Portal health and configuration overview." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Identity provider</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            External authentication provider integration placeholder.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audit settings</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Logging, activity history and security event visibility.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
