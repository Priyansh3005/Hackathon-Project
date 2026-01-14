import { useLandingData } from "./useLandingData";
import { Header } from "../../layout/Header";
import { HeroSection } from "../../sections/HeroSection";
import { ProblemStrip } from "../../sections/ProblemStrip";
import { HowItWorks } from "../../sections/Howitworks";
import { CapabilitiesGrid } from "../../sections/CapabilitiesGrid";
import { TrustStrip } from "../../sections/TrustStrip";
import { FinalCTA } from "../../sections/FinalCTA";
import { Footer } from "../../sections/Footer";
export default function LandingPage() {
  const { data, loading } = useLandingData();

  if (loading || !data) return null;

  return (
    <>
      <Header
        appName="PROJECT INTEGRITY"
        navItems={data.navItems}
        demoBadgeLabel="Demo Mode"
      />

      <HeroSection
        headline={data.hero.headline}
        subheading={data.hero.subheading}
        ctas={data.hero.ctas}
      />

      <ProblemStrip items={data.problems} />


      <HowItWorks steps={data.howItWorks} />


      <CapabilitiesGrid items={data.capabilities} />

      <TrustStrip items={data.trustPoints} />

      <FinalCTA
        heading={data.finalCTA.heading}
        ctas={data.finalCTA.ctas}
      />

      <Footer content={data.footer} />

      {/* Sections will come later */}
    </>
  );
}
