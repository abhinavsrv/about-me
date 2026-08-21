export const CINEMATIC_INTRO_STORAGE_KEY = "folio-cinematic-intro-v1";
export const CINEMATIC_INTRO_PLAY_DURATION_MS = 2_600;
export const CINEMATIC_INTRO_EXIT_DURATION_MS = 540;
export type CinematicIntroPhase = "play" | "exit" | "off";

export function shouldPlayCinematicIntro(pathname: string, prefersReducedMotion: boolean, hasSeenIntro: boolean) {
  return pathname === "/" && !prefersReducedMotion && !hasSeenIntro;
}

export function nextCinematicIntroPhase(phase: CinematicIntroPhase): CinematicIntroPhase {
  if (phase === "play") return "exit";
  return "off";
}

export function introLocksScroll(phase: CinematicIntroPhase) {
  return phase !== "off";
}

export function cinematicIntroSkipAction() {
  return { nextPhase: "exit" as const, shouldMarkSeen: true };
}

export function cinematicIntroReplayAction() {
  return { nextPhase: "play" as const, shouldClearSeen: true };
}

export function shouldRevealMainContent(phase: CinematicIntroPhase) {
  return phase === "off";
}
