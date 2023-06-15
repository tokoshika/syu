<template>
  <h1 style="color: royalblue">サンピアザ水族館</h1>

  <div class="img-container">
    <img style="width: 50%" src="~/assets/sanpiaza/san_01.jpg" />
  </div>
  <h3>アクセス</h3>

  <div class="access-guide">
    <ul>
      <li>
        <span>地下鉄利用</span> <br />
        東西線「新さっぽろ」駅下車(約18分)⇒<br />
        3番出口からサンピアザ内を通り2階会談へ（徒歩5分）
      </li>
    </ul>
  </div>
  <div class="access-container">
    <img class="access" style="width: 75%" src="~/assets/sanpiaza/san_02.jpg" />
  </div>
  <br />
  <h3>入場料金</h3>
  <img class="access" style="width: 70%" src="~/assets/sanpiaza/san_03.jpg" />
  <br />
  <h3>イベント案内</h3>
  <img
    class="access"
    id="left"
    style="width: 70%"
    src="~/assets/sanpiaza/san_04.jpg"
  />
  <br />
  <img class="access" style="width: 70%" src="~/assets/sanpiaza/san_05.jpg" />
  <br />

  <a href="https://www.sunpiazza-aquarium.com/">サンピアザ水族館</a>
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
