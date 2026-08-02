export type Locale = "ja" | "en";

export type CapabilityId =
  | "vision"
  | "edge"
  | "nlp"
  | "modernization";

export type SituationId =
  | "website-app"
  | "ui-ux"
  | "ai-daily"
  | "visual-inspection"
  | "legacy-data"
  | "onprem-llm"
  | "dx-bottleneck"
  | "other";

export type PortfolioStatus = "live" | "beta" | "in-dev";

export interface PortfolioItem {
  id: string;
  name: string;
  vertical: string;
  status: PortfolioStatus;
  highlight: string;
  enterpriseAngle: {
    ja: string;
    en: string;
  };
  summary: {
    ja: string;
    en: string;
  };
}

export interface CompanyFact {
  label: { ja: string; en: string };
  value: { ja: string; en: string };
}
