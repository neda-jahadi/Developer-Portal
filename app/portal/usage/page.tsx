import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsagePage() {
  return (
    <div>
      <PageHeader
        title="Usage"
        description="A placeholder metrics page showing the dashboard/analytics direction."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Request volume</CardTitle>
          </CardHeader>
          <CardContent className="h-48 text-sm text-slate-500">
            Chart placeholder
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Error trends</CardTitle>
          </CardHeader>
          <CardContent className="h-48 text-sm text-slate-500">
            Chart placeholder
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
