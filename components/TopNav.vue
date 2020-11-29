<template>
  <div class="topNav">
    <div class="toogleAsideEle" @click="toogleAside"></div>
    <div class="logo">Cozy UI</div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>捐款</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: "App",
  setup() {
    const asideStatus = inject<Ref<boolean>>("asideStatus");
    console.log("TopNav", asideStatus.value);
    const toogleAside = () => {
      asideStatus.value = !asideStatus.value;
    };
    return { toogleAside };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  background: lightskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  min-height: 74px;
  position: relative;
  .logo {
    max-width: 6em;
    margin-right: auto;
    margin-left: 3em;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    li {
      margin: 0 2em;
    }
  }
  .toogleAsideEle {
    display: none;
    width: 24px;
    height: 24px;
    background: lightgrey;
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toogleAsideEle {
      display: block;
    }
  }
}
</style>
