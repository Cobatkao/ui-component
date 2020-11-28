<template>
  <div class="topNav">
    <div class="logo" @click="toogleAside">Cozy UI</div>
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
  align-items: center;
  min-height: 74px;
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
}
</style>
