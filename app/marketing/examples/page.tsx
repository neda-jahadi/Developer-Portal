import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeExample } from "@/components/docs/code-example";

export default function ExamplesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Code examples</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fetch projects</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeExample
              code={`fetch("https://api.example.com/v1/projects", {
  headers: {
    Authorization: "Bearer <token>",
  },
});`}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
