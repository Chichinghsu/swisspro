---
layout: post
title: "【2026 厄希嫩湖全攻略】Oeschinensee 纜車怎麼搭？健行路線一次看"
description: "厄希嫩湖票怎麼買？要健行還是要搭纜車？路線推薦，看 Swiss Travel Pass 有沒有包含，2026 最新改版後伯恩高地通票不適用。"
date: 2026-07-19
categories: 蘇黎世
image: /img/bern/oeschinensee-guide.webp
thumbnail: /img/bern/oeschinensee-guide.webp
og_image:  /img/bern/oeschinensee-guide.webp
permalink: /blog/oeschinensee-guide/
---

厄希嫩湖 Oeschinensee 最近在 Instagram 上爆紅，大批遊客前來朝聖，超市阿伯店員都直接說英文。此文來介紹一下厄希嫩湖怎麼去，纜車、健行路線等等，也分享一下我對此景點的評價。

<style>
.swiss-slider-container {
  position: relative;
  max-width: 400px;
  margin: 20px auto;
  overflow: hidden;
}

.swiss-slider-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; 
}

.swiss-slider-wrapper::-webkit-scrollbar {
  display: none;
}

.swiss-slider-item {
  flex: 0 0 100%;
  width: 100%;
  margin: 0;
  scroll-snap-align: start;
  text-align: center;
}

.swiss-slider-item img {
  width: 100%;
  height: auto;
  display: block;
}

.swiss-slider-item figcaption {
  margin-top: 8px;
  font-size: 1em;
  color: #555;
}

