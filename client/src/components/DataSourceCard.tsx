import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

interface DataSourceCardProps {
  source: string;
  link: string;
  confidence: "High" | "Medium" | "Low";
  lastUpdated: string;
  dataPoints: string[];
}

export default function DataSourceCard({
  source,
  link,
  confidence,
  lastUpdated,
  dataPoints
}: DataSourceCardProps) {
  const confidenceColors = {
    High: "default" as const,
    Medium: "secondary" as const,
    Low: "destructive" as const
  };

  return (
    <Card className="border-card-border" data-testid={`card-source-${source.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="font-medium text-sm mb-1">{source}</h4>
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
              data-testid="link-source"
            >
              View source <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <Badge variant={confidenceColors[confidence]} className="text-xs">
            {confidence}
          </Badge>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <Calendar className="w-3 h-3" />
          <span>Updated: {lastUpdated}</span>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Data Points:</p>
          <ul className="text-xs space-y-0.5">
            {dataPoints.map((point, idx) => (
              <li key={idx} className="text-foreground/80">• {point}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
