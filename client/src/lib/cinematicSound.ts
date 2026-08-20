type AudioCapableWindow = Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext };

function getAudioWindow() {
  return window as AudioCapableWindow;
}

export function canPlayCinematicSound() {
  return typeof window !== "undefined" && Boolean(getAudioWindow().AudioContext || getAudioWindow().webkitAudioContext);
}

export function playCinematicSignalCue() {
  if (!canPlayCinematicSound()) return false;
  const AudioConstructor = getAudioWindow().AudioContext || getAudioWindow().webkitAudioContext;
  if (!AudioConstructor) return false;
  const context = new AudioConstructor();
  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.07, now + 0.24);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 2.35);
  master.connect(context.destination);

  const pulse = context.createOscillator();
  const pulseGain = context.createGain();
  pulse.type = "sine";
  pulse.frequency.setValueAtTime(54, now);
  pulse.frequency.exponentialRampToValueAtTime(61, now + 0.7);
  pulseGain.gain.setValueAtTime(0.0001, now);
  pulseGain.gain.exponentialRampToValueAtTime(0.48, now + 0.45);
  pulseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);
  pulse.connect(pulseGain).connect(master);

  const chime = context.createOscillator();
  const chimeGain = context.createGain();
  chime.type = "sine";
  chime.frequency.setValueAtTime(880, now + 0.82);
  chime.frequency.exponentialRampToValueAtTime(1320, now + 1.45);
  chimeGain.gain.setValueAtTime(0.0001, now);
  chimeGain.gain.exponentialRampToValueAtTime(0.34, now + 0.92);
  chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.25);
  chime.connect(chimeGain).connect(master);

  pulse.start(now);
  chime.start(now + 0.82);
  pulse.stop(now + 2.4);
  chime.stop(now + 2.4);
  window.setTimeout(() => void context.close(), 2600);
  return true;
}
