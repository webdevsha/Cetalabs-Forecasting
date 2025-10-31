import DataSourceCard from '../DataSourceCard';

export default function DataSourceCardExample() {
  return (
    <div className="p-6 max-w-md">
      <DataSourceCard
        source="Vietnam Ministry of Education"
        link="https://moet.gov.vn"
        confidence="High"
        lastUpdated="Oct 2025"
        dataPoints={[
          "50k semiconductor engineers target by 2028",
          "Current graduation rate: 8,500/year",
          "Investment: $2.3B in training infrastructure"
        ]}
      />
    </div>
  );
}
