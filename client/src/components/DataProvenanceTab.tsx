import DataSourceCard from "./DataSourceCard";

const dataSources = [
  {
    source: "Vietnam Ministry of Education",
    link: "https://moet.gov.vn",
    confidence: "High" as const,
    lastUpdated: "Oct 2025",
    dataPoints: [
      "50k semiconductor engineers target by 2028",
      "Current graduation rate: 8,500/year",
      "Investment: $2.3B in training infrastructure"
    ],
  },
  {
    source: "Intel Malaysia Investment Report",
    link: "https://intel.com/malaysia",
    confidence: "High" as const,
    lastUpdated: "Sep 2025",
    dataPoints: [
      "$7B packaging facility expansion",
      "Advanced Test & Packaging capacity: 45% increase",
      "Timeline: Operational by Q3 2026"
    ],
  },
  {
    source: "SEMI Southeast Asia Report",
    link: "https://semi.org",
    confidence: "High" as const,
    lastUpdated: "Aug 2025",
    dataPoints: [
      "ASEAN packaging capacity: 28% global share by 2030",
      "Malaysia positioning as 4th largest hub",
      "Projected CAGR: 18.5% (2025-2030)"
    ],
  },
  {
    source: "World Bank Geopolitical Stability Index",
    link: "https://worldbank.org",
    confidence: "Medium" as const,
    lastUpdated: "Oct 2025",
    dataPoints: [
      "ASEAN average stability: 72/100",
      "Taiwan Strait risk assessment: Medium-High",
      "Regional economic integration score: 68/100"
    ],
  },
  {
    source: "Samsung Vietnam Manufacturing Data",
    link: "https://samsung.com/vn",
    confidence: "High" as const,
    lastUpdated: "Sep 2025",
    dataPoints: [
      "$3.2B additional investment announced",
      "Semiconductor R&D center expansion",
      "Local talent program: 12,000 engineers by 2027"
    ],
  },
  {
    source: "US Commerce Dept Export Controls",
    link: "https://commerce.gov",
    confidence: "High" as const,
    lastUpdated: "Oct 2025",
    dataPoints: [
      "October 2023 semiconductor restrictions",
      "Countries affected: China, Russia + 4 others",
      "EUV lithography export ban maintained"
    ],
  },
];

export default function DataProvenanceTab() {
  return (
    <div className="space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2">Data Sources & Provenance</h2>
        <p className="text-muted-foreground mb-6">
          All data points, sources, and confidence levels used in our forecasting model. 
          Reproducibility and transparency are core to our methodology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataSources.map((source) => (
          <DataSourceCard key={source.source} {...source} />
        ))}
      </div>

      <div className="bg-muted/20 border border-border rounded-lg p-6 max-w-3xl">
        <h3 className="font-semibold mb-3">Confidence Level Methodology</h3>
        <div className="space-y-2 text-sm">
          <div className="flex gap-3">
            <span className="font-medium min-w-20">High:</span>
            <span className="text-muted-foreground">
              Official government/corporate publications, peer-reviewed research, verified industry reports
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium min-w-20">Medium:</span>
            <span className="text-muted-foreground">
              Analyst estimates, aggregate indices, secondary sources with established methodology
            </span>
          </div>
          <div className="flex gap-3">
            <span className="font-medium min-w-20">Low:</span>
            <span className="text-muted-foreground">
              Projections requiring multiple assumptions, early-stage data, unverified claims
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
