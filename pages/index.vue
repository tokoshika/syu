<template>
  <div class="container">
    <div class="countdown">
      <div class="timeset">
        <h1>
          修学旅行まで、あと<span>{{ recalc() }}</span>
        </h1>
      </div>
    </div>
  </div>

  <img class="img" src="~/assets/wall2.png" />
  <!-- <div>
    <h3>
      <span>『自主研修』</span> の場所は全部で９カ所。さぁ、君はどこを選ぶ？
    </h3>
  </div> -->
</template>

<script setup>
  import { ref } from "vue";

  const countdown = function (due) {
    // 計算方法を設定する //
    const now = new Date();
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor((rest / 1000) % 60);
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const months = Math.floor(rest / 1000 / 60 / 60 / 24 / 30);
    const count = [months, days, hours, min, sec];
    return count;
  };

  const goal = new Date();

  // 指定したい日時を設定する //
  // 指定したい月から１引いた数を入力。ex 8月なら7を入力 //
  goal.setMonth(7);
  //指定したい日を入力//
  goal.setDate(31);
  //指定したい時間を入力//
  goal.setHours(6);
  //指定したい分を入力//
  goal.setMinutes(30);
  //指定したい秒を入力//
  goal.setSeconds(0);

  // 表示方法を設定する //
  function recalc() {
    const counter = countdown(goal);
    const time = counter[1] + "日と" + counter[2] + "時間 ";
    return time;
  }

  const timer = () => {
    const counter = countdown(goal);
    const time =
      counter[1] +
      "日 " +
      counter[2] +
      "時間 " +
      counter[3] +
      "分 " +
      counter[4] +
      "秒";
    return time;
  };

  setTimeout(timer, 1000);
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .img {
    margin-top: 1rem;
    width: 90%;
  }
h1 {
  margin-top: 1rem;
  margin-bottom: 0;
}
  span {
    color: rgb(170, 141, 188);
  }
  @media screen and (min-width: 1181px) {
    .img {
      width: 70%;
    }
    h3 {
      background-color: rgb(40, 38, 38);
      color: white;
    }
  }
</style>
