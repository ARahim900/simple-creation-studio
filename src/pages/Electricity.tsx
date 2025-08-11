import KpiCard from "@/components/dashboard/KpiCard";
import { Zap, Coins, Gauge, Award } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const monthly = [
  { month: "May-24", kwh: 120_000 },
  { month: "Oct-24", kwh: 135_000 },
  { month: "Feb-25", kwh: 150_000 },
  { month: "May-25", kwh: 165_000 },
  { month: "Jul-25", kwh: 140_000 },
];

const byType = [
  { type: "Buildings", kwh: 380_000 },
  { type: "Street Light", kwh: 120_000 },
  { type: "Common", kwh: 92_000 },
  { type: "LS", kwh: 60_000 },
  { type: "Pump Stations", kwh: 45_000 },
];

export default function Electricity() {
  return (
    <section className="p-4 md:p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Electricity System Analysis</h1>
        <p className="text-muted-foreground">Overview for the selected period.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={Zap} label="Total Consumption" value="2,130.3 MWh" sublabel="2,130,340.2 kWh" />
        <KpiCard icon={Coins} label="Total Cost" value="53,259 OMR" sublabel="Based on total consumption" />
        <KpiCard icon={Gauge} label="Total Meters" value="57" sublabel="All meter types" />
        <KpiCard icon={Award} label="Highest Consumer" value="Beachwell" sublabel="392,489 kWh | 9,812 OMR" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border bg-card p-4 shadow-elevated animate-enter">
          <h2 className="mb-3 text-sm font-medium">Monthly Consumption Trend (kWh)</h2>
          <ChartContainer config={{ kwh: { label: "kWh", color: "hsl(var(--primary))" } }} className="aspect-[16/6] w-full">
            <AreaChart data={monthly} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis width={40} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="kwh" stroke="var(--color-kwh)" fill="var(--color-kwh)" fillOpacity={0.25} />
            </AreaChart>
          </ChartContainer>
        </section>

        <section className="rounded-xl border bg-card p-4 shadow-elevated animate-enter">
          <h2 className="mb-3 text-sm font-medium">Consumption by Type</h2>
          <ChartContainer config={{ kwh: { label: "kWh", color: "hsl(var(--accent))" } }} className="aspect-[16/6] w-full">
            <BarChart data={byType} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="type" tickLine={false} axisLine={false} />
              <YAxis width={40} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="kwh" fill="var(--color-kwh)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </section>
      </div>
    </section>
  );
}
