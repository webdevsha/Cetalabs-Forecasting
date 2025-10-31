import { useState } from 'react';
import ScenarioCard from '../ScenarioCard';

export default function ScenarioCardExample() {
  const [isActive, setIsActive] = useState(false);
  
  const mockImpacts = [
    { metric: "Packaging capacity", change: "-40%", isPositive: false },
    { metric: "AI capability delay", change: "18-24mo", isPositive: false },
    { metric: "ASEAN surge", change: "+65%", isPositive: true },
  ];
  
  return (
    <div className="p-6 max-w-md">
      <ScenarioCard
        title="Taiwan Strait Crisis"
        description="Geopolitical tensions disrupt semiconductor supply chains"
        icon="🌏"
        impacts={mockImpacts}
        onSimulate={() => setIsActive(!isActive)}
        isActive={isActive}
      />
    </div>
  );
}
