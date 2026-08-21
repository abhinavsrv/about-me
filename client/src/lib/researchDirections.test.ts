import { describe, expect, it } from "vitest";
import { approvedCertificates, profileRecordEntries, researchDirections } from "./researchDirections";

describe("PDF-supported research directions", () => {
  it("keeps the four documented research directions available for the portfolio page", () => {
    expect(researchDirections).toHaveLength(4);
    expect(researchDirections.map((direction) => direction.title)).toContain("Alignment & agency");
  });

  it("retains the selected academic and service record without excluded experience entries", () => {
    expect(profileRecordEntries).toHaveLength(3);
    expect(profileRecordEntries.flat().join(" ")).not.toContain("IEEE");
  });

  it("keeps certificate names, issuers, and completion dates tied to the supplied evidence", () => {
    expect(approvedCertificates).toHaveLength(4);
    expect(approvedCertificates).toContainEqual(expect.objectContaining({ issuer: "LinkedIn Learning", completed: "2 August 2026" }));
    expect(approvedCertificates).toContainEqual(expect.objectContaining({ title: "Certificate of Achievement — AI Intern", issuer: "Region Infinity Pvt. Ltd.", completed: "13 October 2025" }));
  });
});