.slider-arrow {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.slider-arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev-arrow { left: 10px; }
.next-arrow { right: 10px; }

@media (max-width: 768px) {
  .slider-arrow {
    display: none !important;
  }
}
.znav *{box-sizing:border-box;margin:0;padding:0}
.znav{font-family:system-ui,sans-serif;width:100%}
.znav-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:8px;
}
@media(max-width:600px){
  .znav-grid{grid-template-columns:repeat(2,1fr);}
}
.znav-btn{
  display:flex;flex-direction:column;gap:5px;
  padding:12px 14px;
  background:#fff;
  border:0.5px solid #D3D1C7;
  border-radius:12px;
  cursor:pointer;text-decoration:none;text-align:left;
  transition:border-color .15s,background .15s;
}
.znav-btn:hover{border-color:#C00000;background:#FFF8F8}
.znav-icon{font-size:18px;line-height:1;margin-bottom:2px}
.znav-label{font-size:13px;font-weight:500;color:#2C2C2A;line-height:1.3}
.znav-desc{font-size:11px;color:#888780;line-height:1.5;margin-top:1px}
</style>

<a id="nav"></a>
<div class="znav">
  <div class="znav-grid">

    <a href="#intro" class="znav-btn">
      <div class="znav-icon">🏔️</div>
      <div class="znav-label">厄希嫩湖交通與簡介</div>
      <div class="znav-desc">天氣 即時影像 怎麼到這裡？</div>
    </a>

    <a href="#cablecar" class="znav-btn">
      <div class="znav-icon">🚠</div>
      <div class="znav-label">纜車攻略</div>
      <div class="znav-desc">纜車價格 營運時間</div>
    </a>

    <a href="#hiking" class="znav-btn">
      <div class="znav-icon">🥾</div>
      <div class="znav-label">健行攻略</div>
      <div class="znav-desc">不搭纜車直接爬上山</div>
    </a>

    <a href="#conclusions" class="znav-btn">
      <div class="znav-icon">✅</div>
      <div class="znav-label">省瑞結論</div>
      <div class="znav-desc">最後總結</div>
    </a>

  </div>
</div>

<a id="intro"></a>
## 厄希嫩湖交通與簡介

厄希嫩湖 Oeschinensee 位於伯恩高地地區 Berner Oberland，這附近還有不少知名景點，如少女峰地區 Jungfrau 與藍湖 Blausee 等等。厄希嫩湖交通方便，從伯恩 Bern 搭火車一小時左右到坎德施泰格 Kandersteg，接著從這個小鎮走路約 15 鐘可到山腳下纜車站，再轉搭纜車到山上（也可以直接爬到山上），最後步行約半小時即可抵達厄希嫩湖。請見下方簡單整理兩種路線

<style>
.rg{padding:1rem 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a1a}
.tabs{display:flex;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;margin-bottom:1rem}
.tab{flex:1;padding:10px 8px;font-size:14px;font-weight:500;text-align:center;cursor:pointer;border:none;background:#f5f5f5;color:#666;transition:background 0.15s,color 0.15s;font-family:inherit;border-right:1px solid #e0e0e0}
.tab:last-child{border-right:none}
.tab.active-a{background:#e8f0fe;color:#1a56db}
.tab.active-g{background:#e6f4ea;color:#1e7e34}
.tab-badge{display:inline-block;font-size:11px;padding:1px 7px;border-radius:10px;margin-right:5px;font-weight:600}
.badge-a{background:#1a56db;color:#fff}
.badge-g{background:#1e7e34;color:#fff}
.panel{display:none}
.panel.show{display:block}
.route-card{background:#fff;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden}
.route-header{padding:12px 16px;border-bottom:1px solid #e0e0e0;background:#fafafa}
.rh-title{font-size:14px;font-weight:600;color:#1a1a1a;margin:0 0 2px}
.rh-meta{font-size:12px;color:#888;margin:0}
.steps{padding:14px 16px;display:flex;flex-direction:column}
.step-row{display:flex;align-items:flex-start}
.spine{display:flex;flex-direction:column;align-items:center;width:28px;flex-shrink:0}
.dot{width:9px;height:9px;border-radius:50%;border:2px solid;flex-shrink:0;margin-top:4px}
.dot-a{background:#dbeafe;border-color:#1a56db}
.dot-g{background:#d1fae5;border-color:#1e7e34}
.dot-end-a{background:#1a56db;border-color:#1a56db}
.dot-end-g{background:#1e7e34;border-color:#1e7e34}
.vline{width:2px;flex:1;min-height:10px;margin:3px 0}
.vline-a{background:#bfdbfe}
.vline-g{background:#bbf7d0}
.sc{flex:1;padding-bottom:13px}
.place{font-size:14px;font-weight:500;color:#1a1a1a;margin:0 0 3px}
.action{display:inline-flex;align-items:center;gap:4px;font-size:12px;border-radius:20px;padding:2px 10px;border:1px solid #e0e0e0;background:#f9f9f9;margin-top:3px}
.act-a{color:#1a56db}
.act-g{color:#1e7e34}
.tip{margin:0 16px 14px;padding:10px 13px;border-radius:8px;font-size:12px;display:flex;gap:8px;align-items:flex-start;line-height:1.65}
.tip-a{background:#eff6ff;border:1px solid #bfdbfe;color:#1e40af}
.tip-g{background:#f0fdf4;border:1px solid #bbf7d0;color:#166534}
.compare{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.ci{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px 14px}
.ci-label{font-size:14px;color:#999;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px;font-weight:600}
.cr{display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px}
.cr:last-child{margin-bottom:0}
.ck{color:#666}
.cv-a{font-weight:600;color:#1a56db}
.cv-g{font-weight:600;color:#1e7e34}
.rec{margin-top:10px;padding:10px 14px;background:#fffbeb;border:1px solid #fcd34d;border-left:3px solid #f59e0b;border-radius:8px;font-size:12px;color:#78350f;display:flex;gap:8px;align-items:flex-start;line-height:1.65}
@media(max-width:480px){
  .tab{font-size:13px;padding:9px 6px}
  .place{font-size:13px}
  .compare{grid-template-columns:1fr 1fr}
  .cr{font-size:11px}
}
</style>

<div class="rg">
  <div class="tabs" role="tablist">
    <button class="tab active-a" role="tab" aria-selected="true" onclick="switchTab('a')">
      <span class="tab-badge badge-a">A</span>纜車路線
    </button>
    <button class="tab" role="tab" aria-selected="false" onclick="switchTab('g')">
      <span class="tab-badge badge-g">B</span>健行路線
    </button>
  </div>

  <div id="panel-a" class="panel show">
    <div class="route-card">
      <div class="route-header">
        <p class="rh-title">纜車路線（輕鬆，嬰兒車可）</p>
        <p class="rh-meta">總時間約 45 分・無明顯爬升</p>
      </div>
      <div class="steps">
        <div class="step-row">
          <div class="spine"><div class="dot dot-a"></div><div class="vline vline-a"></div></div>
          <div class="sc"><p class="place">Kandersteg 火車站</p>
          <span class="action act-a">🚶 步行 15 分 或 242 號公車</span></div>
        </div>
        <div class="step-row">
          <div class="spine"><div class="dot dot-a"></div><div class="vline vline-a"></div></div>
          <div class="sc">
            <p class="place">Kandersteg 纜車站</p>
            <span class="action act-a">🚡 搭纜車上山</span>
          </div>
        </div>
        <div class="step-row">
          <div class="spine"><div class="dot dot-a"></div><div class="vline vline-a"></div></div>
          <div class="sc">
            <p class="place">山上纜車站 Oeschinen</p>
            <span class="action act-a">🚶 步行 30 分 或 付費接駁車</span>
          </div>
        </div>
        <div class="step-row">
          <div class="spine"><div class="dot dot-end-a"></div></div>
          <div class="sc" style="padding-bottom:0"><p class="place">Oeschinensee 湖邊</p></div>
        </div>
      </div>
    </div>
  </div>

  <div id="panel-b" class="panel">
    <div class="route-card">
      <div class="route-header">
        <p class="rh-title">健行路線（適合體力好的人）</p>
        <p class="rh-meta">總時間約 1 小時 20 分・爬升 450 公尺</p>
      </div>
      <div class="steps">
        <div class="step-row">
          <div class="spine"><div class="dot dot-g"></div><div class="vline vline-g"></div></div>
          <div class="sc"><p class="place">Kandersteg 火車站</p>
          <span class="action act-g">🚶 步行 15 分</span></div>
        </div>
        <div class="step-row">
          <div class="spine"><div class="dot dot-g"></div><div class="vline vline-g"></div></div>
          <div class="sc">
            <p class="place">登山步道入口</p>
            <span class="action act-g">⛰️ 爬山 1 小時 20 分・爬升 450 公尺</span>
          </div>
        </div>
        <div class="step-row">
          <div class="spine"><div class="dot dot-end-g"></div></div>
          <div class="sc" style="padding-bottom:0"><p class="place">Oeschinensee 湖邊</p></div>
        </div>
      </div>
    </div>
  </div>

  <div class="compare">
    <div class="ci">
      <p class="ci-label">路線 A・纜車</p>
      <div class="cr"><span class="ck">時間</span><span class="cv-a">約 45 分</span></div>
      <div class="cr"><span class="ck">體力需求</span><span class="cv-a">低（嬰兒車可）</span></div>
      <div class="cr"><span class="ck">費用</span><span class="cv-a">40 瑞郎</span></div>
      <div class="cr"><span class="ck">STP/半價卡 折扣</span><span class="cv-a">50%</span></div>
    </div>
    <div class="ci">
      <p class="ci-label">路線 B・健行</p>
      <div class="cr"><span class="ck">時間</span><span class="cv-g">約 1 小時 20 分</span></div>
      <div class="cr"><span class="ck">體力需求</span><span class="cv-g">中</span></div>
      <div class="cr"><span class="ck">費用</span><span class="cv-g">免費</span></div>
      <div class="cr"><span class="ck">STP/半價卡 折扣</span><span class="cv-g">-</span></div>
    </div>
  </div>
</div>

<script>
function switchTab(t){
  document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('show')});
  var tabs=document.querySelectorAll('.tab');
  tabs.forEach(function(b){b.classList.remove('active-a','active-g');b.setAttribute('aria-selected','false')});
  if(t==='a'){
    document.getElementById('panel-a').classList.add('show');
    tabs[0].classList.add('active-a');tabs[0].setAttribute('aria-selected','true');
  }else{
    document.getElementById('panel-b').classList.add('show');
    tabs[1].classList.add('active-g');tabs[1].setAttribute('aria-selected','true');
  }
}
</script>

<figure>
  <img src="{{ '/img/bern/oeschinensee.webp' | relative_url }}" alt="厄希嫩湖">
  <figcaption>厄希嫩湖本人，這附近整區都是世界自然遺產</figcaption>
</figure>

### 怎去坎德施泰格 Kandersteg？

厄希嫩湖一定會從坎德施泰格出發，若自駕開車可直接導航到 Kandersteg 火車站，旁邊有停車場可停，但旺季一位難求，建議搭大眾運輸比較不會找車位找很久，<a href="https://maps.app.goo.gl/MBjtWqAdA3wKU3EF8" 
        target="_blank" 
        rel="nofollow noopener">
        Kandersteg 火車站 (Google Maps)
</a>。也可以直接開車到纜車站，但纜車站那邊的車位比較少<a href="https://maps.app.goo.gl/Ty9NGfCc5ocLQwM96" 
        target="_blank" 
        rel="nofollow noopener">
        Kandersteg 纜車站 (Google Maps)
</a>。人太多的時候會有管制人員，叫你去停很遠的地方。

除了開車，搭火車只有一小時一班的 RE1 列車會到，這台車會從伯恩 Bern 開到布里格 Brig。也就是說要來這邊的話有幾個還算順路的走法

1. 從伯恩/蘇黎世/琉森出發往南（在伯恩 Bern 轉車）
1. 從米蘭/布里格出發往北（在布里格 Brig 轉車）
1. 從茵特拉肯/少女峰地區往西（在施皮茲 Spiez 轉車）

以下整理這班火車停靠的大站，與前往坎德施泰格需要的時間與票價（下方表格為單程原價，持半價卡者可半價，Swiss Travel Pass (STP) 免費搭乘），因為一小時只有一班車，建議先查好回程時刻表，以防剛好錯過要等很久，查時刻表建議用 SBB App 查詢。

- {% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- {% assign target_post = site.posts | where: "url", "/blog/how-to-sbb-app/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

| 出發地 | 時間（分） | 單程原價價格（瑞郎） | 
| :--- | :--- | :--- |
| 伯恩 Bern | 61  | 36 |
| 施皮茲 Spiez | 28 | 19.4 |
| 圖恩 Thun | 39 | 23.8 | 
| 布里格 Brig | 37 | 23.8 |
| 茵特拉肯東 Interlaken Ost | 71  | 28 | 

<i>從茵特拉肯過去的話需在施皮茲轉車一次。</i>

- {% assign target_post = site.posts | where: "url", "/blog/bern-guide/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

### 山上即時影像 Webcam 與現在天氣

要上山之前千萬先看一下即時影像 <a href="https://www.Oeschinensee.ch/webcams/" 
        target="_blank" 
        rel="nofollow noopener">
        官網 Webcam
</a>，不然天氣不好上去就什麼都看不到，纜車也可能停駛。另外，天氣不好下雨的話建議別健行，那邊的路看起來蠻滑的。

用瑞士天氣 App MeteoSwiss 的話可選 Kandersteg 看那邊的天氣，關於這個 App 的介紹請見此文：{% assign target_post = site.posts | where: "url", "/blog/meteoswiss-app-guide/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>。

### 伯恩高地通票（⚠️ 2026 年移除了厄希嫩湖纜車）

如果打算在這附近逗留數日的旅客，可以考慮入手伯恩高地通票 Berner Oberland Pass (BO-Pass)，像是小型版的 STP，像是這條 RE1 路線就可以免費搭乘，但是前往厄希嫩湖的纜車就不包含，對於要去這個景點的旅客就沒特別划算。

這張 Pass 還包含了圖恩湖、布里恩茲湖遊船、布里恩茲蒸汽火車等等，可參考下文或者使用本站的瑞士票券精算器：[範例 4 天 BO-Pass 行程推薦](https://calculator.swisspro.tw/?itinerary_id=f529bba7)。如果有打算去這些地方的人可以考慮，單純厄希嫩湖的話不是很划算。

- {% assign target_post = site.posts | where: "url", "/blog/berner-oberland-pass/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

<div class="swiss-buy-container">
    <a href="https://www.kkday.com/zh-tw/product/152139-regional-berner-oberland-pass-switzerland?cid=24072" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       KKday 伯恩高地地區通行證
    </a>
</div>

<a href="#nav">👆 回到最上面選單</a>

<a id="cablecar"></a>
## 纜車攻略

火車站下車之後大概要步行 15 分鐘才會到纜車站，懶得走路的話站外有公車 242 號（往 Talstation Oeschinen）搭五分鐘就到，不用走路。上車地點就在火車站外面，一出站就會看到（見下圖）。注意這邊有不只一條公車路線，別搭錯。

公車要錢，有 STP 可免費搭，不然記得買票。票價 3 瑞郎，半價卡 2.2 瑞郎，可用 SBB App 買，選擇 Kandersteg, Bahnhof 到 Kandersteg, Talstat. Oeschinen。

要走路的話路上都有指標，或者跟著人群走，導航的話纜車站位置如下：<a href="https://maps.app.goo.gl/Ty9NGfCc5ocLQwM96" 
        target="_blank" 
        rel="nofollow noopener">
        纜車站位置 (Google Maps)
</a>。

<figure style="max-width: 400px; margin: 20px auto;">
  <img src="{{ '/img/bern/oeschinensee-bus.webp' | relative_url }}" alt="往纜車站的公車">
  <figcaption>從火車站往纜車站的 242 號公車</figcaption>
</figure>

建議先上網買好票，不然要在現場排隊可能要等很久，而且纜車乘客量有限，等於是說買票要排隊，買到了還要等纜車。另外夏天（六月到九月）期間，「上山」一定要預約訂位才能搭乘，訂位費 5 瑞郎，下山就不用預約。買票可從<a href="https://Oeschinensee.skiperformance.com/en/store#/en/buy?skugroup_id=5337" 
        target="_blank" 
        rel="nofollow noopener">
        官網（點我）
</a>直接購票，或者現場排隊買，纜車票價見下方表格。

預約會給你一個時段，你必須在那個時段搭乘才可，沒有的話就只能現場慢慢等。纜車約上升 400 多公尺，從山腳下海拔 1200 公尺左右到山上 1680 公尺，所以沒有高山症的問題。

<figure>
  <img src="{{ '/img/bern/oeschinensee-cable-car.webp' | relative_url }}" alt="纜車站">
  <figcaption>纜車站的排隊人潮，上山一定要預約訂位</figcaption>
</figure>

纜車 2026 夏季票價如下（5 瑞郎為訂位費）

| 厄希嫩湖纜車 | 價格（瑞郎） | 價格（台幣） | 
| :--- | :--- | :--- |
| 來回（原價） | 35+5  | 1600 |
| 來回（半價卡、STP） | 17.5+5 | 900 |
| 只上山（原價） | 26.2+5  | 1248 | 
| 只上山（半價卡、STP） | 13.1+5  | 724 | 
| 只下山（原價） | 26.2  | 1048 | 
| 只下山（半價卡、STP） | 13.1  | 524 | 

需注意這段纜車，SBB 的 Saver Day Pass 「沒有」折扣，伯恩高地通票也「沒有」，都是原價。只有 STP 和半價卡打五折，但是訂位費沒有打折還是 5 瑞郎，而且夏天會被強制訂位。

- {% assign target_post = site.posts | where: "url", "/blog/saver-day-pass/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- {% assign target_post = site.posts | where: "url", "/blog/berner-oberland-pass/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

### 山上接駁車 E-Taxi

因為從山上的纜車站還要走個半小時才能到湖邊，所以這邊也有提供接駁車可以搭（半小時一班），不過要錢。但這段半小時的路基本上平緩，推嬰兒車/輪椅也可以走，所以不太需要擔心。

<figure style="max-width: 400px; margin: 20px auto;">
  <img src="{{ '/img/bern/oeschinensee-e-taxi.webp' | relative_url }}" alt="接駁車 E-Taxi">
  <figcaption>接駁車可從山上纜車站載你到湖邊</figcaption>
</figure>

<a href="#nav">👆 回到最上面選單</a>

<a id="hiking"></a>
## 健行攻略

健行之前，先介紹一下瑞士健行指標。瑞士到處都會看到黃色的健行路線牌子（見下圖），其中如果箭頭是黃色的，代表是比較簡單的路線。如果有白紅白條紋，代表是中級、有難度的路線。

我個人的判斷標準是，黃色的通常不一定要穿登山鞋也可以完成。白紅白的一定要做好準備再上山，登山鞋基本上必備，有時候還需要登山杖、手套等，一定要先查好路線、確定天氣再出發。

<figure style="max-width: 400px; margin: 20px auto;">
  <img src="{{ '/img/zermatt/hiking_sign.webp' | relative_url }}" alt="瑞士健行指標">
  <figcaption>瑞士健行指標，一定要認清楚</figcaption>
</figure>

省瑞計劃精神，能省則省，纜車來回 40 瑞郎，半價卡也要 22.5 瑞郎，所以直接爬上山。厄希嫩湖一如瑞士各個地方，健行有許多條路線供選擇，這邊介紹不搭纜車，直接從坎德施泰格爬上去的路線（<a href="https://www.Oeschinensee.ch/en/" 
        target="_blank" 
        rel="nofollow noopener">
        官網
</a>的路線 A，歸類在黃色初級路線），其他路線很多現在（2026 七月）都沒開放，有落石危險。

<figure>
  <img src="{{ '/img/bern/oeschinensee-hiking.webp' | relative_url }}" alt="健行的入口">
  <figcaption>健行的入口，正式進入登山步道</figcaption>
</figure>

<div class="ci">
      <p class="ci-label">健行上山路線</p>
      <div class="cr"><span class="ck">時間</span><span class="cv-a">約 1 小時 20 分</span></div>
      <div class="cr"><span class="ck">爬升</span><span class="cv-a">約 450 公尺</span></div>
      <div class="cr"><span class="ck">路面</span><span class="cv-a">大部分為石頭路（見上圖）</span></div>
      <div class="cr"><span class="ck">建議</span><span class="cv-a">有登山鞋的話穿登山鞋，沒有的話運動鞋</span></div>
</div>

指標沿路都很清楚，只要看往 Oeschinensee 就沒問題，而且走的人很多，跟著大家走就好，不怕迷路。不過這段路大概上升 450 公尺（從大概海拔 1200 到 1650），我爬了一小時左右，前面很陡，心跳到達 150 以上，後面就比較平緩，但蠻曬，一定要防曬（帽子、墨鏡、擦防曬等等）。

沿途風景都不錯，可以往回看坎德施泰格小鎮山谷。建議一開始不要走太快，真的很喘，停下來拍拍照。平常沒有什麼在運動的人建議可用登山杖輔助（或者直接去搭纜車，不然隔天腳動不了）。最後到湖邊有餐廳可以吃東西，也可以山腳下 Coop 買好三明治，野餐好好休息。

不過上面的纜車價格表可看出，買單程票其實沒有很划算，來回 40 但下山的話就要 26.2（沒 STP、半價卡），有折扣的話（持 STP、半價卡）稍微合理一點，來回 22.5 瑞郎，單程下山的話 13.1 瑞郎。可自己評估一下，我是覺得要搭就上下都搭，要爬就上下都爬，比較合理。

爬下山就蠻快的我自己是一小時內就回到坎德施泰格，但下山膝蓋很痛苦，要一直煞車，大家也是量力而為。對了，路上看到很多人帶狗來爬，還有人在慢跑。

<a href="#nav">👆 回到最上面選單</a>

<a id="conclusions"></a>
## 結論

老少咸宜的景點，嬰兒推車都沒有問題（搭纜車的話），只是人非常的多，建議做好心理準備，纜車要排一陣子，到湖邊餐廳也要排一下。懶得排隊且體力允許的話，直接爬上山運動運動也是一個選擇。

<div class="tip-box" markdown="1">
歡迎使用本站的瑞士旅遊小工具
- [省瑞票券速查器](https://calculator.swisspro.tw/?p=validator)：這段 Swiss Travel Pass 能搭嗎？要提早買嗎？怎麼買？要提早預約嗎？多少錢？
- [省瑞票券精算器](https://calculator.swisspro.tw/?itinerary_id=f529bba7)：幫我精算 STP 還是半價卡划算
</div>

<a href="#nav">👆 回到最上面選單</a>


你可能也想要看這些 ... 
- {% assign target_post = site.posts | where: "url", "/blog/meteoswiss-app-guide/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- {% assign target_post = site.posts | where: "url", "/blog/how-to-sbb-app/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- {% assign target_post = site.posts | where: "url", "/blog/saver-day-pass/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- {% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
- <a href="https://swisspro.tw/blog/" class="swiss-red-link">看其他更多瑞士攻略 ...</a>