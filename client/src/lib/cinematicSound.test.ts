import { describe, expect, it } from "vitest";
import { canPlayCinematicSound } from "./cinematicSound";

describe("cinematic ambient sound", () => {
  it("does not claim audio support in a non-browser test environment", () => {
    expect(canPlayCinematicSound()).toBe(false);
  });
});
