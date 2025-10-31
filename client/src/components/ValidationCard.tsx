import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ValidationCardProps {
  event: string;
  date: string;
  actualImpact: string;
  predictedImpact: string;
  accuracy: number;
  description: string;
}

export default function ValidationCard({
  event,
  date,
  actualImpact,
  predictedImpact,
  accuracy,
  description
}: ValidationCardProps) {
  const isAccurate = accuracy >= 75;
  
  return (
    <Card className="border-card-border" data-testid={`card-validation-${event.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{event}</CardTitle>
            <CardDescription>{date}</CardDescription>
          </div>
          <Badge variant={isAccurate ? "default" : "secondary"} className="flex items-center gap-1">
            {isAccurate ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
            {accuracy}% accurate
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Actual Impact</p>
            <p className="text-sm font-semibold">{actualImpact}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Model Prediction</p>
            <p className="text-sm font-semibold">{predictedImpact}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
