import { describe, expect, it } from "vitest";
import { mentalRoBertaJournal } from "./mentalRoBertaJournal";

describe("Mental-RoBERTa journal record", () => {
  it("preserves the supplied title, risk threshold, and staged framework", () => {
    expect(mentalRoBertaJournal.title).toContain("Hierarchical Risk-Aware Mental-RoBERTa");
    expect(mentalRoBertaJournal.threshold).toBe("τ = 0.30");
    expect(mentalRoBertaJournal.stages).toHaveLength(3);
  });

  it("keeps the journal framed as a measured screening record rather than an autonomous diagnosis claim", () => {
    expect(mentalRoBertaJournal.stages[2].detail).toContain("validation-tuned");
    expect(mentalRoBertaJournal.dataset).toContain("Public, aggregated");
  });
});
