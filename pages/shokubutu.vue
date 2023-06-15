<template>
  <h1 style="color: darkolivegreen">北海道大学植物園</h1>

  <div class="img-container">
    <img style="width: 70%" src="~/assets/shokubutu/shoku_01.jpg" />
  </div>
  <h3>アクセス</h3>

  <div class="access-guide">
    <ul>
      <li>
        <span>地下鉄利用</span> <br />
        南北線・東豊線「さっぽろ駅」6番出口<br />
        南北線・東西線・東豊線「大通駅」2番出口<br />
        東西線「西11丁目駅」4番出口
      </li>
    </ul>
  </div>
  <div class="access-container">
    <img
      class="access"
      style="width: 70%"
      src="~/assets/shokubutu/shoku_02.jpg"
    />
  </div>
  <br />
  <h3>入場料金</h3>
  <img
    class="access"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_03.jpg"
  />
  <br />
  <h3>園内地図</h3>
  <img
    class="access"
    id="left"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_04.jpg"
  />
  <br /><br />
  <h3>博物館</h3>
  <img
    class="access"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_06.jpg"
  />
  <img
    class="access"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_08.jpg"
  />
  <h3>植物園</h3>
  <img
    class="access"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_05.jpg"
  />
  <img
    class="access"
    style="width: 70%"
    src="~/assets/shokubutu/shoku_07.jpg"
  />

  <br />

  <a href="https://www.hokudai.ac.jp/fsc/bg/index.html">北海道大学植物園</a>
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
