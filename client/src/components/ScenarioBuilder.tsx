import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PolicySlider from "./PolicySlider";
import PolicyEventCard, { type PolicyEvent } from "./PolicyEventCard";
import EnhancedForecastChart from "./EnhancedForecastChart";
import ImpactPanel from "./ImpactPanel";
import { Settings2, Calendar, RotateCcw } from "lucide-react";

const initialEvents: PolicyEvent[] = [
  {
    id: "evt-1",
    title: "Vietnam 50k Engineer Program Milestone",
    date: "Q2 2027",
    year: 2027,
    description: "Vietnam reaches halfway point of 50,000 semiconductor engineer training target",
    impact: 15,
    isPositive: true,
    category: "talent",
    enabled: false,
  },
  {
    id: "evt-2",
    title: "Intel Malaysia Phase 2 Expansion",
    date: "Q3 2026",
    year: 2026,
    description: "Intel completes $7B packaging facility expansion in Malaysia",
    impact: 18,
    isPositive: true,
    category: "investment",
    enabled: false,
  },
  {
    id: "evt-3",
    title: "ASEAN Tech Transfer Agreement",
    date: "Q1 2027",
    year: 2027,
    description: "New regional agreement accelerates semiconductor knowledge sharing",
    impact: 12,
    isPositive: true,
    category: "regulation",
    enabled: false,
  },
  {
    id: "evt-4",
    title: "South China Sea Tensions Escalate",
    date: "Q4 2026",
    year: 2026,
    description: "Regional geopolitical tensions impact supply chain confidence",
    impact: -20,
    isPositive: false,
    category: "geopolitical",
    enabled: false,
  },
  {
    id: "evt-5",
    title: "US-China Tech Decoupling Deepens",
    date: "Q2 2028",
    year: 2028,
    description: "Expanded export controls on advanced semiconductor equipment",
    impact: -15,
    isPositive: false,
    category: "regulation",
    enabled: false,
  },
  {
    id: "evt-6",
    title: "Samsung Vietnam R&D Center Opens",
    date: "Q1 2029",
    year: 2029,
    description: "Major R&D investment creating 8,000 high-skill positions",
    impact: 22,
    isPositive: true,
    category: "investment",
    enabled: false,
  },
  {
    id: "evt-7",
    title: "ASEAN Talent Retention Crisis",
    date: "Q3 2027",
    year: 2027,
    description: "Brain drain to US/Europe exceeds projections",
    impact: -18,
    isPositive: false,
    category: "talent",
    enabled: false,
  },
  {
    id: "evt-8",
    title: "Taiwan Diversification Initiative Success",
    date: "Q4 2028",
    year: 2028,
    description: "TSMC successfully establishes major production in 3 new regions",
    impact: 25,
    isPositive: true,
    category: "investment",
    enabled: false,
  },
];

