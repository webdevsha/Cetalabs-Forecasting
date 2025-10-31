import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ForecastDataPoint {
  year: number;
  baseline: number;
  lower: number;
  upper: number;
  current?: number;
}

interface ForecastChartProps {
  data: ForecastDataPoint[];
  title?: string;
  description?: string;
}

export default function ForecastChart({ 
  data, 
  title = "Global AI Compute Capacity Forecast",
  description = "Projected capacity with 80% confidence intervals (2025-2030)"
}: ForecastChartProps) {
  return (
    <Card className="border-card-border" data-testid="chart-forecast">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUpper" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--popover))',
                  border: '1px solid hsl(var(--popover-border))',
                  borderRadius: '6px'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="upper"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="url(#colorUpper)"
                name="Upper Bound (90th percentile)"
              />
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="hsl(var(--chart-1))"
                strokeWidth={3}
                fill="none"
                name="Expected Capacity"
              />
              <Area
                type="monotone"
                dataKey="lower"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                strokeDasharray="5 5"
                fill="none"
                name="Lower Bound (10th percentile)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
