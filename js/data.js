/**
 * 東南アジア・チル＆ポップBGMコンポーザー - 設定データ定義
 * インドネシア、タイ、ベトナム、フィリピンの伝統音色 × 現代ローファイ/ポップス
 */

// 4大チャンネルジャンル
export const GENRES = [
  {
    id: 'sea_lofi',
    ja: 'SEA Lofi / Chill Beats (勉強・作業用BGM・最推奨)',
    en: 'Southeast Asian lo-fi hip hop study beats blending chilled boom-bap drums, cozy Rhodes chords, and authentic traditional ethnic melodies',
    tag: 'Lofi Chill Beats',
    desc: 'BPM 70〜88。勉強やプログラミング、カフェ作業に最適な落ち着いたビート。ガムランや木琴、一弦琴が心地よく香る。'
  },
  {
    id: 'sea_pop_cover',
    ja: 'SEA Pop Instrumental Covers (T-Pop/I-Pop/V-Pop調インスト)',
    en: 'mellow acoustic guitar and emotional piano instrumental covers of Southeast Asian pop ballads (T-Pop, I-Pop, V-Pop, OPM)',
    tag: 'Pop Instrumental',
    desc: 'BPM 75〜98。各国のSpotifyヒットチャートを意識した、切なくエモーショナルな旋律をピアノやアコギで優しく奏でる。'
  },
  {
    id: 'tropical_vlog',
    ja: 'Royalty-Free SEA Library (Vlog・旅行・ライフスタイル向け)',
    en: 'breezy royalty-free tropical house and organic ethnic electronica with cheerful acoustic percussion, ideal for Southeast Asia travel vlogs',
    tag: 'Tropical Vlog Beat',
    desc: 'BPM 105〜122。バリやプーケットの旅行Vlog、カフェ紹介、日常動画にそのまま使える爽快で前向きなトロピカルサウンド。'
  },
  {
    id: 'asian_ambient',
    ja: 'Asian Ambient / Meditation (熱帯雨林・睡眠・瞑想・スパ)',
    en: 'deeply relaxing Asian meditation ambient music with tropical rain sounds, gentle bamboo chimes, sacred temple bells, and lush pad textures',
    tag: 'Sleep & Meditation',
    desc: '無拍子または超スロー。長時間の睡眠用、ヨガ、スパ、瞑想に特化。スコールや竹のせせらぎが心を芯から鎮める。'
  }
];

// 国別・伝統民族楽器
export const ETHNIC_INSTRUMENTS = [
  // インドネシア
  {
    id: 'gamelan_bells',
    country: 'インドネシア (Indonesia)',
    flag: '🇮🇩',
    ja: 'ガムラン金属琴 (Gamelan青銅チャイム・神秘的な煌めき)',
    en: 'crystalline Balinese gamelan bronze metallophone chimes and bell-like resonance'
  },
  {
    id: 'saron_metallophone',
    country: 'インドネシア (Indonesia)',
    flag: '🇮🇩',
    ja: 'サリン (Saron・重厚な青銅琴の主旋律)',
    en: 'deep, warm acoustic Saron metallophone playing peaceful traditional pentatonic motifs'
  },
  {
    id: 'angklung_bamboo',
    country: 'インドネシア (Indonesia)',
    flag: '🇮🇩',
    ja: 'アンクルン (Angklung・竹の揺れが奏でる温かい和音)',
    en: 'rhythmic bamboo Angklung rattles creating warm, organic fluttering acoustic harmonies'
  },
  {
    id: 'sasando_harp',
    country: 'インドネシア (Indonesia)',
    flag: '🇮🇩',
    ja: 'ササンドゥ (Sasando・ヤシ葉ハープの繊細な爪弾き)',
    en: 'delicate, harp-like plucks of the Indonesian palm-leaf Sasando zither'
  },

  // タイ
  {
    id: 'ranat_xylophone',
    country: 'タイ (Thailand)',
    flag: '🇹🇭',
    ja: 'ラナート・エーク (Ranat Ek・船型木琴の軽快な連打)',
    en: 'crisp, wooden-keyed Ranat Ek boat xylophone runs dancing with cheerful acoustic elegance'
  },
  {
    id: 'jakhe_zither',
    country: 'タイ (Thailand)',
    flag: '🇹🇭',
    ja: 'チャケー (Jakhe・撥弦ツィターの哀愁あるフレーズ)',
    en: 'resonant, plucked Thai Jakhe floor zither carrying an expressive, nostalgic melody'
  },
  {
    id: 'saw_duang_fiddle',
    country: 'タイ (Thailand)',
    flag: '🇹🇭',
    ja: 'ソー・ドゥアン (Saw Duang・タイ胡弓の伸びやかな高音)',
    en: 'silky, expressive Saw Duang two-stringed bowed fiddle weaving gentle tropical lines'
  },
  {
    id: 'khong_wong_gongs',
    country: 'タイ (Thailand)',
    flag: '🇹🇭',
    ja: 'コーン・ウォン (Khong Wong・円形ゴングのまろやかな鐘音)',
    en: 'rounded circular bronze gong chimes of Khong Wong providing gentle rhythmic melody'
  },

  // ベトナム
  {
    id: 'dan_bau_monochord',
    country: 'ベトナム (Vietnam)',
    flag: '🇻🇳',
    ja: 'ダン・バウ (Dan Bau・一弦琴の幻想的なピッチベンド)',
    en: 'soulful, ethereal bending notes of the Vietnamese Dan Bau monochord with crying vibrato'
  },
  {
    id: 'dan_tranh_zither',
    country: 'ベトナム (Vietnam)',
    flag: '🇻🇳',
    ja: 'ダン・ tranh (Dan Tranh・16弦琴の澄んだアルペジオ)',
    en: 'sparkling plucks and fluid waterfall glissandos on the 16-string Vietnamese Dan Tranh'
  },
  {
    id: 'sao_truc_flute',
    country: 'ベトナム (Vietnam)',
    flag: '🇻🇳',
    ja: 'サオ・チュック (Sao Truc・息づかい豊かなベトナム竹笛)',
    en: 'airy, breathy tones of the Vietnamese Sao Truc bamboo flute echoing through mist'
  },
  {
    id: 'klong_put_bamboo',
    country: 'ベトナム (Vietnam)',
    flag: '🇻🇳',
    ja: 'クロン・プット (Klong Put・手の風圧で鳴らす神秘的な竹琴)',
    en: 'deep hollow resonant bamboo tubes of Klong Put played with clapping air pulses'
  },

  // フィリピン
  {
    id: 'kulintang_gongs',
    country: 'フィリピン (Philippines)',
    flag: '🇵🇭',
    ja: 'クリンタン (Kulintang・8個の青銅ゴングチャイム)',
    en: 'rhythmic, melodic Kulintang horizontal gong chimes filled with buoyant island cheer'
  },
  {
    id: 'kubing_jaw_harp',
    country: 'フィリピン (Philippines)',
    flag: '🇵🇭',
    ja: 'クビン (Kubing・竹製口琴の弾むパーカッション)',
    en: 'bouncy, organic acoustic jaw-harp twangs of the Philippine bamboo Kubing'
  },
  {
    id: 'tongatong_tubes',
    country: 'フィリピン (Philippines)',
    flag: '🇵🇭',
    ja: 'トンガトン (Tongatong・竹筒スタンピングの低音ビート)',
    en: 'earthy rhythmic thumps of bamboo Tongatong tubes stamping on the floor'
  }
];

