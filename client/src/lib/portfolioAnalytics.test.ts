import { describe, expect, it, vi } from "vitest";
import { portfolioEvents, trackPortfolioEvent } from "./portfolioAnalytics";

describe("portfolio analytics", () => {
  it("exposes only aggregate interaction-event names", () => {
    expect(portfolioEvents).toEqual(["research_atlas_opened", "project_case_study_opened", "resume_downloaded", "github_opened", "linkedin_opened", "email_initiated"]);
  });

  it("safely records an event only when an analytics tracker is available", () => {
    const track = vi.fn();
    trackPortfolioEvent("research_atlas_opened", { umami: { track } });
    trackPortfolioEvent("email_initiated", {});
    expect(track).toHaveBeenCalledWith("research_atlas_opened");
    expect(track).toHaveBeenCalledTimes(1);
  });
});
