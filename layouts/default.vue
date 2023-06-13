<template>
  <header>
    <div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="color">HOME</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/maruyama-zoo" class="color">丸山動物園</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bousai" class="color">防災センター</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hbc" class="color">HBC</NuxtLink>
          </li>
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
        </ul>
      </nav>

      <slot />
    </div>
  </header>
</template>
<style>
  nav {
    background-color: rgb(40, 38, 38);
    color: white;
  }
  .color p:hover {
    color: yellow;
  }
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
  }
</style>
