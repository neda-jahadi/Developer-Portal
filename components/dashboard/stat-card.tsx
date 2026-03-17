import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StatCard({
  title,
  value,
  trend,
}: {
  title: string;
  value: string;
  trend?: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend ? (
          <p className="mt-1 text-xs text-slate-500">{trend} vs last period</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
