import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface RegionShare {
  region: string;
  percentage: number;
  color: string;
}

interface ImpactPanelProps {
  computeDistribution: RegionShare[];
  talentRisk: number;
  resilienceScore: number;
}

export default function ImpactPanel({ 
  computeDistribution, 
  talentRisk, 
  resilienceScore 
}: ImpactPanelProps) {
  const getRiskLevel = (risk: number) => {
    if (risk < 30) return { label: "Low", variant: "default" as const };
    if (risk < 70) return { label: "Medium", variant: "secondary" as const };
    return { label: "High", variant: "destructive" as const };
  };

  const getResilienceLevel = (score: number) => {
    if (score > 70) return { label: "Strong", variant: "default" as const };
    if (score > 40) return { label: "Moderate", variant: "secondary" as const };
    return { label: "Weak", variant: "destructive" as const };
  };

  const riskLevel = getRiskLevel(talentRisk);
  const resilienceLevel = getResilienceLevel(resilienceScore);

  return (
    <div className="space-y-6" data-testid="panel-impact">
      <Card className="border-card-border">
        <CardHeader>
          <CardTitle className="text-lg">Compute Distribution by 2030</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {computeDistribution.map((region) => (
            <div key={region.region} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{region.region}</span>
                <span className="tabular-nums font-semibold" style={{ color: region.color }}>
                  {region.percentage}%
                </span>
              </div>
              <Progress value={region.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle className="text-lg">Talent Concentration Risk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold tabular-nums">{talentRisk}%</span>
            <Badge variant={riskLevel.variant}>{riskLevel.label}</Badge>
          </div>
          <Progress value={talentRisk} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">
            Risk of talent pipeline disruption due to geopolitical factors
          </p>
        </CardContent>
      </Card>

      <Card className="border-card-border">
        <CardHeader>
          <CardTitle className="text-lg">Supply Chain Resilience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold tabular-nums">{resilienceScore}</span>
            <Badge variant={resilienceLevel.variant}>{resilienceLevel.label}</Badge>
          </div>
          <Progress value={resilienceScore} className="h-2 mb-2" />
          <p className="text-xs text-muted-foreground">
            Overall resilience score based on geographic diversification
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
