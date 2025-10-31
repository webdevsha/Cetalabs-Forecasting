import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PolicySlider from "./PolicySlider";
import ForecastChart from "./ForecastChart";
import ImpactPanel from "./ImpactPanel";

export default function InteractiveModelTab() {
  const [aseanInvestment, setAseanInvestment] = useState(50);
  const [geopoliticalStability, setGeopoliticalStability] = useState(70);
  const [talentSuccess, setTalentSuccess] = useState(65);
  const [exportControl, setExportControl] = useState(40);
  const [techTransfer, setTechTransfer] = useState(55);

  // Calculate forecast based on parameters
  const calculateForecast = () => {
    const baseGrowth = 100;
    const investmentFactor = aseanInvestment / 50;
    const stabilityFactor = geopoliticalStability / 100;
    const talentFactor = talentSuccess / 100;
    const controlPenalty = exportControl / 100;
    const transferBonus = techTransfer / 100;

    return Array.from({ length: 6 }, (_, i) => {
      const year = 2025 + i;
      const growthMultiplier = 1 + (i * 0.4 * investmentFactor * stabilityFactor * talentFactor * (1.5 - controlPenalty) * (1 + transferBonus * 0.3));
      const baseline = baseGrowth * growthMultiplier;
      
      return {
        year,
        baseline: Math.round(baseline),
        lower: Math.round(baseline * 0.75),
        upper: Math.round(baseline * 1.25),
      };
    });
  };

  const forecastData = calculateForecast();

  // Calculate impact metrics
  const talentRisk = Math.round(100 - geopoliticalStability * 0.7 - talentSuccess * 0.3);
  const resilienceScore = Math.round((geopoliticalStability + aseanInvestment + (100 - exportControl)) / 3);

  const computeDistribution = [
    { region: "Taiwan", percentage: Math.max(10, Math.round(65 - aseanInvestment * 0.4)), color: "hsl(var(--chart-1))" },
    { region: "ASEAN", percentage: Math.round(15 + aseanInvestment * 0.35 + talentSuccess * 0.2), color: "hsl(var(--chart-2))" },
    { region: "US", percentage: Math.round(12 + exportControl * 0.1), color: "hsl(var(--chart-3))" },
    { region: "China", percentage: Math.round(8 + (100 - exportControl) * 0.08), color: "hsl(var(--chart-4))" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Panel - Sliders */}
      <div className="lg:col-span-3">
        <Card className="border-card-border sticky top-6">
          <CardHeader>
            <CardTitle className="text-lg">Policy Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <PolicySlider
              label="ASEAN Investment"
              value={aseanInvestment}
              onChange={setAseanInvestment}
              min={0}
              max={100}
              unit="B"
              description="Total infrastructure investment in billions"
            />
            <PolicySlider
              label="Geopolitical Stability"
              value={geopoliticalStability}
              onChange={setGeopoliticalStability}
              min={0}
              max={100}
              description="Regional political stability index"
            />
            <PolicySlider
              label="Talent Program Success"
              value={talentSuccess}
              onChange={setTalentSuccess}
              min={0}
              max={100}
              description="Effectiveness of engineer training programs"
            />
            <PolicySlider
              label="Export Control Severity"
              value={exportControl}
              onChange={setExportControl}
              min={0}
              max={100}
              description="Restrictiveness of technology export controls"
            />
            <PolicySlider
              label="Tech Transfer Rate"
              value={techTransfer}
              onChange={setTechTransfer}
              min={0}
              max={100}
              description="Rate of technology knowledge transfer"
            />
          </CardContent>
        </Card>
      </div>

      {/* Center Panel - Chart */}
      <div className="lg:col-span-6">
        <ForecastChart data={forecastData} />
      </div>

      {/* Right Panel - Impact */}
      <div className="lg:col-span-3">
        <ImpactPanel
          computeDistribution={computeDistribution}
          talentRisk={talentRisk}
          resilienceScore={resilienceScore}
        />
      </div>
    </div>
  );
}
