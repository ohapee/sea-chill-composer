/**
 * 東南アジア・チル＆ポップBGMコンポーザー - プロンプト生成エンジン
 */

import {
  GENRES,
  ETHNIC_INSTRUMENTS,
  MODERN_INSTRUMENTS,
  TROPICAL_ENVIRONMENTS,
  SCALES,
  DURATIONS,
  YOUTUBE_TEMPLATES
} from './data.js';

export function buildPrompt(state) {
  const isEn = state.lang === 'en';
  const genreObj = GENRES.find(g => g.id === state.genre) || GENRES[0];
  const scaleObj = SCALES[state.scale] || SCALES.pelog_bali;

  const selectedEthnic = ETHNIC_INSTRUMENTS.filter(i => state.ethnicInsts.has(i.id));
  const selectedModern = MODERN_INSTRUMENTS.filter(i => state.modernInsts.has(i.id));
  const selectedEnv = TROPICAL_ENVIRONMENTS.filter(e => state.environments.has(e.id));

  if (state.aiTarget === 'suno_udio') {
    return buildSunoUdioPrompt(state, genreObj, scaleObj, selectedEthnic, selectedModern, selectedEnv, isEn);
  }

  if (state.aiTarget === 'flow') {
    return buildFlowPrompt(state, genreObj, scaleObj, selectedEthnic, selectedModern, selectedEnv, isEn);
  }

  return buildPlainPrompt(state, genreObj, scaleObj, selectedEthnic, selectedModern, selectedEnv, isEn);
}

function buildSunoUdioPrompt(state, genre, scale, ethnic, modern, env, isEn) {
  const tags = [];
  tags.push(genre.en);
  tags.push(`${state.tempo} BPM`);
  tags.push(scale.en);
  tags.push('instrumental, strictly no vocals');

  ethnic.forEach(e => tags.push(e.en));
  modern.forEach(m => tags.push(m.en));
  env.forEach(ev => tags.push(ev.en));

  tags.push('warm analog master, cozy tape hiss, peaceful study ambiance');

  let structure = `
[Intro - Whispering Tropical Nature & Distant Bronze Chimes]
${env.length > 0 ? `(${env[0].en})\n` : ''}(Gentle pentatonic melodic motif on ${ethnic.length > 0 ? ethnic[0].ja.split(' ')[0] : 'Gamelan'})

[Section A - Cozy Chill Groove Drops]
(Relaxed boom-bap rhythm with warm Rhodes chords and ethnic arpeggio accents)

[Section B - Melodic Breeze & Sweet Counterpoint]
(${ethnic.map(e => e.ja.split(' ')[0]).join(' & ')} weaving soothing tropical melodies)

[Outro - Peaceful Fadeout]
(Rain and wind chimes lingering into quiet stillness)`;

  const titleHeader = state.trackTitle ? `### Track Title: ${state.trackTitle}\n\n` : '';

  return `${titleHeader}=== [Style & Instrumentation Tags] ===
${tags.join(', ')}

=== [Track Structure & Arrangement] ===
${structure.trim()}`;
}

function buildFlowPrompt(state, genre, scale, ethnic, modern, env, isEn) {
  const titlePart = state.trackTitle ? (isEn ? `Track Title: "${state.trackTitle}"\n` : `曲名: 「${state.trackTitle}」\n`) : '';

  if (isEn) {
    return `${titlePart}Generate a peaceful, immersive Southeast Asian background track designed for study and deep focus.
- Genre & Style: ${genre.en}.
- Tempo: ${state.tempo} BPM, played with relaxed, laid-back swing.
- Scale & Harmony: ${scale.en}.
- Traditional Instruments: ${ethnic.map(e => e.en).join('; ')}.
- Modern / Chill Layer: ${modern.map(m => m.en).join('; ')}.
- Tropical Environmental Soundscape: ${env.map(ev => ev.en).join('; ')}.
- Mix & Production: Warm, dusty analog lo-fi texture, silky acoustic transients, sub-bass warming the bottom without clutter. Strictly instrumental with no vocal interruptions.`;
  }

  return `${titlePart}【音楽ジャンル・コンセプト】
東南アジアの伝統情緒と現代ローファイが融合した「${genre.ja}」。
勉強・作業・読書のためのリラックスBGM（インストゥルメンタル）。

【テンポ・和声】
・テンポ: ${state.tempo} BPM（心地よいチル・スイング）
・スケール/和声: ${scale.ja}

【東南アジア伝統楽器】
${ethnic.map(e => `・${e.ja}`).join('\n')}

【現代チル・洋楽器編成】
${modern.map(m => `・${m.ja}`).join('\n')}

【熱帯の環境音・アンビエント】
${env.map(ev => `・${ev.ja}`).join('\n')}

【音響・ミックス指定】
歌声（ボーカル）は一切入れず、温かみのあるエレピと伝統楽器の澄んだ響きが溶け合う、長時間の作業でも耳が疲れない極上のチルサウンド。`;
}

