<template>
  <aside>
    <h2>组件列表</h2>
    <ul>
      <li>
        <router-link to="/doc/switch">Switch</router-link>
      </li>
      <li>
        <router-link to="/doc/Button">Button</router-link>
      </li>
      <li>
        <router-link to="/doc/Icon">Icon</router-link>
      </li>
      <li>
        <router-link to="/doc/Scroll">Scroll</router-link>
      </li>
      <li>
        <router-link to="/doc/Star">Star</router-link>
      </li>
      <li>
        <router-link to="/doc/Loading">Loading</router-link>
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
  background: lightpink;
  padding: 2em 1.5em;
  h2 {
    text-align: center;
  }
  ul {
    li {
      text-align: center;
      padding: 1em 0;
      cursor: pointer;
    }
  }
}
</style>
