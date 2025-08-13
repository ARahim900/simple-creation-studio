import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Droplets, TrendingDown, Activity, RefreshCw, Sparkles, BarChart3, PieChart, Database, Layers } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";

// Water distribution data
const distributionData = [
  { level: "A1", name: "MAIN SOURCE (L1)", value: 257842, unit: "m³", description: "Main Bulk (NAMA)", color: "bg-blue-500", icon: Droplets },
  { level: "A2", name: "ZONE DISTRIBUTION", value: 244230, unit: "m³", description: "L2 Zone Bulk + Direct", color: "bg-amber-500", icon: BarChart3 },
  { level: "A3", name: "BUILDING LEVEL", value: 201857, unit: "m³", description: "L3 Buildings + Villas", color: "bg-green-500", icon: Database },
  { level: "A4", name: "END USERS", value: 201266, unit: "m³", description: "L4 Apartments + L3 End", color: "bg-purple-500", icon: Activity },
];

// Water loss data
const lossData = [
  { stage: "STAGE 1 LOSS (A1→A2)", value: 13612, unit: "m³", description: "Main Distribution: 5.3%", color: "bg-red-500" },
  { stage: "STAGE 2 LOSS (L2→L3)", value: 42373, unit: "m³", description: "Zone Networks: 44.4%", color: "bg-orange-500" },
  { stage: "STAGE 3 LOSS (A3→A4)", value: 591, unit: "m³", description: "Building Networks: 0.3%", color: "bg-yellow-500" },
  { stage: "TOTAL SYSTEM LOSS", value: 56576, unit: "m³", description: "Overall: 21.9%", color: "bg-red-600" },
];

// Monthly consumption trend data
const consumptionData = [
  { month: "Jan-25", L1: 42000, L2: 39500, L3: 32800 },
  { month: "Feb-25", L1: 41500, L2: 39200, L3: 32400 },
  { month: "Mar-25", L1: 43200, L2: 40800, L3: 33200 },
  { month: "Apr-25", L1: 42800, L2: 40400, L3: 33000 },
  { month: "May-25", L1: 44100, L2: 41700, L3: 34100 },
  { month: "Jun-25", L1: 43000, L2: 41500, L3: 33400 },
];

// Monthly loss trend data
const lossMonthlyData = [
  { month: "Jan-25", stage1: 2500, stage2: 6700, stage3: 100 },
  { month: "Feb-25", stage1: 2300, stage2: 6800, stage3: 90 },
  { month: "Mar-25", stage1: 2400, stage2: 7400, stage3: 110 },
  { month: "Apr-25", stage1: 2400, stage2: 7000, stage3: 95 },
  { month: "May-25", stage1: 2400, stage2: 7500, stage3: 105 },
  { month: "Jun-25", stage1: 1600, stage2: 6900, stage3: 90 },
];

export default function Water() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Water System Analysis</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 bg-muted/30 p-1 rounded-lg w-fit">
        <Button variant="default" size="sm" className="h-8 bg-emerald-500 hover:bg-emerald-600">
          <BarChart3 className="h-4 w-4 mr-2" />
          Overview
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <TrendingDown className="h-4 w-4 mr-2" />
          Water Loss Analysis
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <PieChart className="h-4 w-4 mr-2" />
          Zone Analysis
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <Droplets className="h-4 w-4 mr-2" />
          Consumption by Type
        </Button>
        <Button variant="ghost" size="sm" className="h-8">
          <Database className="h-4 w-4 mr-2" />
          Main Database
        </Button>
      </div>

      {/* Sub-tabs */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-emerald-600">
          <BarChart3 className="h-5 w-5" />
          <span className="text-sm font-medium">Over</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <TrendingDown className="h-5 w-5" />
          <span className="text-sm">Loss</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <BarChart3 className="h-5 w-5" />
          <span className="text-sm">Zone</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Droplets className="h-5 w-5" />
          <span className="text-sm">Type</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Database className="h-5 w-5" />
          <span className="text-sm">Data</span>
        </div>
      </div>

      {/* Date Range Selector */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Input placeholder="Jan-25" className="w-32" defaultValue="Jan-25" />
            <span className="text-sm text-muted-foreground">to</span>
            <Input placeholder="Jun-25" className="w-32" defaultValue="Jun-25" />
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Range
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Analysis
            </Button>
          </div>
          <div className="w-full h-2 bg-muted rounded-full">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }}></div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Jan-25</span>
            <span>Apr-25</span>
            <span>Jun-25</span>
          </div>
        </CardContent>
      </Card>

      {/* 4-Level Water Distribution */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          4-Level Water Distribution Totals for <span className="text-emerald-600">Jan-25 to Jun-25</span>
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {distributionData.map((item, index) => (
            <Card key={index} className="shadow-elevated animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`grid size-12 place-items-center rounded-xl ${item.color} text-white shadow-soft`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{item.level} - {item.name}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {item.value.toLocaleString()}
                  <span className="text-lg text-muted-foreground ml-2">{item.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Multi-Stage Water Loss */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Multi-Stage Water Loss Totals for <span className="text-emerald-600">Jan-25 to Jun-25</span>
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {lossData.map((item, index) => (
            <Card key={index} className="shadow-elevated animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`grid size-12 place-items-center rounded-xl ${item.color} text-white shadow-soft`}>
                    <TrendingDown className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground font-medium">{item.stage}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {item.value.toLocaleString()}
                  <span className="text-lg text-muted-foreground ml-2">{item.unit}</span>
                </div>
                <div className="text-xs text-muted-foreground">{item.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Consumption Trend */}
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Monthly Consumption Trend
            </CardTitle>
            <CardDescription>L1 Supply vs. L2 & L3 Meter Totals</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                L1: { label: "L1 - Main Source", color: "hsl(220, 70%, 50%)" },
                L2: { label: "L2 - Zone Bulk Meters", color: "hsl(340, 75%, 55%)" },
                L3: { label: "L3 - Building/Villa Meters", color: "hsl(270, 65%, 60%)" },
              }}
              className="h-[350px] w-full"
            >
              <LineChart data={consumptionData} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="L1" 
                  stroke="var(--color-L1)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-L1)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={800}
                />
                <Line 
                  type="monotone" 
                  dataKey="L2" 
                  stroke="var(--color-L2)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-L2)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={800}
                />
                <Line 
                  type="monotone" 
                  dataKey="L3" 
                  stroke="var(--color-L3)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-L3)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={800}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Monthly Water Loss Trend */}
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Monthly Water Loss Trend
            </CardTitle>
            <CardDescription>Comparing loss at different stages of distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                stage1: { label: "Stage 1 Loss", color: "#ef4444" },
                stage2: { label: "Stage 2 Loss", color: "#f97316" },
                stage3: { label: "Stage 3 Loss", color: "#eab308" },
              }}
              className="h-[350px] w-full"
            >
              <LineChart data={lossMonthlyData} margin={{ left: 12, right: 12, top: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="stage1" 
                  stroke="var(--color-stage1)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-stage1)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={700}
                />
                <Line 
                  type="monotone" 
                  dataKey="stage2" 
                  stroke="var(--color-stage2)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-stage2)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={700}
                />
                <Line 
                  type="monotone" 
                  dataKey="stage3" 
                  stroke="var(--color-stage3)" 
                  strokeWidth={3} 
                  dot={{ fill: 'var(--color-stage3)', strokeWidth: 2, r: 4 }}
                  isAnimationActive
                  animationDuration={700}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}