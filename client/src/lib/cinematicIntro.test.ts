import { describe, expect, it } from "vitest";
import { CINEMATIC_INTRO_EXIT_DURATION_MS, CINEMATIC_INTRO_PLAY_DURATION_MS, cinematicIntroReplayAction, cinematicIntroSkipAction, introLocksScroll, nextCinematicIntroPhase, shouldPlayCinematicIntro, shouldRevealMainContent } from "./cinematicIntro";

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

  it("replays the intro on demand and only reveals main content when the sequence is off", () => {
    expect(cinematicIntroReplayAction()).toEqual({ nextPhase: "play", shouldClearSeen: true });
    expect(shouldRevealMainContent("play")).toBe(false);
    expect(shouldRevealMainContent("exit")).toBe(false);
    expect(shouldRevealMainContent("off")).toBe(true);
  });

  it("uses a deliberately slower playback and a coordinated exit", () => {
    expect(CINEMATIC_INTRO_PLAY_DURATION_MS).toBe(2_600);
    expect(CINEMATIC_INTRO_EXIT_DURATION_MS).toBe(540);
    expect(CINEMATIC_INTRO_PLAY_DURATION_MS).toBeGreaterThan(CINEMATIC_INTRO_EXIT_DURATION_MS);
  });
});
