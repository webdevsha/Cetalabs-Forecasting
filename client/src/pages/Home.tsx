import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return <HeroSection onGetStarted={() => setShowDashboard(true)} />;
}
