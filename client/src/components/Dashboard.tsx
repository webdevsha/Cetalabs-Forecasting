import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart3, Layers, CheckCircle2, Database, Moon, Sun } from "lucide-react";
import ScenarioBuilder from "./ScenarioBuilder";
import ScenarioSimulatorTab from "./ScenarioSimulatorTab";
import ValidationTab from "./ValidationTab";
import DataProvenanceTab from "./DataProvenanceTab";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Compute-Politik
              </h1>
              <p className="text-sm text-muted-foreground">Supply-Side AI Forecasting Dashboard</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                data-testid="button-theme-toggle"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="interactive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="interactive" className="flex items-center gap-2" data-testid="tab-interactive">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Interactive Model</span>
              <span className="sm:hidden">Model</span>
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="flex items-center gap-2" data-testid="tab-scenarios">
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Scenarios</span>
              <span className="sm:hidden">Scenarios</span>
            </TabsTrigger>
            <TabsTrigger value="validation" className="flex items-center gap-2" data-testid="tab-validation">
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden sm:inline">Validation</span>
              <span className="sm:hidden">Validate</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2" data-testid="tab-data">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Data Sources</span>
              <span className="sm:hidden">Data</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="interactive" className="space-y-6">
            <div className="max-w-7xl">
              <h2 className="text-2xl font-semibold mb-2">Interactive Forecasting Model</h2>
              <p className="text-muted-foreground mb-6">
                Adjust policy parameters and toggle future events to see real-time impact on global AI compute capacity forecasts. 
                Combine socioeconomic factors with specific policy events to build custom scenarios.
              </p>
            </div>
            <ScenarioBuilder />
          </TabsContent>

          <TabsContent value="scenarios">
            <ScenarioSimulatorTab />
          </TabsContent>

          <TabsContent value="validation">
            <ValidationTab />
          </TabsContent>

          <TabsContent value="data">
            <DataProvenanceTab />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Compute-Politik</h3>
              <p className="text-sm text-muted-foreground">
                A novel supply-side approach to AI timeline forecasting through physical constraint modeling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Hackathon</h3>
              <p className="text-sm text-muted-foreground">
                Apart AI Forecasting Hackathon 2025
              </p>
              <p className="text-sm text-muted-foreground">
                October 31 - November 2, 2025
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Built with transparency and reproducibility
              </p>
              <p className="text-sm text-muted-foreground">
                All data sources cited and methodologies disclosed
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
