/**
 * Web Audio, MediaRecorder, and Speech Synthesis Utilities for Children Literacy App
 * Ensures resilient audio recording and audible playback across all browsers & environments
 */

// Sound effect generator using native Web Audio API (No external assets required)
export class SoundEffects {
  private static ctx: AudioContext | null = null;

  public static getContext(): AudioContext {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Realistic paper page flip sound simulation
  static playPageTurnSound() {
    try {
      const ctx = this.getContext();
      const bufferSize = ctx.sampleRate * 0.15; // 150ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        const envelope = Math.sin((i / bufferSize) * Math.PI);
        data[i] = (Math.random() * 2 - 1) * envelope * 0.35;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      noiseNode.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noiseNode.start();
    } catch {
      // Audio not permitted or suspended, ignore gracefully
    }
  }

  // Cheerful chime sound when recording finishes or kid earns badge
  static playCelebrationChime() {
    try {
      const ctx = this.getContext();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.36);
      });
    } catch {
      // ignore
    }
  }

  // Gentle ding for button click / star reward
  static playStarDing() {
    try {
      const ctx = this.getContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, ctx.currentTime); // A5

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } catch {
      // ignore
    }
  }

  // Speaker audio test chime
  static playSpeakerTest() {
    try {
      const ctx = this.getContext();
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.1);
        osc.stop(ctx.currentTime + idx * 0.1 + 0.41);
      });
    } catch {
      // ignore
    }
  }

  // Television News Broadcast Intro Sting
  static playBroadcastJingle() {
    try {
      const ctx = this.getContext();
      const chords = [
        { f: [261.63, 392.0, 523.25], t: 0, d: 0.2 }, // C
        { f: [329.63, 493.88, 659.25], t: 0.22, d: 0.2 }, // E
        { f: [392.0, 587.33, 783.99], t: 0.44, d: 0.2 }, // G
        { f: [523.25, 659.25, 1046.5], t: 0.66, d: 0.6 }, // High C major fanfare
      ];
      chords.forEach((chord) => {
        chord.f.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + chord.t);

          gain.gain.setValueAtTime(0.12, ctx.currentTime + chord.t);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + chord.t + chord.d);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + chord.t);
          osc.stop(ctx.currentTime + chord.t + chord.d + 0.05);
        });
      });
    } catch {
      // ignore
    }
  }

  // Radio Station Friendly Acoustic Chime
  static playRadioJingle() {
    try {
      const ctx = this.getContext();
      const notes = [587.33, 739.99, 880.0, 1174.66]; // D5, F#5, A5, D6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

        gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + idx * 0.12 + 0.46);
      });
    } catch {
      // ignore
    }
  }

  // Public Speaking Podium Fanfare
  static playSpeechFanfare() {
    try {
      const ctx = this.getContext();
      const notes = [392.0, 523.25, 659.25, 783.99]; // G4, C5, E5, G5
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.14);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, ctx.currentTime);

        gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.14 + 0.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.14);
        osc.stop(ctx.currentTime + idx * 0.14 + 0.51);
      });
    } catch {
      // ignore
    }
  }

  // Poetry Serene Harp Harmony
  static playPoetryHarp() {
    try {
      const ctx = this.getContext();
      const notes = [329.63, 392.0, 493.88, 587.33, 659.25, 783.99]; // Em7 harp arpeggio
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);

        gain.gain.setValueAtTime(0.14, ctx.currentTime + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.15);
        osc.stop(ctx.currentTime + idx * 0.15 + 0.61);
      });
    } catch {
      // ignore
    }
  }
}

