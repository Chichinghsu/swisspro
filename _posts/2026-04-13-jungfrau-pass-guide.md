---
layout: post
title: "【2026 少女峰交通全攻略】少女峰旅行通票？搭配半價卡 還是 STP 怎麼選？"
date: 2026-04-13
categories: [少女峰, 精算攻略]
image: /img/jungfrau/jungfrau_post.webp
thumbnail: /img/jungfrau/jungfrau_post.webp
og_image: /img/jungfrau/jungfrau_post.webp
description: "少女峰上山交通可說是世上最貴，一篇看懂少女峰旅行通票 Jungfrau Travel Pass 值不值得（內附試算工具），教你如何利用半價卡省上加省。"
permalink: /blog/jungfrau-pass-guide/
last_modified_at: 2026-06-01
---

少女峰 (Jungfrau) 不需贅言，瑞士經典中的經典，幾乎是所有旅客來瑞士的必去景點。但一看到那驚人的火車票價，上下山一趟要價約 200 瑞郎（約 8000 新台幣），都會覺得，我有看錯嗎？你沒有看錯，但有幾招可以讓你省一些車費，這篇帶你拆解最強省錢組合！


<a id="nav"></a>
## 快速導覽
- [少女峰景點與簡介](#introduction)
- [路線懶人包](#price)
- [少女峰旅行通票](#jtp)
- [First 冒險活動票券](#first)
- [少女峰早安票](#goodmorning)
- [範例行程與票價精算](#example)
- [結論](#conclusions)

<style>
.j-wrap { font-family: 'PingFang TC','Microsoft JhengHei',sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid var(--color-border-secondary); border-radius: 16px; background: var(--color-background-primary); }
.j-title { color: #1d4ed8; margin: 0 0 20px; text-align: center; font-size: 1.35em; }
.j-section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: var(--color-text-tertiary); margin: 0 0 7px; }
.j-seg { display: flex; flex-wrap: wrap; background: var(--color-background-secondary); padding: 4px; border-radius: 10px; margin-bottom: 16px; gap: 3px; }
.j-seg-btn { flex: 1; text-align: center; padding: 8px 3px; cursor: pointer; border-radius: 7px; font-weight: 600; font-size: 12px; transition: 0.2s; color: var(--color-text-secondary); white-space: nowrap; min-width: 50px; }
.j-seg-btn.on { background: #1d4ed8; color: #fff; }
.j-toggle-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; padding: 11px 14px; background: var(--color-background-secondary); border-radius: 10px; border: 0.5px solid var(--color-border-secondary); }
.j-toggle-label { font-weight: 600; font-size: 14px; color: var(--color-text-primary); }
.j-toggle-sub { font-size: 11px; color: var(--color-text-tertiary); }
.sw { position: relative; display: inline-block; width: 48px; height: 26px; flex-shrink: 0; }
.sw input { opacity: 0; width: 0; height: 0; }
.sw .sl { position: absolute; cursor: pointer; inset: 0; background: #ccc; border-radius: 34px; transition: .3s; }
.sw .sl:before { position: absolute; content: ""; height: 18px; width: 18px; left: 4px; bottom: 4px; background: white; border-radius: 50%; transition: .3s; }
.sw input:checked + .sl { background: #1d4ed8; }
.sw input:checked + .sl:before { transform: translateX(22px); }

/* Activity rows */
.j-items { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.j-item { padding: 11px 13px; border: 0.5px solid var(--color-border-secondary); border-radius: 10px; display: grid; grid-template-columns: 18px 1fr auto; gap: 0 10px; align-items: center; cursor: pointer; transition: border-color .15s; }
.j-item:has(input:checked) { border-color: #1d4ed8; background: #eff6ff; }
.j-item input[type=checkbox] { width: 17px; height: 17px; accent-color: #1d4ed8; cursor: pointer; }
.j-item-right { text-align: right; }
.j-item-name { font-size: 14px; color: var(--color-text-primary); font-weight: 500; line-height: 1.3; }
.j-item-sub  { font-size: 11px; color: var(--color-text-tertiary); margin-top: 1px; }
.j-item-price { font-size: 13px; font-weight: 700; color: var(--color-text-primary); white-space: nowrap; }
.j-item-unit  { font-size: 11px; color: var(--color-text-tertiary); white-space: nowrap; }

/* summary */
.j-summary { padding: 18px; border-radius: 12px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-secondary); }
.j-sum-row { display: flex; justify-content: space-between; margin-bottom: 7px; font-size: 14px; color: var(--color-text-secondary); }
.j-sum-row b { color: var(--color-text-primary); }
.j-sum-row.blue b { color: #1d4ed8; }
.j-divider-line { border: none; border-top: 0.5px solid var(--color-border-tertiary); margin: 10px 0; }
.j-verdict { text-align: center; padding: 14px; border-radius: 9px; font-weight: 700; font-size: 15px; }
.j-verdict.yes { background: #dcfce7; color: #15803d; }
.j-verdict.no  { background: #fee2e2; color: #b91c1c; }
.j-verdict.neutral { background: var(--color-background-tertiary); color: var(--color-text-secondary); }
.j-note { font-size: 11px; color: var(--color-text-tertiary); margin-top: 12px; line-height: 1.55; }
.j-disc-row { display: flex; gap: 8px; margin-bottom: 18px; }
.j-disc-row .j-toggle-row { flex: 1; margin-bottom: 0; }
</style>

<div class="j-wrap">
  <h3 class="j-title">少女峰旅行通票精算器</h3>

  <!-- Days -->
  <div class="j-section-label">計劃停留天數（連續）</div>
  <div class="j-seg" id="seg-days"></div>

  <!-- Discount cards -->
  <div class="j-section-label">持有優惠卡</div>
  <div class="j-disc-row">
    <div class="j-toggle-row">
      <div class="j-toggle-label">Swiss Travel Pass</div>
      <label class="sw"><input type="checkbox" id="stp" onchange="onDiscChange('stp')"><span class="sl"></span></label>
    </div>
    <div class="j-toggle-row">
      <div class="j-toggle-label">半價卡</div>
      <label class="sw"><input type="checkbox" id="halbtax" onchange="onDiscChange('halbtax')"><span class="sl"></span></label>
    </div>
  </div>

  <!-- Activities -->
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:7px;">
    <div class="j-section-label" style="margin-bottom:0;">計劃的景點</div>
    <button onclick="resetAll()" style="font-size:11px; font-weight:600; color:var(--color-text-tertiary); background:#fee2e2; border:0.5px solid var(--color-border-secondary); border-radius:6px; padding:3px 10px; cursor:pointer;">清除全部重選</button>
  </div>
  <div class="j-items" id="j-items"></div>

  <!-- Summary -->
  <div class="j-summary">
    <div class="j-sum-row"><span>分開購票合計</span><b id="s-indiv">0.00 CHF</b></div>
    <div class="j-sum-row blue"><span id="s-card-label">少女峰通行證</span><b id="s-card">— CHF</b></div>
    <hr class="j-divider-line">
    <div class="j-verdict neutral" id="s-verdict">請勾選景點並選擇天數</div>
  </div>
  
</div>

<script>
// Pass prices: { days: [full, halfPrice] }
const PASS_PRICES = {
  3: [210, 165],
  4: [235, 180],
  5: [270, 210],
  6: [290, 225],
  7: [310, 240],
  8: [330, 255],
};

// Activities: full, stp, half, card prices
const ACTIVITIES = [
  { id:'harder',        name:'哈德昆觀景台',                       nameEn:'Harder Kulm',                         full:44,    stp:22,    half:22,    card:0   },
  { id:'jung_grind',    name:'格林德瓦 ↔ 少女峰巔',              nameEn:'Grindelwald ↔ Jungfraujoch',          full:249.2, stp:189.6, half:129.6, card:89  },
  { id:'jung_laut',     name:'勞特布魯嫩 ↔ 少女峰巔',            nameEn:'Lauterbrunnen ↔ Jungfraujoch',        full:250,   stp:178.8, half:125,   card:89  },
  { id:'first',         name:'格林德瓦 ↔ First 纜車',              nameEn:'Grindelwald ↔ First',                 full:76,    stp:38,    half:38,    card:0   },
  { id:'lauterbrunnen', name:'格林德瓦 ↔ 勞特布魯嫩',             nameEn:'Grindelwald ↔ Lauterbrunnen',         full:18.8,  stp:0,     half:9.4,   card:0   },
  { id:'wengen',        name:'勞特布魯嫩 ↔ 溫根',        nameEn:'Lauterbrunnen ↔ Wengen',              full:7.2,   stp:0,     half:3.6,   card:0   },
  { id:'brienz',        name:'布里恩茨湖遊船',                      nameEn:'Brienzersee Cruise',                  full:75,    stp:0,     half:37.5,  card:0   },
  { id:'schynige',      name:'威爾德斯維爾 ↔ 徐尼格觀景台', nameEn:'Wilderswil ↔ Schynige Platte',  full:68,    stp:32,    half:32,    card:0   },
  { id:'murren',        name:'勞特布魯嫩 ↔ 穆倫',                  nameEn:'Lauterbrunnen ↔ Mürren',              full:32.8,  stp:0,     half:16.4,  card:0   },
];

let selDays = 3;

// ── Days seg ───────────────────────────────────────────────────────────────
const segDays = document.getElementById('seg-days');
[3,4,5,6,7,8].forEach(d => {
  const btn = document.createElement('div');
  btn.className = 'j-seg-btn' + (d === selDays ? ' on' : '');
  btn.textContent = d + ' 天';
  btn.dataset.d = d;
  btn.onclick = () => {
    selDays = d;
    segDays.querySelectorAll('.j-seg-btn').forEach(b => b.classList.toggle('on', +b.dataset.d === d));
    calc();
  };
  segDays.appendChild(btn);
});

// ── Activity rows ──────────────────────────────────────────────────────────
const itemsEl = document.getElementById('j-items');
ACTIVITIES.forEach(a => {
  const row = document.createElement('div');
  row.className = 'j-item';
  row.innerHTML = `
    <input type="checkbox" id="act-${a.id}" onchange="calc()">
    <div>
      <div class="j-item-name">${a.name}</div>
      <div class="j-item-sub">${a.nameEn}</div>
    </div>
    <div class="j-item-right">
      <div class="j-item-price" id="price-${a.id}">${a.full} CHF</div>
    </div>`;
  itemsEl.appendChild(row);
});

// ── Discount mutual exclusion ──────────────────────────────────────────────
function onDiscChange(changed) {
  if (changed === 'stp' && document.getElementById('stp').checked) {
    document.getElementById('halbtax').checked = false;
  } else if (changed === 'halbtax' && document.getElementById('halbtax').checked) {
    document.getElementById('stp').checked = false;
  }
  calc();
}

// ── Calc ───────────────────────────────────────────────────────────────────
function calc() {
  const useSTP = document.getElementById('stp').checked;
  const useHalf = document.getElementById('halbtax').checked;

  // Pass price: STP and 半價卡 both use the discounted pass price
  const [passFullPrice, passHalfPrice] = PASS_PRICES[selDays];
  const cardCost = (useSTP || useHalf) ? passHalfPrice : passFullPrice;

  // Update displayed per-activity prices (without pass)
  ACTIVITIES.forEach(a => {
    let shown;
    if (useSTP) shown = a.stp;
    else if (useHalf) shown = a.half;
    else shown = a.full;
    const el = document.getElementById('price-' + a.id);
    el.textContent = shown % 1 === 0 ? shown + ' CHF' : shown.toFixed(1) + ' CHF';
  });

  // Totals
  let indiv = 0, withCard = 0, anyChecked = false;
  ACTIVITIES.forEach(a => {
    if (document.getElementById('act-' + a.id).checked) {
      anyChecked = true;
      let priceWithout;
      if (useSTP) priceWithout = a.stp;
      else if (useHalf) priceWithout = a.half;
      else priceWithout = a.full;
      indiv += priceWithout;
      withCard += a.card;
    }
  });

  const totalWithoutPass = indiv;
  const totalWithPass = cardCost + withCard;

  document.getElementById('s-card-label').textContent = `少女峰通行證 (${selDays}天)`;
  document.getElementById('s-indiv').textContent = totalWithoutPass.toFixed(2) + ' CHF';
  document.getElementById('s-card').textContent = totalWithPass.toFixed(2) + ' CHF';

  const verdict = document.getElementById('s-verdict');
  if (!anyChecked) {
    verdict.textContent = '請勾選計劃前往的景點';
    verdict.className = 'j-verdict neutral';
    return;
  }
  const diff = Math.abs(totalWithoutPass - totalWithPass).toFixed(2);
  if (totalWithoutPass > totalWithPass) {
    verdict.innerHTML = '✅ 建議買通行證！省下 ' + diff + ' CHF';
    verdict.className = 'j-verdict yes';
  } else if (totalWithoutPass < totalWithPass) {
    verdict.innerHTML = '❌ 不需要買通行證（省 ' + diff + ' CHF）';
    verdict.className = 'j-verdict no';
  } else {
    verdict.innerHTML = '兩者費用相同';
    verdict.className = 'j-verdict neutral';
  }
}
function resetAll() {
  ACTIVITIES.forEach(a => {
    document.getElementById('act-' + a.id).checked = false;
  });
  calc();
}
calc();
</script>

<a id="introduction"></a>
## 少女峰景點與簡介

開始介紹之前，先讓大家看看要上少女峰的車票多貴，以大家最常搭的格林德瓦 Grindelwald 到 少女峰 Jungfraujoch 為例（來回，含訂位費 10 瑞郎）

|  | 價格（瑞郎） | 價格（台幣） | 
| :--- | :--- | :--- |
| 原價 | 249.2  | 9968 |
| STP | 189.6 | 7584 |
| 半價卡 | 129.6  | 5184 | 
| JTP | 89.0 | 3560 |
| 早安票 | 201.4 | 8056 | 

- 什麼是早安票？直接跳到此文介紹早安票的部分（[點此](#goodmorning)）
- JTP 為少女峰通行證，直接跳到此文介紹少女峰通行證的部分（[點此](#jtp)）
- 什麼是 STP 與半價卡？ {% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

<div class="tip-box" markdown="1">
#### 💡 哪裡可以快速查到這些票價資訊？

直接用[省瑞計劃 票券速查](https://calculator.swisspro.tw/?p=validator) 功能，輸入起點跟終點即可知道什麼票券可以用、打幾折、票價多少、要不要先訂位等等。
</div>

少女峰觀光地區涵蓋很大一片地方，常聽到的格林德瓦 (Grindelwald)、Grindelwald-First（健行、冒險活動）、勞特布魯嫩（瀑布鎮 Lauterbrunnen）、穆倫 (Mürren)、溫根 (Wengen)、哈德昆觀景台 (Harder Kulm)、茵特拉肯 (Interlaken)、愛的迫降小鎮 Iseltwald 等等甚至布里恩茨湖或圖恩湖也都算是少女峰景點，請見下圖。到了少女峰這區至少都建議待三天以上，這樣也比較容易遇到好天氣。天氣即時訊息可以看[官網 Webcam](https://www.jungfrau.ch/en-gb/live/webcams/) 以防花冤望錢上山什麼都看不到。

<figure>
  <img src="{{ '/img/jungfrau/jungfrau_map.webp' | relative_url }}" alt="少女峰地圖">
  <figcaption>少女峰地區景點地圖與地理位置，來源<a href="https://www.jungfrau.ch/en-gb/jungfrau-travel-pass/">少女峰官網</a></figcaption>
</figure>

<!-- 這區住宿通常是選擇格林德瓦或茵特拉肯，建議住格林德瓦方便一些（但也稍微貴一些）。買少女峰旅行通票的話，看天氣好就馬上去搭車上山，不過再強調一次，需注意只能到艾格冰川，上去少女峰頂要加購登頂票。 -->

<a href="#nav">👆 回到最上面選單</a>

<a id="price"></a>
## 2026 年上少女峰，路線懶人包

其中少女峰的精華就是少女峰頂 Jungfraujoch - 歐洲之巔 Top of Europe，大家耗盡家財也要上去看一眼。就是很有名大家拍瑞士國旗後面一堆雪照片的地方，還有很貴的辛拉麵。想要上去的話，票券選擇偏複雜，但無論如何都得要先上到艾格冰川 (Eigergletscher)

路線懶人包（兩條路線）
- 茵特拉肯 (Interlaken) → 格林德瓦 (Grindelwald) 或者 勞特布魯嫩 (Lauterbrunnen)→ 艾格冰川 (Eigergletscher) → 少女峰頂 (Jungfraujoch)

從格林德瓦 (Grindelwald) 到艾格冰川 (Eigergletscher) 可選擇搭傳統火車到 Kleine Scheidegg 或者直接搭艾格快線 (Eiger Express) 直達艾格冰川 (Eigergletscher)，此段來回票價如下（不管搭什麼）：

| 路線 | 來回原價（瑞郎） | STP 價格 75 折| 半價卡價格 半價| 少女峰通票 |
| :--- | :--- | :--- | :--- | :--- |
| 格林德瓦 ↔ 艾格冰川 | 81.2 | 61.2 | 40.6  | 0 |

直接登頂票價如下（2026 五月 - 十月票價）含訂位費 10 瑞郎，這段日期最後艾格冰川 (Eigergletscher) → 少女峰頂 (Jungfraujoch) 需要訂位，可點此 [官網訂位](https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/book-priority-boarding/)。

| 路線 | 來回原價（瑞郎） | STP 價格 75 折| 半價卡價格 半價| 少女峰通票 |
| :--- | :--- | :--- | :--- | :--- |
| 格林德瓦 ↔ 少女峰頂 | 249.2 | 189.6 | 129.6  |  89 |
| 勞特布魯嫩 ↔ 少女峰頂 | 260 | 188.8 | 135  | 89 |

{% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}
什麼是半價卡？什麼是 STP？請看這篇
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

總之，非常之貴，應該沒有人會用原價上下少女峰頂，從這張表看起來好像少女峰通票最划算？讓我們繼續看下去。

<a href="#nav">👆 回到最上面選單</a>


<!-- 這附近的票券十分複雜且昂貴，除了最基本的 Swiss Travel Pass (STP) 與半價卡幾乎可說是必備之外，大致上還可搭配以下兩種票券：少女峰旅行通票 (Jungfrau Travel Pass)，或者伯恩高地通票 (Berner Oberland Pass)。 -->

<a id="jtp"></a>
## 少女峰旅行通票 (Jungfrau Travel Pass)：懶人首選，搭到飽免煩惱

如果你預計在少女峰地區待 3 天以上，可以考慮在半價卡或 STP 之外，搭配這張少女峰旅行通票，搭到飽，在少女峰地區就是無腦搭。

* **包含範圍：** 上圖實線的部分都可以，唯一要注意的是 __從艾格冰川 (Eigergletscher) 到少女峰頂 (Jungfraujoch) 這段「不」包含__，只能打五折，得另外買票 （89 瑞郎）。另外要注意圖恩湖只能搭船，不能搭火車。

以下是少女峰旅行通票 2026 最新票價

| 天數 （連續） | 原價 (瑞郎) | 半價卡/STP 打折（瑞郎） |
| :--- | :--- | :--- |
| **3 Days** | 210  | 165  |
| **4 Days** | 235  | 180  |
| **5 Days** | 270  | 210 |
| **6 Days** | 290  | 225  |
| **7 Days** | 310  | 240  |
| **8 Days** | 330  | 255  |

除了少女峰旅行通票之外，這附近也可以使用較冷門的伯恩高地通票，對某些行程來說會比較划算（如雪朗峰、布里恩茨蒸汽火車等），請見這篇：{% assign target_post = site.posts | where: "url", "/blog/berner-oberland-pass/" | first %}
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

如果看到這邊你決定，就買通票吧，舒服舒服不用再研究，可點下面連結購買。

<div class="swiss-buy-container">
    <a href="https://www.kkday.com/zh-tw/product/183425-jungfrau-travel-pass-switzerland?cid=24072" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       KKday 少女峰旅行通票
    </a>
</div>

或者如果打算直接買從格林德瓦或者勞特布魯嫩來回少女峰頂的車票，可以點此購買。

<div class="swiss-buy-container">
    <a href="https://www.kkday.com/zh-tw/product/263631-jungfraujoch-top-of-europe-round-trip-train-ticket?cid=24072" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       KKday 少女峰頂車票
    </a>
</div>

如果還是無法決定？請繼續往下看範例行程，與最划算票券計算過程。

<a href="#nav">👆 回到最上面選單</a>


<div class="tip-box" markdown="1">
### 💡 好難懂，懶得研究買什麼比較划算？
直接去 **[瑞士票券精算器](https://calculator.swisspro.tw/?itinerary_id=40262633&utm_source=swisspro_blog&utm_campaign=jungfrau_pass_guide)** 輸入你要去哪裡及預計日期，我們會自動幫你比對各種方案（STP 或半價卡）的價差（以及買少女峰旅行通票是否划算），你就不用研究半天，因為真的很複雜。
</div>

<a id="first"></a>
## First 冒險活動票券

少女峰通票只包含纜車從格林德瓦到 First（免費搭乘），並不包含冒險活動。且現在冒險活動購票只能現場排隊，通常夏天、天氣好的時候最好早點去排隊（八點左右），否則要極有可能售光，或者要等一兩小時才可以玩。小秘訣就是：用 SBB App 買纜車票，選擇 Grindelwald (Firstbahn) - First (Grindelwald)，單程 18 瑞郎、來回 36 瑞郎（持半價卡或STP），直接上去冒險活動的地方買冒險活動的票，就可以稍微避開排隊人潮。可以買單程上去，然後冒險活動下來。

{% assign target_post = site.posts | where: "url", "/blog/how-to-sbb-app/" | first %}
如何使用 SBB App？
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

冒險活動有四種：高空飛索 (First Flyer)、神鷹飛索 (First Glider)、卡丁車 (Mountain Cart) 和滑板車 (Trottibike Scooter)

一次買兩個活動的話有打折 109 瑞郎（原價）/ 81 瑞郎（持半價卡或STP），只買一個的話是 90 瑞郎 （原價）/ 60 瑞郎（持半價卡或STP），所以一次買兩個划算許多。

[First 冒險活動官網（內有圖）](https://www.jungfrau.ch/en-gb/grindelwaldfirst/adventure-package/) 注意官網無法購票，只能現場買

<a href="#nav">👆 回到最上面選單</a>

<!-- 如果不想上到頂，只到艾格冰川的話票價如下表（2026 五月 - 十月票價），用少女峰旅行通票就直接免費搭乘。票價如下表，雖然大家可能會覺得「來都來了」怎麼可能不上到最高。

| 路線 | 車種 | 時間（分） | 來回原價 | STP 價格 75 折| 半價卡價格 半價|
| :--- | :--- | :--- | :--- | :--- | :--- |
| 格林德瓦 ↔ 艾格冰川 | 艾格快線 (Eiger Express) 纜車 | 20  | 81.2  | 61.2 | 40.6 | 
| 格林德瓦 ↔ 艾格冰川 | 齒軌火車 | 32  | 81.2  | 61.2 | 40.6 |
| 勞特布魯嫩 ↔ 艾格冰川 | 齒軌火車 | 38  | 92  | 60 | 46 | -->

<a id="goodmorning"></a>
## 少女峰早安票

早安票顧名思義就是你要很早起床上山，只能搭最早的二或三班車，不過車票可以打八折（無法與 STP 或半價卡合併使用）。早安票 2026 適用期間為 5月 1 日至 10月 31日，這段期間都必須要訂位（訂位費：10 瑞郎，買票時同時會訂位）。能搭的車如下表（車次 1 只限 6月 27日 到 8月 23日）：

| 路段 | 車次 1* | 車次 2 | 車次 3 |
| :--- | :---: | :---: | :---: |
| 茵特拉肯 東 Interlaken Ost 發 | 06:34 | 07:04 | 07:34 |
| 格林德瓦 Grindelwald Terminal 到 | 07:03 | 07:33 | 08:03 |
| - | 換車 | 換車 | 換車 |
| 格林德瓦 Grindelwald Terminal 發 | 07:15 | 07:45 | 08:10 |
| 艾格冰川 Eigergletscher 到 | 07:35 | 08:05 | 08:30 |
| - | 換車 | 換車 | 換車 |
| 艾格冰川 Eigergletscher 發 | 07:45 | 08:15 | 08:45 |
| 少女峰 Jungfraujoch 到 | 08:11 | 08:41 | 09:11 |

*車次 1 ：夏天旺季期間限定（限 2026年 6月 27日 到 8月 23日）

下山的話最晚要搭 13:17 這班車到小夏戴克 Kleine Scheidegg 或者艾格冰川 Eigergletscher，回到這兩個地方之後你要啥時繼續下山就沒差了。

若要退換票的話（早安票的部分）：
- 網路上買的票：在搭車前一天都可免退票，無法更換，只能退票再重新購買，手續費 10 瑞郎。
- 現場買的票：去櫃檯退/換票

最後附上官網連結：[官網購買早安票（英文）](https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/good-morning-ticket/)。

<a href="#nav">👆 回到最上面選單</a>


<a id="example"></a>
## 範例行程：瑞士旅遊還要算數學？

講了這麼多，還是很難理解到底要買什麼？這邊直接給你 [範例 4 天少女峰行程與票券推薦](https://calculator.swisspro.tw/?itinerary_id=40262633&utm_source=swisspro_blog&utm_campaign=jungfrau_pass_guide)，下表簡單整理省瑞先生豐富的少女峰四日遊，住在格林德瓦三天：一天去少女峰頂、一天去 First 健行、一天去勞特布魯嫩（瀑布鎮）、一天去布里恩茨湖遊船。請見下表：

| 路線 | 原價 | STP | 半價卡| 少女峰通票 |
| :--- | :--- | :--- | :--- | :--- |
| D1 哈德昆觀景台 | 44 | 22 | 22  | 0 |
| D1 茵特拉肯 東 ➔ 格林德瓦 | 11.8 | 0 | 5.9  | 0 |
| D2 格林德瓦 ↔ 少女峰山頂 | 249.2 | 189.6 | 129.6  | 89 |
| D3 First 纜車  | 76 | 38 | 38  | 0 |
| D3 格林德瓦 ↔ 勞特布魯嫩 | 18.8 | 0 | 9.4  | 0 |
| D4 格林德瓦 ➔ 茵特拉肯 東 | 11.8 | 0 | 5.9  | 0 |
| D4 布里恩茨湖遊船 | 75 | 0 | 37.5  | 0 |
| 總計 | 486.6 | 249.6 | 248.3  | 89 |

其中 D2 格林德瓦 ↔ 少女峰山頂含訂位費 10 瑞郎。乍看之下好像少女峰通票賺爛了，但如果加上票券本身的價格，事情就沒有這麼單純，可以再細分為以下幾種情況（車票總價來自上表），由最便宜到最貴分別是：

| 半價卡? | STP? | 少女峰通票? | 票券總價| 車票總價 | 總價 |
| :--- | :--- | :--- | :--- |  :--- | :--- | 
| ❌ | ❌ | 4 天 | 235  | 89 | 324 |
| ✅ | ❌ | ❌ | 150  |  248.3 | 398.3 |
| ✅ | ❌ | 4 天 | 150+180 | 89 | 419 | 
| ❌ | 8 天 | ❌ | 439  | 249.6 | 688.6 |
| ❌ | 8 天 | 4 天 | 439+180 | 89 | 708 | 

當然這邊 STP 用 8 天來算不太公平，因為其他四天還可以去別的地方，半價卡也不算太公平，不過大概可以給你一點感覺，就是很難算。少女峰通票如果真的都去少女峰附近的話，的確是蠻值得一買，就算加上 89 塊那段還是划算。但應該很少旅客來瑞士只去少女峰其他都不去，所以還是建議可以直接去省瑞計劃的**[瑞士票券精算器](https://calculator.swisspro.tw/?itinerary_id=40262633&utm_source=swisspro_blog&utm_campaign=jungfrau_pass_guide)** 輸入你要去哪裡及預計日期，我們會自動幫你比對各種方案，你就不用研究半天，因為真的很複雜。

另外也可以看到價差其實不小，光第一選項跟第二選項差 75 瑞郎就台幣 3000 了，所以建議還是精算一下，不要憑感覺選票。

<a href="#nav">👆 回到最上面選單</a>

<figure>
  <img src="{{ '/img/jungfrau/first_view.png' | relative_url }}" alt="少女峰地圖">
  <figcaption>First 健行，六月還是有雪，需注意保暖</figcaption>
</figure>

<a id="conclusions"></a>
## 結論：到底買什麼比較划算？

總而言之，跟你的行程有關，所有的「如果你很常上山」或什麼之類的條件句子，其實都比不上你直接去省瑞計劃的票券精算器填一填算一下，幫你的行程精算一波。少女峰地區的票價計算可能是全瑞士最複雜的（還有夏季與冬季票價差），而且票價十分昂貴，應該也是全瑞士最貴。精算器都幫你把這些考慮進去了，只需要輸入你要去的地點與日期，即可知道什麼最划算。也恭喜你解決了最複雜的部分，接下來的瑞士之旅票券只會更簡單。

<div class="swiss-buy-container">
    <a href="https://calculator.swisspro.tw/?itinerary_id=fd5b65b6" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       省瑞票券精算器（經典 8 天）
    </a>
</div>
<a href="#nav">👆 回到最上面選單</a>

<div class="tip-box" markdown="1">
#### 💡 我只是不確定這段能不能用 Swiss Travel Pass (STP) 搭？

直接用[省瑞計劃 票券速查](https://calculator.swisspro.tw/?p=validator) 功能，輸入起點跟終點即可知道什麼票券可以用，要不要先訂位等等，所有的疑難雜症一次解決。
</div>

{% assign target_post = site.posts | where: "url", "/blog/zermatt-pass-guide/" | first %}
除了少女峰之外，策馬特部分可以參考
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

{% assign target_post = site.posts | where: "url", "/blog/berner-oberland-pass/" | first %}
少女峰附近的行程也可以搭配伯恩高地通票：
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