// 現代楽器・チル編成
export const MODERN_INSTRUMENTS = [
  { id: 'rhodes_chill', ja: 'ローズピアノ (温かいエレピ和音)', en: 'warm, dusty Rhodes electric piano chords with gentle tremolo' },
  { id: 'acoustic_guitar', ja: 'アコースティックギター (ナイロン弦の爪弾き)', en: 'intimate acoustic nylon-string fingerstyle guitar' },
  { id: 'lofi_boombap', ja: 'ローファイ・ビート (スナップ＆揺らぎドラム)', en: 'relaxed lo-fi boom-bap drums with vinyl crackle and laid-back swing' },
  { id: 'warm_subbass', ja: 'メロウ・サブベース (深く丸い低音)', en: 'smooth, deep sub-bassline warming the bottom end without harshness' },
  { id: 'analog_pad', ja: 'ドリーミー・シンセパッド (夕暮れの空気感)', en: 'lush, airy analog synthesizer ambient pads mimicking a tropical sunset' },
  { id: 'tropical_pluck', ja: 'トロピカル・マリンバ / プラック (南国の透明感)', en: 'delicate acoustic marimba plucks adding sparkling tropical highlights' }
];

// 熱帯の環境音・自然音
export const TROPICAL_ENVIRONMENTS = [
  { id: 'bali_rain', ja: 'バリ島の熱帯スコール・屋根を叩く雨音', en: 'soft tropical rain falling on a thatched wooden villa roof in Bali' },
  { id: 'mekong_stream', ja: 'メコン川のせせらぎ・水滴の音', en: 'gentle natural river stream and trickling freshwater droplets' },
  { id: 'night_cafe', ja: 'バンコク/ハノイの深夜オープンカフェ (氷の音・話し声)', en: 'cozy ambient open-air night cafe murmurs with clinking iced coffee glasses' },
  { id: 'jungle_crickets', ja: '熱帯雨林の夕暮れ・虫の音と微風', en: 'peaceful tropical evening jungle crickets, distant night birds, and warm breeze' },
  { id: 'temple_chimes', ja: '寺院の竹風鈴と静寂', en: 'gentle bamboo wind chimes softly ringing at a Buddhist garden temple' },
  { id: 'island_waves', ja: 'プーケットの静かな夜の波音', en: 'calm, rhythmic gentle ocean waves lapping softly against tropical sand' }
];

