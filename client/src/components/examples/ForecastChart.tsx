import ForecastChart from '../ForecastChart';

export default function ForecastChartExample() {
  const mockData = [
    { year: 2025, baseline: 100, lower: 85, upper: 115 },
    { year: 2026, baseline: 140, lower: 115, upper: 165 },
    { year: 2027, baseline: 195, lower: 155, upper: 235 },
    { year: 2028, baseline: 270, lower: 210, upper: 330 },
    { year: 2029, baseline: 375, lower: 285, upper: 465 },
    { year: 2030, baseline: 520, lower: 380, upper: 660 },
  ];
  
  return (
    <div className="p-6">
      <ForecastChart data={mockData} />
    </div>
  );
}
