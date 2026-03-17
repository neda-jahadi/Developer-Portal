import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { ActivityTable } from "@/components/dashboard/activity-table";
import { stats, activities } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Developer dashboard"
        description="Overview of keys, usage and recent portal activity."
        actions={<Button>Create API key</Button>}
      />

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
          />
        ))}
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-lg font-medium">Recent activity</h2>
        <ActivityTable activities={activities} />
      </section>
    </div>
  );
}
