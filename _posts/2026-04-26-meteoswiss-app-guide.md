---
layout: post
title: "【瑞士天氣與穿搭】怎麼穿才好？天氣 App 推薦與山上 Webcam 整理"
date: 2026-04-26
categories: App介紹
image: /img/meteoswiss/meteoswiss_app_guide.webp
thumbnail: /img/meteoswiss/meteoswiss_app_guide.webp
og_image:  /img/meteoswiss/meteoswiss_app_guide.webp
description: "此文介紹瑞士自由行不可或缺的神級天氣 App。看看天氣 App 再看看 Webcam，確保萬無一失，一篇帶你看懂（附穿著推薦與票價試算工具）。"
permalink: /blog/meteoswiss-app-guide/
---

快速導覽
- [瑞士旅遊怎麼穿](#wear)
- [天氣 App 介紹](#app)
- [主要觀光景點實況 Webcam](#webcam)
- [瑞士月均溫和降雨概況](#weather)
- [結論](#conclusions)

在瑞士旅遊，到底要怎麼穿比較好？這篇帶你一次看懂，需注意，瑞士沒有 Uniqlo，所以相對沒有那麼方便，無法少什麼再買就好。

我們先來感受一下，你正在讀此文的「現在」瑞士各大地區的溫度如何，現在瑞士時間：
<span id="zurich-clock">00:00:00</span>

（瑞士夏季時間等於台灣減六，冬季減七）

<script>
    function updateClock() {
        const now = new Date();
        const options = {
            timeZone: 'Europe/Zurich',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        document.getElementById('zurich-clock').textContent = formatter.format(now);
    }

    // 每 1000 毫秒（1秒）更新一次
    setInterval(updateClock, 1000);
    // 立即啟動，避免等待第一秒
    updateClock();
</script>

<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

<style>
.wx-wrap {
  font-family: 'DM Sans', sans-serif;
  margin: 2rem 0;
  max-width: 760px;
}
.wx-title {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  color: #1a1a18;
  margin: 0 0 14px;
}
.wx-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}
.wx-tab {
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: white;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: #555;
  transition: all 0.15s;
  white-space: nowrap;
}
.wx-tab.active { background: #1a1a18; color: white; border-color: #1a1a18; }
.wx-tab:hover:not(.active) { border-color: #999; }

.wx-card {
  background: linear-gradient(135deg, #1a3a5c 0%, #1565C0 100%);
  border-radius: 20px;
  padding: 24px;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 180px;
  transition: background 0.4s;
}
.wx-card.sunny  { background: linear-gradient(135deg, #b45309 0%, #f59e0b 100%); }
.wx-card.cloudy { background: linear-gradient(135deg, #374151 0%, #6b7280 100%); }
.wx-card.rainy  { background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%); }
.wx-card.snow   { background: linear-gradient(135deg, #1e3a5f 0%, #7c3aed 100%); }
.wx-card.clear  { background: linear-gradient(135deg, #0f4c81 0%, #1d8cf8 100%); }

.wx-bg-icon {
  position: absolute;
  right: 20px; top: 20px;
  font-size: 80px;
  opacity: 0.18;
  line-height: 1;
  user-select: none;
}
.wx-location {
  font-size: 13px;
  opacity: 0.75;
  margin-bottom: 4px;
}
.wx-city-name {
  font-family: 'DM Serif Display', serif;
  font-size: 26px;
  margin: 0 0 12px;
}
.wx-temp-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 4px;
}
.wx-temp-big {
  font-size: 56px;
  font-weight: 300;
  line-height: 1;
}
.wx-temp-unit { font-size: 24px; margin-bottom: 8px; opacity: 0.7; }
.wx-desc {
  font-size: 15px;
  opacity: 0.85;
  margin-bottom: 16px;
}
.wx-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.wx-detail-item { font-size: 12px; opacity: 0.8; }
.wx-detail-item b { display: block; font-size: 14px; opacity: 1; }
.wx-loading {
  text-align: center;
  padding: 40px 0;
  opacity: 0.6;
  font-size: 13px;
}
.wx-error {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  border-radius: 12px;
  padding: 14px 16px;
  color: #991b1b;
  font-size: 13px;
}
.wx-updated {
  font-size: 11px;
  color: #000;
  margin-top: 8px;
  text-align: right;
}
</style>

<div class="wx-wrap">
  <div class="wx-tabs" id="wx-tabs"></div>
  <div id="wx-card-wrap">
    <div class="wx-card">
      <div class="wx-loading">⏳ 載入天氣資料中...</div>
    </div>
  </div>
  <div class="wx-updated" id="wx-updated"></div>
</div>

<script>
(function () {
  // ─── CITY REGISTRY ─────────────────────────────────────────────────────
  const CITIES = {
    "蘇黎世":   { lat: 47.3769, lon: 8.5417,  alt: "469m",  label: "Zürich" },
    "琉森":     { lat: 47.0502, lon: 8.3093,  alt: "436m",  label: "Lucerne" },
    "格林德瓦": { lat: 46.6241, lon: 8.0413,  alt: "1034m", label: "Grindelwald" },
    "少女峰":   { lat: 46.5472, lon: 7.9853,  alt: "3454m", label: "Jungfraujoch" },
    "策馬特":   { lat: 46.0207, lon: 7.7491,  alt: "1608m", label: "Zermatt" },
  };

  // WMO Weather Interpretation Codes → {desc, cls, emoji}
  function decodeWMO(code) {
    if (code === 0)              return { desc: '晴天', cls: 'sunny', emoji: '☀️' };
    if (code <= 2)               return { desc: '局部多雲', cls: 'cloudy', emoji: '⛅' };
    if (code === 3)              return { desc: '陰天', cls: 'cloudy', emoji: '☁️' };
    if (code <= 49)              return { desc: '霧/起霧', cls: 'cloudy', emoji: '🌫️' };
    if (code <= 59)              return { desc: '毛毛雨', cls: 'rainy', emoji: '🌦️' };
    if (code <= 69)              return { desc: '下雨', cls: 'rainy', emoji: '🌧️' };
    if (code <= 79)              return { desc: '降雪', cls: 'snow', emoji: '🌨️' };
    if (code === 80 || code === 81) return { desc: '陣雨', cls: 'rainy', emoji: '🌦️' };
    if (code === 82)             return { desc: '大陣雨', cls: 'rainy', emoji: '⛈️' };
    if (code <= 84)              return { desc: '陣雨夾雪', cls: 'snow', emoji: '🌨️' };
    if (code <= 94)              return { desc: '雷陣雨', cls: 'rainy', emoji: '⛈️' };
    return { desc: '雷暴夾冰雹', cls: 'rainy', emoji: '🌩️' };
  }

  // ─── STATE ────────────────────────────────────────────────────────────
  let active = "蘇黎世";
  const cache = {};

  // ─── TABS ─────────────────────────────────────────────────────────────
  const tabsEl = document.getElementById('wx-tabs');
  Object.keys(CITIES).forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'wx-tab' + (city === active ? ' active' : '');
    btn.textContent = city;
    btn.dataset.city = city;
    btn.onclick = () => { active = city; updateTabs(); loadWeather(city); };
    tabsEl.appendChild(btn);
  });

  function updateTabs() {
    tabsEl.querySelectorAll('.wx-tab').forEach(b =>
      b.classList.toggle('active', b.dataset.city === active));
  }

  // ─── FETCH ─────────────────────────────────────────────────────────────
  function loadWeather(city) {
    if (cache[city]) { render(city, cache[city]); return; }
    showLoading();
    const c = CITIES[city];
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}`
      + `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weathercode`
      + `&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min`
      + `&forecast_days=1&timezone=Europe%2FZurich`;

    fetch(url)
      .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(data => {
        const cur = data.current;
        const daily = data.daily;
        cache[city] = {
          temp: Math.round(cur.temperature_2m),
          humidity: cur.relative_humidity_2m,
          wind: Math.round(cur.wind_speed_10m),
          precip: cur.precipitation,
          code: cur.weathercode,
          hi: Math.round(daily.temperature_2m_max[0]),
          lo: Math.round(daily.temperature_2m_min[0]),
        };
        render(city, cache[city]);
      })
      .catch(err => showError(err));
  }

  // ─── RENDER ────────────────────────────────────────────────────────────
  function showLoading() {
    document.getElementById('wx-card-wrap').innerHTML =
      '<div class="wx-card"><div class="wx-loading">⏳ 載入中...</div></div>';
  }
  function showError(err) {
    document.getElementById('wx-card-wrap').innerHTML =
      `<div class="wx-error">⚠️ 無法取得天氣資料：${err.message}<br><small>請確認網路連線是否正常</small></div>`;
  }

  function render(city, d) {
    const c = CITIES[city];
    const wx = decodeWMO(d.code);
    const rainText = d.precip > 0 ? `${d.precip} mm` : '無';
    const now = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });

    document.getElementById('wx-card-wrap').innerHTML = `
      <div class="wx-card ${wx.cls}">
        <div class="wx-bg-icon">${wx.emoji}</div>
        <div class="wx-location">📍 ${c.label} · ${c.alt}</div>
        <div class="wx-city-name">${city}</div>
        <div class="wx-temp-row">
          <div class="wx-temp-big">${d.temp}</div>
          <div class="wx-temp-unit">°C</div>
        </div>
        <div class="wx-desc">${wx.emoji} ${wx.desc}</div>
        <div class="wx-details">
          <div class="wx-detail-item"><b>${d.hi}°C / ${d.lo}°C</b>氣溫</div>
          <div class="wx-detail-item"><b>${d.humidity}%</b>相對濕度</div>
          <div class="wx-detail-item"><b>${d.wind} km/h</b>風速</div>
          <div class="wx-detail-item"><b>${rainText}</b>降雨</div>
        </div>
      </div>`;
    document.getElementById('wx-updated').textContent = `資料更新時間：${now} (你現在所在地的時間)`;
  }

  // ─── INIT ──────────────────────────────────────────────────────────────
  loadWeather(active);
})();
</script>

歡迎使用本站的瑞士旅遊小工具
- [省瑞票券速查器](https://calculator.swisspro.tw/?p=validator)：這段 Swiss Travel Pass 能搭嗎？要提早買嗎？怎麼買？要提早預約嗎？多少錢？
- [省瑞票券精算器](https://calculator.swisspro.tw/?itinerary_id=f529bba7)：幫我精算 STP 還是半價卡划算


<a id="wear"></a>
## 瑞士旅遊怎麼穿搭？

直接點選你要去的月份跟去哪裡，看建議怎麼穿

<div class="swisspro-widget">
  <div class="sw-header">
    <div class="sw-title">瑞士旅遊穿搭小幫手</div>
  </div>

  <div class="sw-body">
    <div class="sw-control-group">
      <div class="sw-label">出發季節</div>
      <div class="sw-chips" id="season-chips"></div>
    </div>

    <div class="sw-control-group">
      <div class="sw-label">目的地</div>
      <div class="sw-chips" id="zone-chips"></div>
    </div>

    <div class="sw-display-area" id="sw-display-area">
      <div class="sw-empty-state">請選擇季節與地點，獲取專業穿著建議</div>
      
      <div class="sw-result-content" id="sw-result-content" style="display: none;">
        <div class="sw-temp-header">
          <span>預估溫度</span>
          <div class="sw-temp-range" id="sw-temp-range"></div>
        </div>
        
        <div class="sw-advice-grid" id="sw-advice-grid"></div>
        <div class="sw-pro-tips-area" id="sw-pro-tips-area"></div>
      </div>
    </div>
  </div>
</div>

<style>
.swisspro-widget {
  --sw-red: #E62117; 
  --sw-red-light: #fff1f0;
  --sw-dark: #1d1d1f;
  --sw-gray: #f5f5f7;
  --sw-border: #d2d2d7;
  
  max-width: 100%;
  background: #ffffff;
  border: 1px solid var(--sw-border);
  border-radius: 18px;
  overflow: hidden;
  font-family: -apple-system, "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  margin: 1.5rem 0;
}

.sw-header { background: var(--sw-dark); padding: 1.25rem; color: white; }
.sw-title { font-size: 18px; font-weight: 700; margin-bottom: 4px; letter-spacing: 0.5px; }
.sw-subtitle { font-size: 12px; opacity: 0.8; }

.sw-body { padding: 1.25rem; }
.sw-control-group { margin-bottom: 1.5rem; }
.sw-label { font-size: 13px; font-weight: 600; color: #86868b; margin-bottom: 10px; text-transform: uppercase; }

.sw-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.sw-chip {
  padding: 8px 18px;
  border-radius: 12px;
  border: 1px solid var(--sw-border);
  background: white;
  font-size: 14px;
  color: var(--sw-dark);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.sw-chip:hover { border-color: var(--sw-red); color: var(--sw-red); }
.sw-chip.active {
  background: var(--sw-red);
  color: white;
  border-color: var(--sw-red);
  box-shadow: 0 4px 12px rgba(230, 33, 23, 0.3);
  transform: translateY(-1px);
}

.sw-display-area { background: var(--sw-gray); border-radius: 14px; padding: 1.25rem; }
.sw-empty-state { text-align: center; color: #86868b; font-size: 14px; padding: 1rem 0; }

.sw-temp-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.sw-temp-tag { background: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; color: var(--sw-dark); }
.sw-temp-range { font-size: 20px; font-weight: 700; color: var(--sw-red); }

.sw-advice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }
.sw-card { background: white; padding: 12px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.03); }
.sw-card-label { font-size: 14px; color: #86868b; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; }

.sw-item { font-size: 13px; color: var(--sw-dark); line-height: 1.5; margin-bottom: 5px; display: flex; align-items: flex-start; }
.sw-item::before { content: "•"; color: var(--sw-red); margin-right: 8px; font-weight: bold; }

@media (max-width: 480px) { .sw-advice-grid { grid-template-columns: 1fr; } }
</style>

<script>
const SEASONS = [
  { id: 0, label: '春 (三月至五月)' },
  { id: 1, label: '夏 (六月至八月)' },
  { id: 2, label: '秋 (九月至十一月)' },
  { id: 3, label: '冬 (十二月至二月)' }
];

const ZONES = [
  { id: 'city', label: '城市湖區（蘇黎世、琉森...）' },
  { id: 'high', label: '山上（策馬特、少女峰...）' }
];

const WIDGET_DATA = {
  city: [
    { range: '5°C ~ 17°C', items: ['短袖','薄毛衣長袖','防風防水外套'], tips: ['春雨常見，建議帶防水外套','日夜溫差大'] },
    { range: '15°C ~ 28°C', items: ['短袖','輕便長褲、牛仔褲（怕熱的人也可以短褲，記得防曬）','晚間薄外套', '防曬用品（遮陽帽、墨鏡等）'], tips: ['盛夏有幾週會很熱，其他還好','其他時間熱沒有台灣熱，所以沒有電扇也幾乎沒有冷氣', '注意防曬，日照時間長'] },
    { range: '6°C ~ 18°C', items: ['防風外套','刷毛長袖','防風防水外套'], tips: ['最適合健行（滿山楓葉很美），但風大時體感涼','洋蔥式穿法是王道'] },
    { range: '-2°C ~ 5°C', items: ['發熱衣', '毛衣', '防寒大衣', '防水/防滑鞋子', '圍巾/手套/毛帽'], tips: ['室內暖氣強，內層不要穿太厚','逛聖誕市集腳部保暖很重要', '很晚才天亮，很早就天黑'] }
  ],
  high: [
    { range: '-5°C ~ 5°C', items: ['厚羽絨/雪衣','發熱衣','防風長褲'], tips: ['山上終年積雪，必備太陽眼鏡','山上風大會感覺更冷', '上山前注意纜車營運時間（通常到下午四點左右）'] },
    { range: '0°C ~ 8°C', items: ['輕羽絨外套或防風防水外套','防曬用品（遮陽帽、墨鏡等）','從內而外：短袖、長袖、防風防水外套、羽絨外套（怕冷者）'], tips: ['即使山下很熱，山上依舊是冬天','防曬防曬防曬，山頂很曬','上山前注意纜車營運時間（通常到下午四點左右）','策馬特和少女峰山上都有室內空間，覺得太冷可以進室內躲一下再出去拍照'] },
    { range: '-5°C ~ 2°C', items: ['厚羽絨/雪衣','發熱衣','防風長褲'], tips: ['九月就可能降初雪', '楓葉非常漂亮，整片山都是楓的顏色', '上山前注意纜車營運時間（通常到下午四點左右）'] },
    { range: '-15°C ~ -5°C', items: ['厚羽絨/雪衣','發熱衣褲','面罩/暖暖包/毛帽'], tips: ['極度嚴寒，皮膚不宜外露','滑雪的話就建議一般滑雪穿著','上山前注意纜車營運時間（通常到下午四點左右）'] }
  ]
};

let currentSeason = null;
let currentZone = null;

function initWidget() {
  renderChips('season-chips', SEASONS, (id) => { currentSeason = id; updateResult(); });
  renderChips('zone-chips', ZONES, (id) => { currentZone = id; updateResult(); });
}

function renderChips(containerId, items, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    const chip = document.createElement('div');
    chip.className = 'sw-chip' + (((containerId === 'season-chips' && currentSeason === item.id) || (containerId === 'zone-chips' && currentZone === item.id)) ? ' active' : '');
    chip.textContent = item.label;
    chip.onclick = () => { onSelect(item.id); renderChips('season-chips', SEASONS, (id) => { currentSeason = id; updateResult(); }); renderChips('zone-chips', ZONES, (id) => { currentZone = id; updateResult(); }); };
    container.appendChild(chip);
  });
}

function updateResult() {
  if (currentSeason !== null && currentZone !== null) {
    document.querySelector('.sw-empty-state').style.display = 'none';
    document.getElementById('sw-result-content').style.display = 'block';
    
    const data = WIDGET_DATA[currentZone][currentSeason];
    document.getElementById('sw-temp-range').textContent = data.range;
    
    document.getElementById('sw-advice-grid').innerHTML = `
      <div class="sw-card">
        <div class="sw-card-label">穿搭邏輯</div>
        ${data.items.map(i => `<div class="sw-item">${i}</div>`).join('')}
      </div>
    `;
    
    document.getElementById('sw-pro-tips-area').innerHTML = `
      <div class="sw-card">
        <div class="sw-card-label">備註</div>
        ${data.tips.map(t => `<div class="sw-item">${t}</div>`).join('')}
      </div>
    `;
  }
}

initWidget();
</script>

### 主要觀光季節（五月到九月）

一般而言，在瑞士，上山的觀光行程通常不會待太久，大多是搭纜車或火車上山，拍拍照就下山，所以只要確保在山上室外的那段時間內（至多一兩小時），你不會冷到發抖感冒即可。不過山上很曬，一定要記得防曬。墨鏡也可以準備，尤其上午與下午陽光刺眼，很斜會照進眼睛。

此外，瑞士夏天的太陽下山時間很晚（通常八九點），整天在外的話會被曬很久，很可能被曬到脫皮或變超黑。此外，瑞士下雨通常不會太猖狂，建議外套攜帶有帽子且防水的，下雨的時候把帽子戴起來，通常無需撐傘，不過瑞士也沒什麼騎樓可以躲雨。真的下很大的話，通常也不會下太久，喝杯咖啡就停了。

1. 不上山：如果當天沒有上山行程，就一般夏天穿著，短袖，短或長褲看個人。除了可能六到八月有幾週酷暑、熱浪警報時會跟台灣差不多熱，其他遠遠沒有台灣那麼熱，且乾燥，少會爆汗。所以瑞士少有電扇，更不用說冷氣，熱的時候只有吃冰跟游泳兩個辦法，加上太陽很晚下山，真的會熱到中暑，一定要多喝水。不過還好瑞士到處的水都可以喝，水龍頭、路邊噴泉，在瑞士你看到各種有水的地方只要沒有特別寫不能喝(Kein Trinkwasser，非飲用水，通常會畫一個水杯然後禁止的符號)，就是可以喝，甘甘。

1. 要上山：就算山下二三十度很熱，山上也可能還有殘雪，溫差非常大。常常纜車一下車就會一股寒風吹來，建議一定要先看天氣預報（請見本文下方 [App 介紹](#app)）。如果當天打算上山，建議一樣穿短袖，帶一件長袖放在背包，再帶一件稍微厚一點的外套（怕冷的人可以羽絨衣），也塞進背包或拿在手上。

春天和秋天穿著：短袖（內） + 薄長袖（中） + 防風外套（外），因為太陽下山後或走在路上沒有太陽的地方，只穿短袖的話還是感覺涼涼的，略有寒意，可以薄外套或長袖衣服放在包包備用。

### 淡季與雪季（十月到四月）

冬天的話就不討論上山的情況了，冬天你要上山的話（如滑雪等活動），你應該很專業，知道要怎麼穿。平常一般瑞士城市而言，冬天溫度通常維持零度上下，由內而外建議

1. 發熱衣
1. 一般長袖的衣服，有刷毛最好
1. 羽絨背心或刷毛外套
1. 防風防水大衣（一定要防風防水，有帽子）

除此之外建議可加毛帽，不然感覺耳朵隨時會掉下來，真的很怕冷的話再加圍巾與手套。鞋子部分不上山只在市區的話，倒是不太需要擔心，瑞士人行道鏟雪滿快的，如果不是真的下很誇張大的雪，一般運動鞋走在鏟完雪的路沒有什麼問題（還是要小心滑倒）。

<a id="app"></a>
## 天氣 MeteoSwiss App 介紹

瑞士旅遊必備 App 除了瑞士鐵路 [SBB App（介紹文章）](https://swisspro.tw/blog/how-to-sbb-app/) 之外，大概就是瑞士天氣 App 了。其中天氣 App 最推薦的是瑞士氣象局官方 MeteoSwiss App，裡面有大量功能與詳細天氣資訊。

下載 MeteoSwiss App

[SBB App (iOS)](https://apps.apple.com/tw/app/meteoswiss/id589772015)<br>
[SBB App (Android)](https://play.google.com/store/apps/details?id=ch.admin.meteoswiss&hl=zh-TW)

以下簡介 MeteoSwiss App 重要功能，可搭配下方截圖閱讀。首先點進去 App 可以設定地點，以下圖為例假設我們選蘇黎世，見圖(1)，可看到一週預報的溫度曲線圖與天氣概況圖案，還有降雨預報。這邊可以放置不只一個城市，可把你要去的地方都新增進去。

接著按一下溫度曲線之後那邊，會跑到圖(2)畫面，我們可以看到接下來一週比較詳細的天氣預報，含溫度與雨量預測。往下滑可到圖(3)畫面，可以看到日出日落時間（對於在策馬特要拍黃金馬特洪峰的朋友非常有用），還有每個小時的日照時間有多長，以及每個小時的降雨量預測，這部分對於要上山的人非常有用。最下方為風速的預測，比較少用到。

<figure class="screenshot-carousel">
  <div class="carousel-container">
    <img src="{{ '/img/meteoswiss/meteoswiss_app1.png' | relative_url }}" alt="App 開啟畫面">
    <img src="{{ '/img/meteoswiss/meteoswiss_app2.png' | relative_url }}" alt="一週天氣預報含溫度與降雨量">
    <img src="{{ '/img/meteoswiss/meteoswiss_app3.png' | relative_url }}" alt="日出日落時間，每小時日照長度與風速">
  </div>
  <figcaption>
    MeteoSwiss App 畫面截圖（一）（左右滑動查看）<br>
    （1）App 開啟畫面（2）一週天氣預報含溫度與降雨量 (3) 溫度曲線、每小時降雨、日出日落時間，每小時日照長度與風速
  </figcaption>
</figure>

接著來看一些比較進階的功能，首先在圖(1)下方有劇烈天氣和災害警報部分，點進去之後會跑到圖(4)畫面，裡面有一些警告，例如森林大火、雪崩、乾旱、地震（沒錯，瑞士也有地震，但與台灣比起來很罕見也很小，幾乎都無感）等等。觀光客比較有用到的可能是最上面的 Severe weather 劇烈天氣的部分，建議開啟通知，這樣如果有大雷雨、冰雹、強風、雪崩之類的，會收到警告，這時候就別上山了。

接著回到圖(1)滑到最下面可看到圖(5)的畫面，有一些雜項資訊，例如哪邊有雪（想看雪的人）、花粉（對於春天花粉症的人很有用）、紫外線與空氣品質。最後圖(6)也是從圖(1)往下滑會看到，很可愛的功能叫做 Meteo reports「打卡看天氣」，你可以拍一張照片附上拍熱地點上傳，或者看別人拍的照片，這樣可看到瑞士某時某地的天氣如何，裡面常常有很多很美的照片。讓你旅遊完回家之後還可以繼續回味。

<figure class="screenshot-carousel">
  <div class="carousel-container">
    <img src="{{ '/img/meteoswiss/meteoswiss_app4.png' | relative_url }}" alt="劇烈天氣警報">
    <img src="{{ '/img/meteoswiss/meteoswiss_app5.png' | relative_url }}" alt="雪、花粉、紫外線、空氣品質">
    <img src="{{ '/img/meteoswiss/meteoswiss_app6.png' | relative_url }}" alt="Meteo reports">
  </div>
  <figcaption>
    MeteoSwiss App 畫面截圖（二）（左右滑動查看）<br>
    （4）劇烈天氣警報（5）雪、花粉、紫外線、空氣品質 (6) Meteo reports 「打卡看天氣」
  </figcaption>
</figure>


<a id="webcam"></a>
## 山上 Webcam 一覽 

除了用上述 MeteoSwiss App 之外，強烈建議在上山買票前，一定一定一定要先看 Webcam。常常有山下看起來晴朗，但山上都是雲霧的情況，甚至暴風雪。如果 Webcam 畫面上白茫茫，那建議就別上去了，畢竟車票也不便宜。不過山上天氣多變，有可能這一小時霧茫茫，下一小時就晴空萬里，建議可以每隔半小時看一下。

常去觀光景點官方 Webcam 幫大家整理如下

- [少女峰地區 Jungfrau](https://www.jungfrau.ch/en-gb/live/webcams/)
- [策馬特地區 Zermatt](https://zermatt.swiss/en/info/webcams)
- [皮拉圖斯山 Pilatus](https://pilatus.ch/live#c21147)
- [瑞吉山 Rigi](https://www.rigi.ch/en/inform/webcams)
- [鐵力士山 Titlis](https://www.titlis.ch/en/webcams)
- [石丹峰 Stanserhorn](https://www.stanserhorn.ch/en/informations/weather-webcam)
- [施圖斯 Stoos](https://www.stoos.ch/en/pages/webcams)

如果你想去的沒有在上面，可搜尋地名 + Webcam，一般瑞士山上都會有即時影像。

<a id="weather"></a>
## 瑞士月均溫和降雨概況

最後附上瑞士幾個主要地區的月均溫和降雨概況，讓大家有個底，順便複習一下高中地理。

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

<style>
.clim-wrap {
  font-family: 'DM Sans', sans-serif;
  background: #fafaf8;
  border: 1px solid #e8e4dc;
  border-radius: 16px;
  padding: 24px 20px 20px;
  margin: 2rem 0;
  max-width: 760px;
}
.clim-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}
.clim-title {
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  color: #1a1a18;
  margin: 0;
}
.clim-subtitle {
  font-size: 12px;
  color: #888;
  margin: 3px 0 0;
}
.clim-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.clim-tab {
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: white;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  cursor: pointer;
  color: #555;
  transition: all 0.15s;
  white-space: nowrap;
}
.clim-tab.active {
  background: #1a1a18;
  color: white;
  border-color: #1a1a18;
}
.clim-tab:hover:not(.active) {
  border-color: #999;
  color: #222;
}
.clim-legend {
  display: flex;
  gap: 16px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.clim-legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #666;
}
.clim-legend-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.clim-legend-bar {
  width: 12px; height: 8px;
  border-radius: 2px;
  flex-shrink: 0;
}
.clim-canvas-wrap {
  position: relative;
  height: 280px;
}
.clim-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 14px;
}
.clim-stat {
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 12px;
}
.clim-stat-label { font-size: 12px; color: #000; margin-bottom: 3px; }
.clim-stat-val { font-size: 17px; font-weight: 500; color: #1a1a18; }
.clim-stat-sub { font-size: 10px; color: #aaa; }
</style>

<div class="clim-wrap">
  <div class="clim-header">
    <div class="clim-tabs" id="clim-tabs"></div>
  </div>
  <div class="clim-legend">
    <span class="clim-legend-item"><span class="clim-legend-dot" style="background:#D32F2F"></span>月均高溫</span>
    <span class="clim-legend-item"><span class="clim-legend-dot" style="background:#1565C0"></span>月均低溫</span>
    <span class="clim-legend-item"><span class="clim-legend-bar" style="background:#90CAF9; opacity:0.7"></span>降雨量 (mm)</span>
    <span class="clim-legend-item">資料來源：MeteoSwiss</span>
  </div>
  <div class="clim-canvas-wrap">
    <canvas id="clim-chart"></canvas>
  </div>
  <div class="clim-stats" id="clim-stats"></div>
</div>

<script>
(function() {
  // ─── DATA ──────────────────────────────────────────────────────────────
  // Format: hi[], lo[], rain[] — Jan to Dec
  const CITIES = {
    "蘇黎世": {
        alt: "408m", emoji: "",
        hi:   [3,  5, 10, 15, 20, 23, 25, 25, 20, 14, 8,  4],
        lo:   [-2, -2, 1,  5, 9,  13, 15, 15, 11, 7,  2, -1],
        rain: [63, 59, 65, 76, 99, 107, 103, 110, 85, 71, 70, 75],
    },
    "琉森": {
        alt: "436m", emoji: "",
        hi:   [3,  5, 10, 15, 20, 23, 25, 24, 20, 14, 8,  4],
        lo:   [-2, -2, 1,  5, 9,  12, 14, 14, 11, 7,  2, -1],
        rain: [61, 56, 73, 85, 119, 143, 137, 137, 98, 77, 72, 82],
    },
    "茵特拉肯": {
        alt: "568m", emoji: "",
        hi:   [3,  5, 11, 15, 19, 23, 25, 24, 20, 14, 8,  4],
        lo:   [-3, -2, 1,  5, 9,  12, 14, 14, 11, 7,  2, -2],
        rain: [73, 70, 80, 87, 121, 138, 128, 145, 95, 84, 80, 86],
    },
    "格林德瓦": {
        alt: "1034m", emoji: "",
        hi:   [2,  3, 7,  11, 16, 20, 22, 21, 17, 13, 6,  2],
        lo:   [-5, -5, -2, 1,  5,  9,  11, 11, 8,  4,  0, -4],
        rain: [85, 78, 88, 92, 125, 150, 148, 155, 102, 88, 90, 95],
    },
    "策馬特": {
        alt: "1608m", emoji: "",
        hi:   [0,  2, 6,  10, 15, 19, 21, 20, 16, 12, 5,  1],
        lo:   [-8, -8, -4, -1, 3,  7,  9,  9,  6,  2, -3, -7],
        rain: [45, 38, 42, 48, 75, 80, 72, 78, 58, 62, 55, 52],
    },
    "少女峰 Jungfraujoch": {
        alt: "3454m", emoji: "",
        hi:   [-10, -11, -10, -7, -3, 0,  2,  2,  0,  -3, -7, -9],
        lo:   [-16, -17, -15, -13, -9, -6, -4, -4, -6, -9, -13, -15],
        rain: [150, 130, 145, 155, 170, 160, 155, 150, 110, 100, 120, 150], 
    }
    };

  const MONTHS = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  const SUMMER_MONTHS = [4,5,6,7,8]; // index 0-based, May-Sep
  let active = "蘇黎世";
  let chart = null;

  // Build tabs
  const tabsEl = document.getElementById('clim-tabs');
  Object.keys(CITIES).forEach(city => {
    const btn = document.createElement('button');
    btn.className = 'clim-tab' + (city === active ? ' active' : '');
    btn.textContent = CITIES[city].emoji + ' ' + city;
    btn.onclick = () => { active = city; updateAll(); };
    btn.dataset.city = city;
    tabsEl.appendChild(btn);
  });

  function updateTabs() {
    tabsEl.querySelectorAll('.clim-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.city === active);
    });
  }

  function updateStats() {
    const d = CITIES[active];
    const maxHi = Math.max(...d.hi);
    const minLo = Math.min(...d.lo);
    const totalRain = d.rain.reduce((a,b)=>a+b,0);
    const summerRain = SUMMER_MONTHS.reduce((s,i)=>s+d.rain[i],0);
    document.getElementById('clim-stats').innerHTML = `
      <div class="clim-stat">
        <div class="clim-stat-label">年雨量</div>
        <div class="clim-stat-val">${totalRain}mm</div>
      </div>
    `;
  }

  function buildChart() {
    const d = CITIES[active];
    const ctx = document.getElementById('clim-chart').getContext('2d');
    chart = new Chart(ctx, {
      data: {
        labels: MONTHS,
        datasets: [
          {
            type: 'bar',
            label: '降雨量 (mm)',
            data: d.rain,
            backgroundColor: 'rgba(144,202,249,0.55)',
            borderColor: 'rgba(21,101,192,0.3)',
            borderWidth: 1,
            borderRadius: 3,
            yAxisID: 'yRain',
            order: 2,
          },
          {
            type: 'line',
            label: '月均高溫 (°C)',
            data: d.hi,
            borderColor: '#D32F2F',
            backgroundColor: 'rgba(211,47,47,0.08)',
            borderWidth: 2.5,
            pointRadius: 4,
            pointBackgroundColor: '#D32F2F',
            tension: 0.4,
            fill: false,
            yAxisID: 'yTemp',
            order: 1,
          },
          {
            type: 'line',
            label: '月均低溫 (°C)',
            data: d.lo,
            borderColor: '#1565C0',
            backgroundColor: 'rgba(21,101,192,0.08)',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#1565C0',
            tension: 0.4,
            fill: false,
            yAxisID: 'yTemp',
            order: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => {
                if (ctx.dataset.label.includes('mm')) return ` 雨量: ${ctx.raw} mm`;
                if (ctx.dataset.label.includes('高')) return ` 高溫: ${ctx.raw}°C`;
                return ` 低溫: ${ctx.raw}°C`;
              }
            }
          }
        },
        scales: {
          yTemp: {
            type: 'linear',
            position: 'left',
            grid: { color: 'rgba(0,0,0,0.06)' },
            ticks: { font: { size: 11 }, callback: v => v + '°' },
            title: { display: true, text: '溫度 °C', font: { size: 11 } },
          },
          yRain: {
            type: 'linear',
            position: 'right',
            grid: { display: false },
            ticks: { font: { size: 11 }, callback: v => v + 'mm' },
            title: { display: true, text: '雨量 mm', font: { size: 11 } },
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 8 } },
            title: { display: true, text: '月份', font: { size: 11 } },
          }
        }
      }
    });
  }

  function updateChart() {
    const d = CITIES[active];
    chart.data.datasets[0].data = d.rain;
    chart.data.datasets[1].data = d.hi;
    chart.data.datasets[2].data = d.lo;
    chart.update('active');
  }

  function updateAll() {
    updateTabs();
    updateChart();
    updateStats();
  }

  buildChart();
  updateStats();
})();
</script>


<a id="conclusions"></a>
## 結論

行李有限，大家一定要精算一下自己的行李，別太帶多，也別帶太少。最完美的行李就是裝在行李箱的每件衣物都有出場的機會，且你也沒有冷到不行或熱到不行的狀況。

恭喜你，現在衣物搞定了，如果不確定瑞士行程怎麼安排或者該如何買票，歡迎使用本站票券精算器，只要輸入行程就可以知道要買什麼票比較划算。

如果你打算買半價卡或 Swiss Travel Pass (STP) 的話，可以參考以下購買連結：[KKday 買半價卡](https://www.kkday.com/zh-tw/product/128031-swiss-half-fare-e-ticket-switzerland?cid=24072)與 [KKday 買 STP](http://kkday.com/zh-tw/product/2524-swiss-travel-pass?cid=24072)。

<div class="swiss-buy-container">
    <a href="https://calculator.swisspro.tw/?itinerary_id=40262633&utm_source=swisspro_blog&utm_campaign=saver_day_pass" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       省瑞票券精算器（少女峰範例行程）
    </a>
</div>

