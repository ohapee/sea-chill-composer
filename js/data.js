/**
 * 東南アジア＆インド・オリエンタル・チル＆ポップBGMコンポーザー - 設定データ定義
 * 東南アジア（インドネシア・タイ・ベトナム・フィリピン）＋ インド古典・フュージョン・ラーガ
 */

// チャンネルジャンル（東南アジア ＆ インド古典・フュージョン）
export const GENRES = [
  {
    id: 'sea_lofi',
    ja: 'SEA Lofi / Chill Beats (勉強・作業用BGM・東南アジア)',
    en: 'Southeast Asian lo-fi hip hop study beats blending chilled boom-bap drums, cozy Rhodes chords, and authentic traditional ethnic melodies',
    tag: 'SEA Lofi Chill',
    desc: 'BPM 70〜88。勉強やプログラミング、カフェ作業に最適な落ち着いたビート。ガムランや木琴、一弦琴が心地よく香る。'
  },
  {
    id: 'indian_classical_lofi',
    ja: 'Soulful Indian Classical LoFi (シタール・バンスリ・雨のローファイ)',
    en: 'Soulful Indian classical lofi chillhop combining warm vinyl crackle, gentle hip-hop drums, sitar riffs, bansuri bamboo flute, and rain ambiance',
    tag: 'Indian Classical LoFi',
    desc: 'BPM 72〜86。シタールとバンスリ（竹笛）の豊かなメロディに、雨の環境音とローファイビートが溶け合うリラクゼーション・勉強用BGM。'
  },
  {
    id: 'indian_jazz_fusion',
    ja: 'Indian Jazz Fusion (タブラ × サックス × タンプーラ / Deep Work)',
    en: 'introspective Indian jazz fusion session blending hypnotic tabla grooves, smoky soprano saxophone, Rhodes piano, and tanpura drone for deep work focus',
    tag: 'Indian Jazz Fusion',
    desc: 'BPM 80〜96。「PickBeat Fusion」のように、タブラのリズムとサックス、バンスリが即興的に絡み合うミニマルで知的な作業集中セッション。'
  },
  {
    id: 'raag_focus_ambient',
    ja: 'Raag-Inspired Focus (ラーガ・ヤーマン / 夕暮れの集中・知的瞑想)',
    en: 'classical Indian Raag Yaman and Raag Bilawal inspired functional study music, floating with sitar bends, meditative tanpura drone, and peaceful flow',
    tag: 'Raag Focus Study',
    desc: 'BPM 65〜80。時間帯や気分に合わせて聴く古典ラーガ（Raag Yaman等）を現代の集中BGMとして再構築。'
  },
  {
    id: 'carnatic_yoga',
    ja: 'Carnatic Instrumental / Meditation (南インド古典・ヨガ・スパ)',
    en: 'sacred South Indian Carnatic instrumental ambient for yoga, spa, and deep meditation, featuring Saraswati Veena, mridangam, and bamboo flute',
    tag: 'Carnatic Meditation',
    desc: '無拍子またはゆったりしたリズム。南インド古典（ヴィーナ、ムリダンガム）による格調高く清浄なヨガ・スパ・瞑想音楽。'
  },
  {
    id: 'sea_pop_cover',
    ja: 'SEA Pop Instrumental Covers (T-Pop/I-Pop/V-Pop調インスト)',
    en: 'mellow acoustic guitar and emotional piano instrumental covers of Southeast Asian pop ballads (T-Pop, I-Pop, V-Pop, OPM)',
    tag: 'SEA Pop Covers',
    desc: 'BPM 75〜98。タイ・インドネシア・ベトナムのSpotifyヒットチャートを意識した、切なくエモーショナルな旋律をピアノやアコギで優しく奏でる。'
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
    ja: 'Asian Ambient / Meditation (熱帯雨林・睡眠・瞑想・スコール)',
    en: 'deeply relaxing Asian meditation ambient music with tropical rain sounds, gentle bamboo chimes, sacred temple bells, and lush pad textures',
    tag: 'Tropical Rain Sleep',
    desc: '無拍子または超スロー。長時間の睡眠用、ヨガ、スパ、瞑想に特化。スコールや竹のせせらぎが心を芯から鎮める。'
  }
];

