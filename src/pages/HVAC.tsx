import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const rows = [
  { building: "B1", system: "York Chiller", equipment: "Pressurization Unit #3", issue: "High‑pressure cut‑out (1)", notes: "Contractor separately listed PRE..." },
  { building: "B1", system: "York Chiller", equipment: "Chiller #1 (Sys #1 & #2)", issue: "Transformer (1), 12A fuse (10)", notes: "Contractor explicitly added R410..." },
  { building: "B1", system: "Pressurisations", equipment: "Pressurization Unit #3", issue: "High‑pressure cut‑out (1)", notes: "" },
  { building: "B2", system: "York Chiller", equipment: "Chiller #1 Sys#2", issue: "Plug sensor; common temp; quan", notes: "Plug transducer (2) water tmp..." },
];

export default function HVAC() {
  return (
    <section className="p-4 md:p-6 space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">HVAC System Maintenance Tracker</h1>
        <p className="text-muted-foreground">Sample data for layout preview.</p>
      </header>

      <div className="rounded-xl border bg-card p-4 shadow-elevated animate-enter">
        <div className="flex items-center gap-2 justify-between mb-3">
          <input placeholder="Search across all fields..." className="w-full md:w-80 h-9 px-3 rounded-md border bg-background" />
          <Button variant="secondary">Reset Filters</Button>
        </div>
        <Table>
          <TableCaption>Showing {rows.length} of 34 entries</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Building</TableHead>
              <TableHead>Main System</TableHead>
              <TableHead>Equipment</TableHead>
              <TableHead>Common Issues</TableHead>
              <TableHead className="hidden md:table-cell">Notes</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i} className="hover-scale">
                <TableCell>{r.building}</TableCell>
                <TableCell>{r.system}</TableCell>
                <TableCell>{r.equipment}</TableCell>
                <TableCell>{r.issue}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{r.notes || '—'}</TableCell>
                <TableCell className="text-right"><Button size="sm">Edit</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
