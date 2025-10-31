import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Apart AI Forecasting Hackathon 2025</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          Compute-Politik
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A Supply-Side AI Forecasting Dashboard
        </p>
        
        <div className="bg-card border border-card-border rounded-xl p-8 mb-12 max-w-2xl mx-auto">
          <div className="text-6xl md:text-7xl font-bold text-primary mb-3 tabular-nums">
            70%
          </div>
          <p className="text-lg text-card-foreground font-medium">
            of AI progress is constrained by physical supply chains
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            The supply chain IS the timeline
          </p>
        </div>
        
        <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Most AI forecasting models focus on algorithmic progress. We offer a fundamentally novel approach: 
          forecasting AI timelines by modeling <span className="font-semibold text-foreground">supply-side constraints</span> — 
          the geopolitical and economic factors that shape compute hardware availability and talent pipelines in ASEAN.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="h-14 px-10 text-lg"
            onClick={onGetStarted}
            data-testid="button-get-started"
          >
            Explore Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 px-10 text-lg"
            data-testid="button-learn-more"
          >
            Learn Methodology
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-primary mb-2">Novel</div>
            <p className="text-sm text-muted-foreground">Supply-side methodology challenging traditional demand-focused models</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-primary mb-2">Strategic</div>
            <p className="text-sm text-muted-foreground">Policy-to-impact simulator for governance decision-making</p>
          </div>
          <div className="p-6 rounded-lg bg-card/50 border border-card-border">
            <div className="text-3xl font-bold text-primary mb-2">Validated</div>
            <p className="text-sm text-muted-foreground">Backtested against historical supply chain disruptions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