// 国別・伝統民族楽器
export const ETHNIC_INSTRUMENTS = [
  // インド (India)
  {
    id: 'sitar_classical',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'シタール (Sitar・煌めく共鳴弦と官能的なベンド)',
    en: 'expressive classical Indian sitar with shimmering sympathetic strings and fluid meend bends'
  },
  {
    id: 'bansuri_flute',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'バンスリ (Bansuri・竹の温もりと深い息づかいのインド竹笛)',
    en: 'soul-stirring, breathy acoustic Bansuri bamboo flute playing serene, lingering ornamentations'
  },
  {
    id: 'tabla_drums',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'タブラ (Tabla・豊かな倍音を鳴らすインド伝統太鼓)',
    en: 'mesmerizing acoustic tabla percussion playing articulate, melodic rhythmic grooves'
  },
  {
    id: 'sarod_fretless',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'サロッド (Sarod・フレットレス金属指板の深く鋭い響き)',
    en: 'deep, resonant, fretless Indian sarod with metallic fingerboard sliding runs'
  },
  {
    id: 'tanpura_drone',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'タンプーラ (Tanpura・瞑想状態へと誘う神聖な持続ドローン)',
    en: 'hypnotic, harmonic rich acoustic tanpura string drone establishing a sacred, grounded atmosphere'
  },
  {
    id: 'veena_carnatic',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'サラスヴァティ・ヴィーナ (Veena・南インド古典の重厚な弦の調べ)',
    en: 'stately, rich acoustic South Indian Saraswati Veena carrying majestic Carnatic gamakas'
  },
  {
    id: 'mridangam_drum',
    country: 'インド (India)',
    flag: '🇮🇳',
    ja: 'ムリダンガム (Mridangam・南インド古典の両面太鼓)',
    en: 'tonal, rhythmic double-headed Mridangam drum accents grounding the spiritual flow'
  },

  // インドネシア (Indonesia)
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

  // タイ (Thailand)
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

  // ベトナム (Vietnam)
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

  // フィリピン (Philippines)
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

// 現代楽器・チル・ジャズ編成
export const MODERN_INSTRUMENTS = [
  { id: 'rhodes_chill', ja: 'ローズピアノ (温かいエレピ和音)', en: 'warm, dusty Rhodes electric piano chords with gentle tremolo' },
  { id: 'jazz_sax', ja: 'ソプラノ/テナーサックス (インディアン・ジャズの主役)', en: 'smoky, introspective soprano saxophone floating with jazz phrasing' },
  { id: 'acoustic_guitar', ja: 'アコースティックギター (ナイロン弦の爪弾き)', en: 'intimate acoustic nylon-string fingerstyle guitar' },
  { id: 'lofi_boombap', ja: 'ローファイ・ビート (スナップ＆揺らぎドラム)', en: 'relaxed lo-fi boom-bap drums with vinyl crackle and laid-back swing' },
  { id: 'warm_subbass', ja: 'メロウ・サブベース (深く丸い低音)', en: 'smooth, deep sub-bassline warming the bottom end without harshness' },
  { id: 'analog_pad', ja: 'ドリーミー・シンセパッド (夕暮れの空気感)', en: 'lush, airy analog synthesizer ambient pads mimicking a tropical sunset' },
  { id: 'tropical_pluck', ja: 'トロピカル・マリンバ / プラック (南国の透明感)', en: 'delicate acoustic marimba plucks adding sparkling tropical highlights' }
];

// 熱帯・モンスーン・環境音
export const TROPICAL_ENVIRONMENTS = [
  { id: 'monsoon_rain', ja: 'インドのモンスーン豪雨・大地を包む雨音', en: 'warm, continuous Indian monsoon rain shower drumming gently on earth and leaves' },
  { id: 'bali_rain', ja: 'バリ島の熱帯スコール・屋根を叩く雨音', en: 'soft tropical rain falling on a thatched wooden villa roof in Bali' },
  { id: 'mekong_stream', ja: 'メコン川のせせらぎ・水滴の音', en: 'gentle natural river stream and trickling freshwater droplets' },
  { id: 'ganges_dawn', ja: 'ガンジス河の夜明け・川霧と遠くの寺院ベル', en: 'peaceful dawn on riverbanks with soft river ripples and distant holy temple bells' },
  { id: 'night_cafe', ja: 'バンコク/ハノイの深夜オープンカフェ (氷の音・話し声)', en: 'cozy ambient open-air night cafe murmurs with clinking iced coffee glasses' },
  { id: 'jungle_crickets', ja: '熱帯雨林の夕暮れ・虫の音と微風', en: 'peaceful tropical evening jungle crickets, distant night birds, and warm breeze' },
  { id: 'temple_chimes', ja: '寺院の竹風鈴と静寂', en: 'gentle bamboo wind chimes softly ringing at a peaceful garden temple' }
];

// 和声・スケール・ラーガ
export const SCALES = {
  raag_yaman: {
    ja: 'ラーガ・ヤーマン (Raag Yaman / 夕暮れ〜夜の安らぎ・知的集中)',
    en: 'classical Indian Raag Yaman scale (Lydian-like with sharp 4th) radiating evening peace and intellectual calm'
  },
  raag_bilawal: {
    ja: 'ラーガ・ビラーワル (Raag Bilawal / 晴れやかな朝の目覚め・明晰さ)',
    en: 'uplifting Indian Raag Bilawal scale (natural major notes) conveying morning clarity and gentle optimism'
  },
  raag_bhairavi: {
    ja: 'ラーガ・バイラヴィ (Raag Bhairavi / 深い哀愁と心を鎮める全音階)',
    en: 'devotional Indian Raag Bhairavi scale filled with deep compassion and meditative surrender'
  },
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
    theme: 'indian_lofi_rain',
    title: 'Monsoon in Varanasi 🌧️ Soulful Indian Classical LoFi [90 Mins Sitar & Bansuri Study]',
    desc: `Cozy Indian classical lo-fi beats featuring acoustic Sitar, Bansuri flute, and warm monsoon rain.
Perfect for deep focus, coding, studying, and relaxing.

🎧 Instruments:
- Sitar, Bansuri (Bamboo Flute), Tanpura Drone, Lo-Fi Boom-Bap Drums
- Ambience: Gentle Indian Monsoon Rain

🏷️ Tags:
#indianlofi #sitarlofi #studywithme #bansurichill #classicalindianlofi #rainlofi #deepwork`,
    hashtags: '#indianlofi #sitar #bansuri #studywithme #chillbeats'
  },
  {
    theme: 'indian_jazz_fusion',
    title: 'Midnight Delhi Sessions 🎷 Indian Jazz Fusion [2 Hours Deep Work & Coding Flow]',
    desc: `Minimalist Indian jazz fusion inspired by PickBeat Fusion.
Blending live acoustic Tabla rhythms, smoky saxophone, and soothing Rhodes piano.

🎧 Instruments:
- Tabla, Soprano Saxophone, Tanpura, Warm Electric Piano

🏷️ Tags:
#indianjazz #tabla #jazzfusion #pickbeat #deepwork #studymusic #focusmusic`,
    hashtags: '#indianjazz #tabla #saxfusion #studymusic #deepwork'
  },
  {
    theme: 'raag_yaman_meditation',
    title: 'Peace of Raag Yaman 🪔 Classical Indian Evening Meditation & Yoga [Deep Healing]',
    desc: `Immerse in the timeless serenity of Raag Yaman. Sitar and Bansuri woven over a sacred Tanpura drone.
Designed for stress relief, yoga, and evening mindfulness.

🏷️ Tags:
#raagyaman #indianclassical #meditationmusic #yogabgm #healingfrequencies`,
    hashtags: '#raagyaman #meditation #sitar #peacefulmusic'
  },
  {
    theme: 'study_rain_bali',
    title: 'Rainy Night in Ubud 🌧️ Southeast Asia Lofi Study Beats [90 Mins Deep Focus]',
    desc: `Track created with Southeast Asian ethnic instruments (Gamelan, Angklung & Rhodes).
Perfect for studying, coding, reading, and deep work.

🏷️ Tags:
#lofi #studywithme #indonesialofi #gamelanlofi #ambientrain #southeastasialofi`,
    hashtags: '#studywithme #lofihiphop #chillbeats #gamelan'
  }
];

