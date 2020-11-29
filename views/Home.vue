<template>
  <div class="home">
    <TopNav />
    <div class="banner">
      <div class="logo"></div>
      <div class="intro">
        <h1>Cozy UI</h1>
        <h2>基于 Vue3 和 Typescript 的 UI 框架</h2>
        <div class="links">
          <a href="https://github.com">Github</a>
          <router-link to="/doc">开始</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .banner {
    display: flex;
    flex: 1;
    background: lightgreen;
    .intro {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > * {
        padding: 30px 50px;
      }
      > .links {
        a {
          display: inline-block;
          padding: 7px 15px;
          border-radius: 20px;
          color: #999;
          background-color: #fff;
          border: 1px solid #999;
          &:first-child {
            margin-right: 15px;
          }
        }
      }
    }
  }
}
</style>
