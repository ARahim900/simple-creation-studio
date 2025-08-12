import KpiCard from "@/components/dashboard/KpiCard";
import { Droplets, Layers, Gauge, TrendingDown } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const consumption = [
  { month: "Feb-25", l1: 48_000, l2: 20_000, l3: 12_000 },
  { month: "Mar-25", l1: 46_000, l2: 21_000, l3: 13_200 },
  { month: "Apr-25", l1: 50_000, l2: 22_400, l3: 13_800 },
  { month: "May-25", l1: 55_000, l2: 24_100, l3: 14_200 },
  { month: "Jun-25", l1: 49_000, l2: 23_200, l3: 13_600 },
  { month: "Jul-25", l1: 0, l2: 0, l3: 0 },
];

const losses = [
  { month: "Feb-25", s1: 5.3, s2: 9.1, s3: 0.4 },
  { month: "Mar-25", s1: 6.2, s2: 8.7, s3: 0.5 },
  { month: "Apr-25", s1: 7.1, s2: 10.2, s3: 0.6 },
  { month: "May-25", s1: 8.8, s2: 11.8, s3: 0.6 },
  { month: "Jun-25", s1: 6.1, s2: 9.9, s3: 0.5 },
  { month: "Jul-25", s1: 0, s2: 0, s3: 0 },
];

export default function Water() {
  return (
    <section className="p-4 md:p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Water System Analysis</h1>
        <p className="text-muted-foreground">Overview for the selected period.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={Droplets} label="Main Source (L1)" value="257,842 m³" sublabel="Main Bulk (NAMA)" />
        <KpiCard icon={Layers} label="Zone Distribution" value="244,230 m³" sublabel="L2 Zone Bulk + Direct" />
        <KpiCard icon={Gauge} label="Building Level" value="201,857 m³" sublabel="L3 Buildings + Villas" />
        <KpiCard icon={TrendingDown} label="Total System Loss" value="56,576 m³" sublabel="Overall: 21.9%" />
      </div>

      <section className="rounded-xl border bg-card p-4 shadow-elevated animate-enter">
        <h2 className="mb-3 text-sm font-medium">Monthly Consumption Trend (m³)</h2>
        <ChartContainer
          config={{
            l1: { label: "L1 - Main Source", color: "hsl(var(--primary))" },
            l2: { label: "L2 - Zone Bulk Meters", color: "hsl(var(--accent))" },
            l3: { label: "L3 - Building/Villa Meters", color: "hsl(var(--muted-foreground))" },
          }}
          className="aspect-[16/6] w-full"
        >
          <AreaChart data={consumption} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis width={40} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="l1" stroke="var(--color-l1)" strokeWidth={2} fill="var(--color-l1)" fillOpacity={0.2} isAnimationActive animationDuration={800} animationEasing="ease-out" />
            <Area type="monotone" dataKey="l2" stroke="var(--color-l2)" strokeWidth={2} fill="var(--color-l2)" fillOpacity={0.2} isAnimationActive animationDuration={800} animationEasing="ease-out" />
            <Area type="monotone" dataKey="l3" stroke="var(--color-l3)" strokeWidth={2} fill="var(--color-l3)" fillOpacity={0.2} isAnimationActive animationDuration={800} animationEasing="ease-out" />
          </AreaChart>
        </ChartContainer>
      </section>

      <section className="rounded-xl border bg-card p-4 shadow-elevated animate-enter">
        <h2 className="mb-3 text-sm font-medium">Monthly Water Loss Trend</h2>
        <ChartContainer
          config={{
            s1: { label: "Stage 1 Loss", color: "hsl(var(--destructive))" },
            s2: { label: "Stage 2 Loss", color: "hsl(var(--primary) / 0.7)" },
            s3: { label: "Stage 3 Loss", color: "hsl(var(--muted-foreground))" },
          }}
          className="aspect-[16/6] w-full"
        >
          <LineChart data={losses} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis width={40} unit="%" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="s1" stroke="var(--color-s1)" strokeWidth={2} dot={false} isAnimationActive animationDuration={700} animationEasing="ease-out" />
            <Line type="monotone" dataKey="s2" stroke="var(--color-s2)" strokeWidth={2} dot={false} isAnimationActive animationDuration={700} animationEasing="ease-out" />
            <Line type="monotone" dataKey="s3" stroke="var(--color-s3)" strokeWidth={2} dot={false} isAnimationActive animationDuration={700} animationEasing="ease-out" />
          </LineChart>
        </ChartContainer>
      </section>
    </section>
  );
}
