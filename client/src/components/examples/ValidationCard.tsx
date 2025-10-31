import ValidationCard from '../ValidationCard';

export default function ValidationCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ValidationCard
        event="2021 Chip Shortage"
        date="Q1 2021 - Q4 2022"
        actualImpact="6-8 month delay"
        predictedImpact="5-9 month delay"
        accuracy={87}
        description="Global semiconductor shortage delayed H100 deployment and impacted GPT-4 development timeline"
      />
    </div>
  );
}
