/**
 * 東南アジア・チル＆ポップBGMコンポーザー - Web Audio API プレビュー音源
 * ガムラン金属琴（ペロッグ音階）× 温かいローズピアノ × ローファイビート × 雨音アンビエント
 */

class SeaChillAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.step = 0;
    this.masterGain = null;
    this.rainSource = null;
    this.rainGain = null;
    this.onStepCallback = null;
    this.onStateChangeCallback = null;
    this.volume = 0.75;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  toggle(getState, onStep, onStateChange) {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      if (onStateChange) onStateChange(false);
    } else {
      this.start(getState, onStep, onStateChange);
      if (onStateChange) onStateChange(true);
    }
  }

  start(getState, onStep, onStateChange) {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.onStepCallback = onStep;
    this.onStateChangeCallback = onStateChange;
    this.step = 0;

    this.startRainAmbiance();

    const schedule = () => {
      if (!this.isPlaying) return;

      const state = getState ? getState() : { tempo: 80 };
      const bpm = Number(state.tempo) || 80;
      // 16分音符ごとのステップ長
      const stepDuration = 60 / bpm / 4;

      this.playStep(this.ctx.currentTime, this.step, state);

      if (this.onStepCallback) {
        this.onStepCallback(this.step % 16);
      }

      this.step++;
      this.timerId = setTimeout(schedule, stepDuration * 1000);
    };

    schedule();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.stopRainAmbiance();
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(false);
    }
  }

  // 熱帯スコールの雨音アンビエント（ピンクノイズ風）
  startRainAmbiance() {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // 1次ローパスで雨音の滑らかなホワイト〜ピンクノイズ
      lastOut = lastOut * 0.92 + white * 0.08;
      data[i] = lastOut * 1.5;
    }

    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = buffer;
    this.rainSource.loop = true;

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    this.rainSource.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.masterGain);

    this.rainSource.start();
  }

  stopRainAmbiance() {
    if (this.rainSource) {
      try {
        this.rainSource.stop();
        this.rainSource.disconnect();
      } catch (e) {}
      this.rainSource = null;
    }
  }

  // 16ステップシーケンスの再生
  playStep(time, stepIndex, state) {
    const s = stepIndex % 16;
    const isLofi = state.genre === 'sea_lofi' || state.genre === 'sea_pop_cover';

    // 1. ローファイ・ドラム（スイング感）
    // キック: 0, 10
    if (isLofi && (s === 0 || s === 10)) {
      this.playKick(time);
    }
    // スネア/スナップ: 4, 12
    if (isLofi && (s === 4 || s === 12)) {
      this.playSnare(time);
    }
    // ハイハット: 偶数ステップ + 跳ね
    if (isLofi && (s % 2 === 0 || s === 7 || s === 15)) {
      this.playHiHat(time, s % 4 === 0 ? 0.4 : 0.22);
    }

    // 2. ローズピアノ（Rhodesコード）: 4小節進行
    // 0ステップ（コード1）, 8ステップ（コード2）
    if (s === 0) {
      // Fmaj9 (F, A, C, E, G)
      this.playRhodesChord(time, [174.61, 220.00, 261.63, 329.63, 392.00]);
    } else if (s === 8) {
      // Cmaj7 (C, E, G, B)
      this.playRhodesChord(time, [130.81, 164.81, 196.00, 246.94]);
    }

    // 3. ガムラン金属琴（ペロッグ音階 / Pelog Selisir）の澄んだチャイム
    // ペロッグ音階: E4 (329.63), F4 (349.23), G4 (392.00), B4 (493.88), C5 (523.25), E5 (659.25)
    const pelogNotes = [329.63, 349.23, 392.00, 493.88, 523.25, 659.25];
    // メロディのパターン
    const gamelanPattern = {
      2: pelogNotes[2], // G4
      5: pelogNotes[3], // B4
      7: pelogNotes[4], // C5
      10: pelogNotes[5], // E5
      13: pelogNotes[3], // B4
      14: pelogNotes[1]  // F4
    };

    if (gamelanPattern[s]) {
      this.playGamelanChime(time, gamelanPattern[s]);
    }

    // 4. 木琴（ラナート）の軽快なロール（時折入るアクセント）
    if (s === 3 || s === 11) {
      this.playRanatWood(time, pelogNotes[(s + 2) % pelogNotes.length]);
    }
  }

  // ガムラン青銅金属琴（澄んだ倍音と余韻）
  playGamelanChime(time, freq) {
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // 基本波（サイン波）
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, time);

    // 青銅特有の金属倍音（非整数倍音: 約2.76倍）
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.76, time);

    const metallicGain = this.ctx.createGain();
    metallicGain.gain.setValueAtTime(0.35, time);
    metallicGain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);

    osc2.connect(metallicGain);
    metallicGain.connect(gain);

    gain.gain.setValueAtTime(0.45, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);

    osc1.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + 1.3);
    osc2.stop(time + 0.5);
  }

  // 木琴（ラナート・木製アタック）
  playRanatWood(time, freq) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.2);
  }

  // ローズピアノ和音
  playRhodesChord(time, freqs) {
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const t = time + idx * 0.015;
      osc.frequency.setValueAtTime(f, t);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 1.7);
    });
  }

  // キックドラム（ローファイ・ソフト）
  playKick(time) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(110, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.12);

    gain.gain.setValueAtTime(0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.24);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.25);
  }

  // スネア / スナップ
  playSnare(time) {
    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.45, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.15);
  }

  // ハイハット
  playHiHat(time, vol = 0.3) {
    const bufferSize = this.ctx.sampleRate * 0.035;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol * 0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.04);
  }
}

export const seaChillAudio = new SeaChillAudioEngine();
