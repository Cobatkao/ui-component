<template>
  <div class="home">
    <TopNav />
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>Cozy UI</h1>
        <h2>基于 Vue3 和 Typescript 的 UI 框架</h2>
        <div class="links">
          <router-link to="/doc">开始</router-link>
          <a href="https://github.com">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .banner {
    display: flex;
    background: lightgreen;
    .intro {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > * {
        padding: 30px 0;
      }
    }
  }
}
</style>
