<template>
  <header>
    <div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="color">ＨＯＭＥ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/test" class="subway">地下鉄料金</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/maruyama-zoo" class="color">丸山動物園</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bousai" class="color">防災センター</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/hbc" class="color">ＨＢＣ</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/okurayama" class="color">大倉山</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shiroikoibito" class="color">白い恋人</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shokubutu" class="color">植物園</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/suidou" class="color">水道記念館</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gijidou" class="color">道議会</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sanpiaza" class="color">サンピアザ</NuxtLink>
          </li>
        </ul>
      </nav>

      <slot />
    </div>
  </header>
</template>
<style>
  html {
    font-family: "Noto Sans JP", sans-serif;
  }
  nav {
    background-color: rgb(40, 38, 38);
    color: white;
    height: 40px;
  }
  /* .color p:hover {
    color: yellow;
  } */
  header {
    text-align: center;
  }
  ul {
    justify-content: center;
    text-align: center;
    display: flex;
  }
  .color {
    color: white;
    font-size: 1rem;
    text-decoration: none;
  }
  li {
    list-style: none;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  .subway {
    color: rgb(252, 240, 9);
    font-size: 1rem;
    text-decoration: none;
  }

  @media screen and (max-width: 1000px) {
    .color,
    .subway {
      font-size: 0.7rem;
    }
  }
</style>
