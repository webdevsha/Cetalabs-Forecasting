import ImpactPanel from '../ImpactPanel';

export default function ImpactPanelExample() {
  const mockDistribution = [
    { region: "Taiwan", percentage: 45, color: "hsl(var(--chart-1))" },
    { region: "ASEAN", percentage: 28, color: "hsl(var(--chart-2))" },
    { region: "US", percentage: 15, color: "hsl(var(--chart-3))" },
    { region: "China", percentage: 12, color: "hsl(var(--chart-4))" },
  ];
  
  return (
    <div className="p-6 max-w-md">
      <ImpactPanel
        computeDistribution={mockDistribution}
        talentRisk={58}
        resilienceScore={62}
      />
    </div>
  );
}
