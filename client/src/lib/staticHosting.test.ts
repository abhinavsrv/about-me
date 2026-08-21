import { describe, expect, it } from "vitest";
import { isStaticPortfolioBuild } from "./staticHosting";

describe("isStaticPortfolioBuild", () => {
  it("enables static-only behavior only for the explicit build flag", () => {
    expect(isStaticPortfolioBuild("true")).toBe(true);
    expect(isStaticPortfolioBuild("false")).toBe(false);
    expect(isStaticPortfolioBuild(undefined)).toBe(false);
  });
});
