<template>
  <h1 style="color: #c71585">大倉山オリンピックミュージアム</h1>

  <div class="img-container">
    <img style="width: 50%" src="~/assets/okura/okura_01.jpg" />
  </div>
  <h3>アクセス</h3>

  <div class="access-guide">
    <ul>
      <li>
        <span>交通機関利用</span> <br />
        地下鉄東西線「円山公園」駅下車 → 2番出口より円山バスターミナルへ<br />
        路線バス「大倉山線くらまる号」乗車 およそ15分 → 「大倉山ジャンプ競技場」
      </li>

      <!-- <li>
        <span>入館料</span> <br />
        入館は無料です
      </li> -->
    </ul>
  </div>

  <div class="access-container">
    <img class="access" style="width: 75%" src="~/assets/okura/okura_03.jpg" />
  </div>
  <br />
  <h3>館内施設 紹介</h3>
  <img class="access" style="width: 70%" src="~/assets/okura/okura_04.jpg" />
  <br />
  <img
    class="access"
    id="left"
    style="width: 70%"
    src="~/assets/okura/okura_05.jpg"
  />
  <br />
  <img class="access" style="width: 70%" src="~/assets/okura/okura_06.jpg" />

  <br />
  <a href="https://sapporo-olympicmuseum.jp/">大倉山オリンピックミュージアム</a>
  <br />
  <br />
  <br />
</template>

<style scoped>
  .access-guide {
    text-align: center;
  }
  span {
    color: red;
  }
  .access {
    text-align: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  #left {
    margin-left: 1.2rem;
  }
</style>