function buildPlainPrompt(state, genre, scale, ethnic, modern, env, isEn) {
  const titlePart = state.trackTitle ? `"${state.trackTitle}" - ` : '';
  if (isEn) {
    return `${titlePart}A Southeast Asian chill track in ${genre.en} at ${state.tempo} BPM. Features ${scale.en}, blending ${ethnic.map(e => e.ja.split(' ')[0]).join(', ')} with ${modern.map(m => m.ja.split(' ')[0]).join(', ')}, enveloped in ${env.map(ev => ev.ja).join(', ')}. Instrumental only.`;
  }
  return `${titlePart}${state.tempo} BPMの「${genre.ja}」。${scale.ja}を基調とし、伝統楽器（${ethnic.map(e => e.ja.split(' ')[0]).join('、')}）と現代チル楽器（${modern.map(m => m.ja.split(' ')[0]).join('、')}）が調和。環境音として${env.map(ev => ev.ja).join('、')}を重ねた、作業に没入できるインストBGM。`;
}

export function buildYouTubeMetadata(state) {
  const genreObj = GENRES.find(g => g.id === state.genre) || GENRES[0];
  const title = state.trackTitle || 'Rainy Afternoon in Ubud';
  
  return {
    videoTitle: `${title} 🌿 Southeast Asia Lofi Study Beats [90 Mins Deep Focus Session]`,
    description: `Chill and focus with traditional Southeast Asian instruments blended into cozy lo-fi hip hop beats.
Ideal for studying, coding, reading, and relaxing.

🎧 Featured Instruments:
${Array.from(state.ethnicInsts).map(id => {
  const item = ETHNIC_INSTRUMENTS.find(i => i.id === id);
  return item ? `- ${item.flag} ${item.ja.split(' (')[0]}` : '';
}).filter(Boolean).join('\n')}

🌧️ Ambiance:
${Array.from(state.environments).map(id => {
  const item = TROPICAL_ENVIRONMENTS.find(e => e.id === id);
  return item ? `- ${item.ja}` : '';
}).filter(Boolean).join('\n')}

⏱️ Timeline Chapters:
00:00 - Introduction (Tropical Rain & Bells)
15:00 - Deep Focus Flow
30:00 - Water Droplets & Bamboo Beats
45:00 - Golden Sunset Chill
60:00 - Evening Coffee Session
75:00 - Gentle River Wind
90:00 - Nightfall Calm

🏷️ Hashtags:
#studywithme #lofi #chillbeats #southeastasialofi #gamelanlofi #ambientrain #codingmusic #relaxingbeats`,
    tags: 'lofi, study with me, southeast asia lofi, gamelan lofi, thai pop chill, vietnam lofi, dan bau, ranat, study beats, coding music, rain ambiance'
  };
}

export function buildNegativePrompt(state) {
  return 'vocals, singing, speech, aggressive EDM drops, heavy metal distortion, harsh synth leads, jarring sound effects, abrupt climaxes';
}

export function buildTimelineData(state) {
  const dur = state.duration || '60';

  if (dur === '15') {
    return [
      { time: '0:00 - 0:04', label: 'Rain & Bell Intro', desc: '熱帯スコールの雨音とガムランの澄んだチャイム' },
      { time: '0:04 - 0:11', label: 'Chill Beat Drop', desc: '温かいローズピアノとローファイビートが合流' },
      { time: '0:11 - 0:15', label: 'Ethnic Lick Finish', desc: '木琴・一弦琴の余韻を残してループ' }
    ];
  }

  if (dur === '30') {
    return [
      { time: '0:00 - 0:06', label: 'Ambient Introduction', desc: '雨音、せせらぎ、竹の揺らぎ音' },
      { time: '0:06 - 0:20', label: 'Melodic Hook (AAB)', desc: 'ガムランと木琴が奏でる親しみやすい伝統旋律' },
      { time: '0:20 - 0:30', label: 'Cozy Groove Peak', desc: 'まろやかなサブベースとスナップドラムの充実' }
    ];
  }

  if (dur === '60') {
    return [
      { time: '0:00 - 0:10', label: 'Tropical Nature Intro', desc: 'スコールと竹風鈴。静寂から始まるリゾートの空気感' },
      { time: '0:10 - 0:28', label: 'Main Chill Loop A', desc: 'ローズピアノのジャズ和音に伝統青銅琴のアルペジオ' },
      { time: '0:28 - 0:48', label: 'Melodic Variation B', desc: 'ダンバウ（一弦琴）やラナートの表情豊かな主旋律' },
      { time: '0:48 - 1:00', label: 'Peaceful Outro', desc: 'ビートが優しく引いて、川のせせらぎと雨音の余韻' }
    ];
  }

  // フル尺・長尺
  return [
    { time: '0:00 - 0:15', label: 'Nature Ambiance Intro', desc: 'バリ島/メコン川の自然音と静かな寺院の鐘' },
    { time: '0:15 - 0:45', label: 'Section A - Chill Beat', desc: 'ゆったりしたBPM76のローファイビートが展開' },
    { time: '0:45 - 1:15', label: 'Section B - Traditional Melody', desc: 'ペロッグ音階による神秘的で美しい木琴＆ガムランソロ' },
    { time: '1:15 - 1:45', label: 'Section C - Acoustic Bridge', desc: 'ナイロン弦ギターのボサノバ風アルペジオと雨音' },
    { time: '1:45 - 2:30', label: 'Full Ensemble Peak', desc: 'エレピ、ベース、伝統打楽器が完璧に調和した集中空間' },
    { time: '2:30 - 3:00', label: 'Gentle Fade & Loop', desc: '自然音の中へ溶け込むシームレスなループ終止' }
  ];
}
