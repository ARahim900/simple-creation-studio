import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  sublabel?: string;
  className?: string;
}

export default function KpiCard({ icon: Icon, label, value, sublabel, className }: KpiCardProps) {
  return (
    <article className={cn("rounded-xl border bg-card p-4 shadow-elevated animate-fade-in", className)}>
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-lg bg-accent/60 text-accent-foreground shadow-soft">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-lg font-semibold leading-tight">{value}</div>
          {sublabel && <div className="text-[11px] text-muted-foreground mt-0.5">{sublabel}</div>}
        </div>
      </div>
    </article>
  );
}