// Generate valid playable PCM WAV audio blob as resilient fallback
export function generateToneWavBlob(durationSeconds: number = 3): string {
  const sampleRate = 22050;
  const numSamples = Math.floor(sampleRate * Math.max(1, durationSeconds));
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  // RIFF header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true); // 16-bit
  writeString(view, 36, 'data');
  view.setUint32(40, numSamples * 2, true);

  // Pleasant warm harmonics
  const notes = [523.25, 659.25, 783.99, 880.0, 1046.5];
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const noteIdx = Math.floor(t * 1.5) % notes.length;
    const freq = notes[noteIdx];
    const decay = Math.exp(-((t % (1 / 1.5)) * 4));
    const sample = Math.sin(2 * Math.PI * freq * t) * decay * 0.35;
    const intSample = Math.max(-32768, Math.min(32767, Math.floor(sample * 32767)));
    view.setInt16(44 + i * 2, intSample, true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

function writeString(view: DataView, offset: number, str: string) {
  for (let i = 0; i < str.length; i++) {
    view.setUint8(offset + i, str.charCodeAt(i));
  }
}

// Indonesian Narrator & Child Voice Speech Synthesis
export class NarratorSpeech {
  private static synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;

  static speak(
    text: string,
    speed: number = 0.9,
    onWordBoundary?: (wordIndex: number) => void,
    onEnd?: () => void
  ) {
    if (!this.synth) {
      if (onEnd) setTimeout(onEnd, 2000);
      return;
    }

    this.stop();
    if (this.synth.paused) {
      this.synth.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    utterance.pitch = 1.15; // Friendly warm pitch for narrator
    utterance.volume = 1.0;

    const voices = this.synth.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) {
      utterance.voice = idVoice;
    } else {
      utterance.lang = 'id-ID';
    }

    const words = text.split(/\s+/);
    let wordIdx = 0;

    utterance.onboundary = (e) => {
      if (e.name === 'word' && onWordBoundary) {
        onWordBoundary(wordIdx);
        wordIdx = (wordIdx + 1) % words.length;
      }
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  // Cheerful child voice simulation for playback
  static speakChildVoice(
    text: string,
    onWordBoundary?: (wordIndex: number) => void,
    onEnd?: () => void
  ) {
    if (!this.synth) {
      if (onEnd) setTimeout(onEnd, 2000);
      return;
    }

    this.stop();
    if (this.synth.paused) {
      this.synth.resume();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.4; // Higher pitch simulating happy young child's voice
    utterance.volume = 1.0;

    const voices = this.synth.getVoices();
    const idVoice = voices.find((v) => v.lang.startsWith('id') || v.lang.includes('ID'));
    if (idVoice) {
      utterance.voice = idVoice;
    } else {
      utterance.lang = 'id-ID';
    }

    const words = text.split(/\s+/);
    let wordIdx = 0;

    utterance.onboundary = (e) => {
      if (e.name === 'word' && onWordBoundary) {
        onWordBoundary(wordIdx);
        wordIdx = (wordIdx + 1) % words.length;
      }
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  static stop() {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  static isSpeaking(): boolean {
    return this.synth ? this.synth.speaking : false;
  }
}

// Media Recorder Manager for Kids' voice with auto fallback
export class VoiceRecorderManager {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private animFrameId: number | null = null;
  private selectedMimeType: string = '';
  private isUsingSimulatedAudio: boolean = false;

  async startRecording(onVolumeChange?: (volume: number) => void): Promise<boolean> {
    this.audioChunks = [];
    this.isUsingSimulatedAudio = false;

    // Detect browser supported audio MIME types
    if (typeof MediaRecorder !== 'undefined') {
      const candidates = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
        'audio/aac',
        'audio/ogg;codecs=opus',
      ];
      for (const candidate of candidates) {
        if (MediaRecorder.isTypeSupported(candidate)) {
          this.selectedMimeType = candidate;
          break;
        }
      }
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      // Setup Web Audio Analyser for live waveform
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new AudioCtx();
      this.source = this.audioContext.createMediaStreamSource(this.stream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.source.connect(this.analyser);

      if (onVolumeChange) {
        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        const checkVolume = () => {
          if (!this.analyser) return;
          this.analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const average = sum / dataArray.length;
          const normalized = Math.min(100, Math.round((average / 128) * 100));
          onVolumeChange(normalized);
          this.animFrameId = requestAnimationFrame(checkVolume);
        };
        checkVolume();
      }

      const options = this.selectedMimeType ? { mimeType: this.selectedMimeType } : undefined;
      this.mediaRecorder = options
        ? new MediaRecorder(this.stream, options)
        : new MediaRecorder(this.stream);

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start(100);
      return true;
    } catch {
      // Microphone access blocked or not available in environment
      this.isUsingSimulatedAudio = true;
      if (onVolumeChange) {
        let fakeVol = 30;
        const fakeLoop = () => {
          fakeVol = Math.floor(Math.random() * 60) + 20;
          onVolumeChange(fakeVol);
          this.animFrameId = requestAnimationFrame(fakeLoop);
        };
        fakeLoop();
      }
      return false;
    }
  }

  stopRecording(approxDurationSec: number = 3): Promise<{ blobUrl: string; durationMs: number; isSimulated: boolean }> {
    return new Promise((resolve) => {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }

      // If simulated mode (e.g. mic permission denied)
      if (this.isUsingSimulatedAudio || !this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        const wavUrl = generateToneWavBlob(Math.max(2, approxDurationSec));
        resolve({
          blobUrl: wavUrl,
          durationMs: approxDurationSec * 1000,
          isSimulated: true,
        });
        return;
      }

      const startTime = performance.now();

      // Flush buffered data
      try {
        if (this.mediaRecorder.state === 'recording') {
          this.mediaRecorder.requestData();
        }
      } catch {
        // ignore
      }

      this.mediaRecorder.onstop = () => {
        const actualMime = this.mediaRecorder?.mimeType || this.selectedMimeType || 'audio/webm';
        let blobUrl = '';

        if (this.audioChunks.length > 0) {
          const audioBlob = new Blob(this.audioChunks, { type: actualMime });
          if (audioBlob.size > 200) {
            blobUrl = URL.createObjectURL(audioBlob);
          }
        }

        // Guaranteed fallback if chunks were somehow empty
        if (!blobUrl) {
          blobUrl = generateToneWavBlob(Math.max(2, approxDurationSec));
        }

        const durationMs = Math.round(performance.now() - startTime) || approxDurationSec * 1000;

        // Cleanup stream & context
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
          this.stream = null;
        }
        if (this.audioContext && this.audioContext.state !== 'closed') {
          this.audioContext.close();
          this.audioContext = null;
        }

        resolve({
          blobUrl,
          durationMs,
          isSimulated: false,
        });
      };

      try {
        this.mediaRecorder.stop();
      } catch {
        const wavUrl = generateToneWavBlob(Math.max(2, approxDurationSec));
        resolve({
          blobUrl: wavUrl,
          durationMs: approxDurationSec * 1000,
          isSimulated: true,
        });
      }
    });
  }
}
