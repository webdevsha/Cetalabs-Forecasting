import { useState } from "react";
import ScenarioCard from "./ScenarioCard";
import ForecastChart from "./ForecastChart";

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  impacts: Array<{ metric: string; change: string; isPositive: boolean }>;
  forecastData: Array<{ year: number; baseline: number; lower: number; upper: number }>;
}

const scenarios: Scenario[] = [
  {
    id: "taiwan-crisis",
    title: "Taiwan Strait Crisis",
    description: "Geopolitical tensions disrupt semiconductor supply chains centered in Taiwan",
    icon: "🌏",
    impacts: [
      { metric: "Packaging capacity", change: "-40%", isPositive: false },
      { metric: "AI capability delay", change: "18-24mo", isPositive: false },
      { metric: "ASEAN benefit", change: "+65%", isPositive: true },
      { metric: "Global resilience", change: "-35%", isPositive: false },
    ],
    forecastData: [
      { year: 2025, baseline: 100, lower: 85, upper: 115 },
      { year: 2026, baseline: 110, lower: 90, upper: 130 },
      { year: 2027, baseline: 135, lower: 105, upper: 165 },
      { year: 2028, baseline: 180, lower: 140, upper: 220 },
      { year: 2029, baseline: 245, lower: 185, upper: 305 },
      { year: 2030, baseline: 330, lower: 245, upper: 415 },
    ],
  },
  {
    id: "asean-acceleration",
    title: "ASEAN Acceleration",
    description: "Vietnam achieves 50k engineer target, Intel/Samsung double ASEAN investments",
    icon: "🚀",
    impacts: [
      { metric: "ASEAN capacity share", change: "+180%", isPositive: true },
      { metric: "Timeline to 3rd hub", change: "2028", isPositive: true },
      { metric: "Talent pipeline", change: "+220%", isPositive: true },
      { metric: "Global resilience", change: "+45%", isPositive: true },
    ],
    forecastData: [
      { year: 2025, baseline: 100, lower: 85, upper: 115 },
      { year: 2026, baseline: 155, lower: 130, upper: 180 },
      { year: 2027, baseline: 240, lower: 200, upper: 280 },
      { year: 2028, baseline: 370, lower: 305, upper: 435 },
      { year: 2029, baseline: 560, lower: 455, upper: 665 },
      { year: 2030, baseline: 840, lower: 675, upper: 1005 },
    ],
  },
  {
    id: "export-tightening",
    title: "Export Control Tightening",
    description: "US expands EUV restrictions to 5 additional countries",
    icon: "⚠️",
    impacts: [
      { metric: "Compute black markets", change: "Turkey, UAE", isPositive: false },
      { metric: "Development pace", change: "-25%", isPositive: false },
      { metric: "Regional fragmentation", change: "+80%", isPositive: false },
      { metric: "Innovation slowdown", change: "12-18mo", isPositive: false },
    ],
    forecastData: [
      { year: 2025, baseline: 100, lower: 85, upper: 115 },
      { year: 2026, baseline: 125, lower: 100, upper: 150 },
      { year: 2027, baseline: 165, lower: 125, upper: 205 },
      { year: 2028, baseline: 215, lower: 160, upper: 270 },
      { year: 2029, baseline: 280, lower: 205, upper: 355 },
      { year: 2030, baseline: 365, lower: 265, upper: 465 },
    ],
  },
  {
    id: "talent-reversal",
    title: "Talent Drain Reversal",
    description: "Malaysia/Vietnam Silicon Valley return packages succeed dramatically",
    icon: "🎓",
    impacts: [
      { metric: "Senior engineer returns", change: "+3,500", isPositive: true },
      { metric: "Domestic AI capability", change: "5yr acceleration", isPositive: true },
      { metric: "Knowledge transfer", change: "+145%", isPositive: true },
      { metric: "Regional innovation", change: "+95%", isPositive: true },
    ],
    forecastData: [
      { year: 2025, baseline: 100, lower: 85, upper: 115 },
      { year: 2026, baseline: 145, lower: 120, upper: 170 },
      { year: 2027, baseline: 215, lower: 175, upper: 255 },
      { year: 2028, baseline: 315, lower: 255, upper: 375 },
      { year: 2029, baseline: 460, lower: 370, upper: 550 },
      { year: 2030, baseline: 670, lower: 535, upper: 805 },
    ],
  },
];

export default function ScenarioSimulatorTab() {
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  const handleSimulate = (scenarioId: string) => {
    setActiveScenario(activeScenario === scenarioId ? null : scenarioId);
  };

  const currentForecast = activeScenario
    ? scenarios.find(s => s.id === activeScenario)?.forecastData
    : [
        { year: 2025, baseline: 100, lower: 85, upper: 115 },
        { year: 2026, baseline: 140, lower: 115, upper: 165 },
        { year: 2027, baseline: 195, lower: 155, upper: 235 },
        { year: 2028, baseline: 270, lower: 210, upper: 330 },
        { year: 2029, baseline: 375, lower: 285, upper: 465 },
        { year: 2030, baseline: 520, lower: 380, upper: 660 },
      ];

  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">Policy Scenario Simulator</h2>
        <p className="text-muted-foreground">
          Explore pre-built scenarios showing how major geopolitical and economic events 
          could reshape global AI compute capacity and timelines.
        </p>
      </div>

      <ForecastChart 
        data={currentForecast || []}
        title={activeScenario 
          ? `${scenarios.find(s => s.id === activeScenario)?.title} - Impact Forecast`
          : "Baseline Forecast (No Active Scenario)"
        }
        description={activeScenario
          ? "Projected capacity changes under this scenario"
          : "Select a scenario below to see its impact on AI compute capacity"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scenarios.map((scenario) => (
          <ScenarioCard
            key={scenario.id}
            title={scenario.title}
            description={scenario.description}
            icon={scenario.icon}
            impacts={scenario.impacts}
            onSimulate={() => handleSimulate(scenario.id)}
            isActive={activeScenario === scenario.id}
          />
        ))}
      </div>
    </div>
  );
}
