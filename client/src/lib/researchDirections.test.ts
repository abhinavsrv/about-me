import { describe, expect, it } from "vitest";
import { profileCredentials, profileRecordEntries, researchDirections } from "./researchDirections";

describe("PDF-supported research directions", () => {
  it("keeps the four documented research directions available for the portfolio page", () => {
    expect(researchDirections).toHaveLength(4);
    expect(researchDirections.map((direction) => direction.title)).toContain("Alignment & agency");
  });

  it("retains the selected academic, service, and credential record without excluded experience entries", () => {
    expect(profileRecordEntries).toHaveLength(3);
    expect(profileRecordEntries.flat().join(" ")).not.toContain("IEEE");
    expect(profileCredentials).toContain("Hands-on Data Science and AI for Healthcare");
  });
});