// 曲名サジェスト（東南アジア ＆ インド）
export const TITLE_SUGGESTIONS = [
  'Monsoon Afternoon in Varanasi',
  'Midnight Delhi Jazz Session',
  'Rainy Sitar in Jaipur',
  'Bansuri Breeze in Kerala',
  'Raag Yaman Twilight Study',
  'Rainy Afternoon in Ubud',
  'Midnight Hanoi Coffee',
  'Bangkok Sunset Lofi',
  'Chiang Mai Study Session',
  'Manila Bay Breeze',
  'Saigon River Twilight',
  'Bali Temple Rain',
  'Himalayan Pine Forest Ambient',
  'Goa Beach Evening Glow'
];

// 禁止事項・ネガティブプロンプト（完全除外したい激しい要素）
export const NEGATIVE_OPTIONS = [
  {
    id: 'vocals_distract',
    ja: '人の歌声・話し声・ラップ・早口ボーカル (作業・瞑想の妨害防止)',
    en: 'vocals, singing, human speech, rapping, aggressive shouts, fast lyrical delivery, vocal chops, spoken words'
  },
  {
    id: 'heavy_edm_drops',
    ja: '激しいEDMドロップ・過剰な重低音・ダブステップ (びっくり防止)',
    en: 'heavy EDM drops, aggressive bass drops, dubstep wobble, hard trap 808 distortion, intense club build-ups'
  },
  {
    id: 'harsh_metal_screech',
    ja: '耳障りな甲高いノイズ・歪んだエレキギター・金切声 (耳の疲労防止)',
    en: 'harsh piercing highs, screeching noise, heavy metal guitar distortion, piercing synths, painful high-frequency resonance'
  },
  {
    id: 'fast_chaotic_tempo',
    ja: '早すぎるテンポ・緊張感・ホラー・焦燥感を煽る劇的展開',
    en: 'fast chaotic tempo, intense cinematic suspense, horror atmosphere, dark dramatic swells, sudden loud climaxes'
  },
  {
    id: 'jarring_sfx_horns',
    ja: '耳障りな効果音・けたたましいクラクション・サイレン・爆発音',
    en: 'jarring sound effects, car horns, emergency sirens, gunshots, explosions, abrupt jump scares'
  }
];