// 和声・スケール
export const SCALES = {
  pelog_bali: {
    ja: 'バリ・ペロッグ音階 (Pelog / 神秘的で美しい東南アジア情緒)',
    en: 'traditional Balinese Pelog pentatonic scale full of mystical, sparkling oriental allure'
  },
  slendro_java: {
    ja: 'ジャワ・スレンドロ音階 (Slendro / 穏やかでピースフルな響き)',
    en: 'Javanese Slendro five-tone equidistant scale radiating timeless, serene tranquility'
  },
  sea_pop_chords: {
    ja: 'SEAポップス王道進行 (IVmaj7 - V7 - IIIm7 - VIm / 切なくエモい)',
    en: 'sweet, emotional Asian pop chord progression (IV - V - III - VI) popular in Thai & Vietnamese hits'
  },
  lofi_jazz_ii_v: {
    ja: 'ローファイ・ジャズ進行 (IIm7 - V7 - Imaj7 - VI7 / カフェ定番)',
    en: 'sophisticated lo-fi jazz study progression with warm 7th and 9th chord extensions'
  },
  ambient_modal: {
    ja: '瞑想モーダル・アンビエント (持続音ドローン / 深いリラックス)',
    en: 'meditative ambient modal drone suspended in deep, timeless stillness'
  }
};

// テンポ・尺
export const DURATIONS = [
  { id: '15', label: '15秒 (TikTok/Reels 旅行ショート用)', sec: 15 },
  { id: '30', label: '30秒 (YouTube Shorts / BGMフック)', sec: 30 },
  { id: '60', label: '60秒 (リール/標準インストループ)', sec: 60 },
  { id: 'full', label: 'フル尺 (2分〜3分 / 完成トラック)', sec: 180 },
  { id: 'long_study', label: '長尺ループ用 (90分〜2時間勉強用動画の元音源)', sec: 300 }
];

// YouTube動画制作メタデータ（90分〜2時間勉強動画支援）
export const YOUTUBE_TEMPLATES = [
  {
    theme: 'study_rain',
    title: 'Rainy Night in Ubud 🌧️ Southeast Asia Lofi Study Beats [90 Mins Deep Focus]',
    desc: `Track created with Southeast Asian ethnic instruments (Gamelan, Angklung & Rhodes).
Perfect for studying, coding, reading, and deep work.

🎧 Track Details:
- Vibe: Traditional Balinese Gamelan & Lo-Fi Boom-Bap
- Ambience: Tropical Night Rain & Distant Crickets
- Target: Deep Focus, Pomodoro Session, Coding Flow

🏷️ Tags:
#lofi #studywithme #indonesialofi #gamelanlofi #relaxingbeats #ambientrain #southeastasialofi #chillhop`,
    hashtags: '#studywithme #lofihiphop #chillbeats #southeastasialofi #gamelan'
  },
  {
    theme: 'hanoi_cafe',
    title: 'Hanoi Coffee Shop ☕ Vietnamese Chill Hop & Dan Bau Lo-Fi [2 Hours Chill Session]',
    desc: `Relaxing acoustic vibes from Vietnam. Featuring Dan Bau (monochord) & gentle guitar melodies.
Enjoy your coffee break or productive study session.

🎧 Instruments:
- Vietnamese Dan Bau, Acoustic Guitar, Warm Rhodes, Cafe Ambiance

🏷️ Tags:
#vpoplofi #hanoicafe #danbau #vietnamlofi #coffeeshoplofi #chillbeats #workmusic`,
    hashtags: '#vietnamlofi #hanoicafe #lofiband #danbau #chillmusic'
  },
  {
    theme: 'bangkok_sunset',
    title: 'Bangkok Sunset Groove 🌇 Thai Pop Acoustic Instrumental [Study & Relax]',
    desc: `Mellow T-Pop inspired piano and Ranat xylophone melodies floating over a smooth evening groove.

🎧 Mood:
- Golden Hour Sunset, Breeze, Sweet Nostalgia

🏷️ Tags:
#tpop #thailandlofi #bangkokchill #ranat #studybgm #acousticcover`,
    hashtags: '#tpop #thailandlofi #bangkokchill #studymusic'
  },
  {
    theme: 'bali_sleep',
    title: 'Bali Temple Meditation 🌿 Tropical Rain & Sacred Gamelan Chimes [Deep Sleep]',
    desc: `Peaceful ambient meditation music for sleep, insomnia relief, yoga, and calm reflection.
Pure tropical nature sounds blended with soft bronze chimes.

🏷️ Tags:
#meditationmusic #sleepmusic #baliamber #ambientgamelan #naturesounds`,
    hashtags: '#sleepmusic #meditation #tropicalrain #gamelanambient'
  }
];

// 曲名サジェスト（東南アジア・リゾート・カフェ）
export const TITLE_SUGGESTIONS = [
  'Rainy Afternoon in Ubud',
  'Midnight Hanoi Coffee',
  'Bangkok Sunset Lofi',
  'Chiang Mai Study Session',
  'Manila Bay Breeze',
  'Saigon River Twilight',
  'Bali Temple Rain',
  'Java Green Tea Chill',
  'Phuket Golden Hour',
  'Tropical Bamboo Solitude',
  'Mekong River Reverie',
  'Lofi Rain in Da Nang',
  'Kuala Lumpur Midnight Walk',
  'Cebu Island Gentle Waves'
];
