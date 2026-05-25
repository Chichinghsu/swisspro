---
layout: post
title: "【2026 萊茵瀑布完整攻略】介紹、交通、值得去嗎？真的很完整"
date: 2026-05-22
categories: 蘇黎世
image: /img/zurich/rheinfall_guide.webp
thumbnail: /img/zurich/rheinfall_guide.webp
og_image:  /img/zurich/rheinfall_guide.webp
description: "歐洲最大瀑布攻略：交通、遊船票價、城堡拍攝點一次看懂，跟著住瑞士多年工程師一起去萊茵瀑布。"
permalink: /blog/rheinfall-guide/
---

萊茵瀑布 (Rheinfall) ，距離蘇黎世大概一小時火車車程。可說是從蘇黎世出發完美的半日遊景點。如果你在蘇黎世有半天的時間，且天氣不錯的話，不妨前往萊茵瀑布欣賞。春夏季的水量會比秋冬兩季多，所以如果正好在春夏季節到瑞士的話，可以欣賞到最壯觀滂薄的瀑布景觀。先來看看萊茵瀑布目前的天氣狀況：

<style>
.w{background:#fff;border:0.5px solid #D3D1C7;border-radius:16px;padding:1.25rem 1.5rem;font-family:var(--font-sans,'system-ui',sans-serif)}
.location{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#888780;margin-bottom:.75rem}
.top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.9rem}
.temp{font-size:42px;font-weight:500;color:#2C2C2A;line-height:1}
.condition{font-size:13px;color:#888780;margin-top:4px}
.icon-big{font-size:48px;line-height:1}
.divider{border:none;border-top:0.5px solid #D3D1C7;margin:.9rem 0}
.forecast{display:flex;justify-content:space-between;gap:6px}
.day{flex:1;text-align:center}
.day-name{font-size:10px;text-transform:uppercase;letter-spacing:.07em;color:#888780;margin-bottom:4px}
.day-icon{font-size:15px}
.day-temp{font-size:12px;font-weight:500;color:#2C2C2A;margin-top:3px}
.day-rain{font-size:10px;color:#378ADD;margin-top:1px}
.updated{font-size:10px;color:#B4B2A9;margin-top:.75rem;text-align:right}
.err{font-size:13px;color:#888780;padding:.5rem 0}
</style>

<div class="w">
  <div class="location">萊茵瀑布</div>
  <div class="top">
    <div>
      <div class="temp" id="temp">—</div>
      <div class="condition" id="cond">讀取中…</div>
    </div>
    <div class="icon-big" id="icon-big"></div>
  </div>
  <div class="divider"></div>
  <div class="forecast" id="forecast"></div>
  <div class="updated" id="updated"></div>
</div>

<script>
const WMO = {
  0:'晴天',1:'大致晴朗',2:'局部多雲',3:'陰天',
  45:'有霧',48:'霧淞',
  51:'毛毛雨',53:'毛毛雨',55:'濃毛毛雨',
  61:'小雨',63:'中雨',65:'大雨',
  71:'小雪',73:'中雪',75:'大雪',77:'冰粒',
  80:'陣雨',81:'陣雨',82:'強陣雨',
  85:'陣雪',86:'陣雪',
  95:'雷暴',96:'雷暴夾冰雹',99:'強雷暴夾冰雹'
};

function icon(code, isDay){
  if(code===0) return isDay?'☀️':'🌙';
  if(code<=2)  return isDay?'🌤️':'🌙';
  if(code===3) return '☁️';
  if(code<=48) return '🌫️';
  if(code<=55) return '🌦️';
  if(code<=65) return '🌧️';
  if(code<=77) return '❄️';
  if(code<=82) return '🌧️';
  if(code<=86) return '🌨️';
  return '⛈️';
}

const DAYS = ['日','一','二','三','四','五','六'];

async function load(){
  try {
    const url = 'https://api.open-meteo.com/v1/forecast'
      + '?latitude=47.6779&longitude=8.6156'
      + '&current=temperature_2m,weathercode,is_day'
      + '&daily=weathercode,temperature_2m_max,precipitation_probability_max'
      + '&timezone=Europe%2FZurich&forecast_days=5';

    const res = await fetch(url);
    const d = await res.json();

    const cur = d.current;
    const tempC = Math.round(cur.temperature_2m);
    const code  = cur.weathercode;
    const isDay = cur.is_day === 1;

    document.getElementById('temp').textContent = tempC + '°C';
    document.getElementById('cond').textContent = WMO[code] ?? '—';
    document.getElementById('icon-big').textContent = icon(code, isDay);

    const fc = document.getElementById('forecast');
    fc.innerHTML = '';
    d.daily.time.forEach((dateStr, i) => {
      const date   = new Date(dateStr + 'T12:00:00');
      const dowCh  = DAYS[date.getDay()];
      const high   = Math.round(d.daily.temperature_2m_max[i]);
      const rain   = d.daily.precipitation_probability_max[i];
      const wcode  = d.daily.weathercode[i];
      const div    = document.createElement('div');
      div.className = 'day';
      div.innerHTML = `
        <div class="day-name">${i===0?'今天':'週'+dowCh}</div>
        <div class="day-icon">${icon(wcode, true)}</div>
        <div class="day-temp">${high}°</div>
        ${rain > 10 ? `<div class="day-rain">${rain}%</div>` : ''}`;
      fc.appendChild(div);
    });

    const now = new Date();
    document.getElementById('updated').textContent =
      '更新於 ' + now.toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'});

  } catch(e) {
    document.getElementById('cond').textContent = '無法取得天氣資料';
    document.getElementById('updated').textContent = '';
  }
}

load();
</script>
<div style="height: 10mm;"></div>

<div class="tip-box" markdown="1">
<p><b>本站免費瑞士旅遊諮詢</b>
<br>歡迎去省瑞計劃 <a href="https://www.instagram.com/swisspro.tw/">Instagram</a> 私訊發問或者詢問 <a href="https://lin.ee/5BCOXOU">官方 LINE</a></p></div>

快速導覽
- [簡介](#intro)
- [遊船](#boat)
- [交通與建議路線](#transport)
- [加碼景點：瑞士小人國](#miniaturwelt)
- [省瑞結論：值得去嗎？](#conclusions)

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12128.96779836837!2d8.605882143440294!3d47.676402698336695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479078b4c0fa42a3%3A0x3c6d588fc5d96c81!2sSchloss%20Laufen%20am%20Rheinfall!5e0!3m2!1sde!2sch!4v1776686613926!5m2!1sde!2sch" 
        class="map-frame" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
</iframe>

<a id="intro"></a>
## 簡介

萊茵瀑布顧名思義，在萊茵河上，已經有約一萬五千年歷史。瀑布位在瑞士北部沙夫豪森州 (Schaffhausen) 與蘇黎世州之間，是歐洲流量最大的瀑布。夏季水流量大時，一秒大概有 60 萬公升的水流（可以想像小瓶的寶特瓶可樂，一秒倒一萬瓶）。

你可能會好奇，這麼豐沛的水量，居然沒有被拿來當水力發電廠？其實 1950 年代，曾有開發商計畫引水發電，結果包含知名德國作家赫曼赫塞 (Hermann Hesse) 在內許多瑞士公民聯署，為了保護生態，阻止了這項計畫。

要去萊茵瀑布通常會從蘇黎世出發，以下為簡單參觀地圖。景點分為南北兩岸：

- 萊茵河北岸是沙夫豪森州 (Schaffhausen)，旗子為黃色羊，火車站 Neunhausen Rheinfall
- 萊茵河南岸是蘇黎世州 (Zurich)，旗子為藍白旗，火車站 Schloss Laufen am Rheinfall

<figure>
  <img src="{{ '/img/zurich/rheinfall_maps.webp' | relative_url }}" alt="萊茵瀑布建議參觀路線">
  <figcaption>萊茵瀑布建議參觀路線，北岸為沙夫豪森州，南岸為蘇黎世州</figcaption>
</figure>

主要參觀景點整理如上 1 - 4，分別為 

1. 勞芬城堡 (Schloss Laufen)：門票 5 瑞郎（約台幣 200），有售票機可以買，通常不用排隊，可以非常近距離看瀑布。裡面觀景台有 [Grand Tour of Switzerland](https://www.myswitzerland.com/en-ch/experiences/experience-tour/grand-tour-of-switzerland/) 紅色框框可以搜集及拍照。
1. 遊船乘船處（還有餐廳與紀念品店）：搭乘遊船的地方，有三種路線可以選擇，詳情請見本文下方[遊船部分](#boat)。
1. 北岸觀景拍照點，可拍整個萊茵瀑布：這邊有些椅子可以坐著休息，欣賞瀑布全景，還有瑞士所有州的州旗，可學習瑞士地理歷史。
1. 火車橋：火車與行人共用的橋，可以近距離體驗火車從身邊呼嘯而過的震撼。此路線為南岸車站 Schloss Laufen am Rheinfall 往返沙夫豪森 Schaffhausen 的路線（單線雙向通行）。想拍火車的話可以先查好時刻表，守株待兔。

<a id="boat"></a>
## 遊船

參觀萊茵瀑布首推搭乘遊船，遊船的路線有四條，Swiss Travel Pass (STP) 皆<span style="color:red">沒有</span>包含，都必須另外購票。[搭船處 (Google Maps)](https://maps.app.goo.gl/JnQnasPZ8X9wp1Ce6) 位於北岸，見上方介紹圖。

- {% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

遊船路線分別為（整理自[遊船官網](https://rhyfall-maendli.ch/en/)）：

| 方案 | 路線 | 行程 | 票價 | 時間（分） | 
| :--- | :--- | :--- | :--- | :--- |
| 1 | Rock Tour 黃色船 | 登瀑布中間的島（上圖右方的島） | 22.5 瑞郎 900 台幣| 30 |
| 2 | Ferry Tour 紅色船 | 從北岸到南岸/南岸到北岸 | 3 瑞郎 120 台幣| 5  |
| 4 | Tour 藍色船 | 導覽 15 分鐘 | 10.5 瑞郎 420 台幣| 15  |
| 5 | Audio Tour 粉紅色船 | 導覽 30 分鐘（有中文） | 14 瑞郎 560 台幣| 30 |

買 1/4/5 號方案都會送 2 號載你到南岸城堡。

**購票**

可以現場看天氣情況購票，現場大排長龍的話，也可直接[線上官網訂票（英文）](https://rhyfall-maendli.ch/en/boat-tours-experiences/)，直接跳過排隊人潮。

**值得搭嗎？**

推薦選一條線搭乘，近距離體驗瀑布震撼，喜歡刺激的話可以搭 1 號黃色船登島，想體驗一下就搭 4 號或 5 號船 15/30 分鐘靠近瀑布被水噴一下。紅色船只能當來從北到南或南到北的交通工具。

<figure>
  <img src="{{ '/img/rheinrall_cover.png' | relative_url }}" alt="萊茵瀑布">
  <figcaption>萊茵瀑布（於北岸拍攝）</figcaption>
</figure>

<a id="transport"></a>
## 交通與建議路線

參觀路線大概可分幾種（搭火車從蘇黎世出發的話），可以北進北出、南進南出、北進南出、或者南進北出。不管哪一條，持 Swiss Travel Pass (STP) 者皆可免費搭乘蘇黎世到萊茵瀑布火車，不需額外購票。

其中兩條最推薦的路線如下：
 
- 北進南出路線（最推薦）

蘇黎世中央車站搭 S9 火車到北岸 Neuhausen Rheinfall，約需要 50 分鐘，直達，直接 SBB App 買票即可。有趣的是途中會經過一小段德國，再開回瑞士，不妨看看窗外，會看到車牌、路牌、地上標線都不一樣。

{% assign target_post = site.posts | where: "url", "/blog/how-to-sbb-app/" | first %}
- 如何使用 SBB App 買票？
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

出站後有電梯可以搭，就不用走下去。建議路線如下：

1. 從車站漫步到乘船處會路過上圖 3 的拍照點，可拍整個萊茵瀑布（拍起來大概如上圖）
1. 走到上圖 2 乘船處的地方購票並搭船，可自由選擇方案：[本文上方方案件介紹](#boat)
1. 遊船搭完後，回到上圖 2 乘船處，搭 2號 接駁船至南岸
1. 下船後往上走，可在旁邊售票機買城堡與觀景台入場票（如果沒人排隊的話，也可搭電梯上去再買，那邊也有一台售票機），票價 5 瑞郎
1. 接著搭電梯上去後左轉有小小的城堡博物館，可以刷票進去欣賞（同一張票），有一些勞芬城堡的歷史簡介（上電梯後右轉有紀念品店及免費廁所可使用，還有餐廳與食物路邊攤）
1. 刷票進到觀景台，一路向下有好幾層可以近距離欣賞瀑布壯闊的景色，裡面有 [Grand Tour of Switzerland](https://www.myswitzerland.com/en-ch/experiences/experience-tour/grand-tour-of-switzerland/)萊茵瀑布的紅色框框可以拍照
1. 最後到出口的地方旁邊就是南岸的 Schloss Laufen am Rheinfall 可直接搭火車回蘇黎世，或去參觀沙夫豪森 Schaffhausen 市

<figure>
  <img src="{{ '/img/zurich/rheinfall.webp' | relative_url }}" alt="萊茵瀑布">
  <figcaption>萊茵瀑布之二（於北岸拍攝，圖上編號 3 的位置）</figcaption>
</figure>

- 南進南出路線（最省車票錢）

搭火車到南岸 Schloss Laufen am Rheinfall，一樣 SBB App 買票即可，出站後會看到電梯與售票機。接著參觀路線則是上面的步驟 4. 到 6.，最後到出口地方，有兩個選擇

1. 出口出去後往下走，搭乘 2號 紅色船（3 瑞郎）到達北岸乘船處（上圖 2 的地方），可以轉搭其他的船
1. 出口出去後往上走，回到火車站的地方，搭電梯上去回到原本的地方，但右轉，那邊有個遊客中心可以免費上廁所，旁邊叉路下坡走鐵路橋過河到北岸，可以直接導航這座橋 [Google Maps 地標](https://maps.app.goo.gl/xzDaJPzmFQQ1MQ9g7)

到達北岸之後就可在北岸欣賞景點，接著可沿著上面「北進南出」步驟 1. 與 2. 逛逛與搭船。最後可以搭 2 號船或再走鐵路橋，返回南岸去搭火車回蘇黎世。為什麼要返回南岸呢？因為這樣可以節省車票錢，覺得沒差的話，也可直接北岸火車站搭車走人。

當然你要的話也可以北進北出，不參觀城堡，之類的，行程自由度高。

以下火車選項與票價整理，皆為天票或 24 小時票。S9 與 S12 列車車程都約 50 分鐘。

| 路線 | 原價 (瑞郎) | 半價卡（瑞郎） | 方案 | 
| :--- | :--- | :--- | :--- | 
| S9 蘇黎世 - Neuhausen Rheinfall (北) | 48.8  | 24.4  | 北進南出 | 
| S12 蘇黎世 - Schloss Laufen am Rheinfall (南) | 36 / 28* | 18 / 14*  | 南進南出 | 
| 沙夫豪森轉車 | 48.8  | 24.4 | 北進南出 |

*為平日早上九點後出發票價，見下方說明

<div class="tip-box" markdown="1">
<h4>省瑞秘訣（持 STP 者都免費搭，可以忽略這段）</h4>

如果不打算去沙夫豪森 (Schaffhausen) 市區（瑞士右上角凸起來的部分）觀光的話，可以買 ZVV 全區九點票 (9 O'Clock Day Pass)，只要 14 瑞郎（持半價卡，原價 28 瑞郎），可在 SBB App 上面買。這張票可以讓你遊覽整個「蘇黎世州」（範圍非常大），前提是你在上午 9:00 之後才出發（週一到週五），如果是週六週日的話就沒有時間限制。但就只能搭 S12 火車，不然會不小心跑出蘇黎世州，票就不能用了。

到沙夫豪森轉車或搭 S9 的話，來回日票就要 24.4 瑞郎（持半價卡，原價 48.8 瑞郎），且因為此票包含範圍已經出蘇黎世州，所以不是 24 小時票，只有買票當日有效。

買這張票 ZVV 全區九點票可順便去參觀[瑞士蓮巧克力之家](https://www.kkday.com/zh-tw/product/134871-lindt-chocolate-ticket-zurich-switzerland?cid=24072)，或者去爬玉特利山 Uetliberg，{% assign target_post = site.posts | where: "url", "/blog/zurich-guide/" | first %}
蘇黎世近郊其他景點，請看此文：
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>
</div>

- 遊覽車半日遊

如果懶得研究火車，也可以直接參加半日遊，有遊覽車載你直接從蘇黎世到萊茵瀑布，包含英文導覽解說，如果英文能力 OK，且懶得規劃的話，可以考慮，價格約 80 瑞郎。出發地點為蘇黎世車站旁邊的巴士站，每天都有，人數夠就會出發。

<div class="swiss-buy-container">
    <a href="https://www.kkday.com/zh-tw/product/6389-switzerland-half-day-tour-from-zurich-rhine-falls-and-stein?cid=24072" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       蘇黎世出發萊茵瀑布半日遊 (KKday)
    </a>
</div>

<a id="miniaturwelt"></a>
## 加碼景點：瑞士小人國

除了參觀萊茵瀑布之外，旁邊北岸火車站 Neuhausen Rheinfall 走路大約 10 分鐘處有「瑞士小人國」Smilestones - Miniaturwelt am Rheinfall。類似袖珍博物館，裡面展出縮小版的瑞士與許多火車模型。對於火車模型有興趣或者帶小孩者，非常適合來參觀。裡面不算太大，但很精緻，還可以看到縮小版的萊茵瀑布。

<figure>
  <img src="{{ '/img/zurich/rheinfall_mini.webp' | relative_url }}" alt="瑞士小人國Smilestones - Miniaturwelt am Rheinfall">
  <figcaption>瑞士小人國就在萊茵瀑布旁邊，裡面有縮小版萊茵瀑布模型</figcaption>
</figure>

- 門票 22 瑞郎（約台幣 880），學生 20 瑞郎，小孩 6 至 15 歲只要 12 瑞郎
- 開放時間 2026 四月到十月
    - 週一至週五 11:00 - 17:30 
    - 週六週日 10:00 - 17:30

詳情及購票可至[官網](https://smilestones.ch/en/visitor-information/)，也可現場買票。

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.0938043448036!2d8.6132661!3d47.6825982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47907fe4eca29ecb%3A0xe1cb82756764b20c!2sSmilestones%20-%20Miniaturwelt%20am%20Rheinfall!5e0!3m2!1sde!2sch!4v1779656717747!5m2!1sde!2sch"
        class="map-frame" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
</iframe>

<a id="conclusions"></a>
## 省瑞結論：值得去嗎？

個人覺得這邊算是瑞士少數價格相對平易近人景點，而且從蘇黎世出發的話一小時就可以抵達，非常適合早上降落蘇黎世機場，或者準備離開，要搭隔天飛機住在蘇黎世時半日遊。如果你還有時間，可以順遊旁邊瑞士小人國，再搭火車遊「沙夫豪森 (Schaffhausen)」城市，順便買支 IWC 手錶。

<div class="tip-box" markdown="1">
歡迎使用本站的瑞士旅遊小工具
- [省瑞票券速查器](https://calculator.swisspro.tw/?p=validator)：這段 Swiss Travel Pass 能搭嗎？要提早買嗎？怎麼買？要提早預約嗎？多少錢？
- [省瑞票券精算器](https://calculator.swisspro.tw/?itinerary_id=f529bba7)：幫我精算 STP 還是半價卡划算
</div>
