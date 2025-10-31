import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ScenarioImpact {
  metric: string;
  change: string;
  isPositive: boolean;
}

interface ScenarioCardProps {
  title: string;
  description: string;
  icon: string;
  impacts: ScenarioImpact[];
  onSimulate: () => void;
  isActive?: boolean;
}

export default function ScenarioCard({
  title,
  description,
  icon,
  impacts,
  onSimulate,
  isActive = false
}: ScenarioCardProps) {
  return (
    <Card 
      className={`border-2 transition-all hover-elevate ${
        isActive ? 'border-primary' : 'border-card-border'
      }`}
      data-testid={`card-scenario-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader>
        <div className="text-4xl mb-3">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Key Impacts:</p>
          {impacts.map((impact, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span>{impact.metric}</span>
              <Badge variant={impact.isPositive ? "default" : "destructive"} className="text-xs">
                {impact.change}
              </Badge>
            </div>
          ))}
        </div>
        <Button 
          onClick={onSimulate} 
          className="w-full"
          variant={isActive ? "default" : "outline"}
          data-testid={`button-simulate-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {isActive ? 'Active Scenario' : 'Simulate Scenario'}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
