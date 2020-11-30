<template>
  <aside>
    <ul>
      <li>
        <p class="aside-title">组件列表</p>
      </li>
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
  background: lightblue;
  padding: 10px;
  z-index: 10;
  @media (max-width: 500px) {
    width: 74px;
  }
  @media (min-width: 500px) {
    width: 154px;
  }
  ul {
    li {
      text-align: center;
      padding: 1em 0;
      cursor: pointer;
      .aside-title {
        margin-top: 45px;
        margin-bottom: 15px;
        text-align: center;
        color: #191919;
      }
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
      }
    }
  }
}
</style>
