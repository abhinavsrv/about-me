import { describe, expect, it } from "vitest";
import { portfolioPath, portfolioRouterBase } from "./routes";

describe("portfolio route helpers", () => {
  it("keeps links rooted correctly in local development", () => {
    expect(portfolioPath("/research", "/")).toBe("/research");
    expect(portfolioPath("/", "/")).toBe("/");
    expect(portfolioRouterBase("/")).toBe("");
  });

  it("prefixes links and router paths for a GitHub Pages project site", () => {
    expect(portfolioPath("/profile", "/folio-2027/")).toBe("/folio-2027/profile");
    expect(portfolioPath("/#work", "/folio-2027/")).toBe("/folio-2027/#work");
    expect(portfolioRouterBase("/folio-2027/")).toBe("/folio-2027");
  });
});
