import { describe, expect, it } from "vitest";
import { cinematicIntroSkipAction, introLocksScroll, nextCinematicIntroPhase, shouldPlayCinematicIntro } from "./cinematicIntro";

describe("shouldPlayCinematicIntro", () => {
  it("plays only on the homepage for a visitor who has not seen it this session", () => {
    expect(shouldPlayCinematicIntro("/", false, false)).toBe(true);
  });

  it("respects route, session, and reduced-motion constraints", () => {
    expect(shouldPlayCinematicIntro("/research", false, false)).toBe(false);
    expect(shouldPlayCinematicIntro("/", true, false)).toBe(false);
    expect(shouldPlayCinematicIntro("/", false, true)).toBe(false);
  });

  it("always completes an automatic or skipped exit by transitioning off", () => {
    expect(nextCinematicIntroPhase("play")).toBe("exit");
    expect(nextCinematicIntroPhase("exit")).toBe("off");
  });

  it("models the shell skip path: session is marked, scroll stays locked through exit, then returns after dismissal", () => {
    const skip = cinematicIntroSkipAction();
    expect(skip).toEqual({ nextPhase: "exit", shouldMarkSeen: true });
    expect(introLocksScroll(skip.nextPhase)).toBe(true);
    expect(nextCinematicIntroPhase(skip.nextPhase)).toBe("off");
    expect(introLocksScroll("off")).toBe(false);
  });
});
