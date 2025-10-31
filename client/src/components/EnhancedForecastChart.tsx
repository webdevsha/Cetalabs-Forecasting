import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceDot } from "recharts";
import type { PolicyEvent } from "./PolicyEventCard";

interface ForecastDataPoint {
  year: number;
  baseline: number;
  lower: number;
  upper: number;
}

interface EnhancedForecastChartProps {
  data: ForecastDataPoint[];
  title?: string;
  description?: string;
  events?: PolicyEvent[];
}

export default function EnhancedForecastChart({ 
  data, 
  title = "Global AI Compute Capacity Forecast",
  description = "Projected capacity with 80% confidence intervals and policy event markers",
  events = []
}: EnhancedForecastChartProps) {
  const activeEvents = events.filter(e => e.enabled);

  return (
    <Card className="border-card-border" data-testid="chart-forecast-enhanced">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-[450px]">
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
              
              {/* Event markers */}
              {activeEvents.map((event) => (
                <ReferenceLine
                  key={event.id}
                  x={event.year}
                  stroke={event.isPositive ? 'hsl(var(--chart-2))' : 'hsl(var(--destructive))'}
                  strokeDasharray="3 3"
                  label={{
                    value: event.title.substring(0, 20) + '...',
                    position: 'top',
                    fill: 'hsl(var(--foreground))',
                    fontSize: 10
                  }}
                />
              ))}
              
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
        
        {activeEvents.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Active Policy Events:</p>
            <div className="flex flex-wrap gap-2">
              {activeEvents.map((event) => (
                <div
                  key={event.id}
                  className="text-xs px-2 py-1 rounded-md bg-muted border border-border"
                >
                  {event.title} ({event.year})
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
