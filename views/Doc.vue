<template>
  <div class="doc">
    <TopNav class="nav" />
    <div class="content">
      <Aside v-if="asideStatus"></Aside>
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
import Main from "../components/Doc/Main.vue";
import Aside from "../components/Doc/Aside.vue";
import { inject, Ref } from "vue";

export default {
  components: {
    TopNav,
    Main,
    Aside,
  },
  setup() {
    const asideStatus = inject<Ref<boolean>>("asideStatus");
    console.log("Doc", asideStatus.value);
    return { asideStatus };
  },
};
</script>

<style lang="scss" scoped>
.doc {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 74px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
  .content {
    display: flex;
    flex: 1 1 0%;
    max-width: 1280px;
    width: 100%;
    margin: 0px auto;
    position: relative;
    > aside {
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }
}
</style>
