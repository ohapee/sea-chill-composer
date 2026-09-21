/**
 * 東南アジア・チル＆ポップBGMコンポーザー - メイン制御ロジック
 */

import {
  GENRES,
  ETHNIC_INSTRUMENTS,
  MODERN_INSTRUMENTS,
  TROPICAL_ENVIRONMENTS,
  SCALES,
  DURATIONS,
  YOUTUBE_TEMPLATES,
  TITLE_SUGGESTIONS
} from './data.js';

import {
  buildPrompt,
  buildNegativePrompt,
  buildYouTubeMetadata,
  buildTimelineData
} from './prompt_generator.js';

import { seaChillAudio } from './audio_preview.js';

import {
  saveLastState,
  loadLastState,
  getPresets,
  savePreset,
  deletePreset,
  exportPresetsAsJSON,
  importPresetsFromJSON,
  getShareURL,
  loadFromURLHash
} from './storage.js';

const state = {
  trackTitle: 'Rainy Afternoon in Ubud',
  genre: 'sea_lofi',
  ethnicInsts: new Set(['gamelan_bells', 'angklung_bamboo', 'ranat_xylophone', 'dan_bau_monochord']),
  modernInsts: new Set(['rhodes_chill', 'lofi_boombap', 'warm_subbass']),
  environments: new Set(['bali_rain', 'jungle_crickets']),
  scale: 'pelog_bali',
  tempo: 80,
  duration: '60',
  lang: 'ja',
  aiTarget: 'suno_udio'
};

let currentCountryFilter = 'all';

function flash(msg) {
  const f = document.getElementById('flash');
  if (!f) return;
  f.textContent = msg;
  f.classList.add('show');
  setTimeout(() => f.classList.remove('show'), 1600);
}

function renderEthnicChips() {
  const container = document.getElementById('ethnicChips');
  if (!container) return;
  container.innerHTML = '';

  const filtered = currentCountryFilter === 'all'
    ? ETHNIC_INSTRUMENTS
    : ETHNIC_INSTRUMENTS.filter(i => i.country.includes(currentCountryFilter));

  filtered.forEach(item => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (state.ethnicInsts.has(item.id) ? ' on' : '');
    b.innerHTML = `<span>${item.flag}</span> ${item.ja.split(' (')[0]}`;
    b.title = item.ja;
    b.addEventListener('click', () => {
      if (state.ethnicInsts.has(item.id)) {
        state.ethnicInsts.delete(item.id);
      } else {
        state.ethnicInsts.add(item.id);
      }
      b.classList.toggle('on');
      maybeRegenerate();
    });
    container.appendChild(b);
  });
}

function buildMultiChips(container, items, stateSet, onChange) {
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (stateSet.has(item.id) ? ' on' : '');
    b.textContent = item.ja.split(' (')[0];
    b.title = item.ja;
    b.addEventListener('click', () => {
      if (stateSet.has(item.id)) {
        stateSet.delete(item.id);
      } else {
        stateSet.add(item.id);
      }
      b.classList.toggle('on');
      onChange();
    });
    container.appendChild(b);
  });
}

function buildSingleChips(container, items, currentId, onSelect) {
  if (!container) return;
  container.innerHTML = '';
  items.forEach(item => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (item.id === currentId ? ' on' : '');
    b.textContent = item.tag || item.ja.split(' (')[0];
    b.title = item.desc || item.ja;
    b.addEventListener('click', () => {
      [...container.children].forEach(c => c.classList.remove('on'));
      b.classList.add('on');
      onSelect(item.id);
    });
    container.appendChild(b);
  });
}

function renderTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;

  const sections = buildTimelineData(state);
  container.innerHTML = '';

  sections.forEach(sec => {
    const row = document.createElement('div');
    row.className = 'screen-row';
    row.innerHTML = `
      <div class="screen-time">${sec.time}</div>
      <div class="screen-body">
        <span class="lab">${sec.label}</span>
        <span class="desc">${sec.desc}</span>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderYouTubeBox() {
  const ytTitle = document.getElementById('ytVideoTitle');
  const ytDesc = document.getElementById('ytDescription');
  const ytTags = document.getElementById('ytTags');

  if (!ytTitle || !ytDesc || !ytTags) return;

  const meta = buildYouTubeMetadata(state);
  ytTitle.value = meta.videoTitle;
  ytDesc.value = meta.description;
  ytTags.value = meta.tags;
}

function generate() {
  const promptOut = document.getElementById('promptOut');
  const negativeOut = document.getElementById('negativeOut');

  if (promptOut) {
    promptOut.value = buildPrompt(state);
  }

  if (negativeOut) {
    negativeOut.value = buildNegativePrompt(state);
  }

  renderTimeline();
  renderYouTubeBox();
}

function maybeRegenerate() {
  saveLastState(state);
  generate();
}

function updatePresetPlaceholder() {
  const pInput = document.getElementById('presetNameInput');
  if (pInput) {
    pInput.placeholder = state.trackTitle
      ? `プリセット名 (空欄なら「${state.trackTitle}」)`
      : 'プリセット名 (例: バリ島雨のカフェ)';
  }
}

function renderPresets() {
  const container = document.getElementById('presetChips');
  if (!container) return;
  container.innerHTML = '';

  const presets = getPresets();
  const names = Object.keys(presets);

  if (names.length === 0) {
    const note = document.createElement('span');
    note.style.color = 'var(--text-sub)';
    note.style.fontSize = '0.84rem';
    note.textContent = '保存されたプリセットはありません';
    container.appendChild(note);
    return;
  }

  names.forEach(name => {
    const item = document.createElement('span');
    item.className = 'preset-item';

    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = name;
    b.addEventListener('click', () => {
      applyState(presets[name]);
      generate();
      saveLastState(state);
      flash(`「${name}」を読み込みました🌴`);
    });

    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'preset-del';
    del.textContent = '×';
    del.title = '削除';
    del.addEventListener('click', (e) => {
      e.stopPropagation();
      deletePreset(name);
      renderPresets();
      flash(`「${name}」を削除しました`);
    });

    item.appendChild(b);
    item.appendChild(del);
    container.appendChild(item);
  });
}

function applyState(obj) {
  if (!obj) return;
  state.trackTitle = obj.trackTitle || '';
  state.genre = obj.genre || 'sea_lofi';
  state.ethnicInsts = new Set(obj.ethnicInsts || []);
  state.modernInsts = new Set(obj.modernInsts || []);
  state.environments = new Set(obj.environments || []);
  state.scale = obj.scale || 'pelog_bali';
  state.tempo = Number(obj.tempo) || 80;
  state.duration = obj.duration || '60';
  state.lang = obj.lang || 'ja';
  state.aiTarget = obj.aiTarget || 'suno_udio';

  const titleInput = document.getElementById('trackTitleInput');
  if (titleInput) titleInput.value = state.trackTitle;
  updatePresetPlaceholder();

  buildSingleChips(document.getElementById('genreChips'), GENRES, state.genre, (id) => {
    state.genre = id;
    if (id === 'sea_lofi' && state.tempo > 95) state.tempo = 80;
    if (id === 'tropical_vlog' && state.tempo < 100) state.tempo = 115;
    if (id === 'asian_ambient') state.tempo = 65;
    const tempoRange = document.getElementById('tempoRange');
    const tempoReadout = document.getElementById('tempoReadout');
    if (tempoRange && tempoReadout) {
      tempoRange.value = state.tempo;
      tempoReadout.innerHTML = state.tempo + '<span> BPM</span>';
    }
    maybeRegenerate();
  });

  renderEthnicChips();
  buildMultiChips(document.getElementById('modernChips'), MODERN_INSTRUMENTS, state.modernInsts, maybeRegenerate);
  buildMultiChips(document.getElementById('envChips'), TROPICAL_ENVIRONMENTS, state.environments, maybeRegenerate);

  // 尺チップ
  const durContainer = document.getElementById('durationChips');
  if (durContainer) {
    durContainer.innerHTML = '';
    DURATIONS.forEach(d => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.duration === d.id ? ' on' : '');
      b.textContent = d.label;
      b.addEventListener('click', () => {
        state.duration = d.id;
        [...durContainer.children].forEach(c => c.classList.remove('on'));
        b.classList.add('on');
        maybeRegenerate();
      });
      durContainer.appendChild(b);
    });
  }

  // セレクト
  const scaleSelect = document.getElementById('scaleSelect');
  if (scaleSelect) scaleSelect.value = state.scale;

  const aiTargetSelect = document.getElementById('aiTargetSelect');
  if (aiTargetSelect) aiTargetSelect.value = state.aiTarget;

  // テンポ
  const tempoRange = document.getElementById('tempoRange');
  const tempoReadout = document.getElementById('tempoReadout');
  if (tempoRange && tempoReadout) {
    tempoRange.value = state.tempo;
    tempoReadout.innerHTML = state.tempo + '<span> BPM</span>';
  }

  // 言語トグル
  document.querySelectorAll('#langToggle button').forEach(b => {
    b.classList.toggle('on', b.dataset.lang === state.lang);
  });
}

function init() {
  const urlState = loadFromURLHash();
  const lastState = loadLastState();
  applyState(urlState || lastState || state);

  // 曲名入力
  const titleInput = document.getElementById('trackTitleInput');
  if (titleInput) {
    titleInput.addEventListener('input', (e) => {
      state.trackTitle = e.target.value;
      updatePresetPlaceholder();
      maybeRegenerate();
    });
  }

  // 🎲 曲名ガチャ
  document.getElementById('randomTitleBtn')?.addEventListener('click', () => {
    const rand = TITLE_SUGGESTIONS[Math.floor(Math.random() * TITLE_SUGGESTIONS.length)];
    state.trackTitle = rand;
    if (titleInput) titleInput.value = rand;
    updatePresetPlaceholder();
    maybeRegenerate();
    flash(`「${rand}」をセットしました🌿`);
  });

  // 国別タブ切替
  document.querySelectorAll('.country-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.country-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCountryFilter = tab.dataset.country;
      renderEthnicChips();
    });
  });

  // テンポスライダー
  const tempoRange = document.getElementById('tempoRange');
  const tempoReadout = document.getElementById('tempoReadout');
  if (tempoRange && tempoReadout) {
    tempoRange.addEventListener('input', () => {
      state.tempo = tempoRange.value;
      tempoReadout.innerHTML = state.tempo + '<span> BPM</span>';
      maybeRegenerate();
    });
  }

  // セレクトイベント
  document.getElementById('scaleSelect')?.addEventListener('change', (e) => {
    state.scale = e.target.value;
    maybeRegenerate();
  });

  document.getElementById('aiTargetSelect')?.addEventListener('change', (e) => {
    state.aiTarget = e.target.value;
    maybeRegenerate();
  });

  // 言語切替
  document.querySelectorAll('#langToggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#langToggle button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      state.lang = btn.dataset.lang;
      saveLastState(state);
      generate();
    });
  });

  // コマンドボタン群
  document.getElementById('genBtn')?.addEventListener('click', generate);

  // 🎲 おまかせ生成
  document.getElementById('randomBtn')?.addEventListener('click', () => {
    function sample(arr, min, max) {
      const n = Math.floor(Math.random() * (max - min + 1)) + min;
      const sh = [...arr].sort(() => Math.random() - 0.5);
      return sh.slice(0, n).map(i => i.id);
    }
    state.trackTitle = TITLE_SUGGESTIONS[Math.floor(Math.random() * TITLE_SUGGESTIONS.length)];
    if (titleInput) titleInput.value = state.trackTitle;
    updatePresetPlaceholder();

    state.genre = GENRES[Math.floor(Math.random() * GENRES.length)].id;
    state.ethnicInsts = new Set(sample(ETHNIC_INSTRUMENTS, 2, 4));
    state.modernInsts = new Set(sample(MODERN_INSTRUMENTS, 2, 4));
    state.environments = new Set(sample(TROPICAL_ENVIRONMENTS, 1, 2));
    state.scale = Object.keys(SCALES)[Math.floor(Math.random() * Object.keys(SCALES).length)];
    state.tempo = 72 + Math.floor(Math.random() * 24); // 72〜95 BPM

    applyState(state);
    generate();
    saveLastState(state);
    flash(`🎲 おまかせオリエンタルBGM「${state.trackTitle}」を作成しました🌺`);
  });

  // リセット
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    state.trackTitle = 'Rainy Afternoon in Ubud';
    state.genre = 'sea_lofi';
    state.ethnicInsts = new Set(['gamelan_bells', 'angklung_bamboo', 'ranat_xylophone', 'dan_bau_monochord']);
    state.modernInsts = new Set(['rhodes_chill', 'lofi_boombap', 'warm_subbass']);
    state.environments = new Set(['bali_rain', 'jungle_crickets']);
    state.scale = 'pelog_bali';
    state.tempo = 80;
    state.duration = '60';

    applyState(state);
    generate();
    saveLastState(state);
    flash('設定をリセットしました');
  });

  // プリセット保存
  document.getElementById('savePresetBtn')?.addEventListener('click', () => {
    const input = document.getElementById('presetNameInput');
    let name = input.value.trim();
    if (!name && state.trackTitle) {
      name = state.trackTitle.trim();
    }
    if (!name) {
      flash('プリセット名を入力してください');
      return;
    }
    if (savePreset(name, state)) {
      input.value = '';
      renderPresets();
      flash(`「${name}」を保存しました💾`);
    }
  });

  // プリセット書き出し
  document.getElementById('exportPresetBtn')?.addEventListener('click', () => {
    exportPresetsAsJSON();
    flash('プリセットを書き出しました');
  });

  // プリセット取り込み
  const fileInput = document.getElementById('importPresetFile');
  document.getElementById('importPresetBtn')?.addEventListener('click', () => {
    fileInput?.click();
  });
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      importPresetsFromJSON(file, (success, count, errMsg) => {
        if (success) {
          renderPresets();
          flash(`${count}件のプリセットを取り込みました`);
        } else {
          flash(errMsg || '読み込みに失敗しました');
        }
        fileInput.value = '';
      });
    }
  });

  // 共有URL
  document.getElementById('shareUrlBtn')?.addEventListener('click', async () => {
    const url = getShareURL(state);
    try {
      await navigator.clipboard.writeText(url);
      flash('共有用URLをコピーしました！🔗');
    } catch (e) {
      prompt('以下のURLをコピーしてください:', url);
    }
  });

  // プロンプトコピー
  document.getElementById('copyBtn')?.addEventListener('click', async () => {
    const out = document.getElementById('promptOut');
    if (!out || !out.value) return;
    try {
      await navigator.clipboard.writeText(out.value);
      flash('プロンプトをコピーしました！📋');
    } catch (e) {
      out.select();
      document.execCommand('copy');
      flash('コピーしました！');
    }
  });

  // YouTubeタイトル・説明文コピー
  document.getElementById('copyYtBtn')?.addEventListener('click', async () => {
    const t = document.getElementById('ytVideoTitle')?.value || '';
    const d = document.getElementById('ytDescription')?.value || '';
    const text = `${t}\n\n${d}`;
    try {
      await navigator.clipboard.writeText(text);
      flash('YouTube用動画タイトル＆説明文をコピーしました！🎥');
    } catch (e) {
      prompt('以下のテキストをコピーしてください:', text);
    }
  });

  // プレビュー再生
  const playBtn = document.getElementById('previewToggleBtn');
  const previewVolume = document.getElementById('previewVolume');
  const stepBulbs = document.querySelectorAll('.step-bulb');

  previewVolume?.addEventListener('input', (e) => {
    seaChillAudio.setVolume(parseFloat(e.target.value));
  });

  playBtn?.addEventListener('click', () => {
    seaChillAudio.toggle(
      () => state,
      (activeStep) => {
        stepBulbs.forEach((bulb, idx) => {
          bulb.classList.toggle('active', idx === activeStep);
        });
      },
      (isPlaying) => {
        if (isPlaying) {
          playBtn.textContent = '■ STOP (停止)';
          playBtn.classList.add('playing');
        } else {
          playBtn.textContent = '▶ PLAY (ガムラン＆シタール試聴)';
          playBtn.classList.remove('playing');
          stepBulbs.forEach(b => b.classList.remove('active'));
        }
      }
    );
  });

  // PWA インストール処理
  let deferredPrompt = null;
  const installPwaBtn = document.getElementById('installPwaBtn');
  const installGuideBtn = document.getElementById('installGuideBtn');
  const installModal = document.getElementById('installModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone) {
    if (installPwaBtn) installPwaBtn.style.display = 'none';
    if (installGuideBtn) installGuideBtn.style.display = 'none';
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installPwaBtn && !isStandalone) {
      installPwaBtn.style.display = 'inline-flex';
    }
  });

  installPwaBtn?.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      flash('アプリのインストールを開始しました！🎉');
    }
    deferredPrompt = null;
    installPwaBtn.style.display = 'none';
  });

  window.addEventListener('appinstalled', () => {
    if (installPwaBtn) installPwaBtn.style.display = 'none';
    if (installGuideBtn) installGuideBtn.style.display = 'none';
    flash('ホーム画面にインストールされました！📱');
  });

  // インストール手順モーダル
  installGuideBtn?.addEventListener('click', () => {
    installModal?.classList.add('show');
  });

  const closeModal = () => {
    installModal?.classList.remove('show');
  };

  modalCloseBtn?.addEventListener('click', closeModal);
  modalOkBtn?.addEventListener('click', closeModal);
  installModal?.addEventListener('click', (e) => {
    if (e.target === installModal) closeModal();
  });

  renderPresets();
  generate();
  saveLastState(state);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
