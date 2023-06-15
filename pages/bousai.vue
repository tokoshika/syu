<template>
  <h1 style="color: red">市民防災センタ―</h1>

  <div class="img-container">
    <img style="width: 50%" src="~/assets/bousai/bousai_01.jpg" />
  </div>
  <h3>アクセス</h3>

  <div class="access-guide">
    <ul>
      <li>
        <span>開館時間</span> <br />
        ９時３０分～１６時３０分まで
      </li>

      <li>
        <span>入館料</span> <br />
        入館は無料です
      </li>
    </ul>
  </div>

  <div class="access-container">
    <img
      class="access"
      style="width: 40%"
      src="~/assets/bousai/bousai_02.jpg"
    />
    <img
      class="access"
      style="width: 40%"
      src="~/assets/bousai/bousai_03.jpg"
    />
  </div>
  <br />
  <h3>館内施設 紹介</h3>
  <img class="access" style="width: 70%" src="~/assets/bousai/bousai_04.jpg" />
  <br />
  <img
    class="access"
    id="left"
    style="width: 70%"
    src="~/assets/bousai/bousai_05.jpg"
  />
  <br />
  <img class="access" style="width: 70%" src="~/assets/bousai/bousai_06.jpg" />

  <br />
  <a href="https://www.city.sapporo.jp/shobo/tenji/index.html"
    >札幌 市民防災センター</a
  >
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