export default function ScenarioBuilder() {
  const [aseanInvestment, setAseanInvestment] = useState(50);
  const [geopoliticalStability, setGeopoliticalStability] = useState(70);
  const [talentSuccess, setTalentSuccess] = useState(65);
  const [exportControl, setExportControl] = useState(40);
  const [techTransfer, setTechTransfer] = useState(55);
  
  const [events, setEvents] = useState<PolicyEvent[]>(initialEvents);

  const handleToggleEvent = (id: string) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, enabled: !e.enabled } : e
    ));
  };

  const handleResetEvents = () => {
    setEvents(events.map(e => ({ ...e, enabled: false })));
  };

  const calculateForecast = () => {
    const baseGrowth = 100;
    const investmentFactor = aseanInvestment / 50;
    const stabilityFactor = geopoliticalStability / 100;
    const talentFactor = talentSuccess / 100;
    const controlPenalty = exportControl / 100;
    const transferBonus = techTransfer / 100;

    return Array.from({ length: 6 }, (_, i) => {
      const year = 2025 + i;
      let growthMultiplier = 1 + (i * 0.4 * investmentFactor * stabilityFactor * talentFactor * (1.5 - controlPenalty) * (1 + transferBonus * 0.3));
      
      // Apply event impacts
      events.forEach(event => {
        if (event.enabled && event.year <= year) {
          const yearsActive = year - event.year + 1;
          const eventImpact = (event.impact / 100) * Math.min(yearsActive * 0.3, 1);
          growthMultiplier *= (1 + eventImpact);
        }
      });

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

  const activeEventsImpact = events
    .filter(e => e.enabled)
    .reduce((sum, e) => sum + e.impact, 0);

  const talentRisk = Math.round(
    100 - geopoliticalStability * 0.7 - talentSuccess * 0.3 + 
    (events.filter(e => e.enabled && e.category === 'talent' && !e.isPositive).length * 5)
  );
  
  const resilienceScore = Math.round(
    (geopoliticalStability + aseanInvestment + (100 - exportControl)) / 3 +
    (events.filter(e => e.enabled && e.isPositive).length * 3) -
    (events.filter(e => e.enabled && !e.isPositive).length * 4)
  );

  const computeDistribution = [
    { region: "Taiwan", percentage: Math.max(10, Math.round(65 - aseanInvestment * 0.4 - activeEventsImpact * 0.15)), color: "hsl(var(--chart-1))" },
    { region: "ASEAN", percentage: Math.round(15 + aseanInvestment * 0.35 + talentSuccess * 0.2 + activeEventsImpact * 0.25), color: "hsl(var(--chart-2))" },
    { region: "US", percentage: Math.round(12 + exportControl * 0.1), color: "hsl(var(--chart-3))" },
    { region: "China", percentage: Math.round(8 + (100 - exportControl) * 0.08), color: "hsl(var(--chart-4))" },
  ];

  const activeEventCount = events.filter(e => e.enabled).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Panel - Controls */}
      <div className="lg:col-span-3">
        <Tabs defaultValue="parameters" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="parameters" className="text-xs">
              <Settings2 className="w-3 h-3 mr-1" />
              Parameters
            </TabsTrigger>
            <TabsTrigger value="events" className="text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              Events ({activeEventCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="parameters" className="space-y-4">
            <Card className="border-card-border">
              <CardHeader>
                <CardTitle className="text-sm">Policy Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <PolicySlider
                  label="ASEAN Investment"
                  value={aseanInvestment}
                  onChange={setAseanInvestment}
                  min={0}
                  max={100}
                  unit="B"
                  description="Infrastructure investment"
                />
                <PolicySlider
                  label="Geopolitical Stability"
                  value={geopoliticalStability}
                  onChange={setGeopoliticalStability}
                  min={0}
                  max={100}
                  description="Regional stability index"
                />
                <PolicySlider
                  label="Talent Program Success"
                  value={talentSuccess}
                  onChange={setTalentSuccess}
                  min={0}
                  max={100}
                  description="Training effectiveness"
                />
                <PolicySlider
                  label="Export Control Severity"
                  value={exportControl}
                  onChange={setExportControl}
                  min={0}
                  max={100}
                  description="Tech export restrictions"
                />
                <PolicySlider
                  label="Tech Transfer Rate"
                  value={techTransfer}
                  onChange={setTechTransfer}
                  min={0}
                  max={100}
                  description="Knowledge transfer rate"
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground">Toggle future events</p>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleResetEvents}
                className="h-7 text-xs"
                data-testid="button-reset-events"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {events.map((event) => (
                <PolicyEventCard
                  key={event.id}
                  event={event}
                  onToggle={handleToggleEvent}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Center Panel - Chart */}
      <div className="lg:col-span-6">
        <EnhancedForecastChart 
          data={forecastData} 
          events={events}
        />
        
        {activeEventCount > 0 && (
          <Card className="border-card-border mt-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Active Events Impact</p>
                  <p className="text-xs text-muted-foreground">
                    {activeEventCount} event{activeEventCount !== 1 ? 's' : ''} enabled
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-bold tabular-nums ${activeEventsImpact >= 0 ? 'text-primary' : 'text-destructive'}`}>
                    {activeEventsImpact >= 0 ? '+' : ''}{activeEventsImpact}%
                  </p>
                  <p className="text-xs text-muted-foreground">Combined impact</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Right Panel - Impact */}
      <div className="lg:col-span-3">
        <ImpactPanel
          computeDistribution={computeDistribution}
          talentRisk={Math.min(100, Math.max(0, talentRisk))}
          resilienceScore={Math.min(100, Math.max(0, resilienceScore))}
        />
      </div>
    </div>
  );
}
