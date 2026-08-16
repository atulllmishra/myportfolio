"use client";

class AudioHaptics {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    if (typeof window !== "undefined") {
      this.isMuted = localStorage.getItem("haptics_muted") === "true";
      // Don't initialize AudioContext immediately to respect browser autoplay policies
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (typeof window !== "undefined") {
      localStorage.setItem("haptics_muted", this.isMuted.toString());
    }
    return this.isMuted;
  }

  public getMuted() {
    return this.isMuted;
  }

  // Synthesize a generic UI click/pop
  public playClick(freq = 400, duration = 0.05, type: OscillatorType = "sine") {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

    gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + duration * 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Two-tone pop for modal open/close
  public playPop(isOpen = true) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const freq1 = isOpen ? 400 : 600;
    const freq2 = isOpen ? 600 : 400;

    this.playClick(freq1, 0.05, "sine");
    setTimeout(() => {
      this.playClick(freq2, 0.08, "sine");
    }, 40);
  }

  // Subtle mechanical switch for theme toggle
  public playSwitch() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Terminal keystroke (random freq from a minor pentatonic scale)
  public playKey() {
    const scale = [220, 261.63, 293.66, 329.63, 392.00, 440];
    const freq = scale[Math.floor(Math.random() * scale.length)];
    this.playClick(freq, 0.04, "triangle");
  }
}

export const audioHaptics = new AudioHaptics();
