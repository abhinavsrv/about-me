export const portfolioEvents = [
  "research_atlas_opened",
  "project_case_study_opened",
  "resume_downloaded",
  "github_opened",
  "linkedin_opened",
  "email_initiated",
] as const;

export type PortfolioEvent = (typeof portfolioEvents)[number];

type AnalyticsWindow = {
  umami?: { track?: (event: PortfolioEvent) => void };
};

/** Records aggregate intent only; it never includes a visitor identifier, form content, or a personal payload. */
export function trackPortfolioEvent(event: PortfolioEvent, runtime?: AnalyticsWindow) {
  const target = runtime ?? (typeof window === "undefined" ? undefined : (window as AnalyticsWindow));
  target?.umami?.track?.(event);
}
