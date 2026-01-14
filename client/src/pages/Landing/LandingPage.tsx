import { useLandingData } from "./useLandingData";
import { Header } from "../../layout/Header";

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
      {/* Sections will come later */}
    </>
  );
}
