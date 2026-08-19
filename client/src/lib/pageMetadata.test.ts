import { describe, expect, it, vi } from "vitest";
import { applyPageMetadata, portfolioPageMetadata } from "./pageMetadata";

describe("portfolio page metadata", () => {
  it("provides distinct titles and descriptions for each routed editorial page", () => {
    const records = Object.values(portfolioPageMetadata);
    expect(new Set(records.map((record) => record.title)).size).toBe(records.length);
    expect(new Set(records.map((record) => record.description)).size).toBe(records.length);
  });

  it("updates the document title and description tag", () => {
    const setAttribute = vi.fn();
    const documentRef = {
      title: "",
      querySelector: vi.fn(() => ({ setAttribute })),
    } as unknown as Document;

    applyPageMetadata(portfolioPageMetadata.research, documentRef);

    expect(documentRef.title).toBe(portfolioPageMetadata.research.title);
    expect(setAttribute).toHaveBeenCalledWith("content", portfolioPageMetadata.research.description);
  });

  it("includes the homepage metadata needed after client-side navigation back to the root route", () => {
    expect(portfolioPageMetadata.home).toMatchObject({
      title: "Abhinav Srivastava — Research Portfolio",
      description: expect.stringContaining("undergraduate researcher"),
    });
  });
});
