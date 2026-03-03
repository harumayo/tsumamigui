/* ══════════════════════════════════════════════════════
   つまみぐい — サイト横断検索
   search.js  /  全ページ共通
══════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────
   SITE INDEX  （ここにコンテンツを追加していく）
────────────────────────────────────────────────── */
const SITE_INDEX = [

  /* ── 作品 ── */
  { page:'works.html', section:'映画',   icon:'🎬', cat:'作品',
    title:'ムーンライト',
    body:'静かな夜の海のような映画。言葉ではなく、光と影で語られる少年の物語。何度でも観たい。',
    tags:['ドラマ','2016'] },
  { page:'works.html', section:'映画',   icon:'🎬', cat:'作品',
    title:'パーフェクト・デイズ',
    body:'「今ここにある小さな幸せ」を描いた傑作。役所広司の背中だけで泣ける。',
    tags:['ドラマ','2023'] },
  { page:'works.html', section:'映画',   icon:'🎬', cat:'作品',
    title:'mid90s',
    body:'夏の終わりみたいな青春映画。ジョナ・ヒルが撮ったとは思えない繊細さ。',
    tags:['青春','2018'] },
  { page:'works.html', section:'映画',   icon:'🎬', cat:'作品',
    title:'ドライブ・マイ・カー',
    body:'喪失と言葉と沈黙。3時間があっという間だった。ハルキの原作とも違う深みがある。',
    tags:['ドラマ','2021'] },
  { page:'works.html', section:'映画',   icon:'🎬', cat:'作品',
    title:'花束みたいな恋をした',
    body:'好きなものが同じだった頃の記憶。切なすぎて直視できないシーンがいくつもある。',
    tags:['恋愛','2021'] },
  { page:'works.html', section:'漫画',   icon:'📚', cat:'作品',
    title:'チ。地球の運動について',
    body:'何かを信じることの意味を、命をかけて追う人たちの物語。読後にしばらく立ち上がれなかった。',
    tags:['歴史','哲学'] },
  { page:'works.html', section:'漫画',   icon:'📚', cat:'作品',
    title:'違国日記',
    body:'「わかりあえない」ことを前提にした関係が、こんなにあたたかく描けるのか。槙生ちゃんが好きすぎる。',
    tags:['日常','家族'] },
  { page:'works.html', section:'漫画',   icon:'📚', cat:'作品',
    title:'ブルーピリオド',
    body:'「好き」を仕事にすることの怖さと喜び。美大受験という特殊な舞台なのに、普遍的すぎる。',
    tags:['青春','アート'] },
  { page:'works.html', section:'アニメ', icon:'✨', cat:'作品',
    title:'スキップとローファー',
    body:'こんなにやさしい世界があってほしい。みつみちゃんの無邪気さに何度も救われた。',
    tags:['青春','日常','2023'] },
  { page:'works.html', section:'アニメ', icon:'✨', cat:'作品',
    title:'映像研には手を出すな！',
    body:'「最強の世界」を作ること、その熱量を見ていると自分も何か作りたくなる。',
    tags:['青春','アート','2020'] },
  { page:'works.html', section:'アニメ', icon:'✨', cat:'作品',
    title:'宇宙よりも遠い場所',
    body:'南極に行く！という目標だけで4人があそこまでできるの、まじですごい。最終話で号泣。',
    tags:['青春','冒険','2018'] },
  { page:'works.html', section:'ドラマ・本', icon:'📖', cat:'作品',
    title:'カルテット',
    body:'台詞が一つひとつ宝石みたい。4人の関係性があんなにも複雑でやさしくて切ない。',
    tags:['ドラマ','2017'] },
  { page:'works.html', section:'ドラマ・本', icon:'📗', cat:'作品',
    title:'コンビニ人間',
    body:'「普通」って何なんだろうとずっと考えてた。古倉さんの一人称が心地よすぎる。',
    tags:['小説','2016'] },
  { page:'works.html', section:'ドラマ・本', icon:'📗', cat:'作品',
    title:'博士の愛した数式',
    body:'80分しか記憶が続かない博士と、数式の美しさ。やさしさってこういうことだと思う。',
    tags:['小説','2003'] },

  /* ── スイーツ ── */
  { page:'sweets.html', section:'ケーキ',     icon:'🍰', cat:'スイーツ',
    title:'Basque Cheesecake',
    body:'表面の焦げとなかのとろとろが完璧なバランス。甘さ控えめで何度でも食べたい。',
    tags:['表参道','Bake Cheese Tart'] },
  { page:'sweets.html', section:'ケーキ',     icon:'🍰', cat:'スイーツ',
    title:'Mont Blanc',
    body:'クリームの濃さが段違い。マロンペーストの繊細さとメレンゲのサクサク感が絶妙。',
    tags:['新宿','Angelina'] },
  { page:'sweets.html', section:'ケーキ',     icon:'🍰', cat:'スイーツ',
    title:'Fraisier',
    body:'見た目が宝石みたいで食べるのがもったいなかった。いちごの酸味とクリームの甘さ。',
    tags:['丸の内'] },
  { page:'sweets.html', section:'パンケーキ', icon:'🥞', cat:'スイーツ',
    title:'Souffle Pancake',
    body:'ふわっふわを通り越してほぼ空気。口の中で消えていく感覚がやばい。',
    tags:['原宿','Gram'] },
  { page:'sweets.html', section:'パンケーキ', icon:'🥞', cat:'スイーツ',
    title:'Ricotta Pancake',
    body:'世界一のパンケーキと言われるだけあって、リコッタのまろやかさとハチミツの相性が最高。',
    tags:['代官山','Bills'] },
  { page:'sweets.html', section:'パフェ・アイス', icon:'🍵', cat:'スイーツ',
    title:'Matcha Parfait',
    body:'抹茶の苦みとバニラアイスのバランスが絶妙。わらび餅のもちもち食感がアクセント。',
    tags:['銀座','中村藤吉'] },
  { page:'sweets.html', section:'パフェ・アイス', icon:'🍧', cat:'スイーツ',
    title:'宇治金時かき氷',
    body:'ふわふわの氷と濃厚な抹茶シロップ。鎌倉まで行く価値のあるかき氷。',
    tags:['鎌倉','埜庵'] },
  { page:'sweets.html', section:'焼き菓子', icon:'🍮', cat:'スイーツ',
    title:'Canele',
    body:'外カリカリ中もちもち。ラム酒の香りがちゃんとして、これが正解のカヌレだと思った。',
    tags:['渋谷'] },
  { page:'sweets.html', section:'焼き菓子', icon:'🟫', cat:'スイーツ',
    title:'Financier',
    body:'バターの香りが最高。サクッとした外側とじゅわっとした中のバランスが好き。',
    tags:['青山','Pierre Hermé'] },

  /* ── 日記 ── */
  { page:'diary.html', section:'2025秋冬', icon:'📓', cat:'日記',
    title:'はじめての一人旅',
    body:'京都に一人で行った。新幹線に乗りながら、なんでもっと早くやらなかったんだろうと思った。哲学の道で鴨を見た。',
    tags:['わくわく','旅','京都'] },
  { page:'diary.html', section:'2025秋冬', icon:'📓', cat:'日記',
    title:'雨の日の喫茶店',
    body:'雨が降っていたので、近所の古い喫茶店に入った。コーヒーを頼んで本を読んでいたら2時間経っていた。',
    tags:['穏やか','カフェ'] },
  { page:'diary.html', section:'2025秋冬', icon:'📓', cat:'日記',
    title:'久しぶりに泣いた日',
    body:'昔の写真が出てきて、ずっと見ていたら泣いていた。特に何かがあったわけじゃなかった。',
    tags:['切ない'] },
  { page:'diary.html', section:'2025春夏', icon:'📓', cat:'日記',
    title:'桜の下で',
    body:'お花見に行った。シートを敷いてお弁当を食べながら、桜を見上げていたら眠くなった。',
    tags:['嬉しい','春'] },
  { page:'diary.html', section:'2025春夏', icon:'📓', cat:'日記',
    title:'ひとり映画館',
    body:'初めて一人で映画館に行った。パーフェクト・デイズを観た。終わってからしばらく動けなかった。',
    tags:['穏やか','映画'] },
  { page:'diary.html', section:'2025春夏', icon:'📓', cat:'日記',
    title:'誕生日',
    body:'誕生日だった。友人たちがサプライズでケーキを持ってきてくれた。完全に気づかなかった。',
    tags:['嬉しい'] },
  { page:'diary.html', section:'2024',    icon:'📓', cat:'日記',
    title:'初雪の日',
    body:'今年初めて雪が降った。窓から見ていたら、急に外に出たくなって走り出た。',
    tags:['わくわく','冬'] },
  { page:'diary.html', section:'2024',    icon:'📓', cat:'日記',
    title:'昔の日記を読んだ',
    body:'引越しの片付け中に昔の日記が出てきた。中学生のころのもの。全部読んでしまった。',
    tags:['切ない'] },

  /* ── 言葉 ── */
  { page:'words.html', section:'生き方', icon:'💬', cat:'言葉',
    title:'今日という日は、残りの人生の最初の日だ。',
    body:'アビー・ホフマン',
    tags:['生き方'] },
  { page:'words.html', section:'生き方', icon:'💬', cat:'言葉',
    title:'ゆっくり急げ。',
    body:'アウグストゥス / ラテン語格言',
    tags:['生き方'] },
  { page:'words.html', section:'生き方', icon:'💬', cat:'言葉',
    title:'人生とは、自転車に乗るようなものだ。バランスを保つには、動き続けるしかない。',
    body:'アルバート・アインシュタイン',
    tags:['生き方'] },
  { page:'words.html', section:'愛・人間関係', icon:'💬', cat:'言葉',
    title:'愛するとは、互いに見つめ合うことではなく、二人で同じ方向を見ることだ。',
    body:'サン＝テグジュペリ / 星の王子さま',
    tags:['愛・人間関係'] },
  { page:'words.html', section:'愛・人間関係', icon:'💬', cat:'言葉',
    title:'わかりあえないことを前提に、それでもわかろうとすること。',
    body:'ヤマシタトモコ / 違国日記',
    tags:['愛・人間関係'] },
  { page:'words.html', section:'創造・表現', icon:'💬', cat:'言葉',
    title:'Creativity is just connecting things.',
    body:'Steve Jobs',
    tags:['創造・表現'] },
  { page:'words.html', section:'創造・表現', icon:'💬', cat:'言葉',
    title:'Done is better than perfect.',
    body:'Sheryl Sandberg / LEAN IN',
    tags:['創造・表現'] },
  { page:'words.html', section:'創造・表現', icon:'💬', cat:'言葉',
    title:'芸術は爆発だ。',
    body:'岡本太郎 / 自分の中に毒を持て',
    tags:['創造・表現'] },
  { page:'words.html', section:'孤独・内省', icon:'💬', cat:'言葉',
    title:'孤独であることを愛することを学びなさい。',
    body:'ライナー・マリア・リルケ / 若き詩人への手紙',
    tags:['孤独・内省'] },
  { page:'words.html', section:'孤独・内省', icon:'💬', cat:'言葉',
    title:'静けさの中にこそ、すべての答えがある。',
    body:'エマーソン',
    tags:['孤独・内省'] },

];

