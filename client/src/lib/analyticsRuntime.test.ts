import { describe, expect, it } from "vitest";
import { analyticsScriptUrl } from "./analyticsRuntime";

describe("analyticsScriptUrl", () => {
  it("returns no request URL when static hosting has no analytics configuration", () => {
    expect(analyticsScriptUrl(undefined, undefined)).toBeNull();
    expect(analyticsScriptUrl("", "site-id")).toBeNull();
    expect(analyticsScriptUrl("/analytics", "site-id")).toBeNull();
  });

  it("creates a valid Umami script URL for a configured HTTPS endpoint", () => {
    expect(analyticsScriptUrl("https://analytics.example.com/", "site-id")).toBe("https://analytics.example.com/umami");
  });
});
