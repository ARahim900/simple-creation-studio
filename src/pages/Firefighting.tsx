export default function Firefighting() {
  return (
    <section className="p-4 md:p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Firefighting & Alarm</h1>
        <p className="text-muted-foreground">Overview and metrics.</p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-sm font-medium">Alerts</h2>
          <p className="text-sm text-muted-foreground">Coming soon…</p>
        </article>
      </div>
    </section>
  );
}
