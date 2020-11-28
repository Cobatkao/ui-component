<template>
  <div class="doc">
    <TopNav />
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
  .content {
    display: flex;
    flex: 1;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
