---
layout: post
title: "【2026 瑞士省錢神券】：Saver Day Pass 與 Supersaver Ticket 全攻略"
date: 2026-04-14
categories: 精算攻略
image: /img/luzern/rigi2.webp
thumbnail: /img/luzern/rigi2.webp
og_image: /img/luzern/rigi2.webp
description: "瑞士一日票，這張瑞士 SBB 早鳥神票，根本買到賺到。Saver Day Pass 與 Supersaver Ticket 到底怎麼用，看完這篇你就懂。"
permalink: /blog/saver-day-pass/
---

超級 J 人遊瑞士有福了，除了大家熟知的半價卡與 Swiss Travel Pass (STP) 之外，本文介紹兩種神級早鳥票券： Saver Day Pass (SBB 早鳥天票) 和 Supersaver Ticket (點對點早鳥票)。這篇直接幫你拆解這兩者的差異，以及什麼時候該果斷下手。

{% assign target_post = site.posts | where: "url", "/blog/stp-halbtax-guide/" | first %}
什麼是半價卡？什麼是 STP？請看這篇
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>


快速導覽
- [Saver Day Pass (SBB 早鳥天票)](#saverdaypass)
- [Supersaver Ticket (點對點早鳥票)](#supersaver)
- [結論](#conclusions)

<a id="saverdaypass"></a>
## Saver Day Pass (SBB 早鳥天票)

這張票可以看成是「單日版的 STP」，指定日期當天你可以在全瑞士境內無限次搭乘火車、巴士、船（但有些不包含，只能半價或打折例如：少女峰與策馬特）。

<div class="tip-box" markdown="1">
價格： 愈早買愈便宜<br>
持半價卡： 最低 29 瑞郎（二等艙）49 瑞郎（一等艙）<br>
無半價卡： 最低 52 瑞郎（二等艙）88 瑞郎（一等艙）<br>
優點：便宜，就是便宜<br>
缺點：不可退改，如果當天天氣不好，或飛機被取消，就直接放水流
</div>
但是！這個 29 瑞郎的非常難搶到，通常要六個月前就下手，如果是一兩個月前下手的話通常價格會在 49/59/69 其中一個，而且如果遇到週末的話通常又會比較貴。我們來看看以下數據（寫文章這天是 2026 年 4 月 14 日週二），這是持半價卡買的價格和沒半價卡的價格（可按按鈕切換）：

<div class="cal-wrap">
<style>
/* Existing styles + Toggle Styles */
.bls-controls { display: flex; justify-content: center; margin-bottom: 20px; gap: 10px; align-items: center; font-size: 14px; }
.switch { position: relative; display: inline-block; width: 44px; height: 22px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 22px; }
.slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
input:checked + .slider { background-color: #E53E3E; }
input:checked + .slider:before { transform: translateX(22px); }
.bls-wrap { padding: 0.5rem 0 1.5rem; }
.bls-months { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem 2.5rem; }
@media (max-width: 640px) { .bls-months { grid-template-columns: 1fr; } }
.bls-month-title { font-size: 15px; font-weight: 600; margin: 0 0 10px; }
.bls-dow-row { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; margin-bottom: 3px; }
.bls-dow { font-size: 10px; color: #999; text-align: center; padding-bottom: 4px; }
.bls-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
.bls-cell { aspect-ratio: 1; border-radius: 5px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.bls-dn { font-size: 16px; line-height: 1; font-weight: 600; }
.bls-pr { font-size: 14px; line-height: 1; margin-top: 2px; }
.bls-legend { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 1.25rem; justify-content: center; }
.bls-legend-item { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #555; }
.bls-legend-swatch { width: 13px; height: 13px; border-radius: 3px; }
</style>

<div class="bls-wrap">
  <div class="bls-controls">
    <span>無半價卡</span>
    <label class="switch">
      <input type="checkbox" id="fare-toggle" checked>
      <span class="slider"></span>
    </label>
    <span style="font-weight: bold;">有半價卡</span>
  </div>

  <div class="bls-legend" id="bls-legend"></div>
  <div class="bls-months" id="bls-months"></div>
</div>

<script>
(function() {
  // Logic: Each date now has [HalfFarePrice, FullPrice]
  var DATA = {
    '2026-4': {16:[69,106],17:[69,106],18:[69,106],19:[59,97],20:[59,97],21:[59,88],22:[59,88],23:[59,88],24:[59,97],25:[59,97],26:[54,88],27:[49,79],28:[54,79],29:[54,79],30:[54,79]},
    '2026-5': {1:[54,97],2:[59,97],3:[54,88],4:[49,70],5:[49,70],6:[49,70],7:[49,70],8:[54,79],9:[54,88],10:[49,79],11:[49,70],12:[49,70],13:[49,70],14:[69,119],15:[49,88],16:[49,79],17:[69,119],18:[49,70],19:[49,61],20:[49,61],21:[49,70],22:[49,79],23:[49,79],24:[49,79],25:[69,119],26:[49,70],27:[49,70],28:[49,70],29:[49,79],30:[54,79],31:[49,70]},
    '2026-6': {1:[44,61],2:[49,61],3:[49,61],4:[49,70],5:[49,70],6:[49,70],7:[49,70],8:[44,61],9:[44,61],10:[49,61],11:[49,61],12:[49,61],13:[49,70],14:[49,70],15:[44,61],16:[44,61],17:[44,61],18:[49,61],19:[49,61],20:[49,70],21:[49,61],22:[44,61],23:[44,52],24:[44,61],25:[44,61],26:[49,61],27:[49,70],28:[49,70],29:[44,52],30:[44,52]}
  };

  var TIERS = [
    { max: 44, bg: '#FED7D7', text: '#2C7A7B' }, // Cheapest
    { max: 54, bg: '#FFB8B8', text: '#000' },
    { max: 59, bg: '#FF8A8A', text: '#000' },
    { max: 69, bg: '#FF2E2E', text: '#000' },
    { max: 90, bg: '#A30000', text: '#fff' },
    { max: 100, bg: '#9B2C2C', text: '#fff' },
    { max: 119, bg: '#1A0000', text: '#fff' }  // Expensive
  ];

  function getStyle(price) {
    for (var i = 0; i < TIERS.length; i++) {
      if (price <= TIERS[i].max) return TIERS[i];
    }
    return TIERS[TIERS.length-1];
  }

  function renderCalendar() {
    var isHalfFare = document.getElementById('fare-toggle').checked;
    var dataIndex = isHalfFare ? 0 : 1;
    
    var html = ['2026-4','2026-5','2026-6'].map(function(key) {
      var parts = key.split('-');
      var year = parseInt(parts[0]), month = parseInt(parts[1]);
      var prices = DATA[key] || {};
      var offset = (new Date(year, month - 1, 1).getDay() + 6) % 7;
      var days = new Date(year, month, 0).getDate();

      var mHtml = '<div><div class="bls-month-title">' + key + '</div>';
      mHtml += '<div class="bls-dow-row">' + ['一','二','三','四','五','六','日'].map(d => `<div class="bls-dow">${d}</div>`).join('') + '</div>';
      mHtml += '<div class="bls-grid">';

      for (var i = 0; i < offset; i++) mHtml += '<div class="bls-cell empty"></div>';

      for (var d = 1; d <= days; d++) {
        var priceArr = prices[d];
        if (!priceArr) {
          mHtml += '<div class="bls-cell empty"><span class="bls-dn" style="color:#bbb">'+d+'</span></div>';
        } else {
          var p = priceArr[dataIndex];
          var s = getStyle(p);
          mHtml += `<div class="bls-cell" style="background:${s.bg}">
            <span class="bls-dn" style="color:${s.text}">${d}</span>
            <span class="bls-pr" style="color:${s.text}">${p}.-</span>
          </div>`;
        }
      }
      return mHtml + '</div></div>';
    }).join('');

    document.getElementById('bls-months').innerHTML = html;
  }

  // Initial Render & Listener
  document.getElementById('fare-toggle').addEventListener('change', renderCalendar);
  renderCalendar();
})();
</script>
</div>

可以看到如果不要拖到最後一週才買，大概就是 49 到 59 瑞郎（持半價卡）。如果你提早一個月左右買，不要碰到假日，大概就是 49 瑞郎。如果買到 49 瑞郎的話，搭這些都可以回本。隨便舉例幾個可以買的行程：

| 路線| 原價 | 半價卡 |
| :--- | :--- | :--- | 
| 策馬特 ➔ 蘇黎世 （單程） | 130 | 65  | 
| 蘇黎世 ↔ 伯恩 （來回）| 106 | 53 | 
| 琉森 到 瑞吉山一日票 | 131 | 65.5 |

第一個路線，策馬特回蘇黎世之後可以再去萊茵瀑布，或者去瑞士蓮巧克力博物館，都可以繼續使用這張票。或者第二個路線，蘇黎世去伯恩看熊一日遊，也可以順便繞到琉森看一下獅子，這樣也划算到不行。

購買方式很簡單，只要在 SBB App 上面選擇 Saver Day Pass，選定日期購買即可（見下圖左），但再說一次，**買了就無法退了，也不能改了，下好離手。**有可能合理的使用場合例如：旅程最後幾天要從策馬特到蘇黎世，蘇黎世住一天，隔天從蘇黎世機場飛回家，這樣買就很合理，因為無論天氣如何你都得搭這段策馬特到蘇黎世。此外，請見下圖右，如果 Saver Day Pass 比你要搭的車划算的話，App 也會直接顯示。

<figure>
  <img src="{{ '/img/sbb/sbb_app_saver_day_pass.png' | relative_url }}" alt="SBB App Saver Day Pass">
  <figcaption>（左）買票直接點這邊，然後選日期即可（右）直接查車，如果 Saver Day Pass 比較便宜的話也會顯示</figcaption>
</figure>

## 剛好可以補 STP 不夠的天數？

聰明的你看到這邊一定會想說，如果我待超過一週，但 STP 只有 8 或 15 天的選項，我可不可以用這個 Saver Day Pass 來填補不夠的這幾天？比如說我待 9 天，這樣買 8 天 STP 加一張這個？

很遺憾的，答案是通常不划算，因為你買了 STP 通常代表你沒有半價卡，這樣買這個 Saver Day Pass 就蠻貴的，你可以往上滑到票價月曆，點選「無半價卡」就會發現其實完全不划算。幾乎要提早到兩個月買才能買到 52 瑞郎的票，但因為 STP 8 天 439 瑞郎、15 天 499 瑞郎，多一週，價差 60 瑞郎。但你沒半價卡，隨便買一個 Saver Day Pass 都超過 60，不如直上 15 天。

<div class="tip-box" markdown="1">
💡小結論

如果你買半價卡，搭配 Saver Day Pass，如魚得水。需要長距離移動（如上面幾個），可以提早買這個早鳥票，讓你省上加省。

如果你買 STP（無半價卡），那可以不用考慮這個了，除非你提早很早買。
</div>

<a id="supersaver"></a>
## Supersaver Ticket (點對點早鳥票)

這張票可以想像成「廉航機票」，特定日期、特定班次、特定起訖站，不多不少。

<div class="tip-box" markdown="1">
優點： 價格低，適合只移動一段路的旅人<br>
缺點： 特定日期、特定班次、特定起訖站，如果你錯過那班火車，恭喜直接重買一張
</div>

比如說下圖，蘇黎世到策馬特持半價卡的話是 65 瑞郎，這是 2026年 6月 5日的班次（現在是 4月14日）所以差不多一個半月前，可以買到 46.6 瑞郎的價格，差不多是七折。但就只能搭 2026年 6月 5號 7:02 蘇黎世中央車站發車，10:17 抵達策馬特的車（當然要轉車，但就只能搭上面顯示的那台轉那台）。如果你不小心睡過頭，那你只能直接重買一張，而且重買的話肯定是原價 65，等於是你花了 46.6 + 65 瑞郎（當然，別睡過頭就好）。

<figure style="max-width: 400px; margin: 20px auto;">
  <img src="{{ '/img/sbb/super_saver.png' | relative_url }}" alt="SBB Supersaver">
  <figcaption>Supersaver 省省遊瑞士的極致</figcaption>
</figure>

眼尖的你可能會發現，那下面那個 +5.6 Supersaver Ticket Flex 是什麼？這是今年新增的功能，也就是說多加一些錢，但你的票現在可以退了。不過，畢竟是瑞士，你只能在「出發前退」，而且只能「退 50%」，也就是說，你如果睡過頭，那一樣沒救，還多花了 5.6。

最後整理一下，沒搭到車的成本與搭到車的成本（以上面這班車為例，持半價卡）：

| 策馬特 ➔ 蘇黎世 | 原價買 | Supersaver | Supersaver Flex |
| :--- | :--- | :--- | :--- | 
| 成功搭到 | 65| 46.6 | 52.2 | 
| 沒搭到 | 65* | 111.6 | 117.2 / 91.1**| 

*很難沒搭到，因為你買原價的話，整天的車從蘇黎世到策馬特的車都可以搭<br>
**沒搭到但出發前趕快把票退了

大家可以自己評估一下，你旅伴跟你的雷雷程度，太雷的話還是別挑戰，賠了夫人又折兵。但回到本文最開始的 Saver Day Pass ，如果這條路線的話，直接買 Saver Day Pass 可能比較划算，還可以臨時去別的地方。

不過，重回剛剛的問題，如果你打算待 9 天，買 8 天 STP，第一天或第九天沒有要大量移動的話其實就可以考慮買這個（建議第九天，因為第一天如果飛機 delay 就又捐錢給 SBB 了）。假設第九天的行程就是策馬特回到蘇黎世，準備隔天飛，那就可以買（跟 Saver Day Pass 一樣的結論）。

<a id="conclusions"></a>
## 結論：省瑞計劃是你的好旅伴

恭喜你看到結論了，瑞士票券就是如此複雜，但現在你完全懂了，早鳥票就是這樣兩種 Saver Day Pass 和 Supersaver。高級玩家的做法就是半價卡搭配這些早鳥票，省上加省。最後還是要說一下，早鳥票天氣真的無法確定，建議在不用看天氣的移動日使用，或者一週前先看天氣預報再買（但可能就只剩下 54/59/69 的票）。如果要上山，除非你對人品非常有信心，否則不建議買早鳥票，或者準備好雨備方案。

瑞士交通，就是這麼瑞，複雜但看完這篇你就完全懂。如果還是不知道如何是好，歡迎使用省瑞精算器：我們的票券精算器都幫你把這些考慮進去了，只需要輸入你要去的地點與日期，即可知道什麼最划算。雖然目前還不包含早鳥票功能，但之後有機會會整合。但如果你只是要算算該買 STP 還是半價卡，歡迎使用。

<div class="swiss-buy-container">
    <a href="https://calculator.swisspro.tw/?itinerary_id=0&utm_source=swisspro_blog&utm_campaign=saver_day_pass" 
       target="_blank" 
       rel="nofollow noopener" 
       class="kkday-swiss-btn">
       省瑞票券精算器（範例行程）
    </a>
</div>

{% assign target_post = site.posts | where: "url", "/blog/zermatt-pass-guide/" | first %}
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

{% assign target_post = site.posts | where: "url", "/blog/jungfrau-pass-guide/" | first %}
<a href="{{ target_post.url }}" class="swiss-red-link">{{ target_post.title }}</a>

<div class="tip-box" markdown="1">
還是無法消化這些東西？歡迎直接去 **[IG](https://www.instagram.com/swisspro.tw/)** 私訊發問。
</div>