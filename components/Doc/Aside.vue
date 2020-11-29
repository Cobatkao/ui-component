<template>
  <aside>
    <p class="aside-title">组件列表</p>
    <ul>
      <li>
        <router-link to="/doc/switch">Switch</router-link>
      </li>
      <li>
        <router-link to="/doc/Button">Button</router-link>
      </li>
      <li>
        <router-link to="/doc/Dialog">Dialog</router-link>
      </li>
      <li>
        <router-link to="/doc/Tabs">Tabs</router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from "vue";

export default {
  name: "App",
  setup() {
    const asideStatus = inject<Ref<boolean>>("asideStatus");
    console.log("Aside", asideStatus.value);
  },
};
</script>

<style lang="scss" scoped>
aside {
  height: 100%;
  position: fixed;
  background: lightblue;
  padding: 74px 10px 0 10px;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 10;
  .aside-title {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    color: #191919;
  }
  ul {
    li {
      text-align: center;
      padding: 1em 0;
      cursor: pointer;
      a {
        font-size: 13px;
        color: #191919;
      }
    }
  }
}
</style>
