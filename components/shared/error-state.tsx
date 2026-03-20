export function ErrorState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6">
      <h3 className="text-lg font-medium text-red-900">{title}</h3>
      <p className="mt-2 text-sm text-red-700">{description}</p>
    </div>
  );
}
