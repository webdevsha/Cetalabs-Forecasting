import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Calendar, TrendingUp, TrendingDown } from "lucide-react";

export interface PolicyEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  description: string;
  impact: number;
  isPositive: boolean;
  category: "geopolitical" | "investment" | "talent" | "regulation";
  enabled: boolean;
}

interface PolicyEventCardProps {
  event: PolicyEvent;
  onToggle: (id: string) => void;
}

const categoryColors = {
  geopolitical: "hsl(var(--chart-1))",
  investment: "hsl(var(--chart-2))",
  talent: "hsl(var(--chart-3))",
  regulation: "hsl(var(--chart-4))",
};

const categoryLabels = {
  geopolitical: "Geopolitical",
  investment: "Investment",
  talent: "Talent",
  regulation: "Regulation",
};

export default function PolicyEventCard({ event, onToggle }: PolicyEventCardProps) {
  return (
    <Card 
      className={`border-2 transition-all ${
        event.enabled ? 'border-primary bg-primary/5' : 'border-card-border'
      }`}
      data-testid={`card-event-${event.id}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge 
                variant="secondary" 
                className="text-xs"
                style={{ 
                  backgroundColor: `${categoryColors[event.category]}20`,
                  color: categoryColors[event.category],
                  borderColor: categoryColors[event.category]
                }}
              >
                {categoryLabels[event.category]}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{event.date}</span>
              </div>
            </div>
            <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
            <p className="text-xs text-muted-foreground">{event.description}</p>
          </div>
          <Switch
            checked={event.enabled}
            onCheckedChange={() => onToggle(event.id)}
            data-testid={`switch-event-${event.id}`}
          />
        </div>
        
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
          {event.isPositive ? (
            <TrendingUp className="w-4 h-4 text-primary" />
          ) : (
            <TrendingDown className="w-4 h-4 text-destructive" />
          )}
          <span className="text-xs font-medium">
            Impact: {event.isPositive ? '+' : ''}{event.impact}% on capacity
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