/* ──────────────────────────────────────────────────
   CATEGORY COLORS
────────────────────────────────────────────────── */
const CAT_STYLE = {
  '作品':    { bg:'rgba(200,149,106,.15)', color:'#8a5a2a', border:'#c8956a' },
  'スイーツ':{ bg:'rgba(138,170,136,.15)', color:'#3a6a38', border:'#8aaa88' },
  '日記':    { bg:'rgba(176,160,208,.15)', color:'#5a4a8a', border:'#b0a0d0' },
  '言葉':    { bg:'rgba(200,168,74,.15)',  color:'#7a5a10', border:'#c8a84a' },
};

/* ──────────────────────────────────────────────────
   INJECT OVERLAY HTML
────────────────────────────────────────────────── */
(function injectOverlay() {
  const style = document.createElement('style');
  style.textContent = `
    /* Search overlay */
    #sg-overlay {
      position:fixed; inset:0; z-index:9000;
      background:rgba(20,16,10,.6);
      backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
      display:flex; flex-direction:column; align-items:center;
      padding:80px 20px 40px;
      opacity:0; pointer-events:none;
      transition:opacity .25s;
      overflow-y:auto;
    }
    #sg-overlay.open { opacity:1; pointer-events:all; }

    #sg-box {
      width:100%; max-width:680px;
      transform:translateY(-16px) scale(.98);
      transition:transform .28s cubic-bezier(.34,1.4,.64,1);
    }
    #sg-overlay.open #sg-box { transform:translateY(0) scale(1); }

    /* Input row */
    #sg-input-wrap {
      display:flex; align-items:center; gap:0;
      background:#faf6ee;
      border:2px solid #d6c9b0;
      border-radius:14px;
      overflow:hidden;
      box-shadow:0 12px 40px rgba(0,0,0,.25);
    }
    #sg-input-wrap:focus-within { border-color:#c8956a; }

    #sg-icon {
      padding:0 16px; font-size:18px; opacity:.5;
      flex-shrink:0;
    }
    #sg-input {
      flex:1; padding:18px 0;
      font-family:'Noto Serif JP',serif;
      font-size:18px; color:#2e2818;
      background:transparent; border:none; outline:none;
      letter-spacing:.05em;
    }
    #sg-input::placeholder { color:#a89880; }
    #sg-close {
      width:48px; height:48px; border-radius:0;
      border:none; background:transparent;
      cursor:pointer; font-size:16px; color:#a89880;
      transition:color .15s; flex-shrink:0;
    }
    #sg-close:hover { color:#2e2818; }

    /* Hint */
    #sg-hint {
      margin-top:10px;
      font-size:11px; color:rgba(255,255,255,.4);
      font-family:'Noto Sans JP',sans-serif;
      letter-spacing:.15em; text-align:center;
    }

    /* Results */
    #sg-results {
      margin-top:18px;
      background:#faf6ee;
      border-radius:14px;
      overflow:hidden;
      box-shadow:0 12px 40px rgba(0,0,0,.2);
      max-height:calc(100vh - 260px);
      overflow-y:auto;
      scrollbar-width:thin;
      scrollbar-color:#d6c9b0 transparent;
    }
    #sg-results:empty { display:none; }

    .sg-group-label {
      padding:10px 20px 6px;
      font-size:9px; letter-spacing:.4em; color:#a89880;
      font-family:'Noto Sans JP',sans-serif; font-weight:300;
      background:#f4ede0;
      border-bottom:1px solid #ede5d4;
      text-transform:uppercase;
    }

    .sg-item {
      display:flex; align-items:flex-start; gap:14px;
      padding:14px 20px;
      cursor:pointer;
      border-bottom:1px solid #ede5d4;
      transition:background .12s;
      text-decoration:none;
    }
    .sg-item:last-child { border-bottom:none; }
    .sg-item:hover, .sg-item.active { background:#ede5d4; }

    .sg-item-icon {
      font-size:20px; flex-shrink:0; line-height:1.5;
    }
    .sg-item-body { flex:1; min-width:0; }
    .sg-item-title {
      font-size:14px; font-weight:700; color:#2e2818;
      font-family:'Noto Serif JP',serif;
      margin-bottom:3px; line-height:1.4;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .sg-item-body em {
      background:#fde88a; color:#2e2818;
      font-style:normal; border-radius:2px; padding:0 1px;
    }
    .sg-item-sub {
      font-size:11px; color:#a89880;
      font-family:'Noto Sans JP',sans-serif; font-weight:300;
      white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
    }
    .sg-item-right {
      flex-shrink:0; display:flex; flex-direction:column;
      align-items:flex-end; gap:4px;
    }
    .sg-cat-badge {
      font-size:9px; padding:2px 8px; border-radius:10px;
      font-family:'Noto Sans JP',sans-serif; font-weight:300;
      letter-spacing:.06em; white-space:nowrap;
    }
    .sg-section {
      font-size:9px; color:#a89880;
      font-family:'Noto Sans JP',sans-serif;
    }

    /* No results */
    #sg-empty {
      display:none; padding:40px 20px;
      text-align:center; color:#a89880;
      font-family:'Noto Sans JP',sans-serif; font-size:13px;
    }
    #sg-empty.show { display:block; }

    /* Keyboard shortcut hint */
    .sg-kbd {
      display:inline-flex; align-items:center;
      gap:4px;
    }
    kbd {
      background:rgba(255,255,255,.15);
      color:rgba(255,255,255,.5);
      border:1px solid rgba(255,255,255,.2);
      border-radius:4px;
      padding:1px 6px;
      font-size:10px;
      font-family:monospace;
    }

    @media(max-width:600px){
      #sg-overlay { padding:60px 12px 32px; }
      #sg-input { font-size:16px; padding:15px 0; }
    }

    /* Flash highlight when jumping to a card from search */
    @keyframes sgFlash {
      0%   { box-shadow: 0 0 0 0 rgba(200,149,106,.0),  0 8px 20px rgba(46,40,24,.18); }
      25%  { box-shadow: 0 0 0 6px rgba(200,149,106,.55), 0 12px 32px rgba(200,149,106,.25); }
      60%  { box-shadow: 0 0 0 4px rgba(200,149,106,.35), 0 10px 28px rgba(200,149,106,.18); }
      100% { box-shadow: 0 0 0 0 rgba(200,149,106,.0),  0 8px 20px rgba(46,40,24,.18); }
    }
    .sg-flash {
      animation: sgFlash 1.4s ease forwards !important;
      transform: translateY(0) !important;
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.id = 'sg-overlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.innerHTML = `
    <div id="sg-box">
      <div id="sg-input-wrap">
        <span id="sg-icon">🔍</span>
        <input id="sg-input" type="search" placeholder="スイーツ、映画、言葉、日記… なんでも" autocomplete="off" spellcheck="false">
        <button id="sg-close" title="閉じる (Esc)">✕</button>
      </div>
      <p id="sg-hint">
        <span class="sg-kbd"><kbd>↑</kbd><kbd>↓</kbd> 移動</span>&nbsp;
        <span class="sg-kbd"><kbd>Enter</kbd> 開く</span>&nbsp;
        <span class="sg-kbd"><kbd>Esc</kbd> 閉じる</span>
      </p>
      <div id="sg-results" role="listbox"></div>
      <div id="sg-empty">見つかりませんでした</div>
    </div>
  `;
  document.body.appendChild(overlay);

  /* Close on overlay click */
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeSearch();
  });
  document.getElementById('sg-close').addEventListener('click', closeSearch);
})();

/* ──────────────────────────────────────────────────
   SEARCH LOGIC
────────────────────────────────────────────────── */
let activeIdx = -1;

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
  return text.replace(re, '<em>$1</em>');
}

function doSearch(q) {
  const resultsEl = document.getElementById('sg-results');
  const emptyEl   = document.getElementById('sg-empty');
  resultsEl.innerHTML = '';
  emptyEl.classList.remove('show');
  activeIdx = -1;

  const lower = q.toLowerCase().trim();
  if (!lower) return;

  const matched = SITE_INDEX.filter(item => {
    const hay = (item.title + item.body + item.tags.join(' ') + item.cat + item.section).toLowerCase();
    return hay.includes(lower);
  });

  if (matched.length === 0) {
    emptyEl.classList.add('show');
    return;
  }

  /* Group by cat */
  const groups = {};
  matched.forEach(item => {
    if (!groups[item.cat]) groups[item.cat] = [];
    groups[item.cat].push(item);
  });

  Object.entries(groups).forEach(([cat, items]) => {
    const style = CAT_STYLE[cat] || { bg:'#f0e8d8', color:'#6b5d48', border:'#d6c9b0' };

    const label = document.createElement('div');
    label.className = 'sg-group-label';
    label.textContent = cat;
    resultsEl.appendChild(label);

    items.forEach(item => {
      const a = document.createElement('a');
      a.className = 'sg-item';
      a.href = item.page + '?open=' + encodeURIComponent(item.title);
      a.setAttribute('role','option');
      a.innerHTML = `
        <span class="sg-item-icon">${item.icon}</span>
        <span class="sg-item-body">
          <div class="sg-item-title">${highlight(item.title, lower)}</div>
          <div class="sg-item-sub">${highlight(item.body.substring(0,60) + (item.body.length > 60 ? '…' : ''), lower)}</div>
        </span>
        <span class="sg-item-right">
          <span class="sg-cat-badge" style="background:${style.bg};color:${style.color};border:1px solid ${style.border};">${cat}</span>
          <span class="sg-section">${item.section}</span>
        </span>
      `;
      resultsEl.appendChild(a);
    });
  });
}

/* ──────────────────────────────────────────────────
   KEYBOARD NAVIGATION
────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  const overlay = document.getElementById('sg-overlay');
  const isOpen  = overlay.classList.contains('open');

  /* Open with Cmd/Ctrl + K */
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    isOpen ? closeSearch() : openSearch();
    return;
  }

  if (!isOpen) return;

  const items = [...document.querySelectorAll('.sg-item')];

  if (e.key === 'Escape') {
    closeSearch();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIdx = Math.min(activeIdx + 1, items.length - 1);
    updateActive(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIdx = Math.max(activeIdx - 1, -1);
    updateActive(items);
  } else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) {
    e.preventDefault();
    location.href = items[activeIdx].href;
  }
});

function updateActive(items) {
  items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
  if (activeIdx >= 0 && items[activeIdx]) {
    items[activeIdx].scrollIntoView({ block:'nearest' });
  }
}

/* ──────────────────────────────────────────────────
   OPEN / CLOSE
────────────────────────────────────────────────── */
function openSearch() {
  const overlay = document.getElementById('sg-overlay');
  const input   = document.getElementById('sg-input');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => input.focus(), 60);
}

function closeSearch() {
  const overlay = document.getElementById('sg-overlay');
  const input   = document.getElementById('sg-input');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  input.value = '';
  document.getElementById('sg-results').innerHTML = '';
  document.getElementById('sg-empty').classList.remove('show');
  activeIdx = -1;
}

/* Live search on input */
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('sg-input');
  if (input) {
    input.addEventListener('input', () => doSearch(input.value));
  }

  /* Hook all .search-btn buttons on the page */
  document.querySelectorAll('.search-btn').forEach(btn => {
    btn.onclick = e => { e.preventDefault(); openSearch(); };
  });

  /* ── Deep-link: ?open=タイトル → 該当カードへジャンプ ── */
  const openParam = new URLSearchParams(window.location.search).get('open');
  if (openParam) {
    /* URL を即座にクリーン（履歴に残さない） */
    history.replaceState(null, '', window.location.pathname);

    /* ページが完全に描画されるまで少し待つ */
    window.addEventListener('load', () => {
      _jumpToCard(openParam);
    });
    /* load が既に完了していた場合の保険 */
    if (document.readyState === 'complete') {
      setTimeout(() => _jumpToCard(openParam), 100);
    }
  }
});

/**
 * data-title / data-name / data-quote が一致する要素を探して
 * スクロール → フラッシュ → モーダルを開く
 */
function _jumpToCard(title) {
  /* 各ページで使われている data 属性を全部試す */
  const escaped = title.replace(/"/g, '\\"');
  const sel = [
    `[data-title="${escaped}"]`,
    `[data-name="${escaped}"]`,
    `[data-quote="${escaped}"]`,
  ].join(', ');

  const el = document.querySelector(sel);
  if (!el) return;

  /* works.html: display:none で隠れているカードは一旦表示させる */
  el.style.removeProperty('display');
  el.style.opacity = '1';

  /* diary.html: .book はデフォルトで visible だが念のため */
  el.style.visibility = 'visible';

  /* スクロール後にフラッシュ → モーダルを開く */
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    el.classList.add('sg-flash');

    /* .sg-flash アニメが始まってからモーダルを開く */
    setTimeout(() => {
      /* onclick="openModal(this)" 形式に対応 */
      if (typeof el.onclick === 'function') {
        el.onclick.call(el, new MouseEvent('click'));
      } else {
        el.click();
      }
    }, 350);
  }, 300);
}
