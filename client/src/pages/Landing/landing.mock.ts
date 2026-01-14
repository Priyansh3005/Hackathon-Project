import type { LandingPageData } from "./landing.types";

export const landingMockData: LandingPageData = {
  navItems: [
    { label: "Home", route: "/" },
    { label: "Map Overview", route: "/map" },
    { label: "Report an Issue", route: "/upload" },
    { label: "Dashboard", route: "/dashboard" },
    { label: "Demo Mode", route: "/demo" }
  ],

  hero: {
    headline: "Bridging the gap between official records and on-ground reality",
    subheading:
      "AI-powered civic infrastructure auditing that compares government claims with real-world evidence — transparently and responsibly.",
    ctas: [
      { label: "Report an Infrastructure Issue", route: "/upload", variant: "primary" },
      { label: "View Map Overview", route: "/map", variant: "secondary" }
    ]
  },

  problems: [
    {
      id: "records",
      title: "Disconnected Records",
      description:
        "Official infrastructure documents often fail to reflect actual on-ground conditions."
    },
    {
      id: "verification",
      title: "Lack of Verification",
      description:
        "Citizens have no reliable mechanism to validate infrastructure claims using evidence."
    },
    {
      id: "visibility",
      title: "No Systemic Visibility",
      description:
        "Issues remain isolated instead of revealing larger integrity patterns."
    }
  ],

  howItWorks: [
    {
      stepNumber: 1,
      title: "Upload Records & Evidence",
      description:
        "Government documents and citizen-uploaded photos are securely submitted."
    },
    {
      stepNumber: 2,
      title: "AI-Based Audit",
      description:
        "AI compares official claims with on-ground evidence to detect discrepancies."
    },
    {
      stepNumber: 3,
      title: "Transparent Verdict",
      description:
        "Results are presented with clear risk levels, explanations, and mapping."
    }
  ],

  capabilities: [
    {
      id: "doc-analysis",
      title: "Automated Document Analysis",
      description:
        "Extract key information from tenders, budgets, and completion reports."
    },
    {
      id: "visual-verification",
      title: "Visual Evidence Verification",
      description:
        "Analyze citizen-uploaded photos to detect infrastructure issues."
    },
    {
      id: "ai-audit",
      title: "AI Audit & Explainability",
      description:
        "Understand why discrepancies are flagged through explainable AI."
    },
    {
      id: "geo-mapping",
      title: "Geospatial Risk Mapping",
      description:
        "Visualize verified, disputed, and high-risk zones on interactive maps."
    },
    {
      id: "privacy",
      title: "Privacy-First Reporting",
      description:
        "Anonymous submissions ensure ethical and safe whistleblowing."
    },
    {
      id: "civic-action",
      title: "Civic Action Enablement",
      description:
        "Auto-generate RTI drafts and complaint letters from audit results."
    }
  ],

  trustPoints: [
    {
      id: "privacy",
      text: "Privacy-first reporting with anonymous submissions",
      linkLabel: "Privacy Policy",
      linkRoute: "/privacy"
    },
    {
      id: "explainability",
      text: "AI decisions are transparent and explainable",
      linkLabel: "How AI Works",
      linkRoute: "/explainability"
    },
    {
      id: "independent",
      text: "Independent, non-affiliated civic technology platform"
    }
  ],

  finalCTA: {
    heading: "Start verifying infrastructure claims today.",
    ctas: [
      { label: "Report an Issue", route: "/upload", variant: "primary" },
      { label: "Run Demo Audit", route: "/demo", variant: "secondary" }
    ]
  },

  footer: {
    disclaimer:
      "This platform is a civic technology prototype developed for public-interest evaluation.",
    affiliationNote:
      "Not affiliated with any government authority or agency.",
    credits:
      "Developed as part of a civic innovation challenge.",
    year: "2024"
  }
};
